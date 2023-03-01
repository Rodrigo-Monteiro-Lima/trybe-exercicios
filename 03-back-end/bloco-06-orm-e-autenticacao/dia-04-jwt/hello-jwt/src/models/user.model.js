const camelize = require('camelize');
const connection = require('../db/connection');

const findById = async (id) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM myDatabase.users WHERE id = ?',
    [id],
  );
  return camelize(user);
};

module.exports = {
  findById,
};