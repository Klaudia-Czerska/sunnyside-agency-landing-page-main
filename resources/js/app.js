const mobileMenuButton = document.querySelector('.header__mobile-menu');
const mobileMenu = document.querySelector('.header__nav--mobile');
const menu = document.querySelector('.header__nav');


mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('hidden')
    }
})

window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 700) {
        if (!mobileMenuButton.classList.contains('hidden')) {
            mobileMenuButton.classList.add('hidden');
        }

        if (menu.classList.contains('header__nav--mobile')) {
            menu.classList.remove('header__nav--mobile');
            menu.classList.remove('hidden');

        }
    } else {
        if (mobileMenuButton.classList.contains('hidden')) {
            mobileMenuButton.classList.remove('hidden');
        }

        if (!menu.classList.contains('header__nav--mobile')) {
            menu.classList.add('header__nav--mobile');
            menu.classList.add('hidden');
        }
    }
});
