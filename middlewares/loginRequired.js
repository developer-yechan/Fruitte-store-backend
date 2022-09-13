const errorCodes = require("../codes/errorCodes");
const userRepository = require("../repos/user");
const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token || token === "null") {
      throw new Error("로그인이 필요한 페이지 입니다.");
    }
    const secretKey = process.env.JWT_SECRET_KEY;
    jwt.verify(token, secretKey, async (error, decoded) => {
      if (error) {
        return res
          .status(401)
          .json({ message: "토큰의 유효기간이 지났습니다." });
      }
      const isExistingUser = await userRepository.findUserById(decoded.id);
      if (!isExistingUser) {
        res.status(401).json(errorCodes.notExistingUser);
      }
      req.user = isExistingUser;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = loginRequired;
