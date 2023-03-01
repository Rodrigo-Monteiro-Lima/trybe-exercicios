const Joi = require('joi');

const login = Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required(),
});

module.exports = {
  login,
};