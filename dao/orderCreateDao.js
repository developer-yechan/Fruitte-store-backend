const { v4: uuidv4 } = require("uuid");

module.exports = (body, userId) => {
  return {
    id: uuidv4(),
    address: body.address,
    recipent: body.recipent,
    recipentCall: body.recipentCall,
    quantity: body.quantity,
    UserId: userId,
    ProductId: body.productId,
  };
};
