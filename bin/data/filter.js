'use strict';

module.exports = function(list, filterID) {
  var threeDays = 3 * 24 * 60 * 60 * 1000;
  switch(filterID) {
    case 'reviews-recent':
      list = list.filter(function(item) {
        return Date.now() - item.created <= threeDays;
      });
      list = list.sort(function(a, b) {
        return b.created - a.created;
      });
      break;
    case 'reviews-good':
      list = list.filter(function(item) {
        return item.rating >= 3;
      });
      list = list.sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-bad':
      list = list.filter(function(item) {
        return item.rating < 3;
      });
      list = list.sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-popular':
      list = list.sort(function(a, b) {
        return b.review_usefulness - a.review_usefulness;
      });
      break;
  }
  return list;
};
