const burger = document.querySelector('.nav_burger');
const overlay = document.querySelector('.overlay');
const closeWIndow = document.querySelector('.overlay_close-btn');

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