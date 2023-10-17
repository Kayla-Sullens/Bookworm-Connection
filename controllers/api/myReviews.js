const router = require("express").Router();
const { Reviews } = require("../../models");

// POST request to add a review
router.post("/", (req, res) => {
  // Log that a POST request was received
  console.log(
    "POST ENDPOINT: ",
    `${req.method} request received to add a review`
  );
  Reviews.create(req.body)
    .then((reviewData) => res.json(reviewData))
    .catch((err) => res.json(err));
});

module.exports = router;
