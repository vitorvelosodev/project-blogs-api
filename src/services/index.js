const { loginDo } = require('./login.service');
const userServices = require('./user.service');
const addCategory = require('./category.service');

module.exports = {
  loginDo,
  userServices,
  addCategory,
};