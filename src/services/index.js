const { loginDo } = require('./login.service');
const userServices = require('./user.service');
const categoryServices = require('./category.service');

module.exports = {
  loginDo,
  userServices,
  categoryServices,
};