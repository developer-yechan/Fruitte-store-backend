const express = require("express");
const router = express();

const userRouter = require("./user");
const productRouter = require("./product");
const orderRouter = require("./order");

router.use("/api/user", userRouter);
router.use("/api/product", productRouter);
router.use("/api/order", orderRouter);

module.exports = router;
