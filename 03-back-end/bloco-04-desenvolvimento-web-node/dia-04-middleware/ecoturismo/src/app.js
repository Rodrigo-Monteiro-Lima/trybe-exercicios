const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateSignup = require('./middlewares/validateSignUp');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  auth,
  validateName, 
  validatePrice, 
  validateDescription, 
  validateRating,
  validateDifficulty,
  validateCreatedAt,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
},
);

app.post('/signup', validateSignup, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;