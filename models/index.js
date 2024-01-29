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
    logging: (query, timing) => {
      console.log("\x1b[36m%s\x1b[0m", "Executing SQL query:");
      console.log(`\x1b[32m${query}\x1b[0m`);
      console.log("\x1b[36m%s\x1b[0m", `Query execution time: ${timing}ms`);
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lockerDetails = require("./lockerDetails.js")(sequelize, Sequelize);
db.lockers = require("./lockers")(sequelize, Sequelize);
db.transactiondetails = require("./transactionDetails.js")(
  sequelize,
  Sequelize
);
db.users = require("./users.js")(sequelize, Sequelize);
db.payments = require("./payments.js")(sequelize, Sequelize);

db.lockers.belongsTo(db.lockerDetails, { foreignKey: "lockerDetailId" });
db.lockerDetails.hasMany(db.lockers, {
  foreignKey: {
    allowNull: false, // This makes the association required
    foreignKey: "lockerDetailId",
  },
});

db.transactiondetails.belongsTo(db.lockers);
db.lockers.hasMany(db.transactiondetails, {
  foreignKey: {
    allowNull: false, // This makes the association required
  },
});

db.transactiondetails.belongsTo(db.users);
db.users.hasMany(db.transactiondetails, {
  foreignKey: {
    allowNull: false, // This makes the association required
  },
});

db.payments.belongsTo(db.transactiondetails, {
  foreignKey: {
    allowNull: false, // This makes the association required
  },
});
db.transactiondetails.hasMany(db.payments, {
  foreignKey: {
    allowNull: false, // This makes the association required
  },
});

module.exports = db;
