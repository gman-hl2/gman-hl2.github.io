// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Parallax effect
    window.addEventListener('scroll', function () {
        const parallax = document.querySelector('.parallax');
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    });

    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
