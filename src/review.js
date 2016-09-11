'use strict';

var getReviewElement = require('./get-review-element');

var Review = function(data) {
  this.data = data;
  this.element = getReviewElement(data);
  this.quizAnswerYes = this.element.querySelector('.review-quiz-answer-yes');
  this.quizAnswerNo = this.element.querySelector('.review-quiz-answer-no');
  this.onReviewYesClick = this.onReviewYesClick.bind(this);
  this.quizAnswerYes.addEventListener('click', this.onReviewYesClick);
  this.onReviewNoClick = this.onReviewNoClick.bind(this);
  this.quizAnswerNo.addEventListener('click', this.onReviewNoClick);
};

Review.prototype = {
  onReviewYesClick: function() {
    this.quizAnswerNo.classList.remove('review-quiz-answer-active');
    this.quizAnswerYes.classList.add('review-quiz-answer-active');
  },
  onReviewNoClick: function() {
    this.quizAnswerYes.classList.remove('review-quiz-answer-active');
    this.quizAnswerNo.classList.add('review-quiz-answer-active');
  },
  remove: function() {
    this.quizAnswerYes.onclick = null;
    this.quizAnswerNo.onclick = null;
  }
};

module.exports = Review;
