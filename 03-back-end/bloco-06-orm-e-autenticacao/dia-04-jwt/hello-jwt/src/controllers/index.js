const ping = require('./ping');
const login = require('./login');
const userController = require('./user.controller');
const secretController = require('./topSecret.controller');

module.exports = {
  ping,
  login,
  userController,
  secretController,
};
