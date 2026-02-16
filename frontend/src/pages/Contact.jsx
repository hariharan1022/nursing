import React, { useEffect } from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Inner Hero */}
            <div className="inner-hero">
                <div className="container" data-reveal-init>
                    <span className="estd-tag float-breathe" style={{ background: 'var(--accent)', color: 'var(--primary)', display: 'block', margin: '0 auto 35px', width: 'fit-content' }}>GET IN TOUCH</span>
                    <h1 style={{ fontSize: '3rem', margin: '15px 0' }} className="reveal-skew">Contact Our Campus</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }} className="reveal-blur">
                        Have questions about our programs or the admission process? Our team is here to help you every step of the way.
                    </p>
                </div>
            </div>

            {/* Contact & Map Section */}
            <section className="section">
                <div className="container">
                    {/* Main Layout Grid */}
                    <div className="contact-grid">

                        {/* Left Column: Contact Details */}
                        <div className="reveal-blur" data-reveal-init>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '30px' }}>Reach Our Administration</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {/* Address */}
                                <div id="address" className="contact-card address-card hover-lift">
                                    <div className="contact-icon-box">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Campus Address</h4>
                                        <p>
                                            Lena Vilakku, Pilivalam P.O, Thirumayam Tk.,<br />Pudukkottai Dt - 622507, Tamil Nadu, INDIA.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div id="phone" className="contact-card hover-lift">
                                    <div className="contact-icon-box">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Contact Numbers</h4>
                                        <p>
                                            <strong>Admission:</strong> +91 75021 73000<br />
                                            <strong>Principal:</strong> +91 99655 20316<br />
                                            <strong>Vice Principal:</strong> +91 99655 66664
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div id="email" className="contact-card hover-lift">
                                    <div className="contact-icon-box">
                                        <i className="fas fa-envelope-open-text"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Email Support</h4>
                                        <p>
                                            info@mzcn.in, principal@mzcn.in<br />
                                            viceprincipal@mzcn.in, jobs@mzcn.in
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Office Timings */}
                            <div className="timings-card">
                                <h4 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: 700 }}>Office Timings</h4>
                                <div className="timings-content">
                                    <i className="far fa-clock" style={{ fontSize: '1.5rem', opacity: 0.9 }}></i>
                                    <div>
                                        <span style={{ fontSize: '1.2rem', fontWeight: 600, display: 'block' }}>9:00 AM - 5:00 PM</span>
                                        <span style={{ fontSize: '0.95rem', opacity: 0.85 }}>Monday to Saturday</span>
                                    </div>
                                    <span className="timings-badge" style={{
                                        marginLeft: 'auto',
                                        background: 'rgba(255,255,255,0.2)',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 600
                                    }}>
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Determine Campus Location */}
                        <div className="reveal-zoom" data-reveal-init>
                            <div className="locate-card">
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '10px' }}>Locate Our Campus</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '25px', flexGrow: 0 }}>
                                    Lena Vilakku, Pilivalam P.O, Pudukkottai District.
                                </p>

                                <div className="map-container">
                                    <iframe
                                        src="https://maps.google.com/maps?q=10.2917544,78.7697973&t=h&z=15&output=embed"
                                        className="map-frame"
                                        width="100%"
                                        height="100%"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Mount Zion College of Nursing Location"
                                    ></iframe>
                                </div>

                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=10.2917544,78.7697973"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="directions-btn magnetic"
                                >
                                    <i className="fas fa-directions"></i> Get Directions
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
