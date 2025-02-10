window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('h1, h2, .contact-me-text, .contact-me-icon');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('scroll-animate');
        } else {
            element.classList.remove('scroll-animate');
        }
    });
});

document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) { // Ajuste cette valeur selon le moment où tu veux que la navbar apparaisse
        navbar.classList.add('navbar-visible');
    } else {
        navbar.classList.remove('navbar-visible');
    }
});

document.querySelector('.newsletter-button').addEventListener('click', function() {
    alert('Subscribed to the newsletter!');
});