"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // The A.hasOne(B) association means that a One-To-One relationship exists between A and B,
      // with the foreign key being defined in the target model (B).

      // The A.belongsTo(B) association means that a One-To-One relationship exists between A and B,
      // with the foreign key being defined in the source model (A).

      // The A.hasMany(B) association means that a One-To-Many relationship exists between A and B,
      // with the foreign key being defined in the target model (B).

      //       To create a One-To-One relationship, the hasOne and belongsTo associations are used together;
      // To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
      // To create a Many-To-Many relationship, two belongsToMany calls are used together
      User.belongsTo(models.AllCode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      }),
        User.belongsTo(models.AllCode, {
          foreignKey: "gender",
          targetKey: "keyMap",
          as: "genderData",
        }),
        User.hasOne(models.Markdown, {
          foreignKey: "doctorId",
        });
      User.hasOne(models.Doctor_info, {
        foreignKey: "doctorId",
      });
      User.hasMany(models.Schedule, {
        foreignKey: "doctorId",
        targetKey: "keyMap",
        as: "doctorIdData",
      });
      User.hasMany(models.Booking, {
        foreignKey: "patientId",
        as: "bookingData",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      roleId: DataTypes.STRING,
      positionId: DataTypes.STRING,
      image: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
