const Payment = require("../database/models/payment");
const paymentRepo = require("../repos/payment");

const findPaymentHistoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paymentHistory = await paymentRepo.findPaymentHistoryById(id);
    return res.status(200).json(paymentHistory);
  } catch (err) {
    next(err);
  }
};

const findPaymentHistory = async (req, res, next) => {
  try {
    const { userId } = req.query;
    let query = {
      attributes: [
        "id",
        "approved_date",
        "content",
        "method",
        "amount",
        "status",
        "UserId",
      ],
    };
    if (userId) {
      query = {
        attributes: [
          "id",
          "approved_date",
          "content",
          "method",
          "amount",
          "status",
          "UserId",
        ],
        where: {
          UserId: userId,
        },
      };
    }
    const paymentHistory = await paymentRepo.findPaymentHistory(query);

    return res.status(200).json(paymentHistory);
  } catch (err) {
    next(err);
  }
};

module.exports = { findPaymentHistoryById, findPaymentHistory };
