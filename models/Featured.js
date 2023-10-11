const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Featured extends Model {}

//     only need id bc everything else can be joined.
Featured.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "featured",
  }
);

module.exports = Featured;

//  need to combine tables.
// Join with the book_id refrence we can pull out the other tables info too.
