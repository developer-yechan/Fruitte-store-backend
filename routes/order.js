const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const orderService = require("../services/order");

router.post("/", loginRequired, orderService.createOrder);
router.get("/:id", loginRequired, orderService.getOrder);
router.get("/", loginRequired, orderService.getOrders);
router.patch("/:id", loginRequired, orderService.updateOrder);
router.delete("/:id", loginRequired, orderService.deleteOrder);

/**
 * @swagger
 * paths:
 *   /api/order:
 *    post:
 *      summary:  "주문 등록"
 *      description: "주문 등록 API"
 *      tags: [Order]
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
 *           description : 생성할 주문 데이터
 *           schema :
 *              type : object
 *              example :
 *                        {
 *                           "address" : "서울시",
 *                           "recipent" : "민수",
 *                           "recipentCall" : "010-2345-2345",
 *                           "quantity" : 2,
 *                           "productId" : "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8"
 *                        }
 *      responses:
 *        "201":
 *          description: "생성한 주문 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                             "status": "주문 대기",
 *                             "id": "200473ad-2707-4b13-89f3-ce4576db5075",
 *                             "address": "서울시",
 *                             "recipent": "민수",
 *                             "recipentCall": "010-2345-2345",
 *                             "quantity": 2,
 *                             "UserId": "bc904db6-855e-4c36-b1e2-0a80edb313da",
 *                             "ProductId": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                             "updatedAt": "2022-10-08T09:37:55.842Z",
 *                             "createdAt": "2022-10-08T09:37:55.842Z"
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

/**
 * @swagger
 * paths:
 *   /api/order/:id:
 *    patch:
 *      summary:  "주문정보 수정"
 *      description: "주문정보 수정 API"
 *      tags: [Order]
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
 *           description : 주문 id
 *           schema :
 *              type : string
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 주문 데이터
 *           schema :
 *              type : object
 *              example :
 *                        {
 *                           "address" : "서울시",
 *                           "recipent" : "민수",
 *                           "recipentCall" : "010-2345-2345",
 *                           "quantity" : 2,
 *                           "status" : "결제 완료"
 *                        }
 *      responses:
 *        "200":
 *          description: "주문 정보 수정 완료"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        { message: "해당 주문 정보를 수정 했습니다." }
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
 *   /api/order/:id:
 *    delete:
 *      summary:  "주문 취소"
 *      description: "주문 취소 API"
 *      tags: [Order]
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
 *           description : 주문 id
 *           schema :
 *              type : string
 *      responses:
 *        "200":
 *          description: "주문 취소 완료"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        { message: "해당 주문을 취소 했습니다." }
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
 *   /api/order:
 *    get:
 *      summary:  "주문리스트 조회"
 *      description: "주문리스트 조회 API"
 *      tags: [Order]
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
 *          description: "주문리스트 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                example:
 *                        [
 *                          {
 *                              "orderNumber": "200473ad-2707-4b13-89f3-ce4576db5075",
 *                              "status": "주문 대기",
 *                              "createdAt": "2022-10-08T09:37:55.000Z",
 *                              "quantity": 2,
 *                              "Product": {
 *                                  "id": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                                  "name": "나주 배",
 *                                  "price": 10000,
 *                                  "deliveryPrice": 3000,
 *                                  "deliveryOption": null,
 *                                  "ProductImages": []
 *                              }
 *                          },
 *                          {
 *                              "orderNumber": "daa6241c-cf8e-4e69-9d9c-20ef5e89a34f",
 *                              "status": "주문 대기",
 *                              "createdAt": "2022-10-08T09:49:48.000Z",
 *                              "quantity": 2,
 *                              "Product": {
 *                                  "id": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                                  "name": "나주 배",
 *                                  "price": 10000,
 *                                  "deliveryPrice": 3000,
 *                                  "deliveryOption": null,
 *                                  "ProductImages": []
 *                              }
 *                          }
 *                        ]
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
 *   /api/order/:id:
 *    get:
 *      summary:  "특정 주문 조회"
 *      description: "특정 주문 id를 갖는 주문 조회 API"
 *      tags: [Order]
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
 *           description : 주문 id
 *           schema :
 *              type : string
 *      responses:
 *        "200":
 *          description: "특정 주문 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                           {
 *                               "address": "대전시",
 *                               "recipent": "민수",
 *                               "recipentCall": "010-2345-2345",
 *                               "quantity": 2,
 *                               "status": "주문 대기",
 *                               "createdAt": "2022-10-08T09:49:48.000Z",
 *                               "User": {
 *                                   "id": "bc904db6-855e-4c36-b1e2-0a80edb313da",
 *                                   "name": "yechan",
 *                                   "phoneNumber": "010-1234-1234"
 *                               },
 *                               "Product": {
 *                                   "id": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                                   "name": "나주 배",
 *                                   "price": 10000,
 *                                   "deliveryPrice": 3000,
 *                                   "deliveryOption": null,
 *                                   "ProductImages": []
 *                               },
 *                               "Payments": []
 *                           }
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
