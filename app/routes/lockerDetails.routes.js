const lockerDetails = require("../controllers/lockerDetails.controller.js");
var router = require("express").Router();

// Create a new Locker
router.post("/", lockerDetails.create);

// Retrieve all lockers
router.get("/", lockerDetails.findAll);

// Retrieve a single Locker with id
router.get("/:id", lockerDetails.findOne);

// Update a Locker with id
router.put("/:id", lockerDetails.update);

// Delete a Locker with id
router.delete("/:id", lockerDetails.delete);

// Delete all lockers
router.delete("/", lockerDetails.deleteAll);

module.exports = router;
