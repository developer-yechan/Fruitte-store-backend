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

module.exports = { createOrder, getOrder, getOrders };
