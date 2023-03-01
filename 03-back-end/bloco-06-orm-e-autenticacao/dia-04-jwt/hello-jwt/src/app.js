const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const validateJWT = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', controllers.ping);

app.post('/login', controllers.login.login);

app.post('/signup', controllers.login.create);

app.get('/users/me', validateJWT, controllers.userController.findUser);

app.get('/top-secret', validateJWT, controllers.secretController.topSecret);

app.use(middlewares.error);

module.exports = app;
