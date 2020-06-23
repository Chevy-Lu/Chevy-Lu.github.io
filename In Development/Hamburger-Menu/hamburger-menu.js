// Hamburger-Menu

let toggleNavStatus = true;

let toggleNav = function() {
  let getHamburgerMenu = document.getElementById('hamburger-menu');
  let getNavBar = document.querySelector('.navBar');
  let getCloseNav = document.querySelector('.closeNav');

  if (toggleNavStatus === false) {
    getNavBar.style.right = '-310px';
    getHamburgerMenu.classList.remove('change');
    
    toggleNavStatus = true;

  }

  else if (toggleNavStatus === true) {
    getNavBar.style.right = '0px';
    getHamburgerMenu.classList.add('change');

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
      document.body.classList.remove('bg-modal');

      toggleNavStatus = true;
    }
  })
};

  let getHamburgerMenu = document.getElementById('hamburger-menu');

  getHamburgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('bg-modal');

  });






















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

