const BooksService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;
    if (author) {
      books = await BooksService.getByAuthor(author);
      if (books.length === 0) return res.status(404).json({ message: 'Author not found!' }); 
    } else {
      books = await BooksService.getAll();
    }
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'An error has occurred' });
  }
};

const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'An error has occurred' });
  }
};

const create = async (req, res) => {
  try {
    const {title, author, pageQuantity, publisher} = req.body;
    const book = {title, author, pageQuantity, publisher}
    const newBook = await BooksService.create(book);
    return res.status(201).json(newBook);
  } catch (e) {
    res.status(500).json({ message: 'An error has occurred' });
  }
};

const update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {title, author, pageQuantity, publisher} = req.body;
    const book = {title, author, pageQuantity, publisher}
    const updatedBook = await BooksService.update(id, book);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });
    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    res.status(500).json({ message: 'An error has occurred' });
  }
};

const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedBook = await BooksService.remove(id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found!' });
    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (e) {
    res.status(500).json({ message: 'An error has occurred' });
  }
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
