const lockers = require("../controllers/locker.controller.js");
var router = require("express").Router();

// Create a new Locker
router.post("/", lockers.create);

// Retrieve all lockers
router.get("/available", lockers.findUniqueLockers);

// Retrieve unique lockers
router.get("/", lockers.findAll);

// Retrieve a single Locker with id
router.get("/:id", lockers.findOne);

// Update a Locker with id
router.put("/:id", lockers.update);

// Delete a Locker with id
router.delete("/:id", lockers.delete);

// Delete all lockers
router.delete("/", lockers.deleteAll);

module.exports = router;
