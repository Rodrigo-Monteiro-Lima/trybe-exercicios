'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books',
    [
      {
        title: "The Fellowship of the Ring",
        author: "J. R. R. Tolkien",
        pageQuantity: 423,
        publisher: "Martins Fontes",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "The Two Towers",
        author: "J. R. R. Tolkien",
        pageQuantity: 352,
        publisher: "Martins Fontes",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        //updatedAt: new Date('2022-01-28T13:23:32.514Z'), data especifica
      },
      {
        title: "The Return of the King",
        author: "J. R. R. Tolkien",
        pageQuantity: 416,
        publisher: "Martins Fontes",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pageQuantity: 264,
        publisher: "Rocco",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {})
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete('Books', null, {})
  }
};
