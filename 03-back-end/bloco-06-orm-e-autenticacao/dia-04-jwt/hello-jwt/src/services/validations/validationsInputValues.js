const { login } = require('./schemas');

const validateLogin = (username, password) => {
  const { error } = login.validate({ username, password });
  if (error) return error;
  return false;
};

module.exports = {
  validateLogin,
};