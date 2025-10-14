document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animasi hamburger menjadi 'X'
        hamburger.classList.toggle('toggle');
    });

    // --- Fade-in Animation on Scroll ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Simple Form Submission Handler (Hanya berjalan di halaman kontak) ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
            alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
            
            // Reset form setelah pengiriman
            contactForm.reset();
        });
    }

});

// Tambahan style untuk animasi hamburger
const style = document.createElement('style');
style.textContent = `
    .hamburger.toggle span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.toggle span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.toggle span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);