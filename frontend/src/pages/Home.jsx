import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Gallery Images (Imported from src/assets)
import gallery1 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.02 PM.jpeg';
import gallery2 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.04 PM.jpeg';
import gallery3 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.05 PM.jpeg';
import gallery4 from '../assets/gallery/2026/17th Lamp Lighting Ceremony 2026/WhatsApp Image 2026-02-15 at 6.03.06 PM.jpeg';

const Home = () => {
    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner1.jpg`,
            estd: true,
            title: "Excellence in Nursing Education",
            desc: "Training compassionate healthcare leaders for a better tomorrow.",
            cta: "Explore Our Vision",
            link: "/about"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner2.jpg`,
            title: "State-of-the-art Clinical Facilities",
            desc: "Real-world training in our 500-bed multi-speciality hospital.",
            cta: "View Facilities",
            link: "/facilities"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner3.jpg`,
            title: "Empowering Future Nurses",
            desc: "Comprehensive curriculum approved by INC and TNNMC Council.",
            cta: "Our Programs",
            link: "/bsc-nursing"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner4.jpg`,
            title: "Admissions Open 2026",
            desc: "Join the premier nursing college in Pudukkottai District.",
            cta: "Apply Now",
            link: "/admissions"
        },
        {
            img: `${import.meta.env.BASE_URL}photo/p5_files/banner5.jpg`,
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
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // 3D Tilt Effect Logic
    useEffect(() => {
        const cards = document.querySelectorAll('.interactive-card');

        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            const rotateX = ((y - midY) / midY) * 10; // Max rotation 10deg
            const rotateY = ((midX - x) / midX) * 10;

            // Apply transform with no transition for instant feel during move
            card.style.transition = 'none';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            // Re-enable smooth transition for reset
            card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);

    // Lightbox State
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal, .reveal-stagger');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Gallery Images
    const galleryImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4
    ];

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
                                {slide.estd && <span className="estd-tag">ESTD 2009</span>}
                                <h1>{slide.title}</h1>
                                <p>{slide.desc}</p>
                                {slide.cta && <Link to={slide.link} className="btn btn-primary magnetic" style={{ marginTop: '25px', padding: '12px 30px' }}>{slide.cta} &rarr;</Link>}
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
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="stats-grid reveal-stagger">
                    <div className="stat-card interactive-card">
                        <h3>100%</h3>
                        <p>Placement Rate</p>
                    </div>
                    <div className="stat-card interactive-card">
                        <h3>80%</h3>
                        <p>Practical Classes</p>
                    </div>
                    <div className="stat-card interactive-card">
                        <h3>100%</h3>
                        <p>Result Oriented</p>
                    </div>
                    <div className="stat-card interactive-card">
                        <h3>17+</h3>
                        <p>Years of Service</p>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <section className="section reveal" style={{ background: 'white' }}>
                <div className="container text-center">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>ESTD 2009</span>
                    <h2 style={{ fontSize: '3rem', color: 'var(--primary)', margin: '20px 0' }}>To Make Man Whole</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Mount Zion College of Nursing is a premier institution dedicated to nurturing future nursing
                        professionals with a focus on compassion, excellence, and spiritual integrity.
                    </p>
                    <Link to="/about" className="btn btn-primary magnetic" style={{ padding: '15px 40px' }}>Explore Our Institution →</Link>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="section reveal" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="grid grid-cols-2 sm-grid-cols-1" style={{ gap: '40px' }}>
                        {/* Programs Card */}
                        <div className="stat-card interactive-card reveal" style={{ textAlign: 'left', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', marginBottom: '25px' }}>
                                <i className="fas fa-graduation-cap" style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Nursing Programs</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: 1.6 }}>
                                From B.Sc. to advanced leadership roles, our curriculum is designed to meet global healthcare standards and empower students.
                            </p>
                            <Link to="/bsc-nursing" className="magnetic" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', display: 'inline-block' }}>View All Programs →</Link>
                        </div>
                        {/* Facilities Card */}
                        <div className="stat-card interactive-card reveal" style={{ textAlign: 'left', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ width: '60px', height: '60px', background: 'var(--accent)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', marginBottom: '25px' }}>
                                <i className="fas fa-hospital" style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>World-Class Infrastructure</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: 1.6 }}>
                                Experience clinical training in our 500-bed multi-specialty hospital and state-of-the-art simulation laboratories.
                            </p>
                            <Link to="/facilities" className="magnetic" style={{ fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', display: 'inline-block' }}>Explore Facilities →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section" style={{ background: 'white' }} id="gallery">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>GALLERY</span>
                        <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '15px' }}>Capturing Excellence</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '15px auto' }}>
                            A glimpse into the clinical training, academic events, and student life at Mount Zion.
                        </p>
                    </div>

                    <div className="gallery-grid reveal-stagger">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="gallery-item" onClick={() => openLightbox(src)}>
                                <img src={src} alt={`MZCN Gallery ${index + 1}`} />
                                <div className="gallery-overlay"><i className="fas fa-search-plus"></i></div>
                            </div>
                        ))}

                        <Link to="/gallery" className="gallery-item-link" style={{ textDecoration: 'none' }}>
                            <div className="gallery-item" style={{ position: 'relative' }}>
                                <img src={gallery4} alt="MZCN Gallery 4" />
                                <div className="gallery-overlay" style={{ opacity: 1, background: 'rgba(0, 43, 91, 0.8)' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <i className="fas fa-images" style={{ display: 'block', marginBottom: '15px', fontSize: '2.2rem', color: 'var(--accent)' }}></i>
                                        <span style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>View Full Gallery</span>
                                    </div>
                                </div>
                            </div>
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

            {/* Global Navigation CTA */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Join the 2026 Batch</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
                        Step into a rewarding career in healthcare with one of the most prestigious nursing institutions in Pudukkottai District.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contact Office</Link>
                    </div>
                </div>
            </section>

            {/* Quick Links Summary - Before Footer */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3 sm-grid-cols-1" style={{ gap: '40px' }}>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Institution Profile</Link></li>
                                <li><Link to="/faculty" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Faculty Directory</Link></li>
                                <li><Link to="/admissions" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Degree Requirements</Link></li>
                                <li><Link to="/facilities#clinical" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Clinical Affiliations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Affiliations</h4>
                            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                                <li><a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>INC</a></li>
                                <li><a href="https://tamilnadunursingcouncil.com/#/home" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>TNNMC</a></li>
                                <li><a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>The Tamil Nadu Dr. M.G.R. Medical University</a></li>
                                <li><a href="https://tnhealth.tn.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>TNHFW</a></li>
                                <li><a href="https://tnmedicalselection.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>DME Selection Committee</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Contact</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Lena Vilakku, Pudukkottai - 622 507.<br />
                                Phone: +91 75021 73000<br />
                                Email: info@mzcn.in
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
