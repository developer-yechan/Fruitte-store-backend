const express = require("express");
const adminRequired = require("../middlewares/adminRequired");
const loginRequired = require("../middlewares/loginRequired");
const paymentService = require("../services/payment");
const router = express.Router();

router.get(
  "/:id",
  loginRequired,
  adminRequired,
  paymentService.findPaymentHistoryById
);
router.get(
  "/",
  loginRequired,
  adminRequired,
  paymentService.findPaymentHistory
);

module.exports = router;
