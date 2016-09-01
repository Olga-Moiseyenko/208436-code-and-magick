'use strict';

var overlayGallery = document.querySelector('.overlay-gallery');
var overlayLeft = document.querySelector('.overlay-gallery-control-left');
var overlayRight = document.querySelector('.overlay-gallery-control-right');
var previewNumbCurrent = document.querySelector('.preview-number-current');
var previewNumbTotal = document.querySelector('.preview-number-total');
var overlayClose = document.querySelector('.overlay-gallery-close');
var galleryPreview = document.querySelector('.overlay-gallery-preview');
var activePicture = 0;
previewNumbCurrent.innerHTML = activePicture.toString();

var Gallery = function(data) {
  this.pictures = data;
  this.activePicture = activePicture;
  this.overlayGallery = overlayGallery;
  this.overlayLeft = overlayLeft;
  this.overlayRight = overlayRight;
  this.previewNumbCurrent = previewNumbCurrent;
  this.previewNumbTotal = previewNumbTotal;
  this.overlayClose = overlayClose;
};

Gallery.prototype = {

  show: function(activePic) {
    var self = this;
    this.overlayClose.onclick = this.onCloseClick;
    this.overlayLeft.onclick = this.onLeftClick;
    this.overlayRight.onclick = this.onRightClick;
    this.overlayGallery.classList.remove('invisible');
    this.setActivePicture(activePic, self);

    this.overlayClose.onclick = function() {
      self.hide();
    };

    this.overlayLeft.onclick = function() {
      self.onLeftClick();
    };

    this.overlayRight.onclick = function() {
      self.onRightClick();
    };
  },

  hide: function() {
    this.overlayGallery.classList.add('invisible');
  },

  setActivePicture: function(activePic, self) {

    self.activePicture = activePic;

    var galleryLength = galleryPreview.children.length;
    if (galleryLength > 1) {
      galleryPreview.removeChild(galleryPreview.lastChild);
    }
    var photoImage = document.createElement('img');
    photoImage.src = self.pictures[self.activePicture];
    galleryPreview.appendChild(photoImage);
    self.previewNumbCurrent.innerHTML = (self.activePicture + 1).toString();
  },

  onLeftClick: function() {
    var self = this;
    if (this.activePicture > 0) {
      Gallery.prototype.setActivePicture(this.activePicture - 1, self);
    }
  },

  onRightClick: function() {
    var self = this;
    var lastImg = parseInt(previewNumbTotal.innerHTML, 10) - 1;
    if (this.activePicture < lastImg) {
      Gallery.prototype.setActivePicture(this.activePicture + 1, self);
    }
  }
};

module.exports = Gallery;
