const router = require("express").Router();
const carouselImages = require("../seeds/carouselData.json");
const { User, Books, UserBooks, Reviews } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage: Removed '' for testing.
router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      user: req.session.user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
      carouselImages: carouselImages,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  WORKING...
router.get("/mybooks", withAuth, async (req, res) => {
  try {
    const myBooksData = await UserBooks.findAll({
      include: [
        {
          model: Books,
          
        },
      ],
    });
    const myBooks = myBooksData.map((book) => book.get({ plain: true }));

    console.log(`\n Home ROUTE FROM /mybooks:n\"`);
    console.log("myBooks Array:", myBooks);

    res.render("myBooks", {
      myBooks: myBooks,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

// Working...
router.get("/myreviews", withAuth, async (req, res) => {
  try {
    // SHOULD be changed to 'myReviewsData' when Model, and Seed page are built.
    const myReviewsData = await Reviews.findAll({
      include: [
        {
          model: User,
          
        },
      ],
      order: [["id", "DESC"]],
    });
    const myReviews = myReviewsData.map((review) =>
      review.get({ plain: true })
    );
    console.log("Super Reviews Array:", myReviews);

    // res.json(myReviews);
    res.render("myReviews", {
      myReviews,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/myrecommendations", withAuth, async (req, res) => {
  try {
    // using 'UserBooks' just to get some data. Need to filter later with recommend = true property.
    const myBooksData = await UserBooks.findAll({
      include: [
        {
          model: Books,
          
        },
      ],
    });
    const myBooks = myBooksData.map((book) => book.get({ plain: true }));
    console.log("My SUpEr recommendations Array:", myBooks);

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
