import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Gallery Images (Imported from src/assets)
import gallery1 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.02 PM.jpeg';
import gallery2 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.04 PM.jpeg';
import gallery3 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.05 PM.jpeg';

const STAT_ITEMS = [
    { value: 96, suffix: '%', label: 'Placement Rate' },
    { value: 80, suffix: '%', label: 'Practical Classes' },
    { value: 96, suffix: '%', label: 'Result Oriented' },
    { value: 17, suffix: '+', label: 'Years of Service' }
];

const Home = () => {
    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner1.jpg`,
            title: "Excellence in Nursing Education",
            desc: "Training compassionate healthcare leaders for a better tomorrow.",
            cta: "Explore Our Vision",
            link: "/about"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner2.jpeg`,
            title: "Advanced Clinical Learning Spaces",
            desc: "Comprehensive clinical exposure and simulation-based learning guided by experienced mentors.",
            cta: "View Facilities",
            link: "/facilities"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner3.jpeg`,
            title: "Empowering Future Nurses",
            desc: "Comprehensive curriculum approved by INC and TNNMC Council.",
            cta: "Our Programs",
            link: "/bsc-nursing"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner4.jpeg`,
            title: "Admissions Open " + new Date().getFullYear(),
            desc: "Join the premier nursing college in Pudukkottai District.",
            cta: "Apply Now",
            link: "/apply-now"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner5.jpeg`,
            title: "Advanced Research Labs",
            desc: "Fostering innovation and scientific enquiry in healthcare.",
            cta: "Discover More",
            link: "/facilities"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner6.jpg`,
            title: "To Make Man Whole",
            desc: "Holistic development through quality education and discipline.",
            cta: "Contact Us",
            link: "/contact"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);

    // Lightbox State
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');
    const [displayStats, setDisplayStats] = useState(STAT_ITEMS.map(() => 0));
    const hasCountedRef = useRef(false);
    const statsSectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-skew, .reveal-blur, .reveal-flip, .reveal-up, .reveal-stagger');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let animationFrameId = null;
        const section = statsSectionRef.current;
        if (!section) return undefined;

        const runCounterAnimation = () => {
            if (hasCountedRef.current) return;
            hasCountedRef.current = true;
            const duration = 1600;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setDisplayStats(STAT_ITEMS.map((item) => Math.round(item.value * eased)));
                if (progress < 1) {
                    animationFrameId = window.requestAnimationFrame(tick);
                } else {
                    setDisplayStats(STAT_ITEMS.map((item) => item.value));
                }
            };

            animationFrameId = window.requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                runCounterAnimation();
                observer.unobserve(section);
            }
        }, { threshold: 0.2 });

        observer.observe(section);

        return () => {
            observer.disconnect();
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Gallery Images
    const galleryImages = [
        gallery1,
        gallery2,
        gallery3
    ];
    const previewGalleryImages = galleryImages;

    const openLightbox = (src) => {
        setLightboxImage(src);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="home-page">
            {/* Dynamic Slider Section */}
            <section className="slider-container" id="home">
                <div className="slider">
                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                            <img src={slide.img} alt={`Institutional Banner ${index + 1}`} />
                            <div className="slide-content">
                                <h1 className="reveal-skew">{slide.title}</h1>
                                <p style={{ color: 'white' }}>{slide.desc}</p>
                                {slide.cta && <Link to={slide.link} className="btn btn-primary magnetic home-hero-cta-btn" style={{ marginTop: '25px', padding: '12px 30px' }}>{slide.cta} &rarr;</Link>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Navigation */}
                <div className="slider-nav">
                    <button className="prev-slide" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button className="next-slide" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }} data-reveal-init ref={statsSectionRef}>
                <div className="stats-grid reveal-stagger">
                    {STAT_ITEMS.map((item, index) => (
                        <div key={item.label} className="stat-card stat-card-counter">
                            <h3>{displayStats[index]}{item.suffix}</h3>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Us Section */}
            <section className="section reveal-blur home-about-section" style={{ background: 'var(--bg-white)' }} data-reveal-init>
                <div className="container text-center">
                    <span className="estd-tag float-breathe" style={{ background: 'var(--accent)', color: 'var(--primary)', display: 'block', margin: '0 auto 35px', width: 'fit-content' }}>ESTD 2009</span>
                    <h2 style={{ fontSize: '3rem', color: 'var(--primary)', margin: '20px 0' }} className="reveal-skew">To Make Man Whole</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Mount Zion College of Nursing is a premier institution dedicated to nurturing future nursing
                        professionals with a focus on compassion, excellence, and spiritual integrity.
                    </p>
                    <Link to="/about" className="btn btn-primary magnetic home-primary-box-btn home-about-action-btn" style={{ padding: '15px 40px' }}>Explore Our Institution →</Link>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="section" style={{ background: 'var(--bg-light)', paddingTop: '62px', paddingBottom: '62px' }}>
                <div className="container">
                    <div className="grid grid-cols-2 sm-grid-cols-1 core-pillar-grid" data-reveal-init>
                        {/* Programs Card */}
                        <div className="core-pillar-card reveal-flip">
                            <div className="core-pillar-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="core-pillar-title">Nursing Programs</h3>
                            <p className="core-pillar-desc">
                                From B.Sc. to advanced leadership roles, our curriculum is designed to meet global healthcare standards and empower students.
                            </p>
                            <Link to="/bsc-nursing" className="core-pillar-link">View All Programs →</Link>
                        </div>
                        {/* Facilities Card */}
                        <div className="core-pillar-card reveal-flip">
                            <div className="core-pillar-icon">
                                <i className="fas fa-hospital"></i>
                            </div>
                            <h3 className="core-pillar-title">World-Class Infrastructure</h3>
                            <p className="core-pillar-desc">
                                Experience clinical training in our 500-bed multi-specialty hospital and state-of-the-art simulation laboratories.
                            </p>
                            <Link to="/facilities" className="core-pillar-link">Explore Facilities →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Navigation CTA */}
            <section className="section reveal-blur" style={{ padding: '80px 0', background: 'var(--bg-light)' }} data-reveal-init>
                <div className="container">
                    <div className="apply-card home-cta-card" style={{ padding: '86px 34px', borderRadius: '34px', maxWidth: '1460px', margin: '0 auto' }}>
                        <div className="text-center">
                            <span className="hero-tag-gold float-breathe">Join the {new Date().getFullYear()} Batch</span>
                            <h2 style={{ fontSize: '3.8rem', marginBottom: '25px', color: 'white', fontWeight: 800, textShadow: '0 4px 15px rgba(0,0,0,0.2)', fontFamily: "'Playfair Display', serif", letterSpacing: '-1px' }} className="reveal-skew">Empowering Excellence</h2>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600, maxWidth: '850px', margin: '0 auto 45px' }}>
                                Step into a rewarding career in healthcare with one of the most prestigious nursing institutions in Pudukkottai District.
                            </p>
                            <div className="home-cta-btn-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/apply-now" className="btn btn-outline home-cta-btn" style={{ padding: '15px 38px', fontSize: '0.94rem', fontWeight: 900, minWidth: '300px' }}>Apply For Admission</Link>
                                <Link to="/contact" className="btn btn-outline home-cta-btn" style={{ padding: '15px 38px', fontSize: '0.94rem', fontWeight: 900, minWidth: '300px' }}>Contact Office</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section" style={{ background: 'var(--bg-white)' }} id="gallery">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }} data-reveal-init className="reveal-zoom">
                        <span className="estd-tag float-breathe" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>GALLERY</span>
                        <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '15px' }}>Capturing Excellence</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '15px auto' }}>
                            Highlights from the 17th Induction Program, clinical training, and student life at Mount Zion.
                        </p>
                    </div>

                    <div className="gallery-grid reveal-stagger home-gallery-grid">
                        {previewGalleryImages.map((src, index) => (
                            <div key={index} className="gallery-item" onClick={() => openLightbox(src)}>
                                <img src={src} alt={`MZCN Gallery ${index + 1}`} />
                                <div className="gallery-overlay"><i className="fas fa-search-plus"></i></div>
                            </div>
                        ))}
                    </div>
                    <div className="home-gallery-cta-row">
                        <Link to="/gallery" className="home-gallery-cta-link">
                            <span className="home-gallery-cta-btn">View Full Gallery →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div id="galleryLightbox" className="lightbox" style={{ display: 'flex' }} onClick={closeLightbox}>
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <img className="lightbox-content" src={lightboxImage} alt="Gallery Preview" onClick={(e) => e.stopPropagation()} />
                </div>
            )}



        </div>
    );
};

export default Home;
