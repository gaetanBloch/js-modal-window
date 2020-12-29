'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalButtons.forEach(button => button.addEventListener('click', openModal));

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
