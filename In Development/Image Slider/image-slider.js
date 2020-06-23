//alert('I am connected!');

let getImage = document.querySelector('.category-images');
let getContainer = document.querySelector('.container');
let getOverlay = document.querySelector('#overlay');
let getPrev = document.querySelector('.prev');
let getNext = document.querySelector('.next');
let sliderIsOpen = false;



getImage.addEventListener('click', function(e) {
  if(sliderIsOpen === false) {
    e.target.style.cssText = ('z-index: 20; height: 500px; width: auto; position: absolute;');
    getOverlay.style.cssText = ('display: flex;');
    getOverlay.classList.add('bg-overlay');
    getPrev.style.cssText = ('display: flex;');
    getNext.style.cssText = ('display: flex;');
  
  } 
});


window.addEventListener('click', function(e) {
  if(e.target != getImage) {
    getImage.style.cssText = ('height: 300px; width: 275px;');
    getOverlay.classList.remove('bg-overlay');
    getPrev.style.cssText = ('display: none;');
    getNext.style.cssText = ('display: none;');
  }
});

//getImage.addEventListener('click', function(e) {
  //if (e.target) {
  //  e.target.style.cssText = ('z-index: 20; height: 500px; width: auto;')
  //}
//})

