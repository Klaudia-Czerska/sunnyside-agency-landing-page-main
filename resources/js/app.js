const mobileMenuButton = document.querySelector('.header__mobile-menu');
const mobileMenu = document.querySelector('.header__nav--mobile');


mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('hidden')
    }
})