const axios = require("axios");
const http = require("https");
require("dotenv").config();
const Payment = require("../database/models/payment");
const Order = require("../database/models/order");
const errorCodes = require("../codes/errorCodes");
const adminKey = process.env.ADMIN_KEY;
const cid = process.env.CID;
const paymentRepo = require("../repos/payment");

const kakaopayRequest = async (req, res, next) => {
  try {
    const {
      partner_order_id,
      item_name,
      quantity,
      total_amount,
      tax_free_amount,
    } = req.query;
    const partner_user_id = req.user.id;
    const url_for_ready = "https://kapi.kakao.com/v1/payment/ready";
    const response = await axios.post(
      url_for_ready,
      {},
      {
        params: {
          cid,
          partner_order_id,
          partner_user_id,
          item_name,
          quantity,
          total_amount,
          tax_free_amount,
          approval_url:
            `${process.env.BASE_URL}/api/kakaopay/success?partner_order_id=` +
            partner_order_id,
          cancel_url:
            `${process.env.BASE_URL}/api/kakaopay/cancel?partner_order_id=` +
            partner_order_id,
          fail_url:
            `${process.env.BASE_URL}/api/kakaopay/fail?partner_order_id=` +
            partner_order_id,
        },
        headers: {
          Authorization: "KakaoAK " + adminKey,
          "Content-Type": "application/x-www-form-urlencoded;charset-utf-8",
        },
      }
    );
    tid = response.data.tid;
    const paymentDto = {
      UserId: partner_user_id,
      content: item_name,
      method: "카카오페이",
      amount: total_amount,
      status: "결제진행중",
      OrderId: partner_order_id,
      tid,
    };
    Payment.create(paymentDto);
    return res
      .status(200)
      .json({ redirect_url: response.data.next_redirect_pc_url });
  } catch (err) {
    next(err);
  }
};
const paymentRequestSuccess = async (req, res, next) => {
  try {
    const { pg_token, partner_order_id } = req.query;
    //결제 승인 url
    const url_for_approve = "https://kapi.kakao.com/v1/payment/approve";
    //get tid
    const paymentLog = await Payment.findOne({
      where: {
        OrderId: partner_order_id,
        status: "결제진행중",
      },
    });
    const tid = paymentLog.tid;
    const response = await axios.post(
      url_for_approve,
      {},
      {
        headers: {
          Authorization: "KakaoAK " + adminKey,
          "Content-Type": "application/x-www-form-urlencoded;charset-utf-8",
        },
        params: {
          cid,
          tid,
          partner_order_id,
          partner_user_id: paymentLog.UserId,
          pg_token,
        },
      }
    );
    const paymentUpdate = await Payment.update(
      { approved_date: response.data.approved_at, status: "결제완료" },
      {
        where: {
          tid,
        },
      }
    );
    // 결제 내역이 수정되지 않은 경우
    if (paymentUpdate[0] === 0) {
      throw new Error(errorCodes.paymentNotEdited);
    }
    const orderUpdate = await Order.update(
      { status: "주문 완료" },
      {
        where: {
          id: partner_order_id,
        },
      }
    );
    // 주문 내역이 수정되지 않은 경우
    if (orderUpdate[0] === 0) {
      throw new Error(errorCodes.orderNotEdited);
    }
    res.status(200).json({ message: "결제 성공 했습니다." });
  } catch (err) {
    next(err);
  }
};

const paymentRequestCanceled = async (req, res, next) => {
  try {
    const { partner_order_id } = req.query;
    const paymentUpdate = await Payment.update(
      { status: "결제취소" },
      {
        where: {
          orderId: partner_order_id,
        },
      }
    );
    // 결제 내역이 수정되지 않은 경우
    if (paymentUpdate[0] === 0) {
      throw new Error(errorCodes.paymentNotEdited);
    }

    return res.status(400).json({ message: errorCodes.paymentCanceled });
  } catch (err) {
    next(err);
  }
};

const paymentRequestFailed = async (req, res, next) => {
  try {
    const { partner_order_id } = req.query;
    const paymentUpdate = await Payment.update(
      { status: "결제실패" },
      {
        where: {
          orderId: partner_order_id,
        },
      }
    );
    // 결제 내역이 수정되지 않은 경우
    if (paymentUpdate[0] === 0) {
      throw new Error(errorCodes.paymentNotEdited);
    }
    return res.status(400).json({ message: errorCodes.paymentFailed });
  } catch (err) {
    next(err);
  }
};

const paymentCancelRequest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paymentHistory = await paymentRepo.findPaymentHistoryById(id);
    const tid = paymentHistory.tid;
    const cancel_amount = paymentHistory.amount;
    const cancel_tax_free_amount = 0;
    const url_for_ready = "https://kapi.kakao.com/v1/payment/cancel";
    const response = await axios.post(
      url_for_ready,
      {},
      {
        params: {
          cid,
          tid,
          cancel_amount,
          cancel_tax_free_amount,
        },
        headers: {
          Authorization: "KakaoAK " + adminKey,
          "Content-Type": "application/x-www-form-urlencoded;charset-utf-8",
        },
      }
    );
    const paymentUpdate = await Payment.update(
      { status: "결제취소" },
      {
        where: {
          id,
        },
      }
    );
    // 결제 내역이 수정되지 않은 경우
    if (paymentUpdate[0] === 0) {
      throw new Error(errorCodes.paymentNotEdited);
    }
    return res.status(200).json({ message: "결제 취소 완료" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  kakaopayRequest,
  paymentRequestSuccess,
  paymentRequestCanceled,
  paymentRequestFailed,
  paymentCancelRequest,
};
