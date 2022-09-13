const express = require("express");
const router = express();

const userRouter = require("./user");

router.use("/api/user", userRouter);

module.exports = router;
