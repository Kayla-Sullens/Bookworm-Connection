const User = require("./User");
const Books = require("./Books");
const MyBooks = require("./MyBooks");
const Featured = require("./Featured");
const Reviews = require("./Reviews");

// User.hasMany(Books, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

// Books.belongsTo(User, {
//   foreignKey: "id",
// }); rel being handled 18-19

// define Feature too manytomany.

User.belongsToMany(Books, { through: Featured });
Books.belongsToMany(User, { through: Featured });
// this is creating a true third table 'Featured'

module.exports = { User, MyBooks, Books, Featured, Reviews};
