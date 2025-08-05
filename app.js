document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        mobileNavToggle.classList.toggle('is-active');
    });
    // --- SCROLL ANIMATION LOGIC ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    document.querySelectorAll('.pillar, .project-card, .testimonial-card, .about-hero > div, .story-section > *, .mission-section > *').forEach(el => {
        observer.observe(el);
    });
});