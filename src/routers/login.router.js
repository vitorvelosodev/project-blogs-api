const express = require('express');

const { loginController } = require('../controller');

const routers = express.Router();

routers.post('/login', loginController);

module.exports = routers;