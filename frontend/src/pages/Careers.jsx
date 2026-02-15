import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Careers = () => {
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const params = new URLSearchParams(location.search);
        if (params.get('status') === 'success') {
            setShowSuccess(true);
            // Hide message after 5 seconds
            setTimeout(() => setShowSuccess(false), 5000);
        }
    }, [location]);

    const jobs = [
        {
            title: "Nursing Tutor",
            department: "Nursing Education",
            qualification: "As per INC Norms",
            icon: "fas fa-chalkboard-teacher"
        },
        {
            title: "Assistant Professor",
            department: "Nursing Education",
            qualification: "As per INC Norms",
            icon: "fas fa-user-graduate"
        }
    ];

    return (
        <div className="careers-page">
            <header className="careers-hero">
                <div className="container">
                    <h1 className="reveal active">Careers at MZCN</h1>
                    <p className="reveal active" style={{ maxWidth: '700px', margin: '20px auto 0', opacity: 0.9 }}>
                        Join a community of dedicated professionals committed to shaping the future of nursing education.
                    </p>
                </div>
            </header>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    {showSuccess && (
                        <div className="reveal active" style={{ background: '#dcfce7', color: '#166534', padding: '15px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #bbf7d0', fontWeight: 600 }}>
                            <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
                            Your application has been submitted successfully! We will contact you soon.
                        </div>
                    )}
                    <h2 className="reveal active" style={{ color: 'var(--primary)' }}>Current Openings</h2>
                    <p className="reveal active">We are looking for passionate individuals to join our faculty.</p>

                    <div className="job-grid">
                        {jobs.map((job, index) => (
                            <div key={index} className="job-card">
                                <div className="job-icon-box">
                                    <i className={job.icon}></i>
                                </div>
                                <h3 className="job-title">{job.title}</h3>
                                <p className="job-meta">
                                    <strong>Department:</strong> {job.department}<br />
                                    <strong>Qualification:</strong> {job.qualification}
                                </p>
                                <Link to={`/apply-job?job=${encodeURIComponent(job.title)}`} className="apply-btn">Apply Now</Link>
                            </div>
                        ))}
                    </div>

                    <div className="notice-box reveal active">
                        <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Application Details</h4>
                        <div className="notice-item">
                            <i className="fas fa-info-circle notice-icon"></i>
                            <p style={{ margin: 0 }}>Qualification and experience must be as per the norms of Indian Nursing Council (INC).</p>
                        </div>
                        <div className="notice-item">
                            <i className="fas fa-clock notice-icon"></i>
                            <p style={{ margin: 0 }}>Applications should be submitted within <strong>7 days</strong> of this advertisement.</p>
                        </div>
                        <div className="notice-item">
                            <i className="fas fa-paper-plane notice-icon"></i>
                            <p style={{ margin: 0 }}>Send your updated resume to the Director at: <a href="mailto:jobs@mzcn.in" style={{ color: 'var(--secondary)', fontWeight: 600 }}>jobs@mzcn.in</a></p>
                        </div>
                        <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-light)', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <strong>MOUNT ZION COLLEGE OF NURSING</strong><br />
                            Approved by INC New Delhi & TNNMC Chennai. Affiliated to The Tamil Nadu Dr. M.G.R. Medical University.<br />
                            Lena Vilakku, Pilivalam P.O, Thirumayam TK, Pudukkottai - 622507
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
