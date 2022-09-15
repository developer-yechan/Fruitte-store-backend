const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const kakaoPayService = require("../services/kakaoPay");

router.get("/request", loginRequired, kakaoPayService.kakaopayRequest);

module.exports = router;
