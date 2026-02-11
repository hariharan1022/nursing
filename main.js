// Navigation Scroll Effect
const nav = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const mobileToggle = document.querySelector('.mobile-nav-toggle');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links > li > a').forEach(link => {
        link.addEventListener('click', (e) => {
            const dropdown = link.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown') && window.innerWidth <= 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active-mobile');
            } else {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// Smooth scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Modal Functionality
const modal = document.getElementById('applyModal');
const closeBtn = document.querySelector('.close-modal');
const applyBtns = document.querySelectorAll('a[href="#admissions"].btn-primary, .nav-actions .btn-primary');

if (modal) {
    applyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Form Feedback Handling via AJAX
const formIds = ['modalForm', 'generalFeedbackForm', 'staffStudentFeedbackForm', 'courseFeedbackForm', 'hostelFeedbackForm'];
formIds.forEach(id => {
    const form = document.getElementById(id);
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn ? btn.innerText : 'Submit';

            if (btn) {
                btn.innerText = 'Sending...';
                btn.disabled = true;
            }

            try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const message = id.includes('Feedback') ?
                        'Thank you! Your feedback has been sent to hariharanmahesh34@gmail.com. We appreciate your input.' :
                        'Thank you! Your application has been submitted successfully.';
                    alert(message);
                    form.reset();
                    if (id === 'modalForm' && modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Oops! There was a problem submitting your form. Please try again or contact us directly.');
            } finally {
                if (btn) {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }
            }
        });
    }
});

// Curriculum / Feedback Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.semester-panel');

const switchTab = (target) => {
    tabBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-target') === target);
    });
    panels.forEach(p => {
        p.classList.toggle('active', p.id === target);
    });
};

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        switchTab(target);
    });
});

// Check for tab parameter in URL
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab) {
        switchTab(tab);
        // Scroll to feedback section if on feedback page
        const feedbackTabs = document.querySelector('.feedback-tabs');
        if (feedbackTabs) {
            window.scrollTo({
                top: feedbackTabs.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }
});

// Slider Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    if (!slides.length) return;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

if (slides.length > 0) {
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideInterval();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlideInterval();
        });
    });

    startSlideInterval();
}

// Scroll Reveal Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.stat-card, .feature-card, .about-text, .about-img, .form-container, .contact-info');
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Top Search Functionality
const topSearchInput = document.getElementById('topSearch');
const topSearchBtn = topSearchInput?.parentElement.querySelector('button');

if (topSearchInput && topSearchBtn) {
    const handleSearch = () => {
        const query = topSearchInput.value.trim().toLowerCase();
        if (query) {
            const pages = {
                'home': 'index.html',
                'about': 'about.html',
                'program': 'bsc-nursing.html',
                'course': 'bsc-nursing.html',
                'facility': 'facilities.html',
                'lab': 'facilities.html',
                'library': 'facilities.html',
                'faculty': 'faculty.html',
                'professor': 'faculty.html',
                'teacher': 'faculty.html',
                'club': 'clubs-and-cells.html',
                'cell': 'clubs-and-cells.html',
                'committee': 'clubs-and-cells.html',
                'info': 'info-corner.html',
                'news': 'info-corner.html',
                'update': 'info-corner.html',
                'admission': 'admissions.html',
                'apply': 'admissions.html',
                'contact': 'contact.html',
                'reach': 'contact.html',
                'location': 'contact.html',
                'feedback': 'feedback.html',
                'staff': 'feedback.html',
                'student': 'feedback.html',
                'hostel': 'feedback.html'
            };

            let found = false;
            // Check for exact matches or keywords
            for (const key in pages) {
                if (query.includes(key)) {
                    window.location.href = pages[key];
                    found = true;
                    break;
                }
            }

            if (!found) {
                // If no specific page found, alert or show a general message
                alert(`Redirecting to our main sections for: ${query}`);
                window.location.href = 'index.html#courses';
            }
        }
    };

    topSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSearch();
    });

    topSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    });
}

// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('galleryLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');
const prevBtnL = document.querySelector('.lightbox-prev');
const nextBtnL = document.querySelector('.lightbox-next');

let galleryIndex = 0;
const allGalleryImages = [
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.12.54 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.12.57 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.02 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.07 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.10 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.12 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.13 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.14 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.15 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.16 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.17 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (3).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (3).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM.jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM (1).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM (2).jpeg",
    "photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM.jpeg"
];

if (lightbox && lightboxImg) {
    const updateLightboxImg = (index) => {
        galleryIndex = (index + allGalleryImages.length) % allGalleryImages.length;
        lightboxImg.src = allGalleryImages[galleryIndex];
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            // If the item is inside a link (like on Home page), let the link handle it
            if (item.closest('a')) return;

            updateLightboxImg(index);
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (prevBtnL) prevBtnL.addEventListener('click', (e) => { e.stopPropagation(); updateLightboxImg(galleryIndex - 1); });
    if (nextBtnL) nextBtnL.addEventListener('click', (e) => { e.stopPropagation(); updateLightboxImg(galleryIndex + 1); });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') updateLightboxImg(galleryIndex - 1);
            if (e.key === 'ArrowRight') updateLightboxImg(galleryIndex + 1);
        }
    });
}

// Scroll Reveal Animation Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
});
