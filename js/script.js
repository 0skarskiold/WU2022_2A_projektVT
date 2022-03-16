const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')
const linje = document.getElementById('linje')


function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
    linje.classList.toggle('gone') 
}

burger.addEventListener('click', toggleMenu)