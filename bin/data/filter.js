'use strict';

module.exports = function(list, filterID) {
  var listFiltered;
  var threeDays = 3 * 4 * 60 * 60 * 1000;
  switch(filterID) {
    case 'reviews-recent':
      listFiltered = list.filter(function(item) {
        var dateCurrent = new Date(item.created);
        return Date.now() - dateCurrent <= threeDays;
      });
      listFiltered = listFiltered.sort(function(a, b) {
        return b.created - a.created;
      });
      break;
    case 'reviews-good':
      listFiltered = list.filter(function(item) {
        return item.rating >= 3;
      });
      listFiltered = listFiltered.sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-bad':
      listFiltered = list.filter(function(item) {
        return item.rating < 3;
      });
      listFiltered = listFiltered.sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-popular':
      listFiltered = listFiltered.sort(function(a, b) {
        return b.review_usefulness - a.review_usefulness;
      });
      break;
  }
  return listFiltered;
};
