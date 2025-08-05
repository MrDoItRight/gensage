document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        mobileNavToggle.classList.toggle('is-active');
    });
});