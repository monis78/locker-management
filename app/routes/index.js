module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const lockerRoutes = require("./locker.routes");
  const lockerDetailsRoutes = require("./lockerDetails.routes");
  const userRoutes = require("./user.routes");

  app.use("/api/locker", lockerRoutes);
  app.use("/api/lockerDetails", lockerDetailsRoutes);
  app.use("/api/user", userRoutes);
};
