const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')
const gullh = document.getElementById('besok_gullh')
const vandra = document.getElementById('vandra_pa_harm')
const upptack = document.getElementById('upptack')
const wrapper = document.getElementsByTagName('body')[0];
//Blev konstigt när de andra sidorna försökte hitta bilder som inte fanns, därför blev det ett eget js-dokument.  

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
    gullh.classList.toggle('gone')
    vandra.classList.toggle('gone')
    upptack.classList.toggle('gone')
    wrapper.classList.toggle('no_scroll')
}

burger.addEventListener('click', toggleMenu)
