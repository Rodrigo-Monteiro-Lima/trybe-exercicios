const login = require('../models/loginModel');
const { validateLogin } = require('./validations/validationsInputValues');

const findByName = async (username, password) => {
  const notValid = validateLogin(username, password);
    if (notValid) return { message: notValid };
  const user = await login.findByName(username);
  return user;
};

const create = async (username, password, admin) => {
  await login.insert(username, password, admin);
  const notValid = validateLogin(username, password);
  if (notValid) return { message: notValid };
  const user = await findByName(username, password);
  return user;
};

module.exports = {
  create,
  findByName,
};