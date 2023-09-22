const db = require("../../models");
const LockerDetails = db.lockerDetails;
const Op = db.Sequelize.Op;
// Create and Save a new Locker
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a LockerDetails
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save LockerDetails in the database
  LockerDetails.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the LockerDetails.",
      });
    });
};

// Retrieve all LockerDetails from the database.
exports.findAll = (req, res) => {
  LockerDetails.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving lockers.",
      });
    });
};

// Find a single LockerDetails with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  LockerDetails.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Locker with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Locker with id=" + id,
      });
    });
};

// Update a LockerDetails by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  LockerDetails.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Locker was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Locker with id=${id}. Maybe Locker was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Locker with id=" + id,
      });
    });
};

// Delete a LockerDetails with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  LockerDetails.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Locker was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Locker with id=${id}. Maybe Locker was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Locker with id=" + id,
      });
    });
};

// Delete all LockerDetails from the database.
exports.deleteAll = (req, res) => {
  LockerDetails.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Lockers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all lockers.",
      });
    });
};
