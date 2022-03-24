// Menu hamburger

let navbar = document.querySelector('#header #navbar');

let boutonMenu = document.getElementById('menu-btn');

boutonMenu.addEventListener('click', function(e) {
    navbar.classList.toggle('active');
})

// Change vidéo "apropos"

document.querySelectorAll('.apropos .apropos__video-container .apropos__controls .apropos__control-btn').forEach(btn =>{
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.apropos .apropos__video-container .apropos__video').src = src;
    }
})

