/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const TransactionDetails = sequelize.define("transactionDetails", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    bookingTime: {
      type: Sequelize.DATE,
    },
    checkoutTime: {
      type: Sequelize.DATE,
    },
    price: {
      type: Sequelize.STRING,
    },
    totalHours: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    totalCharges: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    // userId: {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    // },
  });

  return TransactionDetails;
};
