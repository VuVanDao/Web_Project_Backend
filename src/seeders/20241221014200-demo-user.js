"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "dao",
        lastName: "vu van",
        email: "dao@gmail.com",
        password: "11082004",
        address: "Nam Dinh",
        gender: 1,
        roleId: "ADMIN",
        typeRole: "ROLE",
        keyRole: "R1",
        phoneNumber: "0969696969",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
