import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--primary-dark)', color: 'white', padding: '80px 0 30px', borderTop: '5px solid var(--accent)' }}>
            <div className="container grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '50px' }}>
                <div className="f-brand">
                    <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="MZCN Logo" style={{ height: '70px', marginBottom: '25px' }} />
                    <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '25px', fontSize: '0.9rem' }}>
                        To Make Man Whole. Providing world-class nursing education with clinical excellence for over 15 years.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="https://www.facebook.com/MZNursing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.2rem', opacity: 0.7 }}><i className="fab fa-facebook-f"></i></a>
                        <a href="https://wa.me/919965566664" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.2rem', opacity: 0.7 }}><i className="fab fa-whatsapp"></i></a>
                        <a href="#" style={{ color: 'white', fontSize: '1.2rem', opacity: 0.7 }}><i className="fab fa-instagram"></i></a>
                        <a href="#" style={{ color: 'white', fontSize: '1.2rem', opacity: 0.7 }}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="f-links">
                    <h4 style={{ color: 'var(--accent)', marginBottom: '25px', fontFamily: '"Outfit", sans-serif' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2 }}>
                        <li><Link to="/" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Home</Link></li>
                        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>About Us</Link></li>
                        <li><Link to="/course-details" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Course Details</Link></li>
                        <li><Link to="/clubs-and-cells" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Clubs & Cells</Link></li>
                        <li><Link to="/info-corner" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Info Corner</Link></li>
                        <li><Link to="/admissions" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Admissions</Link></li>
                        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Contact</Link></li>
                        <li><Link to="/feedback" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Feedback</Link></li>
                    </ul>
                </div>

                <div className="f-links">
                    <h4 style={{ color: 'var(--accent)', marginBottom: '25px', fontFamily: '"Outfit", sans-serif' }}>Affiliations</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.2, fontSize: '0.9rem' }}>
                        <li><a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>The MGR University</a></li>
                        <li><a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Nursing Council (INC)</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>TNNMC Council</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Health Department</a></li>
                    </ul>
                </div>

                <div className="f-contact">
                    <h4 style={{ color: 'var(--accent)', marginBottom: '25px', fontFamily: '"Outfit", sans-serif' }}>Get in Touch</h4>
                    <div style={{ marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'start', fontSize: '0.9rem', opacity: 0.8 }}>
                        <i className="fas fa-map-marker-alt" style={{ marginTop: '5px', color: 'var(--accent)' }}></i>
                        <span>Lena Vilakku, Pilivalam P.O, Thirumayam Tk., Pudukkottai Dt - 622507, Tamil Nadu, INDIA.</span>
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'start', fontSize: '0.9rem', opacity: 0.8 }}>
                        <i className="fas fa-phone-alt" style={{ color: 'var(--accent)' }}></i>
                        <span>+91 75021 73000 (Adm)<br />+91 99655 20316 (Prin)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'start', fontSize: '0.9rem', opacity: 0.8 }}>
                        <i className="fas fa-envelope" style={{ color: 'var(--accent)' }}></i>
                        <span>info@mzcn.in<br />principal@mzcn.in</span>
                    </div>
                </div>
            </div>
            <div className="container" style={{ textAlign: 'center', marginTop: '60px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem' }}>
                <p style={{ opacity: 0.6 }}>© 2026 Mount Zion College of Nursing. All Rights Reserved.</p>
                <p style={{ opacity: 0.8, marginTop: '10px', color: 'var(--accent)', fontWeight: '600' }}>Designed and Maintained by Dept. of IT - MZCET</p>
            </div>
        </footer>
    );
};

export default Footer;
