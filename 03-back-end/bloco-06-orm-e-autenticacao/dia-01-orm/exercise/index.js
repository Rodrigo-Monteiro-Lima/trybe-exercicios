const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./src/controllers/book.controller');

app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`));

app.get('/books', BooksController.getAll);

app.get('/books/search', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.create);

app.put('/books/:id', BooksController.update);

app.delete('/books/:id', BooksController.remove);


