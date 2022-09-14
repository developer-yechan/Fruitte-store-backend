const productRepository = require("../repos/product");
const errorCodes = require("../codes/errorCodes");
const productCreateDto = require("../dto/productCreateDto");
const productUpdateDto = require("../dto/productUpdateDto");

const createProduct = async (req, res, next) => {
  try {
    const isExistingProduct = await productRepository.findProductByName(
      req.body.name
    );
    if (isExistingProduct) {
      throw new Error(errorCodes.existProduct);
    }
    const newProduct = await productRepository.createProduct(
      await productCreateDto(req.body)
    );
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
