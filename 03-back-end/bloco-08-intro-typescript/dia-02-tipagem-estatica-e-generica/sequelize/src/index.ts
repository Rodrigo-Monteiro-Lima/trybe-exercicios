import Author from './database/models/AuthorModel';
import Book from './database/models/BookModel';
import sequelize from 'sequelize';

(async () => {
  const authors = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: sequelize.literal('totalBooks DESC'),//[[sequelize.col('books.id')), 'DESC']],
    raw: true,
  });

  console.log(authors);

  process.exit(0);
})();