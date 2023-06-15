const checkName = require('./checkName.middleware');
const checkEmail = require('./checkEmail.middleware');
const checkPassword = require('./checkPassword.middleware');

module.exports = {
  checkName,
  checkEmail,
  checkPassword,
};