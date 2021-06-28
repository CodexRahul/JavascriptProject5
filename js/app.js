var menu = document.getElementById('menu');
var hamburger = document.getElementById('hamburger');

document.addEventListener('click',()=>{
    menu.classList.toggle('open');
    hamburger.classList.toggle('close');
})