'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const removeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalButtons.forEach(button =>
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

closeModalButton.addEventListener('click', () => {
  removeModal();
});

overlay.addEventListener('click', () => {
  removeModal();
});
