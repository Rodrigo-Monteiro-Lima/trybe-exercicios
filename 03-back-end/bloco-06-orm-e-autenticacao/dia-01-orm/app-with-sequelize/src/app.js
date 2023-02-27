const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

app.get('/user/:id', User.getById);

// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
app.get('/user/search/:id', User.getByIdAndEmail);

app.post('/user', User.createUser);

app.put('/user/:id', User.updateUser);

app.delete('/user/:id', User.deleteUser);

module.exports = app;