const express = require('express');

const { userController } = require('../controller');
const { checkName, checkEmail, checkPassword } = require('../middlewares');

const routers = express.Router();

routers.post('/', checkName, checkEmail, checkPassword, userController.addUser);

// checkName, checkEmail, checkPassword, 
module.exports = routers;