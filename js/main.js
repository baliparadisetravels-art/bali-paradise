/* ==============================
   BALI PARADISE ADVENTURE GUIDE
   Main JavaScript
   ============================== */

document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Scroll reveal animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length <= 1) return;
            e.preventDefault();
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (err) { /* invalid selector, ignore */ }
        });
    });

    // Active nav link based on current page (not scroll - avoids false matches)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                const lightbox = document.createElement('div');
                lightbox.style.cssText = `
                    position: fixed; inset: 0; z-index: 9999;
                    background: rgba(0,0,0,0.95); display: flex;
                    align-items: center; justify-content: center;
                    cursor: pointer; padding: 40px;
                `;
                const lightboxImg = document.createElement('img');
                lightboxImg.src = img.src;
                lightboxImg.style.cssText = `
                    max-width: 90%; max-height: 90vh;
                    border-radius: 8px; object-fit: contain;
                `;
                lightbox.appendChild(lightboxImg);
                lightbox.addEventListener('click', () => lightbox.remove());
                document.addEventListener('keydown', function closeLB(e) {
                    if (e.key === 'Escape') {
                        lightbox.remove();
                        document.removeEventListener('keydown', closeLB);
                    }
                });
                document.body.appendChild(lightbox);
            }
        });
    });

    // Set minimum date on date inputs to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => input.setAttribute('min', today));
    }

    // Form submission (placeholder - sends to WhatsApp)
    const bookingForm = document.querySelector('#booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(bookingForm);
            const name = formData.get('name') || '';
            const tour = formData.get('tour') || '';
            const rawDate = formData.get('date') || '';
            const date = rawDate ? rawDate.split('-').reverse().join('/') : '';
            const guests = formData.get('guests') || '';
            const message = formData.get('message') || '';

            const whatsappMsg = encodeURIComponent(
                `Hi! I'd like to book a tour.\n\n` +
                `Name: ${name}\n` +
                `Tour: ${tour}\n` +
                `Date: ${date}\n` +
                `Guests: ${guests}\n` +
                `Message: ${message}`
            );

            window.open(`https://wa.me/6281999235447?text=${whatsappMsg}`, '_blank');
        });
    }

});
