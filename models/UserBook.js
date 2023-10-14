const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserBooks extends Model {}

// Only need the id property because everything ELSE can be joined.
UserBooks.init(
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
        unique: false, // means that one user can have multiple books.
      },
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "book",
        key: "id",
        unique: false, // and one book can have multiple users.
      },
    },
    // THE BELOW PROPERTIES ARE WHAT I WANT ON THIS TABLE, BUT CANNOT FIGURE OUT HOW TO DISPLAY IT IN THE TABLE.
    // username: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
    // // added for testing:
    // title: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "book",
    //     key: "id",
    //   },
    // },
    // // added for testing:
    // src: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "book",
    //     key: "id",
    //   },
    // },
    // might need additional column
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userBooks",
  }
);

module.exports = UserBooks;

//  need to combine tables.
// Join with the book_id refrence we can pull out the other tables info too.
