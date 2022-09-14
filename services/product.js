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
    const id = req.params.id;
    const product = await productRepository.findProductById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await productRepository.findProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    // 이미 삭제된 상품인지 확인
    const isExistingProduct = await productRepository.findProductById(
      productId
    );
    if (!isExistingProduct) {
      throw new Error(errorCodes.notExistingProduct);
    }
    const result = await productRepository.updateProduct(
      await productUpdateDto(req.body),
      productId
    );
    // 수정되지 않은 경우
    if (result[0] === 0) {
      throw new Error("상품 정보가 수정되지 않았습니다. 다시 시도해주세요");
    }
    return res.status(200).json({ message: "해당 상품 정보를 수정 했습니다." });
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
      throw new Error(errorCodes.notExistingProduct);
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

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
