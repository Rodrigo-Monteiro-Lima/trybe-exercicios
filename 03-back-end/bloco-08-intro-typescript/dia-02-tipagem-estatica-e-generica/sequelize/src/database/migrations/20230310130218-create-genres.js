'use strict';
/** 
 * @type {import('sequelize-cli').Migration}
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genres', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('genres');
  }
};
