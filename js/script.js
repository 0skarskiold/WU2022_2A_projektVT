const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')
const gullh = document.getElementById('besok_gullh')
const vandra = document.getElementById('vandra_pa_harm')
const upptack = document.getElementById('upptack')


function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
    gullh.classList.toggle('gone')
    vandra.classList.toggle('gone')
    upptack.classList.toggle('gone')
}

burger.addEventListener('click', toggleMenu)