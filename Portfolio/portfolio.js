

let projectAnimation = document.querySelectorAll(".info");

let anchor = document.querySelector(".anchor");
  
anchor.addEventListener('mouseover', function(){
  Array.from(projectAnimation).forEach(function(projectAnimation){
    projectAnimation.classList.remove('projects-animation-out');
  projectAnimation.className += " projects-animation-enter";
    });
  })

anchor.addEventListener('mouseout', function(){
  Array.from(projectAnimation).forEach(function(projectAnimation){
    projectAnimation.classList.remove('projects-animation-enter');
  projectAnimation.className += " projects-animation-out";
    });
  })
