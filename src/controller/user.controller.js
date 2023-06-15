/* eslint-disable max-lines-per-function */
const userServices = require('../services/user.service');

const addUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const response = await userServices.addUser(displayName, email, password, image);

  if (response.error === 'displayName less than 8 chars') {
    return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
    }); 
  }

  if (response.error === 'invalid email') {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  if (response.error === 'invalid password') {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

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