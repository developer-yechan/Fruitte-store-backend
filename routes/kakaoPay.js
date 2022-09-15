const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const kakaoPayService = require("../services/kakaoPay");

router.get("/request", loginRequired, kakaoPayService.kakaopayRequest);
router.get("/success", kakaoPayService.kakaopaySuccess);
router.get("/fail", kakaoPayService.kakaopayFail);
router.get("/cancel", kakaoPayService.kakaopayCancel);

module.exports = router;
