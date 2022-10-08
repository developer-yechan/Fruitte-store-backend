const userRepository = require("../repos/user");
const userJoinDto = require("../dao/userJoinDao");
const userChangeDto = require("../dao/userChangeDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorCodes = require("../codes/errorCodes");

const createUser = async (req, res, next) => {
  try {
    const isExistingUser = await userRepository.findUserByEmail(req.body.email);
    if (isExistingUser) {
      throw new Error(errorCodes.existEmail);
    }
    const newUser = await userRepository.createUser(
      await userJoinDto(req.body)
    );
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //유저 확인
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error(errorCodes.notExistingUser);
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error(errorCodes.notEqualPwd);
    }
    //로그인 성공 jwt 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: "1d",
    });

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userRepository.findUserById(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    const updatedUser = await userRepository.updateUser(
      await userChangeDto(req.user.id, req.body)
    );
    return res.status(200).json({ message: "회원 정보 수정 성공했습니다." });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error(errorCodes.notEqualPwd);
    }

    await userRepository.deleteUser(req.user.id);
    res.status(200).json({ message: "회원탈퇴 성공했습니다." });
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, login, updateUser, deleteUser, getUserById };
