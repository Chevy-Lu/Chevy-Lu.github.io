//alert('hello world');

// Hamburger-Menu
let getLargeNav = document.querySelector('.nav-bar')
let toggleNavStatus = true;

let toggleNav = function() {
  let getHamburgerMenu = document.getElementById('hamburger-menu');
  let getNavBar = document.querySelector('.navBar');
  let getCloseNav = document.querySelector('.closeNav');

  if (toggleNavStatus === false) {
    getNavBar.style.right = '-310px';
    getHamburgerMenu.classList.remove('change');
    getLargeNav.classList.remove('bg-modal');
   
    toggleNavStatus = true;

  }

  else if (toggleNavStatus === true) {
    getNavBar.style.right = '0px';
    getHamburgerMenu.classList.add('change');
    getLargeNav.classList.add('bg-modal');
    
    toggleNavStatus = false;
    
  }

};

let outsideClick = function () {

  let getHamburgerMenu = document.getElementById('hamburger-menu');
  let getNavBar = document.querySelector('.navBar');
  
  document.addEventListener('click', function(e){
    if(e.target != getHamburgerMenu && e.target != getNavBar){
      getNavBar.style.right = '-310px';
      getHamburgerMenu.classList.remove('change');
      getLargeNav.classList.remove('bg-modal');
      
      toggleNavStatus = true;
    }
  })
};






















/*getHamburgerMenu.addEventListener('click', function(){
    getNavBar.style.display = 'flex';
    if(getNavBar.style.display === 'flex') {
        getCloseNav.style.display = 'flex';
      } else {getCloseNav.style.display = 'none'};

  });


window.addEventListener('click', function(e){
    if(e.target != getHamburgerMenu && e.target != getNavBar){
      getNavBar.style.display = 'none';
    }
  });

window.addEventListener('click', function(e){
    if(e.target != getHamburgerMenu && e.target != getNavBar){
      getCloseNav.style.display = 'none';

    }
  });

getCloseNav.addEventListener('click', () => {
    getCloseNav.style.display = 'none';

  });*/

