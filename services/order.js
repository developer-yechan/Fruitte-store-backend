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
      throw new Error(errorCodes.notExistingOrder);
    }
    if (req.user.tier === "user") {
      if (isExistingOrder.status !== "주문 대기") {
        return res.status(401).json({
          message: errorCodes.notValidUpdateRequest,
        });
      }
      if (req.body.status !== "주문 대기") {
        return res.status(401).json({
          message: errorCodes.orderStatus,
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

const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    // 이미 삭제된 상품인지 확인
    const isExistingOrder = await orderRepository.findOrderByOrderId(orderId);
    if (!isExistingOrder) {
      throw new Error(errorCodes.notExistingOrder);
    }
    if (req.user.tier === "user") {
      if (isExistingOrder.status !== "주문 대기") {
        return res.status(401).json({
          message: errorCodes.notValidDeleteRequest,
        });
      }
    }
    const result = await orderRepository.deleteOrder(orderId);
    // 삭제 되지 않은 경우
    if (result[0] === 0) {
      throw new Error("주문이 취소 되지 않았습니다. 다시 시도해주세요");
    }
    return res.status(200).json({ message: "해당 주문을 취소 했습니다." });
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getOrder, getOrders, updateOrder, deleteOrder };
