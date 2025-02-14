"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Doctor_infos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      specialtyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      clinicId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      priceId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paymentId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      provinceId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressClinic: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nameClinic: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Doctor_infos");
  },
};
