const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");

function userValidator() {
  return [
    body("name")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 50 })
      .withMessage(errorCodes.nameFormat),
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
    body("tier").trim().notEmpty().withMessage(errorCodes.required),
    body("phoneNumber")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isMobilePhone()
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = userValidator;
