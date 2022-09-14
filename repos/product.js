const Product = require("../database/models/product");
const ProductImage = require("../database/models/productImage");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

const findProducts = async () => {
  const products = await Product.findAll({
    include: [
      {
        model: ProductImage,
        attributes: ["image"],
        where: {
          thumbnail: true,
        },
        required: false,
      },
    ],
    attributes: ["name", "price"],
  });
  return products;
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

const findProductById = async (id) => {
  const product = await Product.findOne({
    include: [
      {
        model: ProductImage,
        attributes: ["image"],
        required: false,
      },
    ],
    attributes: {
      exclude: ["quantity", "createdAt", "updatedAt", "deletedAt"],
    },
    where: {
      id,
    },
  });
  return product;
};

const updateProduct = async (data, id) => {
  const result = await Product.update(data, {
    where: { id },
  });
  return result;
};

const deleteProduct = async (id) => {
  const result = await Product.destroy({
    where: { id },
  });
  return result;
};

module.exports = {
  createProduct,
  findProductByName,
  findProductById,
  findProducts,
  updateProduct,
  deleteProduct,
};
