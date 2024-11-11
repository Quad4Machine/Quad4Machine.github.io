document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
});