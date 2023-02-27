const{ Book }= require('../models');

const getAll = async () => {
  const books = await Book.findAll({order: [['title']]});
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
}

const update = async (id, book) => {
  const [updatedBook] = await Book.update(book, { where: { id } });
  return updatedBook;
}

const remove = async (id) => {
  const deletedBook = await Book.destroy({ where: { id } });
  return deletedBook;
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author }, order: [['title']] });
  return books;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}
