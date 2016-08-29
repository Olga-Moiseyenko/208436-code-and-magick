'use strict';
var browserCookies = require('browser-cookies');

var reviewName = document.querySelector('#review-name');
reviewName.value = browserCookies.get('review-name');
var reviewText = document.querySelector('#review-text');
var reviewSubmit = document.querySelector('.review-submit');
var reviewFieldsText = document.querySelector('.review-fields-text');
var reviewFieldsName = document.querySelector('.review-fields-name');
var reviewFields = document.querySelector('.review-fields');
var reviewForm = document.querySelector('.review-form');

var stars = document.querySelectorAll('input[name="review-mark"]');
var star = parseInt(document.querySelector('input[name="review-mark"]:checked').value, 10);
star = parseInt(browserCookies.get('review-mark'), 10) || 3;
document.querySelector('#review-mark-' + star).checked = true;

var bDay = new Date('1906-12-09');
var now = new Date();

var daysAfterBday = function() {
  var year = now.getFullYear();
  var day = bDay.getDate();
  var month = bDay.getMonth() + 1;
  var bDayStr = year + '-' + month + '-' + day;
  var bDayLast = new Date(bDayStr);
  if (bDayLast > now) {
    year = year - 1;
    bDayStr = year + '-' + month + '-' + day;
    bDayLast = new Date(bDayStr);
  }
  var daysDifference = Math.floor((now - bDayLast) / (1000 * 60 * 60 * 24));
  return daysDifference;
};

reviewForm.onsubmit = function() {
  browserCookies.set('review-mark', star.toString(), {expires: daysAfterBday()});
  browserCookies.set('review-name', reviewName.value, {expires: daysAfterBday()});
};

var checkReviewField = function() {

  var textIsNeed = false;

  if(star < 3) {
    textIsNeed = true;
  }

  if(!reviewName.value) {
    return true;
  } else if ( textIsNeed && !reviewText.value ) {
    return true;
  }

  return false;
};

var hideReviewFields = function(isShow) {
  if(reviewName.value !== '') {
    reviewFieldsName.classList.add('invisible');
  } else {
    reviewFieldsName.classList.remove('invisible');
  }

  if( (reviewText.value !== '' && star < 3) || star >= 3) {
    reviewFieldsText.classList.add('invisible');
  } else {
    reviewFieldsText.classList.remove('invisible');
  }

  if( !isShow ) {
    reviewFields.classList.add('invisible');
  } else {
    reviewFields.classList.remove('invisible');
  }
};

var fieldsStatus = checkReviewField();
reviewSubmit.disabled = fieldsStatus;
hideReviewFields(fieldsStatus);

for(var i = 0; i < stars.length; i++ ) {
  stars[i].onchange = function() {

    star = parseInt(document.querySelector('input[name="review-mark"]:checked').value, 10);
    var statusButton = checkReviewField();

    hideReviewFields(statusButton);
    reviewSubmit.disabled = statusButton;
  };
}

reviewName.oninput = function() {
  var statusButton = checkReviewField();

  hideReviewFields(statusButton);
  reviewSubmit.disabled = statusButton;
};

reviewText.oninput = function() {
  var statusButton = checkReviewField();

  hideReviewFields(statusButton);
  reviewSubmit.disabled = statusButton;
};

module.exports = (function() {

  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');
  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      cb();
    },

    close: function() {
      formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  };


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  return form;
})();
