/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} Sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      field: "id",
    },
    userName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    mobileNo: {
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

  return users;
};
