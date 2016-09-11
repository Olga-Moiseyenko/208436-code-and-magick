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
  this.onCloseClick = this.onCloseClick.bind(this);
  this.onLeftClick = this.onLeftClick.bind(this);
  this.onRightClick = this.onRightClick.bind(this);
};

Gallery.prototype = {

  show: function(activePic) {
    this.overlayGallery.classList.remove('invisible');
    var self = this;
    this.setActivePicture(activePic, self);
    this.overlayClose.addEventListener('click', this.onCloseClick);
    this.overlayLeft.addEventListener('click', this.onLeftClick);
    this.overlayRight.addEventListener('click', this.onRightClick);

  },

  hide: function() {
    this.overlayGallery.classList.add('invisible');
  },

  setActivePicture: function(activePic) {

    this.activePicture = activePic;

    var galleryLength = galleryPreview.children.length;
    if (galleryLength > 1) {
      galleryPreview.removeChild(galleryPreview.lastChild);
    }
    var photoImage = document.createElement('img');
    photoImage.src = this.pictures[this.activePicture];
    galleryPreview.appendChild(photoImage);
    this.previewNumbCurrent.innerHTML = (this.activePicture + 1).toString();
  },

  onCloseClick: function() {
    this.hide();
  },

  onLeftClick: function() {
    if (this.activePicture > 0) {
      this.setActivePicture(this.activePicture - 1);
    }
  },

  onRightClick: function() {
    var lastImg = parseInt(previewNumbTotal.innerHTML, 10) - 1;
    if (this.activePicture < lastImg) {
      this.setActivePicture(this.activePicture + 1);
    }
  }
};

module.exports = Gallery;
