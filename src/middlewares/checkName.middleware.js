const checkName = (req, res, next) => {
  const { displayName } = req.body;

  // return next();

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    }); 
  }

  return next();
};

module.exports = checkName;