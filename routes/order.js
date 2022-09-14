const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const orderService = require("../services/order");

router.post("/", loginRequired, orderService.createOrder);
router.get("/:id", loginRequired, orderService.getOrder);
router.get("/", loginRequired, orderService.getOrders);
router.patch("/:id", loginRequired, orderService.updateOrder);

module.exports = router;
