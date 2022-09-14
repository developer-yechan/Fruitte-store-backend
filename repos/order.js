const Product = require("../database/models/product");
const User = require("../database/models/user");
const Order = require("../database/models/order");
const ProductImage = require("../database/models/productImage");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createOrder = async (data) => {
  const order = await Order.create(data);
  return order;
};

const findOrdersByUserId = async (userId) => {
  const orders = await Order.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "name", "price", "deliveryPrice", "deliveryOption"],
        required: true,
        include: {
          model: ProductImage,
          attributes: ["image"],
          required: false,
        },
      },
    ],
    attributes: [["id", "orderNumber"], "status", "createdAt", "quantity"],
    where: {
      UserId: userId,
    },
  });
  return orders;
};

const findOrderByOrderId = async (orderId) => {
  const order = await Order.findOne({
    include: [
      {
        model: User,
        attributes: ["id", "name", "phoneNumber"],
        required: true,
      },
      {
        model: Product,
        attributes: ["id", "name", "price", "deliveryPrice", "deliveryOption"],
        required: true,
        include: {
          model: ProductImage,
          attributes: ["image"],
          required: false,
        },
      },
    ],
    attributes: {
      exclude: ["id", "updatedAt", "deletedAt", "UserId", "ProductId"],
    },
    where: {
      id: orderId,
    },
  });
  return order;
};

const updateOrder = async (data, id) => {
  const result = await Order.update(data, {
    where: { id },
  });
  return result;
};

const deleteOrder = async (id) => {
  const result = await Order.destroy({
    where: { id },
  });
  return result;
};

module.exports = {
  createOrder,
  findOrderByOrderId,
  findOrdersByUserId,
  updateOrder,
  deleteOrder,
};
