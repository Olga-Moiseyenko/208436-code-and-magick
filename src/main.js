'use strict';
var form = require('./form');
var Game = require('./game');
require('./reviews');
var Gallery = require('./gallery');

(function() {

  var game = new Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(Game.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    form.open(function() {
      game.setGameStatus(Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };

  var picturesAll = document.querySelectorAll('a.photogallery-image img');
  var pictures = [];
  var i = 0;
  while(i < picturesAll.length) {
    pictures.push(picturesAll.src);
    i++;
  }
  var gallery = new Gallery(pictures);

  var photoReference = document.querySelectorAll('a.photogallery-image');
  i = 0;
  while(i < photoReference.length) {
    photoReference[i].onclick = function() {
      console.log(pictures[i]);
      gallery.activePic = pictures[i];
      Gallery.show(Gallery.gallery);
    };
    i++;
  }

  form.onClose = function() {
    game.setDeactivated(false);
  };
})();
