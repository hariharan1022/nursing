import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/organogram.css';

const Organogram = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="organogram-page">
            {/* Inner Hero */}
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        GOVERNANCE STRUCTURE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init style={{ color: 'white' }}>
                        Institutional Organogram
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ color: 'rgba(255,255,255,0.9)' }}>
                        The systematic hierarchy and administrative flow of Mount Zion College of Nursing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)', overflow: 'hidden' }}>
                <div className="container">
                    <div className="reveal" style={{ background: 'var(--bg-white)', padding: '50px 30px', borderRadius: '30px', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <div className="organogram-wrapper" style={{ overflowX: 'auto', paddingBottom: '20px' }}>
                            <div className="org-tree">
                                <ul>
                                    <li>
                                        <div className="org-node root-node">Chair Person and Trustees</div>
                                        <ul>
                                            <li>
                                                <div className="org-node">Director</div>
                                                <ul>
                                                    <li>
                                                        <div className="org-node">Principal</div>
                                                        <ul>
                                                            {/* Left Branch */}
                                                            <li style={{ verticalAlign: 'top' }}>
                                                                <div className="vertical-list">
                                                                    <div className="org-node vertical-node">Vice-Principal</div>
                                                                    <div className="org-node vertical-node">Associate Professor</div>
                                                                    <div className="org-node vertical-node">Asst. Professor</div>
                                                                    <div className="org-node vertical-node">Lecturer</div>
                                                                    <div className="org-node vertical-node">Clinical Instructor</div>
                                                                    <div className="org-node vertical-node">Librarian</div>
                                                                    <div className="org-node vertical-node">Lab assistant</div>
                                                                    <div className="org-node vertical-node">Peon</div>
                                                                </div>
                                                            </li>
                                                            {/* Middle Branch */}
                                                            <li style={{ verticalAlign: 'top' }}>
                                                                <div className="vertical-list">
                                                                    <div className="org-node vertical-node">Administrative Officer</div>
                                                                    <div className="org-node vertical-node">Accountant</div>
                                                                    <div className="org-node vertical-node">Cashier</div>
                                                                    <div className="org-node vertical-node">Clerk</div>
                                                                    <div className="org-node vertical-node">Office Assistant</div>
                                                                    <div className="org-node vertical-node">Security</div>
                                                                    <div className="org-node vertical-node">IV Class</div>
                                                                </div>
                                                            </li>
                                                            {/* Right Branch */}
                                                            <li style={{ verticalAlign: 'top' }}>
                                                                <div className="vertical-list">
                                                                    <div className="org-node vertical-node">Warden</div>
                                                                    <div className="org-node vertical-node">House Keeper</div>
                                                                    <div className="org-node vertical-node">Security</div>
                                                                    <div className="org-node vertical-node">IV Class</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #eee' }}>
                            <h4 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Prefer the graphical version?</h4>
                            <a
                                href={`${import.meta.env.BASE_URL}photo/Organogram_MZCN.jpg`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary magnetic"
                                style={{ padding: '15px 35px' }}
                            >
                                <i className="fas fa-image" style={{ marginRight: '10px' }}></i> Open Original Photo
                            </a>
                            <div style={{ marginTop: '20px' }}>
                                <Link to="/about" className="f-link" style={{ color: 'var(--primary)', fontWeight: 600 }}>← Back to About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Organogram;
