const findUser = async (req, res) => res.status(200).json(req.user);

module.exports = {
  findUser,
};