module.exports = (body) => {
  return {
    address: body.address,
    recipent: body.recipent,
    recipentCall: body.recipentCall,
    quantity: body.quantity,
    status: body.status,
  };
};
