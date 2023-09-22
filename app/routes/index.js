module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const lockerRoutes = require("./locker.routes");
  const lockerDetailsRoutes = require("./lockerDetails.routes");

  app.use("/api/locker", lockerRoutes);
  app.use("/api/lockerDetails", lockerDetailsRoutes);
};
