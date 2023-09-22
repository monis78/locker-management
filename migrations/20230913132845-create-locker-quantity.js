"use strict";
module.exports = {
  /**
   *  @param {import('sequelize').QueryInterface} queryInterface
   *  @param {import('sequelize').DataTypes} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locker", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lockerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      booked: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locker");
  },
};
