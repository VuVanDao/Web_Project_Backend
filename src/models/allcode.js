"use strict";
const { mode } = require("crypto-js");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AllCode.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
      AllCode.hasMany(models.User, { foreignKey: "gender", as: "genderData" });
      AllCode.hasMany(models.Schedule, {
        foreignKey: "timeType",
        as: "timeTypeData",
      });
      AllCode.hasMany(models.Doctor_info, {
        foreignKey: "priceId",
        as: "priceTypeData",
      });
      AllCode.hasMany(models.Doctor_info, {
        foreignKey: "provinceId",
        as: "provinceTypeData",
      });
      AllCode.hasMany(models.Doctor_info, {
        foreignKey: "paymentId",
        as: "paymentTypeData",
      });
      AllCode.hasOne(models.Booking, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeData",
      });
    }
  }
  AllCode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEN: DataTypes.STRING,
      valueVI: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllCode",
    }
  );
  return AllCode;
};
