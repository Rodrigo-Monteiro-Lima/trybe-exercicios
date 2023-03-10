'use strict';
/** 
 * @type {import('sequelize-cli').Migration}
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          field: 'id'
        },
        field: 'author_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          field: 'id'
        },
        field: 'genre_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
