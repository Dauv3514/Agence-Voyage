let navbar = document.querySelector('#header #navbar');

let boutonMenu = document.getElementById('menu-btn');

boutonMenu.addEventListener('click', function(e) {
    navbar.classList.toggle('active');
})

