const dbConfig = require("../config/config.json")["development"];
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lockerDetails = require("./lockerDetails.js")(sequelize, Sequelize);
db.locker = require("./lockers.js")(sequelize, Sequelize);
db.transactiondetails = require("./transactionDetails.js")(
  sequelize,
  Sequelize
);
db.locker.belongsTo(db.lockerDetails);
db.lockerDetails.hasOne(db.locker, {
  foreignKey: {
    allowNull: false, // This makes the association required
  },
});
// db.locker.hasMany(db.transactiondetails);
db.transactiondetails.belongsTo(db.locker, {
  allowNull: false,
});

module.exports = db;
