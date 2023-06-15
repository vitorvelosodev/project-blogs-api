const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const loginDo = async (email, password) => {
  if (!email || !password) return { error: 'Missing argument' };

  const user = await User.findAll({
    where: {
      email,
      password,
    },
  });

  if (user.length < 1) return { error: 'Invalid credentials' };
  
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = createToken(payload);

  return {
    token,
  };
};

module.exports = { loginDo };