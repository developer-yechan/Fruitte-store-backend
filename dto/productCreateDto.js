const { v4: uuidv4 } = require("uuid");

module.exports = async (body) => {
  return {
    id: uuidv4(),
    name: body.name,
    price: body.price,
    content: body.content,
    origin: body.origin,
    producer: body.producer,
    quantity: body.quantity,
    deliveryPrice: body.deliveryPrice,
    deliveryOption: body.deliveryOption,
  };
};
