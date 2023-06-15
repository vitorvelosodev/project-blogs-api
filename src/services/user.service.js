const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const addUser = async (displayName, email, password, image) => {
  const checkUser = await User.findAll({
    where: {
      email,
    },
  });

  if (checkUser.length !== 0) return { error: 'user already exists' };

  await User.create({ displayName, email, password, image });

  const payload = {};

  const token = createToken(payload);

  return {
    token,
  };
};

const getAll = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return allUsers;
};

module.exports = { addUser, getAll };