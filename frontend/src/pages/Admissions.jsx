import React, { useEffect } from 'react';

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
            <div className="inner-hero" style={{ background: 'var(--primary)', color: 'white', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>ADMISSION PORTAL</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }} className="reveal">Join the Future of Nursing</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        Welcome to the Admission Portal of Mount Zion College of Nursing. Begin your journey toward a rewarding career in healthcare.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>
                        <div className="admission-main">
                            {/* Eligibility */}
                            <div className="reveal" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)', marginBottom: '40px' }}>
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
                            <div className="reveal" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)', marginBottom: '40px' }}>
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
                            <div className="reveal" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)', marginBottom: '40px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-id-card" style={{ color: 'var(--accent)' }}></i>
                                    Required Documents
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                                    {documents.map(doc => (
                                        <div key={doc} style={{ background: 'var(--bg-light)', padding: '15px', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                                            <i className="fas fa-file-alt" style={{ marginRight: '10px', color: 'var(--accent)' }}></i> {doc}
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '20px' }}>* Required for other state or NRI candidates.</p>
                            </div>

                            {/* Scholarship */}
                            <div className="reveal" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)' }}>
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

                        <div className="admission-sidebar">
                            {/* Process */}
                            <div className="reveal" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', marginBottom: '30px', borderTop: '5px solid var(--accent)' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Selection Process</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { step: '01', title: 'Application', desc: 'Apply online or visit our office' },
                                        { step: '02', title: 'Entrance', desc: 'Institutional entrance examination' },
                                        { step: '03', title: 'Interview', desc: 'Personal evaluation & Counseling' },
                                        { step: '04', title: 'Fitness', desc: 'Medical clearance & Admission' }
                                    ].map(item => (
                                        <div key={item.step} style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                                            <span style={{ background: 'var(--accent)', color: 'var(--primary)', fontWeight: 800, padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem' }}>{item.step}</span>
                                            <div>
                                                <h5 style={{ color: 'var(--primary)', margin: 0 }}>{item.title}</h5>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action */}
                            <div className="reveal" style={{ background: 'var(--primary)', color: 'white', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                                <h3 style={{ color: 'white', marginBottom: '15px' }}>Start Your Application</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '25px' }}>Inquiries are now open for the {new Date().getFullYear()}-{new Date().getFullYear() + 1} academic year.</p>
                                <a href="mailto:info@mzcn.in" className="btn" style={{ background: 'var(--accent)', color: 'var(--primary)', width: '100%', fontWeight: 800 }}>INQUIRE NOW</a>
                                <p style={{ fontSize: '0.8rem', marginTop: '20px', opacity: 0.6 }}>Selection based on eligibility and performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
