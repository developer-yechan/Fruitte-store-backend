const express = require("express");
const router = express();

const userRouter = require("./user");
const productRouter = require("./product");
const orderRouter = require("./order");
const kakaoPayRouter = require("./kakaoPay");
const paymentRouter = require("./payment");

router.use("/api/user", userRouter);
router.use("/api/product", productRouter);
router.use("/api/order", orderRouter);
router.use("/api/kakaopay", kakaoPayRouter);
router.use("/api/payment", paymentRouter);

module.exports = router;
