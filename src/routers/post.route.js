const express = require('express');

const { postController } = require('../controller');
const verifyJwt = require('../middlewares/verifyJwt');

const routers = express.Router();

routers.get('/', verifyJwt, postController.getAll);

module.exports = routers;