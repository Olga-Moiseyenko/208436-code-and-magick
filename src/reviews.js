'use strict';

(function() {
  var reviewsList = document.querySelector('.reviews-list');
  var reviewsFilter = document.querySelector('.reviews-filter');
  reviewsFilter.classList.add('invisible');

  var loadReviews = require('./load');
  var getReviewElement = require('./get-review-element');

  var getReviews = function(reviews) {
    console.log(reviews);
    reviews.forEach(function(review) {
      getReviewElement(review, reviewsList);
    });
  };

  loadReviews('http://localhost:1506/api/reviews?callback=<JSONPCallback>', getReviews);

  reviewsFilter.classList.remove('invisible');
})();
