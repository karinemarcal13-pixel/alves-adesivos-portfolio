// script.js

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    return true;
}

// WhatsApp Integration
function sendWhatsAppMessage(details) {
    const phoneNumber = '5543984046323';
    const message = encodeURIComponent(details);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for Fade-In Effects
const fadeIns = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeIns.forEach(element => {
    observer.observe(element);
});
