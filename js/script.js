const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')
const wrapper = document.getElementsByTagName('body')[0];


function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
    wrapper.classList.toggle('no_scroll')
}

burger.addEventListener('click', toggleMenu)


// Denna kod är hämtad från internet. Den gör så att bildspelet fungerar. 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}