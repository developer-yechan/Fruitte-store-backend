const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = async (id, body) => {
  return {
    userId: { id },
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      tier: "user",
      phoneNumber: body.phoneNumber,
    },
  };
};
