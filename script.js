// script.js

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        alert('All fields must be filled out.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// WhatsApp Integration
function sendWhatsAppMessage() {
    const budgetDetails = 'Here are the budget details...'; // Replace with actual budget details
    const phoneNumber = 'your_phone_number'; // Replace with your WhatsApp number
    const message = encodeURIComponent(budgetDetails);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for Fade-In Effects
const fadeIns = document.querySelectorAll('.fade-in');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeIns.forEach(element => {
    observer.observe(element);
});

