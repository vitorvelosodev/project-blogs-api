const express = require('express');

const { loginService } = require('../services');

const routers = express.Router();

routers.post('/login', loginService.loginDo);

module.exports = routers;