"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lockerDetails",
      [
        {
          id: 1,
          name: "small",
          size: "100 X 100",
          description: "small locker which can include small bag or helmet",
          price: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "medium",
          size: "200 X 200",
          description: "medium locker which can include small trolley bag",
          price: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "large",
          size: "400 X 200",
          description: "large locker which can include big trolley",
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lockerDetails", null, {});
  },
};
