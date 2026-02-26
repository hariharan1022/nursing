import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/logo.webp';

const Footer = () => {
    return (
        <footer className="footer-section">
            <style>
                {`
                .footer-section {
                    background: #001f4d;
                    color: white;
                    padding: 100px 0 30px;
                    position: relative;
                    overflow: hidden;
                }
                .footer-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 5px;
                    background: #F5CD02;
                }
                .f-title {
                    color: #F5CD02;
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    position: relative;
                    padding-bottom: 10px;
                    font-family: 'Manrope', sans-serif;
                }
                .f-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: #F5CD02;
                }
                .f-link {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: block;
                    margin-bottom: 10px;
                    font-size: 0.92rem;
                    font-family: 'Manrope', sans-serif;
                }
                .f-link:hover {
                    color: #F5CD02;
                    transform: translateX(5px);
                }
                .f-contact-item {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 15px;
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.8);
                }
                .f-contact-icon {
                    color: #F5CD02;
                    font-size: 1rem;
                    margin-top: 3px;
                }
                .social-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.18);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .social-icon:hover {
                    background: #F5CD02;
                    transform: none;
                    color: #001739;
                }
                .animated-text {
                    color: #F5CD02;
                    font-weight: 700;
                }
                .affiliation-tag {
                    padding: 6px 15px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 50px;
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.7);
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .affiliation-tag:hover {
                    border-color: #F5CD02;
                    color: #F5CD02;
                }
                .footer-bottom {
                    margin-top: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    padding-top: 25px;
                }

                /* Mobile Layout Redesign */
                @media (max-width: 768px) {
                    .footer-section {
                        padding: 30px 15px 20px;
                    }
                    .desktop-grid {
                        display: none !important;
                    }
                    .mobile-brand-row {
                        display: flex !important;
                        align-items: flex-start;
                        gap: 12px;
                        margin-bottom: 20px;
                    }
                    .m-logo {
                        height: 50px;
                        width: auto;
                        flex-shrink: 0;
                    }
                    .m-brand-text {
                        font-size: 0.82rem;
                        line-height: 1.4;
                        margin: 0;
                        color: rgba(255,255,255,0.9);
                    }
                    .m-social-row {
                        display: flex;
                        gap: 12px;
                        margin-bottom: 30px;
                    }
                    .m-2col-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        margin-bottom: 25px;
                    }
                    .f-title {
                        font-size: 0.95rem;
                        margin-bottom: 12px;
                        padding-bottom: 6px;
                    }
                    .f-title::after {
                        width: 25px;
                        height: 1.5px;
                    }
                    .f-link {
                        font-size: 0.82rem;
                        margin-bottom: 8px;
                    }
                    .f-contact-item {
                        font-size: 0.78rem;
                        margin-bottom: 10px;
                        gap: 8px;
                    }
                    .affiliation-container {
                        justify-content: center !important;
                        gap: 8px !important;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 5px;
                        padding-top: 15px;
                        margin-top: 25px;
                    }
                    .footer-bottom p {
                        font-size: 0.75rem !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-only {
                        display: none !important;
                    }
                }
                `}
            </style>

            <div className="container">
                {/* Desktop Version */}
                <div className="desktop-grid grid grid-cols-4 md-grid-cols-2" style={{ gap: '40px' }}>
                    <div>
                        <img src={HeaderLogo} alt="MZCN Logo" style={{ height: '80px', width: 'auto', marginBottom: '25px', borderRadius: '8px' }} />
                        <p style={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.8, marginBottom: '25px', fontSize: '0.95rem' }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, color: '#D4AF37', display: 'block', fontSize: '1.15rem', marginBottom: '8px' }}>"To Make Man Whole."</span>
                            Providing world-class nursing education with clinical excellence for over <span className="animated-text">17 years</span>.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.facebook.com/share/17Few28nzE/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="mailto:jobs@mzcn.in" className="social-icon"><i className="fas fa-envelope"></i></a>
                            <Link to="/" className="social-icon"><i className="fab fa-instagram"></i></Link>
                            <a href="https://in.linkedin.com/school/mount-zion-college-of-engineering-and-technology/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="f-title">Explore MZCN</h4>
                        <Link to="/" className="f-link">Home</Link>
                        <Link to="/about" className="f-link">About Us</Link>
                        <Link to="/course-details" className="f-link">Course Details</Link>
                        <Link to="/facilities" className="f-link">Facilities</Link>
                        <Link to="/contact" className="f-link">Contact Us</Link>
                        <a href="/feedback" className="f-link">Feedback</a>
                    </div>

                    <div>
                        <h4 className="f-title">Contact Us</h4>
                        <div className="f-contact-item">
                            <i className="fas fa-map-marker-alt f-contact-icon"></i>
                            <span>Lena Vilakku, Pilivalam P.O, Thirumayam Tk.<br />Pudukkottai Dt - 622507<br />Tamil Nadu, INDIA</span>
                        </div>
                        <div className="f-contact-item">
                            <i className="fas fa-envelope f-contact-icon"></i>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <a href="mailto:info@mzcn.in" className="f-link" style={{ margin: 0, fontSize: '0.85rem' }}>info@mzcn.in</a>
                                <a href="mailto:principal@mzcn.in" className="f-link" style={{ margin: 0, fontSize: '0.85rem' }}>principal@mzcn.in</a>
                                <a href="mailto:viceprincipal@mzcn.in" className="f-link" style={{ margin: 0, fontSize: '0.85rem' }}>viceprincipal@mzcn.in</a>
                                <a href="mailto:jobs@mzcn.in" className="f-link" style={{ margin: 0, fontSize: '0.85rem' }}>jobs@mzcn.in</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="f-title">Support & Admission</h4>
                        <div className="f-contact-item" style={{ marginBottom: '15px', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                            <i className="fas fa-user-tie f-contact-icon"></i>
                            <div>
                                <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#F5CD02', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Principal</p>
                                <p style={{ margin: '2px 0', fontSize: '0.92rem', fontWeight: 600 }}>+91 99655 20316</p>
                                <p style={{ margin: 0, fontSize: '0.72rem', opacity: 0.6 }}><i className="far fa-clock" style={{ marginRight: '4px' }}></i>9:00 AM – 4:30 PM</p>
                            </div>
                        </div>
                        <div className="f-contact-item" style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                            <i className="fas fa-user-shield f-contact-icon"></i>
                            <div>
                                <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#F5CD02', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Vice Principal</p>
                                <p style={{ margin: '2px 0', fontSize: '0.92rem', fontWeight: 600 }}>+91 99655 66664</p>
                                <p style={{ margin: 0, fontSize: '0.72rem', opacity: 0.6 }}><i className="far fa-clock" style={{ marginRight: '4px' }}></i>9:00 AM – 4:30 PM</p>
                            </div>
                        </div>
                        <div className="f-contact-item" style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
                            <i className="fas fa-headset f-contact-icon"></i>
                            <div>
                                <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#F5CD02', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Admission Enquiry</p>
                                <p style={{ margin: '2px 0', fontSize: '0.92rem', fontWeight: 600 }}>+91 75021 73000</p>
                                <p style={{ margin: 0, fontSize: '0.72rem', opacity: 0.6 }}><i className="fas fa-info-circle" style={{ marginRight: '4px' }}></i>Course & Enrollment</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Version Redesign */}
                <div className="mobile-only">
                    {/* Brand Row */}
                    <div className="mobile-brand-row">
                        <img src={HeaderLogo} alt="MZCN Logo" className="m-logo" style={{ height: '60px', width: 'auto', borderRadius: '6px' }} />
                        <p className="m-brand-text">
                            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, color: '#D4AF37', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>"To Make Man Whole."</span>
                            Providing world-class nursing education with clinical excellence for over <span className="animated-text">17 years</span>.
                        </p>
                    </div>

                    {/* Social Row */}
                    <div className="m-social-row">
                        <a href="https://www.facebook.com/share/17Few28nzE/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <Link to="/" className="social-icon"><i className="fab fa-instagram"></i></Link>
                        <a href="mailto:jobs@mzcn.in" className="social-icon"><i className="fas fa-envelope"></i></a>
                        <a href="https://in.linkedin.com/school/mount-zion-college-of-engineering-and-technology/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>

                    {/* Grid Row 1: Explore & Contact Us */}
                    <div className="m-2col-grid">
                        <div>
                            <h4 className="f-title">Explore MZCN</h4>
                            <Link to="/" className="f-link">Home</Link>
                            <Link to="/about" className="f-link">About Us</Link>
                            <Link to="/course-details" className="f-link">Course Details</Link>
                            <Link to="/contact" className="f-link">Contact Us</Link>
                        </div>
                        <div>
                            <h4 className="f-title">Contact Us</h4>
                            <div className="f-contact-item" style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                                <span>Lena Vilakku, Pilivalam P.O,<br />Thirumayam Tk. Pudukkottai<br />- 622507, Tamil Nadu</span>
                            </div>
                            <div className="f-contact-item" style={{ flexDirection: 'column', gap: '4px' }}>
                                <a href="mailto:info@mzcn.in" className="f-link" style={{ fontSize: '0.75rem', margin: 0 }}>info@mzcn.in</a>
                                <a href="mailto:principal@mzcn.in" className="f-link" style={{ fontSize: '0.75rem', margin: 0 }}>principal@mzcn.in</a>
                                <a href="mailto:jobs@mzcn.in" className="f-link" style={{ fontSize: '0.75rem', margin: 0 }}>jobs@mzcn.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Row 2: Support & Admission Enquiry */}
                    <div className="m-2col-grid">
                        <div>
                            <h4 className="f-title">Support</h4>
                            <div className="f-contact-item" style={{ fontSize: '0.7rem', marginBottom: '8px' }}>
                                <div>
                                    <span style={{ fontWeight: 700, color: '#F5CD02' }}>Principal:</span><br />
                                    +91 99655 20316<br />
                                    <span style={{ opacity: 0.6, fontSize: '0.6rem' }}>9:00 AM – 4:30 PM</span>
                                </div>
                            </div>
                            <div className="f-contact-item" style={{ fontSize: '0.7rem' }}>
                                <div>
                                    <span style={{ fontWeight: 700, color: '#F5CD02' }}>Vice Principal:</span><br />
                                    +91 99655 66664<br />
                                    <span style={{ opacity: 0.6, fontSize: '0.6rem' }}>9 am - 4:30 pm</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="f-title">Admission</h4>
                            <div className="f-contact-item" style={{ fontSize: '0.7rem' }}>
                                <div>
                                    <span style={{ fontWeight: 700, color: '#F5CD02' }}>Admission Enquiry:</span><br />
                                    +91 75021 73000<br />
                                    <span style={{ opacity: 0.6, fontSize: '0.6rem' }}>Course & Enrollment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Affiliations Row */}
                <div style={{ marginTop: '20px', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="affiliation-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginRight: '5px' }}>Our Affiliations:</span>
                        <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="affiliation-tag">INC</a>
                        <a href="https://www.tamilnadunursingcouncil.com/" target="_blank" rel="noopener noreferrer" className="affiliation-tag">TNNMC</a>
                        <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="affiliation-tag">The Tamil Nadu Dr. M.G.R. Medical University</a>
                        <a href="https://tnhealth.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="affiliation-tag">TNHFW</a>
                        <a href="https://tnmedicalselection.org/" target="_blank" rel="noopener noreferrer" className="affiliation-tag">DME</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p style={{ opacity: 0.6, fontSize: '0.8rem', margin: 0 }}>
                        © 2026 Mount Zion College of Nursing. All Rights Reserved.
                    </p>
                    <p style={{ margin: 0, fontSize: '0.8rem' }}>
                        Designed and Maintained by <span className="animated-text">Dept. of IT AIDS - MZCET</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
