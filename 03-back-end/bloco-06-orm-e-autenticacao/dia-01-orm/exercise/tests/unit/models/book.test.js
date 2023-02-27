const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('Book model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();
  describe('has the name "Book"', () => {
    checkModelName(Book)('Book');
  });
  describe('Owns the properties', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});