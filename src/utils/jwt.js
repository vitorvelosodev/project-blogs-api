const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'secretJWT';

const createToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET);

const verifyToken = (token) =>
  jwt.verify(token);

module.exports = {
  createToken,
  verifyToken,
};