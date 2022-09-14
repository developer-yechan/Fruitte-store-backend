const Product = require("../database/models/product");
const User = require("../database/models/user");
const Order = require("../database/models/order");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createOrder = async (data) => {
  const order = await Order.create(data);
  return order;
};

module.exports = { createOrder };
