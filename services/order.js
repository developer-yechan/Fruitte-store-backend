const orderRepository = require("../repos/order");
const errorCodes = require("../codes/errorCodes");
const orderCreateDto = require("../dto/orderCreateDto");
const orderUpdateDto = require("../dto/orderUpdateDto");

const createOrder = async (req, res, next) => {
  try {
    const newOrder = await orderRepository.createOrder(
      await orderCreateDto(req.body, req.user.id)
    );
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await orderRepository.findOrderByOrderId(id);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await orderRepository.findOrdersByUserId(req.user.id);
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    // 이미 삭제된 상품인지 확인
    const isExistingOrder = await orderRepository.findOrderByOrderId(orderId);
    if (!isExistingOrder) {
      return res.status(400).json(errorCodes.notExistingOrder);
    }
    if (req.user.tier === "user") {
      if (isExistingOrder.status !== "결제 대기") {
        return res.status(401).json({
          message: "결제 후에는 주문 수정 시 관리자에게 문의 해주세요",
        });
      }
      if (req.body.status !== "결제 대기") {
        return res.status(401).json({
          message: "결제 상태는 관리자만 수정할 수 있습니다.",
        });
      }
    }
    const result = await orderRepository.updateOrder(
      await orderUpdateDto(req.body),
      orderId
    );

    // 수정되지 않은 경우
    if (result[0] === 0) {
      throw new Error("주문 정보가 수정되지 않았습니다. 다시 시도해주세요");
    }
    return res.status(200).json({ message: "해당 주문 정보를 수정 했습니다." });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    // 이미 삭제된 상품인지 확인
    const isExistingProduct = await productRepository.findProductById(
      productId
    );
    if (!isExistingProduct) {
      return res.status(400).json(errorCodes.notExistingProduct);
    }
    const result = await productRepository.deleteProduct(productId);
    // 삭제 되지 않은 경우
    if (result[0] === 0) {
      throw new Error("상품이 삭제 되지 않았습니다. 다시 시도해주세요");
    }
    return res.status(200).json({ message: "해당 상품을 삭제 했습니다." });
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getOrder, getOrders, updateOrder };
