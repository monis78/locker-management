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
    booked: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Locker;
};
