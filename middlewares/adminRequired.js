const userRepository = require("../repos/user");

const adminRequired = async (req, res, next) => {
  try {
    //사용자 tier 확인
    if (req.user.tier !== "admin") {
      return res.status(401).json({ message: "관리자만 접근 가능 합니다." });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminRequired;
