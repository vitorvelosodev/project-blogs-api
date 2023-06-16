const { loginDo } = require('./login.service');
const userServices = require('./user.service');
const categoryServices = require('./category.service');
const postServices = require('./post.service');

module.exports = {
  loginDo,
  userServices,
  categoryServices,
  postServices,
};