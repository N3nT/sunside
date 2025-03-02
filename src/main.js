const burger = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__mobileMenu')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__mobileMenu--active');
});