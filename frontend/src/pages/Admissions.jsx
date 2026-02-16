import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
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

    const documents = [
        '10th & 12th Mark Sheets', 'Transfer Certificate', 'Community Certificate',
        'Aadhar Card Xerox', 'Passport Size Photos (5)', 'Migration Certificate*',
        'Income Certificate', 'Physical Fitness Certificate'
    ];

    return (
        <div className="admissions-page">
            <div className="inner-hero program-hero">
                <div className="container" data-reveal-init>
                    <span className="estd-tag float-breathe" style={{ background: 'var(--accent)', color: 'var(--primary)', display: 'block', margin: '0 auto 35px', width: 'fit-content' }}>ADMISSION PORTAL</span>
                    <h1 style={{ fontSize: '3rem', margin: '15px 0' }} className="reveal-skew">Join the Future of Nursing</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.9 }} className="reveal-blur">
                        Welcome to the Admission Portal of Mount Zion College of Nursing. Begin your journey toward a rewarding career in healthcare.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="page-grid reverse">
                        <div className="admission-main content-col">
                            {/* Eligibility */}
                            <div id="eligibility" className="admission-card reveal-flip" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-user-graduate" style={{ color: 'var(--accent)' }}></i>
                                    Eligibility Criteria
                                </h3>

                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>1. Local Candidates (B.Sc. Nursing)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {['Passed 10+2 with Science (Physics, Chemistry, Biology) and English (Core/Elective).', 'Minimum aggregate of 45% marks from a recognized board (CBSE, ICSE, SSCE, etc.).', 'Candidate should be an Indian citizen and native of Tamil Nadu.'].map((item, i) => (
                                        <li key={i} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '12px', color: 'var(--text-muted)' }}>
                                            <i className="fas fa-check-circle" style={{ position: 'absolute', left: 0, color: 'var(--accent)', top: '4px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h4 style={{ color: 'var(--primary)', margin: '30px 0 15px' }}>2. NRI Candidates</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {['12th-grade diploma or equivalent with 50% aggregate in PCB & English.', 'Photocopy of Passport and Visa required.', 'HIV/AIDS/COVID-19 test report from WHO recognized institution.'].map((item, i) => (
                                        <li key={i} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '12px', color: 'var(--text-muted)' }}>
                                            <i className="fas fa-check-circle" style={{ position: 'absolute', left: 0, color: 'var(--accent)', top: '4px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Age Limit */}
                            <div id="age-limit" className="admission-card reveal-blur" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-calendar-alt" style={{ color: 'var(--accent)' }}></i>
                                    Age Limit
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Minimum age: 17 years completed by 31st December of the admission year.</p>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ background: 'var(--bg-light)' }}>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>Category</th>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>Maximum Age</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                                <td style={{ padding: '15px' }}>OC / BC / MBC / DNC</td>
                                                <td style={{ padding: '15px', fontWeight: 700 }}>30 Years</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                                <td style={{ padding: '15px' }}>SC / SCA / ST</td>
                                                <td style={{ padding: '15px', fontWeight: 700 }}>35 Years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Documents */}
                            <div id="documents" className="admission-card reveal-skew" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-id-card" style={{ color: 'var(--accent)' }}></i>
                                    Required Documents
                                </h3>
                                <div className="doc-grid">
                                    {documents.map(doc => (
                                        <div key={doc} className="doc-item">
                                            <i className="fas fa-file-alt" style={{ marginRight: '10px', color: 'var(--accent)' }}></i> {doc}
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '20px' }}>* Required for other state or NRI candidates.</p>
                            </div>

                            {/* Scholarship */}
                            <div id="scholarships" className="admission-card reveal-zoom" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-hand-holding-usd" style={{ color: 'var(--accent)' }}></i>
                                    Scholarships
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ color: 'var(--primary)' }}>First Graduate Scholarship:</strong>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tuition fee concessions for students who are the first in their family to pursue a degree.</p>
                                    </li>
                                    <li>
                                        <strong style={{ color: 'var(--primary)' }}>Government BC/MBC/SC/ST Scholarships:</strong>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Eligible students can apply for state-sponsored scholarships as per government norms.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="admission-sidebar sidebar-col">
                            {/* Process */}
                            <div id="selection" className="about-nav-card reveal-zoom" data-reveal-init style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Selection Process</h4>
                                <div className="process-steps">
                                    {[
                                        { step: '01', title: 'Application', desc: 'Apply online or visit our office' },
                                        { step: '02', title: 'Entrance', desc: 'Institutional entrance examination' },
                                        { step: '03', title: 'Interview', desc: 'Personal evaluation & Counseling' },
                                        { step: '04', title: 'Fitness', desc: 'Medical clearance & Admission' }
                                    ].map(item => (
                                        <div key={item.step} className="process-step-item">
                                            <span className="step-number">{item.step}</span>
                                            <div>
                                                <h5 style={{ color: 'var(--primary)', margin: 0 }}>{item.title}</h5>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action */}
                            <div id="apply" className="apply-card reveal-blur" data-reveal-init>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h3 style={{ color: 'white', marginBottom: '15px' }} className="pulse-glow">Start Your Application</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '25px' }}>Inquiries are now open for the {new Date().getFullYear()}-{new Date().getFullYear() + 1} academic year.</p>
                                    <Link to="/contact" className="btn" style={{ background: 'var(--accent)', color: 'var(--primary)', width: '100%', fontWeight: 800, textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>INQUIRE NOW</Link>
                                    <p style={{ fontSize: '0.8rem', marginTop: '20px', opacity: 0.6 }}>Selection based on eligibility and performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
