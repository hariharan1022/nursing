import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page">
            {/* Inner Hero */}
            <div className="inner-hero">
                <div className="container" style={{ animation: 'fadeInUp 1s ease-out' }}>
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>GET IN TOUCH</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Contact Our Campus</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Have questions about our programs or the admission process? Our team is here to help you every step of the way.
                    </p>
                </div>
            </div>

            {/* Contact & Map Section */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Contact Info */}
                        <div className="contact-info reveal">
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '30px' }}>Reach Our Administration</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div className="hover-lift" style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '20px', borderRadius: '15px' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--bg-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, color: 'var(--primary)' }}>Campus Address</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                                            Lena Vilakku, Pilivalam P.O, Thirumayam Tk.,<br />Pudukkottai Dt - 622507, Tamil Nadu, INDIA.
                                        </p>
                                    </div>
                                </div>

                                <div className="hover-lift" style={{ display: 'flex', gap: '20px', alignItems: 'start', padding: '20px', borderRadius: '15px' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--bg-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, color: 'var(--primary)' }}>Contact Numbers</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                                            <strong>Admission Enquiry:</strong> +91 75021 73000 (9 AM - 5 PM)<br />
                                            <strong>Principal:</strong> +91 99655 20316 (9 AM - 5 PM)<br />
                                            <strong>Vice Principal:</strong> +91 99655 66664 (9 AM - 5 PM)
                                        </p>
                                    </div>
                                </div>

                                <div className="hover-lift" style={{ display: 'flex', gap: '20px', alignItems: 'start', padding: '20px', borderRadius: '15px' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--bg-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-envelope-open-text"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, color: 'var(--primary)' }}>Email Support</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                                            <strong>General:</strong> info@mzcn.in<br />
                                            <strong>Principal:</strong> principal@mzcn.in<br />
                                            <strong>Vice Principal:</strong> viceprincipal@mzcn.in<br />
                                            <strong>Careers:</strong> jobs@mzcn.in
                                        </p>
                                    </div>
                                </div >
                            </div >

                            <div style={{ marginTop: '50px', padding: '40px', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} className="reveal">
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Office Timings</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <i className="far fa-clock"></i>
                                    <p style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>9:00 AM - 5:00 PM</p>
                                </div>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Available Monday to Saturday</p>
                            </div>
                        </div >

                        {/* Map */}
                        <div className="reveal" style={{ animationDelay: '0.2s' }}>
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '30px' }}>Find Us on Map</h2>
                            <div className="hover-scale" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '450px', border: '1px solid #eee' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.415039308168!2d78.75081197503615!3d10.467909388727103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbadd3098553641%3A0xe5a363d3c733309a!2sMount%20Zion%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1739207032733!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
