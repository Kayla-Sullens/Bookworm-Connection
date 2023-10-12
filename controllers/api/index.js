const router = require('express').Router();
const userRoutes = require('./userRoutes');
const myReview = require('./myReviews');

router.use('/users', userRoutes);
router.use('/reviews', myReview);

module.exports = router;
