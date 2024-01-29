/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const payments = sequelize.define("payments", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    lockerName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    bookingStatus: {
      type: Sequelize.STRING,
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

  return payments;
};
