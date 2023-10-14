const User = require("./User");
const Books = require("./Books");
// const MyBooks = require("./MyBooks");
const UserBooks = require("./UserBook");
const Reviews = require("./Reviews");

User.hasMany(Reviews, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Reviews.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
//
// Join Tables
User.belongsToMany(Books, {
  through: UserBooks,
  unique: false, // added
  foreignKey: "user_id",
});
Books.belongsToMany(User, {
  through: UserBooks,
  unique: false, // added
  foreignKey: "book_id",
});
UserBooks.belongsTo(Books, {
  foreignKey: "book_id",
  targetKey: "id",
});

module.exports = { User, Books, Reviews, UserBooks };
// UserBooks dont need
