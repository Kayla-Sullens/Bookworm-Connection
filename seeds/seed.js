const sequelize = require("../config/connection");
const { User, Books, Reviews, UserBooks } = require("../models");

const userData = require("./userData.json");
const booksData = require("./booksData.json");
const reviewsData = require("./reviewsData.json");
const user_booksData = require("./user_booksData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Books.bulkCreate(booksData, {
    individualHooks: true,
    returning: true,
  });
  await Reviews.bulkCreate(reviewsData, {
    individualHooks: true,
    returning: true,
  });
  await UserBooks.bulkCreate(user_booksData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
