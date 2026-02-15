import React, { useState, useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal, .reveal-stagger');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const images = [
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.12.54 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.12.57 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.02 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.07 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.10 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.12 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.13 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.14 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.15 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.16 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.17 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.18 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM (3).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.19 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.20 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.21 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.22 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM (3).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.23 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.24 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.25 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.26 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.27 PM.jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM (1).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM (2).jpeg`,
        `${import.meta.env.BASE_URL}photo/gallery/WhatsApp Image 2026-02-10 at 9.13.28 PM.jpeg`
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
        <div className="gallery-page">
            <div className="inner-hero" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container reveal">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>VISUAL JOURNEY</span>
                    <h1 style={{ fontSize: '3.5rem', margin: '20px 0' }}>Photo Gallery</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                        Exploring the vibrant life, excellence in training, and moments of celebration at Mount Zion College of Nursing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="gallery-grid-main" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '25px',
                        padding: '20px 0'
                    }}>
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="reveal gallery-item-premium"
                                onClick={() => openLightbox(src)}
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'zoom-in',
                                    boxShadow: 'var(--shadow-md)',
                                    transition: 'var(--transition)'
                                }}
                            >
                                <div style={{ overflow: 'hidden', height: '280px', position: 'relative' }}>
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${i + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                        }}
                                        className="gallery-zoom"
                                    />
                                    <div className="gallery-overlay-premium">
                                        <i className="fas fa-expand" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <div className="lightbox" style={{ display: 'flex' }} onClick={closeLightbox}>
                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
                        <img className="lightbox-content" src={lightboxImage} alt="Gallery Preview" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
