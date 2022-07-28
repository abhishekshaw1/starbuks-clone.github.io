const btn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("menu");

function navToggle () {

    btn.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    
}


btn.addEventListener('click', navToggle)