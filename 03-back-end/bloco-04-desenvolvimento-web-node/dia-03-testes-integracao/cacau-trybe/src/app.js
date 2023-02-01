const express = require('express');

const app = express();
const cacauTrybe = require('./cacauTrybe');

const port = 3001;

app.listen(port, () => console.log(`server running on port ${port}`));
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});
app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getTotalChocolates();
  res.status(200).json({ totalChocolates });
});
app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  if (name) {
    const searchChocolates = await cacauTrybe.getSearchedChocolates(name);
    return res.status(200).json({ searchChocolates });
  }
  return res.status(404).send({ searchChocolates: [] });
});
app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});
app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});
app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const chocolate = await cacauTrybe.updateChocolate(id, body);
  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  } 
  res.status(200).json({ chocolate }); 
});

module.exports = app;