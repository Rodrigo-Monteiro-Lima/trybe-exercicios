const camelize = require('camelize');
const connection = require('../db/connection');

const findByName = async (username) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM myDatabase.users WHERE username = ?',
    [username],
  );
  return camelize(user);
};

const insert = async (user, password, admin) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO myDatabase.users (username, password, admin) VALUE (?, ?, ?)',
    [user, password, admin],
  );
  return insertId;
};

module.exports = {
  findByName,
  insert,
};