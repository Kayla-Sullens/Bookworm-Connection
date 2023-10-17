const router = require("express").Router();
const testData = require("../seeds/testingData_myBooks");
const { MyBooks, Reviews } = require("../models");
// const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage: Removed 'withAuth, ' for testing.
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      user: req.session.user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      testData: testData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// works
router.get("/mybooks", async (req, res) => {
  try {
    const myBooksData = await MyBooks.findAll();
    const myBooks = myBooksData.map((book) => book.get({ plain: true }));
    console.log("myBooks Array:", myBooks);

    res.render("myBooks", {
      myBooks: myBooks,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/myreviews", async (req, res) => {
  try {
    // SHOULD be changed to 'myReviewsData' when Model, and Seed page are built.
    console.log(req.session.id);
    const myReviewsData = await Reviews.findAll({
      where: {
        user_id: 1
      }
    });
    const myReviews = myReviewsData.map((book) => book.get({ plain: true }));
    console.log("myReviews Array:", myReviews);

    res.render("myReviews", {
      myReviews
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/myrecommendations", async (req, res) => {
  try {
    // SHOULD be changed to 'myRecommendationsData' when Model, and Seed page are built.
    const myBooksData = await MyBooks.findAll();
    const myBooks = myBooksData.map((book) => book.get({ plain: true }));
    console.log("myReviews Array:", myBooks);

    res.render("myRecommendations", {
      myBooks: myBooks,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
