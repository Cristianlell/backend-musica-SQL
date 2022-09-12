'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      album: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING
      },
      artist_name: {
        type: Sequelize.STRING
      },
      artist_nickname: {
        type: Sequelize.STRING
      },
      artist_nationality: {
        type: Sequelize.STRING
      },
      duration_start: {
        type: Sequelize.INTEGER
      },
      duration_end: {
        type: Sequelize.INTEGER
      },
      mediaID: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Storages'
          },
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tracks');
  }
};