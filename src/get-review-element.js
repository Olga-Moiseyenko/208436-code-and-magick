'use strict';

window.getReviewElement = (function() {
  var templateElement = document.querySelector('template');
  var elementToClone;

  if ('content' in templateElement) {
    elementToClone = templateElement.content.querySelector('.review');
  } else {
    elementToClone = templateElement.querySelector('.review');
  }
  return function(data, list) {
    var element = elementToClone.cloneNode(true);
    element.querySelector('.review-rating').textContent = data.rating;
    element.querySelector('.review-text').textContent = data.description;
    element.querySelector('.review-quiz').textContent = data.review_usefulness;
    list.appendChild(element);

    var photoImage = new Image(124, 124);

    photoImage.onload = function(evt) {
      element.querySelector('.review-author').src = evt.target.src;
      element.querySelector('.review-author').alt = evt.target.alt;
    };

    photoImage.onerror = function() {
      element.classList.add('review-load-failure');
    };

    photoImage.src = data.author.picture;
    photoImage.alt = data.author.name;
    return element;
  };
})();
