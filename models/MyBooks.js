// MIGHT NOT NEED THIS MODELS SINCE UserBooks.js HAS THE SAME INFO....

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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.DOUBLE,
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

/* Questions: 
- If MyBook model gets seeded from user_booksData.json file
  using bulkCreate() function, dont we need more properties like 
  the ones that are in the json file?




*/
