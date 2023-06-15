const loginServices = require('../services');

const { env } = process;

const loginController = async (req, res) => {
  console.log(env);
  const { email, password } = req.body;

  const generatedToken = await loginServices.loginDo(email, password);

  if (generatedToken.error === 'Missing argument') {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  if (generatedToken.error === 'Invalid credentials') {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  return res.status(200).json({
    token: generatedToken.token,
  });
};

module.exports = { loginController };