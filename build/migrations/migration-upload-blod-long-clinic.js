"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn("clinics", "image", {
      type: Sequelize.BLOB("long"),
      allowNull: true
    })]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn("clinics", "image", {
      type: Sequelize.STRING,
      allowNull: true
    })]);
  }
};