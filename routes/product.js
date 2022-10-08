const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const router = express.Router();
const productService = require("../services/product");

router.post("/", loginRequired, adminRequired, productService.createProduct);
router.get("/:id", productService.getProduct);
router.get("/", productService.getProducts);
router.patch(
  "/:id",
  loginRequired,
  adminRequired,
  productService.updateProduct
);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  productService.deleteProduct
);

/**
 * @swagger
 * paths:
 *   /api/product:
 *    post:
 *      summary:  "상품등록"
 *      description: "상품 등록 API"
 *      tags: [Product]
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
 *           description : 생성할 상품 데이터
 *           schema :
 *              type : object
 *              example :
 *                        {
 *                          "name" : "나주 배",
 *                          "price" : "10000",
 *                          "content" : "최고의 맛",
 *                          "origin" : "나주",
 *                          "producer" :"철수",
 *                          "quantity" : "100",
 *                          "deliveryPrice" : 3000
 *                        }
 *      responses:
 *        "201":
 *          description: "생성한 상품 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        {
 *                          "id": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                          "name" : "나주 배",
 *                          "price" : "10000",
 *                          "content" : "최고의 맛",
 *                          "origin" : "나주",
 *                          "producer" :"철수",
 *                          "quantity" : "100",
 *                          "deliveryPrice" : 3000,
 *                          "updatedAt": "2022-10-08T08:40:29.844Z",
 *                          "createdAt": "2022-10-08T08:40:29.844Z"
 *                        }
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
 *   /api/product/:id:
 *    patch:
 *      summary:  "상품정보 수정"
 *      description: "상품정보 수정 API"
 *      tags: [Product]
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
 *           description : 상품 id
 *           schema :
 *              type : string
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 상품 데이터
 *           schema :
 *              type : object
 *              example :
 *                        {
 *                          "name" : "나주 배",
 *                          "price" : "10000",
 *                          "content" : "최고의 맛과 양",
 *                          "origin" : "나주",
 *                          "producer" :"철수",
 *                          "quantity" : "100",
 *                          "deliveryPrice" : 3000
 *                        }
 *      responses:
 *        "200":
 *          description: "상품 정보 수정 완료"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        { message: "해당 상품 정보를 수정 했습니다." }
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
 *   /api/product/:id:
 *    delete:
 *      summary:  "상품 삭제"
 *      description: "상품 삭제 API"
 *      tags: [Product]
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
 *           description : 상품 id
 *           schema :
 *              type : string
 *      responses:
 *        "200":
 *          description: "상품 삭제 완료"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        { message: "해당 상품을 삭제 했습니다." }
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
 *   /api/product:
 *    get:
 *      summary:  "상품리스트 조회"
 *      description: "상품리스트 조회 API"
 *      tags: [Product]
 *      responses:
 *        "200":
 *          description: "상품리스트 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                example:
 *                        [
 *                           {
 *                               "name": "나주 배",
 *                               "price": 10000,
 *                               "ProductImages": []
 *                           },
 *                           {
 *                               "name": "청송 사과",
 *                               "price": 10000,
 *                               "ProductImages": []
 *                           }
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
 *   /api/product/:id:
 *    get:
 *      summary:  "특정 상품 조회"
 *      description: "특정 상품 id를 갖는 상품 조회 API"
 *      tags: [Product]
 *      parameters :
 *         - in : path
 *           name : id
 *           required : true
 *           description : 상품 id
 *           schema :
 *              type : string
 *      responses:
 *        "200":
 *          description: "특정 상품 조회 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                        {
 *                           "id": "2bf89d2e-dde9-4690-bd67-7fb3c43ef2c8",
 *                           "name": "나주 배",
 *                           "price": 10000,
 *                           "content": "최고의 맛",
 *                           "origin": "나주",
 *                           "producer": "철수",
 *                           "deliveryPrice": 3000,
 *                           "deliveryOption": null,
 *                           "ProductImages": []
 *                        }
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
