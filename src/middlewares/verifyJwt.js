const { verifyToken } = require('../utils/jwt');

const verifyJwt = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    }); 
  }

  try {
    const decode = verifyToken(token);
    res.locals.user = decode;

    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = verifyJwt;