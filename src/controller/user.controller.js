const { userServices } = require('../services');

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

const getAll = async (_req, res) => {
  const allUsers = await userServices.getAll();

  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userServices.getById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }

  return res.status(200).json(user);
};

module.exports = {
  addUser,
  getAll,
  getById,
};