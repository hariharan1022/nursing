import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section">
            <style>
                {`
                .footer-section {
                    background: #001C30;
                    color: white;
                    padding: 80px 0 30px;
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
                    background: linear-gradient(90deg, #D4AF37, #B8860B, #D4AF37);
                    background-size: 200% auto;
                    animation: shimmer 4s linear infinite;
                }
                @keyframes shimmer {
                    to { background-position: 200% center; }
                }
                .f-title {
                    color: #D4AF37;
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    position: relative;
                    padding-bottom: 10px;
                }
                .f-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: #D4AF37;
                }
                .f-link {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: block;
                    margin-bottom: 12px;
                    font-size: 0.95rem;
                }
                .f-link:hover {
                    color: #D4AF37;
                    transform: translateX(5px);
                }
                .f-contact-item {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                    font-size: 0.95rem;
                    color: rgba(255,255,255,0.8);
                }
                .f-contact-icon {
                    color: #D4AF37;
                    font-size: 1.1rem;
                    margin-top: 3px;
                }
                .social-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .social-icon:hover {
                    background: #D4AF37;
                    transform: translateY(-5px);
                    color: #001C30;
                }
                .animated-text {
                    background: linear-gradient(90deg, #ffffff, #D4AF37, #ffffff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 6s linear infinite;
                    font-weight: 700;
                }
                .affiliation-tag {
                    padding: 8px 15px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.7);
                    transition: all 0.3s ease;
                }
                .affiliation-tag:hover {
                    border-color: #D4AF37;
                    color: #D4AF37;
                }
                `}
            </style>

            <div className="container">
                <div className="grid grid-cols-4 md-grid-cols-2 sm-grid-cols-1" style={{ gap: '40px' }}>
                    {/* Column 1: Brand */}
                    <div className="reveal">
                        <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="MZCN Logo" style={{ height: '70px', marginBottom: '25px' }} />
                        <p style={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.8, marginBottom: '25px', fontSize: '0.95rem' }}>
                            To Make Man Whole. Providing world-class nursing education with clinical excellence for over <span className="animated-text">17 years</span>.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.facebook.com/share/17Few28nzE/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="mailto:jobs@mzcn.in" className="social-icon"><i className="fas fa-envelope"></i></a>
                            <Link to="/" className="social-icon"><i className="fab fa-instagram"></i></Link>
                            <a href="https://in.linkedin.com/school/mount-zion-college-of-engineering-and-technology/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="reveal">
                        <h4 className="f-title">Quick Links</h4>
                        <Link to="/" className="f-link">Home</Link>
                        <Link to="/about" className="f-link">About Us</Link>
                        <Link to="/course-details" className="f-link">Course Details</Link>
                        <Link to="/contact" className="f-link">Contact Us</Link>
                        <a href="https://mail.google.com/a/mzcn.in" target="_blank" rel="noopener noreferrer" className="f-link">Web Mail</a>
                        <a href="/feedback" className="f-link">Feedback</a>
                        <a href="#" className="f-link">Facility for Faculty & Students</a>
                    </div>

                    {/* Column 3: Contact Details (Detailed) */}
                    <div className="reveal">
                        <h4 className="f-title">Contact Us</h4>
                        <div className="f-contact-item">
                            <i className="fas fa-map-marker-alt f-contact-icon"></i>
                            <span>Lena Vilakku, Pilivalam P.O, Thirumayam Tk.<br />Pudukkottai Dt - 622507<br />Tamil Nadu, INDIA</span>
                        </div>
                        <div className="f-contact-item">
                            <i className="fas fa-envelope f-contact-icon"></i>
                            <div>
                                <a href="mailto:info@mzcn.in" className="f-link" style={{ marginBottom: 0 }}>info@mzcn.in</a>
                                <a href="mailto:principal@mzcn.in" className="f-link" style={{ marginBottom: 0, fontSize: '0.85rem' }}>principal@mzcn.in</a>
                                <a href="mailto:viceprincipal@mzcn.in" className="f-link" style={{ marginBottom: 0, fontSize: '0.85rem' }}>viceprincipal@mzcn.in</a>
                                <a href="mailto:jobs@mzcn.in" className="f-link" style={{ marginBottom: 0, fontSize: '0.85rem' }}>jobs@mzcn.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact Ph & Admission */}
                    <div className="reveal">
                        <h4 className="f-title">Support & Admission</h4>
                        <div className="f-contact-item">
                            <i className="fas fa-phone-alt f-contact-icon"></i>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Principal</div>
                                <div style={{ marginBottom: '10px' }}>+91 99655 20316 (9 a.m. - 5 p.m.)</div>

                                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Vice Principal</div>
                                <div style={{ marginBottom: '10px' }}>+91 99655 66664 (9 a.m. - 5 p.m.)</div>
                            </div>
                        </div>
                        <div className="f-contact-item" style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '12px', border: '1px dashed #D4AF37' }}>
                            <i className="fas fa-user-graduate f-contact-icon"></i>
                            <div>
                                <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Admission Enquiry</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800, margin: '5px 0' }}>+91 75021 73000</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>+91 99655 66664</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Affiliations Row */}
                <div style={{ marginTop: '60px', padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginRight: '10px' }}>Our Affiliations:</span>
                        <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="affiliation-tag" style={{ textDecoration: 'none' }}>INC</a>
                        <a href="https://tamilnadunursingcouncil.com/#/home" target="_blank" rel="noopener noreferrer" className="affiliation-tag" style={{ textDecoration: 'none' }}>TNNMC</a>
                        <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="affiliation-tag" style={{ textDecoration: 'none' }}>The Tamil Nadu Dr. M.G.R. Medical University</a>
                        <a href="https://tnhealth.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="affiliation-tag" style={{ textDecoration: 'none' }}>TNHFW</a>
                        <a href="https://tnmedicalselection.net/" target="_blank" rel="noopener noreferrer" className="affiliation-tag" style={{ textDecoration: 'none' }}>DME Selection Committee</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ opacity: 0.6, fontSize: '0.85rem', margin: 0 }}>
                        © 2026 Mount Zion College of Nursing. All Rights Reserved.
                    </p>
                    <p style={{ margin: 0, fontSize: '0.85rem' }}>
                        Designed and Maintained by <span className="animated-text">Dept. of IT - MZCET</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
