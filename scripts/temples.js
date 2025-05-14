const navButton = document.querySelector('.navigate');
const navMenu = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});


const navLinks = document.querySelectorAll('nav a');
const currentURL = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('wayfind');
    }
});