
// const express = require('express');
// const PORT = 3001;
// const app = express();

const router = require('express').Router();
// const { User } = require('../../models');


// POST request to add a review
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);

    console.log(req.body);
  
    // Destructuring assignment for the items in req.body
    const { product, review, username } = req.body;
  
    // If all the required properties are present
    if (product && review && username) {
      // Variable for the object we will save
      const newReview = {
        product,
        review,
        username,
        upvotes: Math.floor(Math.random() * 100),
        review_id: Math.floor(Math.random()*1000000).toString(16),
      };
  
      const response = {
        status: 'success',
        body: newReview,
      };
  
      console.log(response);
      // res.status(201).json(response);
      res.status(200).json();
    } else {
      res.status(500).json('Error in posting review');
    }
  });

  module.exports = router;