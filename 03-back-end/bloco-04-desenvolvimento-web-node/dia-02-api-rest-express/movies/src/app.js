const express = require('express');
const fs = require('fs').promises;

const getJson = async () => {
  const json = await fs.readFile('src/movies.json', 'utf-8');
  return JSON.parse(json);
};

const app = express();
app.use(express.json());

app.get('/movies', async (req, res) => {
  const movies = await getJson();
  res.status(200).json({ movies });
});
app.get('/movies/search', async (req, res) => {
  const movies = await getJson();
  const { q } = req.query;
  if (q) {
    const search = movies.filter(({ movie }) => movie.toLowerCase().includes(q.toLowerCase()));
    return res.status(200).json(search);
  }
  return res.status(400).send({ message: 'Informe um parâmetro válido' });
});
app.get('/movies/:id', async (req, res) => {
  const movies = await getJson();
  const { id } = req.params;
  const movie = movies.find((mv) => mv.id === Number(id));
  if (!movie) {
    res.status(404).json({ message: 'Movie not found' });
    return;
  }
  res.status(200).json({ movie });
}); 

app.post('/movies', async (req, res) => {
  const movies = await getJson();
  const newMovie = req.body;
  const movie = { id: movies[movies.length - 1].id + 1, ...newMovie };
  const newArr = [...movies, movie];
  await fs.writeFile('src/movies.json', JSON.stringify(newArr));
  res.status(201).json({ movie });
});

app.put('/movies/:id', async (req, res) => {
  const movies = await getJson();
  const { id } = req.params;
  const { movie, price } = req.body;
  const movieIndex = movies.findIndex((mv) => mv.id === Number(id));
  if (movieIndex === -1) {
    res.status(404).json({ message: 'Movie not found' });
    return;
  }
  const newMv = { id: Number(id), movie, price };
  const newArr = movies.map((mv, index) => {
    if (index === movieIndex) {
      return newMv;
    } 
      return mv;
  });
  await fs.writeFile('src/movies.json', JSON.stringify(newArr));
  res.status(200).json({ movie: newMv });
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getJson();
  const mvIndex = movies.findIndex((team) => team.id === Number(id));

  if (mvIndex === -1) {
    res.status(404).json({ message: 'Movie not found' });
    return;
  }
  const newArr = movies.filter((_m, index) => index !== mvIndex);
  await fs.writeFile('src/movies.json', JSON.stringify(newArr));
  res.status(204).end();
});

module.exports = app;