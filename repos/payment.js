const Payment = require("../database/models/payment");

async function findPaymentHistoryById(id) {
  const paymentHistory = await Payment.findOne({
    attributes: [
      "id",
      "approved_date",
      "content",
      "method",
      "amount",
      "status",
      "updatedAt",
      "tid",
      "UserId",
      "OrderId",
    ],
    where: {
      id,
    },
  });
  return paymentHistory;
}

async function findPaymentHistory(query) {
  const paymentHistory = await Payment.findAll(query);
  return paymentHistory;
}

module.exports = { findPaymentHistoryById, findPaymentHistory };
