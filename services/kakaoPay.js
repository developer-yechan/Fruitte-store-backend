const axios = require("axios");
const http = require("https");
require("dotenv").config();
const Payment = require("../database/models/payment");
const adminKey = process.env.ADMIN_KEY;
const cid = process.env.CID;

async function kakaopayRequest(req, res, next) {
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
            `${process.env.BASE_URL}/kakaopay/success?partner_order_id=` +
            partner_order_id,
          cancel_url:
            `${process.env.BASE_URL}/kakaopay/cancel?partner_order_id=` +
            partner_order_id,
          fail_url:
            `${process.env.BASE_URL}/kakaopay/fail?partner_order_id=` +
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
      order_id: partner_order_id,
      tid,
    };
    Payment.create(paymentDto);
    console.log(response.data.next_redirect_pc_url);
    return res
      .status(200)
      .json({ redirect_url: response.data.next_redirect_pc_url });
  } catch (err) {
    next(err);
  }
}

module.exports = { kakaopayRequest };
