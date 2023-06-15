const express = require('express');

const { categoryController } = require('../controller');
const verifyJwt = require('../middlewares/verifyJwt');
const checkCategoryName = require('../middlewares/checkCategoryName.middleware');

const routers = express.Router();

routers.post('/', verifyJwt, checkCategoryName, categoryController.addCategory);

module.exports = routers;