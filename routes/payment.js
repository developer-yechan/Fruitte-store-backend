const express = require("express");
const adminRequired = require("../middlewares/adminRequired");
const loginRequired = require("../middlewares/loginRequired");
const paymentService = require("../services/payment");
const router = express.Router();

router.get(
  "/:id",
  loginRequired,
  adminRequired,
  paymentService.findPaymentHistoryById
);
router.get(
  "/",
  loginRequired,
  adminRequired,
  paymentService.findPaymentHistory
);

/**
 * @swagger
 * paths:
 *   /api/payment:
 *    get:
 *      summary:  "결제리스트 조회"
 *      description: "결제리스트 조회 API"
 *      tags: [Payment]
 *      parameters :
 *         - in : headers
 *           name : access token
 *           required : true
 *           description : 엑세스 토큰
 *           schema :
 *              type : object
 *              example :
 *                { authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNjllYjNlLTllMzEtNGZiYS1iMDNkLWUxYjg3YzcwZWY2OSIsImlhdCI6MTY2MzE1MzYyMSwiZXhwIjoxNjYzMjQwMDIxfQ.ZUarGdsC-Vu86HQDqCqyvZ1frkyqa_WEhOKCFFeUCx8 }
 *         - in : query
 *           name : userId
 *           required : false
 *           description : userId를 쿼리로 보내줄 경우 해당 userId로 결제리스트 검색 가능
 *      responses:
 *        "200":
 *          description: "결제리스트 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                example:
 *                         [
 *                             {
 *                                 "id": "3c96a950-041f-408b-9fd3-b472f02a50e5",
 *                                 "approved_date": null,
 *                                 "content": "청송사과",
 *                                 "method": "카카오페이",
 *                                 "amount": 33000,
 *                                 "status": "결제진행중",
 *                                 "UserId": "bc904db6-855e-4c36-b1e2-0a80edb313da"
 *                             },
 *                             {
 *                                 "id": "51d6da6e-d41e-4896-9f1d-6d1ef58c44b4",
 *                                 "approved_date": "2022-10-08T10:34:15.000Z",
 *                                 "content": "나주배",
 *                                 "method": "카카오페이",
 *                                 "amount": 33000,
 *                                 "status": "결제완료",
 *                                 "UserId": "bc904db6-855e-4c36-b1e2-0a80edb313da"
 *                             }
 *                         ]
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
 *   /api/payment/:id:
 *    get:
 *      summary:  "특정 결제 조회"
 *      description: "특정 결제 id를 갖는 결제 조회 API"
 *      tags: [Payment]
 *      parameters :
 *         - in : headers
 *           name : access token
 *           required : true
 *           description : 엑세스 토큰
 *           schema :
 *              type : object
 *              example :
 *                { authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNjllYjNlLTllMzEtNGZiYS1iMDNkLWUxYjg3YzcwZWY2OSIsImlhdCI6MTY2MzE1MzYyMSwiZXhwIjoxNjYzMjQwMDIxfQ.ZUarGdsC-Vu86HQDqCqyvZ1frkyqa_WEhOKCFFeUCx8 }
 *         - in : path
 *           name : id
 *           required : true
 *           description : 결제 id
 *           schema :
 *              type : string
 *      responses:
 *        "200":
 *          description: "특정 결제 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                             "id": "51d6da6e-d41e-4896-9f1d-6d1ef58c44b4",
 *                             "approved_date": "2022-10-08T10:34:15.000Z",
 *                             "content": "나주배",
 *                             "method": "카카오페이",
 *                             "amount": 33000,
 *                             "status": "결제완료",
 *                             "updatedAt": "2022-10-08T10:34:18.000Z",
 *                             "tid": "T341520306792c785d98",
 *                             "UserId": "bc904db6-855e-4c36-b1e2-0a80edb313da",
 *                             "OrderId": "daa6241c-cf8e-4e69-9d9c-20ef5e89a34f"
 *                         }
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

module.exports = router;
