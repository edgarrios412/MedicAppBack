const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "appointment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue:() => new Date()
      },
      procedimiento: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"Indefinido"
      },
    },
    { timestamps: false }
  );
};
