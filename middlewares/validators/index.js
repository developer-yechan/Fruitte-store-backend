const { validationResult } = require("express-validator");

/**
 * 각 검증기의 결과를 req에서 조회 후
 * error가 존재한다면 return
 * error가 존재하지 않다면 계속해서 service에서 진행한다.
 */

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json(errors);
};
