const Product = require("../database/models/product");
const errorCodes = require("../codes/errorCodes");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

const findProductByName = async (name) => {
  const product = await Product.findOne({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  return product;
};

const updateProduct = async (data) => {
  await Product.update(data.data, {
    where: data.userId,
  });
};

const deleteProduct = async (id) => {
  await Product.destroy({
    where: { id },
  });
};

module.exports = {
  createProduct,
  findProductByName,
  updateProduct,
  deleteProduct,
};
