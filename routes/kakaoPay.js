const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const kakaoPayService = require("../services/kakaoPay");

router.get("/request", loginRequired, kakaoPayService.kakaopayRequest);
router.get("/success", kakaoPayService.paymentRequestSuccess);
router.get("/fail", kakaoPayService.paymentRequestFailed);
router.get("/cancel", kakaoPayService.paymentRequestCanceled);
router.patch(
  "/cancel/:id",
  loginRequired,
  kakaoPayService.paymentCancelRequest
);

/**
 * @swagger
 * paths:
 *   /api/kakaopay:
 *    post:
 *      summary:  "결제 요청"
 *      description: "결제 요청 API"
 *      tags: [KakaoPay]
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
 *           name : partner_order_id
 *           required : true
 *           description : 주문 id
 *         - in : query
 *           name : item_name
 *           required : true
 *           description : 주문 상품명
 *         - in : query
 *           name : quantity
 *           required : true
 *           description : 주문 수량
 *         - in : query
 *           name : total_amount
 *           required : true
 *           description : 총 주문 금액
 *         - in : query
 *           name : tax_free_amount
 *           required : true
 *           description : 상품 비과세 금액
 *      responses:
 *        "200":
 *          description: "결제 요청 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                           redirect_url: 결제 url 주소
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
 *   /api/kakaopay/success:
 *    get:
 *      summary:  "결제 성공"
 *      description: "결제 성공 시 카카오페이에서 호출하는 API"
 *      tags: [KakaoPay]
 *      parameters :
 *         - in : query
 *           name : partner_order_id
 *           required : true
 *           description : 주문 id
 *      responses:
 *        "200":
 *          description: "결제 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                            message: "결제 성공 했습니다."
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
 *   /api/kakaopay/fail:
 *    get:
 *      summary:  "결제 실패"
 *      description: "결제 진행 중에 실패 시 카카오페이에서 호출하는 API"
 *      tags: [KakaoPay]
 *      parameters :
 *         - in : query
 *           name : partner_order_id
 *           required : true
 *           description : 주문 id
 *      responses:
 *        "200":
 *          description: "결제 실패"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                            message: "결제가 실패했습니다."
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
 *   /api/kakaopay/cancel:
 *    get:
 *      summary:  "결제 진행 중에 결제 취소"
 *      description: "결제 진행 중에 취소 시 카카오페이에서 호출하는 API"
 *      tags: [KakaoPay]
 *      parameters :
 *         - in : query
 *           name : partner_order_id
 *           required : true
 *           description : 주문 id
 *      responses:
 *        "200":
 *          description: "결제 취소"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                            message: "결제가 취소 되었습니다."
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
 *   /api/kakaopay/cancel/:id:
 *    get:
 *      summary:  "결제된 후에 결제 취소"
 *      description: "사용자가 이미 결제된 주문의 결제 취소를 요청할 때 호출되는 API"
 *      tags: [KakaoPay]
 *      parameters :
 *         - in : path
 *           name : id
 *           required : true
 *           description : 결제 id
 *      responses:
 *        "200":
 *          description: "결제 취소"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                            message: "결제 취소 완료"
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
