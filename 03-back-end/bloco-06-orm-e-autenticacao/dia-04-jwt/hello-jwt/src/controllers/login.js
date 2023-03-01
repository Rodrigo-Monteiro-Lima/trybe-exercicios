require('dotenv/config');
const jwt = require('jsonwebtoken');
const LoginService = require('../services/login.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await LoginService.findByName(username, password);
    if (user.message) return next(user.message);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Senha ou login inválidos' });
    }
    // if (user.username === 'admin' && user.password === 's3nh4S3gur4???') {
    //   info.data.admin = true;
    // }
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
    console.log(user);
    const token = jwt.sign({ data: { userId: user.id, admin: user.admin } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const create = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const alreadyExist = await LoginService.findByName(username, password);
    if (alreadyExist) return next({ statusCode: 409, message: 'user already exists' });
    const admin = Math.round(Math.random());
    const user = await LoginService.create(username, password, admin);
    if (user.message) return next(user.message);
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };
    const token = jwt.sign({ data: { userId: user.id, admin: user.admin } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
module.exports = {
  login,
  create,
};