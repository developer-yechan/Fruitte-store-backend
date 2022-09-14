const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const productService = require("../services/product");

router.post("/", loginRequired, adminRequired, productService.createProduct);
router.get("/:id", productService.getProduct);
router.get("/", productService.getProducts);
router.patch(
  "/:id",
  loginRequired,
  adminRequired,
  productService.updateProduct
);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  productService.deleteProduct
);

module.exports = router;
