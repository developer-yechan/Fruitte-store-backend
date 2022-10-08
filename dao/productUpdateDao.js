module.exports = async (body) => {
  return {
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
