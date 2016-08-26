'use strict';

window.loadReviews = (function() {
  return function(url, callback) {
    var elem = document.createElement('script');
    elem.src = url;
    document.head.appendChild(elem);

    window.JSONPCallback = function(data) {
      window.reviews = data;
      callback(window.reviews);
    };
  };
})();
