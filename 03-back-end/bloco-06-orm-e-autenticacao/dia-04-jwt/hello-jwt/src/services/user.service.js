const user = require('../models/user.model');

const findById = async (id) => {
  const me = await user.findById(id);
  return me;
};

module.exports = {
  findById,
};