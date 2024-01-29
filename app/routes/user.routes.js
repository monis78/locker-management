const user = require("../controllers/user.controller");
var router = require("express").Router();

// Create a new User
router.post("/signup", user.create);

router.post("/signup/google", user.createGoogleUser);

// Retrieve unique user
router.get("/", user.findAll);

// Retrieve a single User with id
router.get("/:id", user.findOne);

// Update a User with id
router.put("/:id", user.update);

// Delete a User with id
router.delete("/:id", user.delete);

// Delete all user
router.delete("/", user.deleteAll);

module.exports = router;
