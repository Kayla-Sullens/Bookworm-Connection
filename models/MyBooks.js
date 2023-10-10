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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
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
