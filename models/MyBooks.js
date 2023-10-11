// we have to save books to db first.
// save the book if not in myBooks table
// when clicking on save book you are linknig to user.
// refrence many to many relationship like in last module.

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class MyBooks extends Model {}

MyBooks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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
    modelName: "mybooks",
  }
);

module.exports = MyBooks;
