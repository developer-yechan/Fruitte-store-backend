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

module.exports = { createOrder };
