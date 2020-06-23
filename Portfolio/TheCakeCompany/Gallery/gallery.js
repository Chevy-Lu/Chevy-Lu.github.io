///// Hamburger-Menu //////

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

//////// Gallery ////////

