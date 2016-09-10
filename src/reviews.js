'use strict';

var loadReviews = require('./load');
var Review = require('./review');

var reviewsList = document.querySelector('.reviews-list');
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewsMore = document.querySelector('.reviews-controls-more');
var lastSavedFilter = localStorage.getItem('lastFilter');

var pageNumber = 0;
var pageSize = 3;
var currentFilter;

if(lastSavedFilter !== '') {
  currentFilter = lastSavedFilter;
  document.querySelector('#' + currentFilter).checked = true;
} else {
  currentFilter = 'all';
}

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
    to: currentPageNumber * pageSize + pageSize,
    filter: filter
  }, getReviews);
};

var changeFilters = function(filterID) {
  reviewsList.innerHTML = '';
  currentFilter = filterID;
  pageNumber = 0;
  loadPageReviews(pageNumber++, currentFilter);
  localStorage.setItem('lastFilter', currentFilter);
};

reviewsMore.addEventListener('click', function() {
  loadPageReviews(pageNumber++, currentFilter);
});

reviewsFilter.addEventListener('change', function(evt) {
  changeFilters(evt.target.id);
});

changeFilters(currentFilter);

reviewsFilter.classList.remove('invisible');
