const User = require("../database/models/user");
const errorCodes = require("../codes/errorCodes");

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  return user;
};

const findUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  return user;
};
const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
};

const updateUser = async (data) => {
  await User.update(data.data, {
    where: data.userId,
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  deleteUser,
  updateUser,
  findUserById,
};
