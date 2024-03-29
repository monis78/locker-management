/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const Locker = sequelize.define("locker", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    lockerDetailId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    bookingStatus: {
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

  return Locker;
};
