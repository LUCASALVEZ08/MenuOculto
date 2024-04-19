let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const active = document.querySelector(".active");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    active.style.display = "none";
  } else {
    navbar.style.top = "-80px"; 
    active.style.display = "block";
  }
  prevScrollpos = currentScrollPos;
}
