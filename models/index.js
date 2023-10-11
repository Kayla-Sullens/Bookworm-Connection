const User = require("./User");
const Books = require("./Books");
const MyBooks = require("./MyBooks");
const Featured = require("./Featured");

User.hasMany(Books, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Books.belongsTo(User, {
  foreignKey: "id",
});

// need relationship for Feature too.

module.exports = { User, MyBooks, Books, Featured };
