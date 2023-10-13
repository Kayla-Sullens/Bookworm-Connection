const sequelize = require("../config/connection");
const { User, MyBooks } = require("../models");

const userData = require("./userData.json");
const testingData_myBooks = require("./books.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await MyBooks.bulkCreate(testingData_myBooks, {
    individualHooks: true,
    returning: true,
  });
  // await MyReviews.bulkCreate(reviewsData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  

  process.exit(0);
};

seedDatabase();
