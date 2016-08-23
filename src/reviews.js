'use strict';

var loadReviews = function(url, callback) {
  var elem = document.createElement('script');
  elem.src = url;
  document.head.appendChild(elem);
  var reviews = [];
  window.JSONPCallback = function(data) {
    console.log('2');
    reviews = data;
    console.log(reviews);
  };
  if (typeof callback === 'function') {
    callback(reviews);
  }
};

loadReviews('http://localhost:1506/api/reviews?callback=<JSONPCallback>', function(reviews) {
  return reviews;
});
