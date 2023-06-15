const express = require('express');
const { loginRouter, userRouter } = require('./routers');
const verifyJwt = require('./middlewares/verifyJwt');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRouter);
app.use('/user', userRouter);

app.use(verifyJwt);

app.get('/user', (_req, res) => res.status(200).json({ message: 'ok' }));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
