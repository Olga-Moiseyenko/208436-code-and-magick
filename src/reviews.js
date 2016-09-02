'use strict';

var loadReviews = require('./load');
var Review = require('./review');

var reviewsList = document.querySelector('.reviews-list');
var reviewsFilter = document.querySelector('.reviews-filter');
reviewsFilter.classList.add('invisible');

var getReviews = function(reviews) {
  reviews.forEach(function(review) {
    var rev = new Review(review);
    reviewsList.appendChild(rev.element);
  });
};

loadReviews('http://localhost:1506/api/reviews?callback=<JSONPCallback>', getReviews);

reviewsFilter.classList.remove('invisible');
