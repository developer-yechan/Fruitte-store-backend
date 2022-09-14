const Product = require("../database/models/product");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

const findProducts = async () => {
  const product = await Product.findAll({
    include: [
      {
        model: ProductImages,
        attributes: ["image"],
        where: {
          thumbnail: true,
        },
        required: false,
      },
    ],
    attributes: ["name", "price"],
  });
  return product;
};

const findProductByName = async (name) => {
  const product = await Product.findOne({
    include: [
      {
        model: ProductImages,
        attributes: ["image"],
        required: false,
      },
    ],
    attributes: { exclude: ["quantity", "createdAt", "updatedAt"] },
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
