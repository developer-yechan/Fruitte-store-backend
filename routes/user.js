const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const userValidator = require("../middlewares/validators/userValidator");
const loginValidator = require("../middlewares/validators/loginValidator");
const userService = require("../services/user");

router.post("/signup", userValidator(), userService.createUser);
router.post("/login", loginValidator(), userService.login);
router.get("/", loginRequired, userService.getUserById);
router.patch("/", loginRequired, userValidator(), userService.updateUser);
router.delete("/", loginRequired, userService.deleteUser);

module.exports = router;
