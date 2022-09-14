const express = require("express");
const router = express();

const userRouter = require("./user");
const productRouter = require("./product");

router.use("/api/user", userRouter);
router.use("/api/product", productRouter);

module.exports = router;
