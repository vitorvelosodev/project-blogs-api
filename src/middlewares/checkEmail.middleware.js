const checkEmail = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    }); 
  }

  return next();
};

module.exports = checkEmail;