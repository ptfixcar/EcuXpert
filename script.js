document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelector('.nav-links ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        
        if (navLinks.classList.contains('active')) {
            navLinksList.querySelector('a').focus();
        }
    });

    // --- Smooth Scrolling untuk Navigasi Antar Halaman ---
    const navLinkItems = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinkItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        });
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

    // --- Simple Form Submission Handler ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    // --- Aksesibilitas: Tutup menu dengan tombol Escape ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            hamburger.focus();
        }
    });

});
