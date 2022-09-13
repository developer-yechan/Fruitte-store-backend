const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");

function loginValidator() {
  return [
    body("email")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isEmail()
      .bail()
      .withMessage(errorCodes.emailFormat)
      .isLength({ max: 100 })
      .withMessage(errorCodes.emailLength),
    body("password")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)
      .withMessage(errorCodes.pwdFormat),
    index,
  ];
}

module.exports = loginValidator;
