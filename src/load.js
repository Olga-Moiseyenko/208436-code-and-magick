'use strict';

module.exports = (function(url, callback) {
  var elem = document.createElement('script');
  elem.src = url;
  document.head.appendChild(elem);
  var reviews = [];

  window.JSONPCallback = function(data) {
    reviews = data;
    callback(reviews);
  };
});
