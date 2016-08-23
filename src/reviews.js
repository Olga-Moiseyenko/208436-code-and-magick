'use strict';

var loadReviews = function(url, callback) {
  var elem = document.createElement('script');
  elem.src = url + '?callback=' + callback;
  document.head.appendChild(elem);

  window.JSONPCallback = function(data) {
    window.reviews = data;
  };
};

loadReviews('http://localhost:1506/api/reviews', 'JSONPCallback');
