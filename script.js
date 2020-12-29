'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

showModalButtons.forEach(button =>
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);
