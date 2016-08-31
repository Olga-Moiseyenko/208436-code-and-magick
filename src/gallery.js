'use strict';

var overlayGallery = document.querySelector('.overlay-gallery');
var overlayLeft = document.querySelector('.overlay-gallery-control-left');
var overlayRight = document.querySelector('.overlay-gallery-control-right');
var previewNumbCurrent = document.querySelector('.preview-number-current');
var previewNumbTotal = document.querySelector('.preview-number-total');
var overlayClose = document.querySelector('.overlay-gallery-close');
var galleryPreview = document.querySelector('.overlay-gallery-preview');
var activePicture = 0;

var Gallery = function(data) {
  this.pictures = data;
  this.activePicture = activePicture;
  this.overlayGallery = overlayGallery;
  this.overlayLeft = overlayLeft;
  this.overlayRight = overlayRight;
  this.previewNumbCurrent = previewNumbCurrent;
  this.previewNumbTotal = previewNumbTotal;
  this.overlayClose = overlayClose;
  var self = this;
  this.overlayClose.onclick = function() {
    self.onCloseClick();
  };
  this.overlayLeft.onclick = function() {
    self.onLeftClick();
  };
  this.overlayRight.onclick = function() {
    self.onRightClick();
  };
};

Gallery.prototype = {
  hide: function() {
    console.dir(this);
    overlayGallery.classList.add('invisible');
  },
  onCloseClick: function() {
    Gallery.prototype.hide();
  },

  show: function(activePic) {
    this.overlayClose.onclick = this.onCloseClick;
    this.overlayLeft.onclick = this.onLeftClick;
    this.overlayRight.onclick = this.onRightClick;
    this.overlayGallery.classList.remove('invisible');
    this.setActivePicture(activePic);
  },

  setActivePicture: function(activePic) {
    this.activePicture = activePic;
    var photoImage = document.createElement('img');
    photoImage.src = this.pictures[this.activePicture];

    galleryPreview.appendChild(photoImage);
    this.previewNumbCurrent.value = this.activePicture + 1;
  },

  onLeftClick: function() {
    Gallery.prototype.setActivePicture(this.previewNumbCurrent.value - 1);
  },

  onRightClick: function() {
    console.dir(self);
    console.log(this.previewNumbCurrent.value - 1);
    Gallery.prototype.setActivePicture(this.previewNumbCurrent.value - 1);
  }

};

module.exports = Gallery;
