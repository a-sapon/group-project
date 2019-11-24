"use strict";

var burger = document.querySelector('.nav_burger');
var overlay = document.querySelector('.overlay');
var closeWIndow = document.querySelector('.overlay_close-btn');
burger.addEventListener('click', openOverlay);

function openOverlay(e) {
  if (e.target.classList.contains('nav_burger')) {
    overlay.classList.remove('overlay-hidden');
  }
}

closeWIndow.addEventListener('click', closeOverlay);

function closeOverlay(e) {
  if (e.target.classList.contains('overlay_close-btn')) {
    overlay.classList.add('overlay-hidden');
  }
}
"use strict";