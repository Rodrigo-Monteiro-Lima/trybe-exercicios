const topSecret = async (req, res, next) => {
  if (!req.user) return next({ statusCode: 401, message: 'This endpoint requires authentication' });
  const { admin } = req.user;
  if (admin) return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
  return next({ statusCode: 401, message: 'Restricted access' });
}; 

module.exports = { topSecret };