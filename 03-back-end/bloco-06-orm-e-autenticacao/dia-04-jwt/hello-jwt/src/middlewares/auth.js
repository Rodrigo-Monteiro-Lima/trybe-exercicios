const jwt = require('jsonwebtoken');
require('dotenv/config');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return next({ statusCode: 401, message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    const user = await UserService.findById(decoded.data.userId);
    if (!user) return next({ statusCode: 401, message: 'Error finding the user' });
    const { username } = user;
    const { admin } = decoded.data;
    req.user = { username, admin };
    next();
  } catch (err) {
    next({ statusCode: 401, message: err.message });
  }
};