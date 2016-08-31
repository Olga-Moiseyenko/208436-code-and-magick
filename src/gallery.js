'use strict';

var photogallery = document.querySelector('.photogallery');
var overlayGallery = document.querySelector('.overlay-gallery');
var overlayLeft = document.querySelector('.overlay-gallery-control-left');
var overlayRight = document.querySelector('.overlay-gallery-control-right');
var previewNumbCurrent = document.querySelector('.preview-number-current');
var previewNumbTotal = document.querySelector('.preview-number-total');
var overlayClose = document.querySelector('.overlay-gallery-close');
var galleryPreview = document.querySelector('.overlay-gallery-preview');
var activePicture = 0;
var pictures = [];

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

Gallery.prototype.hide = function() {
  photogallery.classList.add('invisible');
};

Gallery.prototype.onCloseClick = function() {
  Gallery.prototype.hide();
};

Gallery.prototype.setActivePicture = function(activePic) {
  activePicture = activePic;
  var photoImage = new Image();
  photoImage.src = pictures[activePicture];
  galleryPreview.appendChild = photoImage;
  previewNumbCurrent = activePicture + 1;
};

Gallery.prototype.onLeftClick = function() {
  Gallery.prototype.setActivePicture(previewNumbCurrent - 1);
};

Gallery.prototype.onRightClick = function() {
  Gallery.prototype.setActivePicture(previewNumbCurrent + 1);
};

Gallery.prototype.show = function(activePic) {
  overlayClose.onclick = Gallery.prototype.onCloseClick;
  photogallery.classList.remove('invisible');
  Gallery.prototype.setActivePicture(activePic);
};

module.exports = Gallery;
