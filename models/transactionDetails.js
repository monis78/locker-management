module.exports = (sequelize, Sequelize) => {
  const TransactionDetails = sequelize.define("transactionDetails", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    // lockerId: {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    // },
    bookingTime: {
      type: Sequelize.DATE,
    },
    checkoutTime: {
      type: Sequelize.DATE,
    },
    paymentStatus: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    // userId: {
    //   allowNull: false,
    //   type: Sequelize.INTEGER,
    // },
  });

  return TransactionDetails;
};
