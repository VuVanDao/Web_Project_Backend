"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      specialty.hasMany(models.Doctor_info, {
        foreignKey: "specialtyId",
        targetKey: "id",
        as: "specialtyData",
      });
    }
  }
  specialty.init(
    {
      name: DataTypes.STRING,
      descriptionHTML: DataTypes.TEXT("long"),
      descriptionMarkdown: DataTypes.TEXT("long"),
      image: DataTypes.TEXT("long"),
    },
    {
      sequelize,
      modelName: "specialty",
    }
  );
  return specialty;
};
