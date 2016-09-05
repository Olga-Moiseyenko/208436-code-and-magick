'use strict';

var loadReviews = require('./load');
var Review = require('./review');

var reviewsList = document.querySelector('.reviews-list');
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewsMore = document.querySelector('.reviews-controls-more');

var pageNumber = 0;
var pageSize = 3;
var currentFilter = 'all';
reviewsFilter.classList.add('invisible');

var getReviews = function(reviews) {
  reviews.forEach(function(review) {
    var rev = new Review(review);
    reviewsList.appendChild(rev.element);
  });
};

var loadPageReviews = function(currentPageNumber, filter) {
  loadReviews('/api/reviews', {
    from: currentPageNumber * pageSize,
    to: currentPageNumber + pageSize,
    filter: filter
  }, getReviews);
};

var changeFilters = function(filterID) {
  reviewsList.innerHTML = '';
  currentFilter = filterID;
  pageNumber = 0;
  loadPageReviews(pageNumber++, currentFilter);
};

reviewsMore.addEventListener('click', function() {
  loadPageReviews(pageNumber++, currentFilter);
}, getReviews);

reviewsFilter.addEventListener('change', function(evt) {
  if(evt.target.classList.contains('reviews-filter')) {
    changeFilters(evt.target.id);
  }
});

changeFilters(currentFilter);

reviewsFilter.classList.remove('invisible');
