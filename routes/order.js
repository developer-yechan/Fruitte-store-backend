const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const orderService = require("../services/order");

router.post("/", loginRequired, orderService.createOrder);

module.exports = router;
