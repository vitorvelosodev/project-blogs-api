const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const addUser = async (displayName, email, password, image) => {
  const checkUser = await User.findAll({
    where: {
      email,
    },
  });

  if (checkUser.length !== 0) return { error: 'user already exists' };

  const user = await User.create({ displayName, email, password, image });

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = createToken(payload);

  return {
    token,
  };
};

module.exports = { addUser };