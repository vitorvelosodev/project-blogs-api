const userServices = require('../services/user.service');

const addUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const response = await userServices.addUser(displayName, email, password, image);

  if (response.error === 'user already exists') {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  return res.status(201).json({
    token: response.token,
  });
};

module.exports = {
  addUser,
};