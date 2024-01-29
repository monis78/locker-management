module.exports = {
  /**
   *  @param {import('sequelize').QueryInterface} queryInterface
   *  @param {import('sequelize').DataTypes} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactionDetails", {
      transactionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      lockerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bookingTime: {
        type: Sequelize.DATE,
      },
      checkoutTime: {
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      totalHours: {
        type: Sequelize.INTEGER,
      },
      totalCharges: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("transactionDetails", { cascade: true });
  },
};
