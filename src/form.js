'use strict';


var reviewName = document.querySelector('#review-name');
var reviewText = document.querySelector('#review-text');
var reviewSubmit = document.querySelector('.review-submit');
var reviewFieldsText = document.querySelector('.review-fields-text');
var reviewFieldsName = document.querySelector('.review-fields-name');
reviewName.required = true;
var mark1 = document.querySelector('#review-mark-1');
var mark2 = document.querySelector('#review-mark-2');
var mark3 = document.querySelector('#review-mark-3');
var mark4 = document.querySelector('#review-mark-4');
var mark5 = document.querySelector('#review-mark-5');
reviewSubmit.disabled = true;
reviewFieldsText.classList.add('invisible');

// функция, которая будет вызываться при всех изменениях оценок, имени и отзыва, и менять активность кнопки и видимость review fields
var checkReviewField = function(reviewNameIn, reviewTextIn) {
  if(((reviewNameIn.value !== '') && (reviewTextIn.value !== '') && (reviewTextIn.required === true)) || ((reviewNameIn.value !== '') && (reviewTextIn.required === false))) {
    document.querySelector('.review-fields').classList.add('invisible');
    reviewSubmit.disabled = false;
  } else {
    if(((reviewTextIn.value !== '') && (reviewTextIn.required === true)) || (reviewTextIn.required === false)) {
      reviewFieldsText.classList.add('invisible');
    } else {
      reviewFieldsText.classList.remove('invisible');
    }
    document.querySelector('.review-fields').classList.remove('invisible');
    reviewSubmit.disabled = true;
  }
};

mark1.onclick = function() {
  reviewText.required = true;
  checkReviewField(reviewName, reviewText);
};

mark2.onclick = function() {
  reviewText.required = true;
  checkReviewField(reviewName, reviewText);
};

mark3.onclick = function() {
  reviewText.required = false;
  checkReviewField(reviewName, reviewText);
};

mark4.onclick = function() {
  reviewText.required = false;
  checkReviewField(reviewName, reviewText);
};

mark5.onclick = function() {
  reviewText.required = false;
  checkReviewField(reviewName, reviewText);
};

reviewName.oninput = function() {
  if(reviewName.value !== '') {
    reviewFieldsName.classList.add('invisible');
  } else {
    reviewFieldsName.classList.remove('invisible');
  }
  checkReviewField(reviewName, reviewText);
};

reviewText.oninput = function() {
  if((reviewText.value !== '') && (reviewText.required === true)) {
    reviewFieldsText.classList.add('invisible');
    checkReviewField(reviewName, reviewText);
  } else {
    reviewFieldsText.classList.remove('invisible');
    checkReviewField(reviewName, reviewText);
  }
};

window.form = (function() {

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
