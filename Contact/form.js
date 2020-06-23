// Get Modal-Popup Link

const contactNav = document.getElementById('contactNav');

//Get Close Button

const closeBtn = document.getElementById('closeBtn');

// Get Modal Container

const displayModal = document.getElementsByClassName('bg-modal')[0];

//Get Submit Button

const submitButton = document.getElementsByClassName('submit')[0];

//Functions

const openModal = () => {
  displayModal.style.display = 'flex';
};

const closeModal = () => {
  displayModal.style.display = 'none';
};

//Event Listeners

contactNav.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click',
  function outsideClick(e){
    if (e.target === displayModal) {
      displayModal.style.display = 'none';
    }
  });

  //Greeting Modal after message sents.
