const hamburger = document.querySelector('.hamburger')

const navbar = document.querySelector('.navbar-menu')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('display')

})