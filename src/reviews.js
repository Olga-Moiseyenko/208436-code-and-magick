'use strict';

(function() {
  var reviewsList = document.querySelector('.reviews-list');
  var reviewsFilter = document.querySelector('.reviews-filter');
  reviewsFilter.classList.add('invisible');

  var getReviews = function(reviews) {
    reviews.forEach(function(review) {
      window.getReviewElement(review, reviewsList);
    });
  };

  window.loadReviews('http://localhost:1506/api/reviews?callback=<JSONPCallback>', getReviews);

  reviewsFilter.classList.remove('invisible');
})();
