const db = require("../../models");
const lockerDetails = require("../../models/lockerDetails");
const Locker = db.lockers;
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

  // Create a Locker
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save Locker in the database
  Locker.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Locker.",
      });
    });
};

// Retrieve all Locker from the database.
exports.findAll = (req, res) => {
  Locker.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving lockers.",
      });
    });
};

// Retrieve all Locker from the database.
exports.findUniqueLockers = async (req, res) => {
  db.sequelize
    .query(
      `SELECT "locker"."lockerDetailId", CASE
        WHEN bool_or( "locker"."bookingStatus" = false )  THEN false ELSE true END as "isAllBooked" ,
        "lockerDetail"."name" AS "name", "lockerDetail"."description" AS "description" FROM "lockers" AS "locker"
         LEFT JOIN "lockerDetails" AS "lockerDetail" ON "locker"."lockerDetailId" = "lockerDetail"."id" GROUP BY "locker"."lockerDetailId", "lockerDetail"."id";`,
      {
        type: db.sequelize.QueryTypes.SELECT,
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving lockers.",
      });
    });
};

// Find a single Locker with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Locker.findByPk(id)
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

// Update a Locker by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Locker.update(req.body, {
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

// Delete a Locker with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Locker.destroy({
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

// Delete all Locker from the database.
exports.deleteAll = (req, res) => {
  Locker.destroy({
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
