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

  var picturesAll = document.querySelectorAll('a.photogallery-image');
  var pictures = [];
  Array.prototype.slice.call(picturesAll).forEach(function(item) {
    pictures.push(item.firstChild.src);
  });

  var gallery = new Gallery(pictures);
  var i = 0;

  while(i < picturesAll.length) {
    picturesAll[i].onclick = function(e) {
      e.preventDefault();
      var cuurentPic = pictures.indexOf(this.firstChild.src);
      if (cuurentPic < 5) {
        gallery.show(cuurentPic);
      }
    };
    i++;
  }

  form.onClose = function() {
    game.setDeactivated(false);
  };
})();
