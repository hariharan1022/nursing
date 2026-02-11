import React, { useEffect } from 'react';

const Facilities = () => {
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

    const affiliations = [
        { name: 'Government Medical College Hospital, Pudukkottai', capacity: '1200 Beds', spec: 'Medical Surgical, Child Health, Mental Health Nursing' },
        { name: 'Government Ranee’s Maternity Hospital, Pudukkottai', capacity: '435 Beds', spec: 'OBG Nursing, Child Health Nursing' },
        { name: 'Athma Mind Care Hospital, Trichy', capacity: '150 Beds', spec: 'Mental Health Nursing' },
        { name: 'Harshamithra Oncology Hospital, Trichy', capacity: '50 Beds', spec: 'Oncology Nursing' }
    ];

    const communityAreas = [
        { name: 'Kamarajapuram', type: 'Rural', facility: 'Community Health Centre' },
        { name: 'Natchanthupatti', type: 'Rural', facility: 'Community Health Centre' },
        { name: 'Virachilai', type: 'Urban', facility: 'Primary Health Centre' }
    ];

    return (
        <div className="facilities-page">
            <div className="inner-hero" style={{ background: 'var(--primary)', color: 'white', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>INFRASTRUCTURE & BEYOND</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }} className="reveal">Facilities & Ecosystem</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        We believe that the best learning happens in an environment that is well-equipped, safe, and nurturing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    {/* Academic Facilities */}
                    <div className="reveal" style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            <div style={{
                                width: '70px', height: '70px', background: 'white', color: 'var(--accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '15px', fontSize: '2rem', boxShadow: 'var(--shadow-sm)'
                            }}>
                                <i className="fas fa-laptop-medical"></i>
                            </div>
                            <h2 style={{ color: 'var(--primary)', margin: 0 }}>Classrooms & Laboratories</h2>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', borderLeft: '6px solid var(--primary)' }}>
                            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200" alt="Lab" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px' }} />
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                Our classrooms are modern, well-equipped, and designed to provide an interactive learning experience. specialized laboratories for all nursing disciplines are equipped with high-fidelity mannequins and simulation tools.
                            </p>
                        </div>
                    </div>

                    {/* Library */}
                    <div className="reveal" style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            <div style={{
                                width: '70px', height: '70px', background: 'white', color: 'var(--accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '15px', fontSize: '2rem', boxShadow: 'var(--shadow-sm)'
                            }}>
                                <i className="fas fa-book-reader"></i>
                            </div>
                            <h2 style={{ color: 'var(--primary)', margin: 0 }}>Digital Library</h2>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', borderLeft: '6px solid var(--primary)' }}>
                            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200" alt="Library" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px' }} />
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                The library is a treasure trove of nursing literature and research journals. It features digital access for e-books and journals, quiet study spaces, and comprehensive resources for academic growth.
                            </p>
                        </div>
                    </div>

                    {/* Clinical Affiliations */}
                    <div className="reveal" style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            <div style={{
                                width: '70px', height: '70px', background: 'white', color: 'var(--accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '15px', fontSize: '2rem', boxShadow: 'var(--shadow-sm)'
                            }}>
                                <i className="fas fa-hospital-user"></i>
                            </div>
                            <h2 style={{ color: 'var(--primary)', margin: 0 }}>Clinical Affiliations</h2>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', borderLeft: '6px solid var(--primary)' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: 'var(--primary)', color: 'white' }}>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Hospital Name</th>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Strength</th>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Specialization</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {affiliations.map((h, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                                <td style={{ padding: '15px', fontWeight: 600 }}>{h.name}</td>
                                                <td style={{ padding: '15px' }}>{h.capacity}</td>
                                                <td style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{h.spec}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Community Outreach */}
                    <div className="reveal" style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            <div style={{
                                width: '70px', height: '70px', background: 'white', color: 'var(--accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '15px', fontSize: '2rem', boxShadow: 'var(--shadow-sm)'
                            }}>
                                <i className="fas fa-users-cog"></i>
                            </div>
                            <h2 style={{ color: 'var(--primary)', margin: 0 }}>Community Outreach</h2>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', borderLeft: '6px solid var(--primary)' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: 'var(--primary)', color: 'white' }}>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Area Name</th>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Type</th>
                                            <th style={{ padding: '15px', textAlign: 'left' }}>Facility</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {communityAreas.map((area, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                                <td style={{ padding: '15px', fontWeight: 600 }}>{area.name}</td>
                                                <td style={{ padding: '15px' }}>{area.type}</td>
                                                <td style={{ padding: '15px' }}>{area.facility}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Residences', icon: 'fa-home', text: 'Safe and secure hostel environment with modern amenities.' },
                            { title: 'Sports', icon: 'fa-running', text: 'Dedicated spaces for physical fitness and teamwork.' },
                            { title: 'Leisure', icon: 'fa-smile-beam', text: 'Spaces for relaxation and creative student activities.' }
                        ].map((item, i) => (
                            <div key={i} className="reveal hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', textAlign: 'center', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--accent)' }}>
                                <i className={`fas ${item.icon}`} style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}></i>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;
