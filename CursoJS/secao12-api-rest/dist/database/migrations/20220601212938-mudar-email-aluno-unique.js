"use strict";/* eslint-disable no-empty-function */
// Migration para deixar cada email sendo unique na DB
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() {

  },
};
