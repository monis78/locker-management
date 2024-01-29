"use strict";
const smallLocker = {
  lockerDetailId: 1,
  bookingStatus: false,
};
const mediumLocker = {
  lockerDetailId: 2,
  bookingStatus: false,
};
const largerLocker = {
  lockerDetailId: 3,
  bookingStatus: false,
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createLocker = [];
    for (let i = 1; i <= 10; i++) {
      createLocker.push({
        ...smallLocker,
        id: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 11; i <= 20; i++) {
      createLocker.push({
        ...mediumLocker,
        id: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    for (let i = 21; i <= 30; i++) {
      createLocker.push({
        ...largerLocker,
        id: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("lockers", createLocker, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lockers", null, {});
  },
};
