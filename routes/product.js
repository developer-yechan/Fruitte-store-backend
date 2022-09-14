const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const productService = require("../services/product");

router.post("/", loginRequired, adminRequired, productService.createProduct);

module.exports = router;
