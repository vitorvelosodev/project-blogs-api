const { User } = require('../models');

const loginDo = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
        message: 'Some required fields are missing',
    }); 
  }

  const findUser = await User.findAll({
    where: {
      email,
    },
  });

  return res.status(200).json({
    findUser,
  });
};

module.exports = { loginDo };