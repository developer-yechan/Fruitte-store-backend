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

/**
 * @swagger
 * paths:
 *   /api/user/signup:
 *    post:
 *      summary:  "회원가입"
 *      description: "user 생성 API"
 *      tags: [User]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 생성할 회원 데이터
 *           schema :
 *              type : object
 *              example :
 *                {id : uuid, name : 이름, email : 이메일, password : 비밀번호, tier : 회원등급, phoneNumber : 핸드폰}
 *      responses:
 *        "201":
 *          description: "생성한 회원 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                          {
 *                           "id" : "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
 *                           "name" : "yechan",
 *                           "email" : "abcde@naver.com",
 *                           "password" : "$2b$10$oV2xe40Hig5jDipnqU8sWeV4d.Y2FB2iMMCW/voaS.oGTIiCmZsxW",
 *                           "tier" : "admin",
 *                           "phoneNumber" : "010-1234-1234",
 *                           "updatedAt" : "2022-10-08T06:01:32.413Z",
 *                           "createdAt" : "2022-10-08T06:01:32.413Z",
 *                          }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 */

/**
 * @swagger
 * paths:
 *   /api/user/login:
 *    post:
 *      summary:  "로그인"
 *      description: "user 로그인 API"
 *      tags: [User]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 회원 이메일 및 password
 *           schema :
 *              type : object
 *              example :
 *                { email : 이메일, password : 비밀번호}
 *      responses:
 *        "200":
 *          description: "로그인 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                          {
 *                           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwODRhNmE4LWRiMzQtNGQyZi04ZTFlLWRlNDMxN2FjMDI4YyIsImlhdCI6MTY2NTIxMTgyMSwiZXhwIjoxNjY1Mjk4MjIxfQ.wBfp8CEjJEGI48s8IZgYvajd7WaJTvO_4yr_068Hgis"
 *                          }
 *
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 */

/**
 * @swagger
 * paths:
 *   /api/user:
 *    patch:
 *      summary:  "회원정보 수정"
 *      description: "user 정보 수정 API"
 *      tags: [User]
 *      parameters :
 *         - in : headers
 *           name : access token
 *           required : true
 *           description : 엑세스 토큰
 *           schema :
 *              type : object
 *              example :
 *                { authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNjllYjNlLTllMzEtNGZiYS1iMDNkLWUxYjg3YzcwZWY2OSIsImlhdCI6MTY2MzE1MzYyMSwiZXhwIjoxNjYzMjQwMDIxfQ.ZUarGdsC-Vu86HQDqCqyvZ1frkyqa_WEhOKCFFeUCx8 }
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 회원 데이터
 *           schema :
 *              type : object
 *              example :
 *                {name : 이름, email : 이메일, password : 비밀번호, tier : 회원등급, phoneNumber : 핸드폰}
 *      responses:
 *        "200":
 *          description: "회원 정보 수정 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         { message: "회원 정보 수정 성공했습니다." }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 */

/**
 * @swagger
 * paths:
 *   /api/user:
 *    delete:
 *      summary:  "회원탈퇴"
 *      description: "유저 삭제 API"
 *      tags: [User]
 *      parameters :
 *         - in : headers
 *           name : access token
 *           required : true
 *           description : 엑세스 토큰
 *           schema :
 *              type : object
 *              example :
 *                { authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNjllYjNlLTllMzEtNGZiYS1iMDNkLWUxYjg3YzcwZWY2OSIsImlhdCI6MTY2MzE1MzYyMSwiZXhwIjoxNjYzMjQwMDIxfQ.ZUarGdsC-Vu86HQDqCqyvZ1frkyqa_WEhOKCFFeUCx8 }
 *         - in : body
 *           name : password
 *           required : true
 *           description : 회원 탈퇴를 위한 비밀번호 입력
 *           schema :
 *              type : object
 *              example :
 *                {password : 유저 비밀번호}
 *      responses:
 *        "200":
 *          description: "회원탈퇴 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         { message: "회원탈퇴 성공했습니다." }
 *
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /api/user:
 *    get:
 *      summary:  "유저 정보 조회"
 *      description: "유저 정보 조회 API"
 *      tags: [User]
 *      parameters :
 *         - in : headers
 *           name : access token
 *           required : true
 *           description : 엑세스 토큰
 *           schema :
 *              type : object
 *              example :
 *                { authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNjllYjNlLTllMzEtNGZiYS1iMDNkLWUxYjg3YzcwZWY2OSIsImlhdCI6MTY2MzE1MzYyMSwiZXhwIjoxNjYzMjQwMDIxfQ.ZUarGdsC-Vu86HQDqCqyvZ1frkyqa_WEhOKCFFeUCx8 }
 *      responses:
 *        "200":
 *          description: "특정 유저 id를 갖는 유저 조회"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                           {
 *                               "id": "bc904db6-855e-4c36-b1e2-0a80edb313da",
 *                               "name": "yechan",
 *                               "email": "abcde@naver.com",
 *                               "tier": "admin",
 *                               "phoneNumber": "010-1234-1234",
 *                               "createdAt": "2022-10-08T08:19:55.000Z",
 *                               "updatedAt": "2022-10-08T08:19:55.000Z"
 *                           }
 *
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

module.exports = router;
