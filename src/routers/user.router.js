const express = require('express');

const { userController } = require('../controller');
const { checkName, checkEmail, checkPassword } = require('../middlewares');
const verifyJwt = require('../middlewares/verifyJwt');

const routers = express.Router();

routers.post('/', checkName, checkEmail, checkPassword, userController.addUser);

routers.get('/', verifyJwt, userController.getAll);
routers.get('/:id', verifyJwt, userController.getById);

module.exports = routers;