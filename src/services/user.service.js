/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const addUser = async (displayName, email, password, image) => {
  if (!displayName || displayName.length < 8) return { error: 'displayName less than 8 chars' };

  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

  if (!emailRegex.test(email)) return { error: 'invalid email' };

  if (!password || password.length < 6) return { error: 'invalid password' };

  const checkUser = await User.findAll({
    where: {
      email,
    },
  });

  console.log('CHECANDO USER', checkUser);

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