const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const kakaoPayService = require("../services/kakaoPay");

router.get("/request", loginRequired, kakaoPayService.kakaopayRequest);
router.get("/success", kakaoPayService.paymentRequestSuccess);
router.get("/fail", kakaoPayService.paymentRequestFailed);
router.get("/cancel", kakaoPayService.paymentRequestCanceled);
router.patch(
  "/cancel/:id",
  loginRequired,
  kakaoPayService.paymentCancelRequest
);

module.exports = router;
