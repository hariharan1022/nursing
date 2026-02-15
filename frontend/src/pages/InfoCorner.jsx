import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const InfoCorner = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const navHeight = 100;
                window.scrollTo({
                    top: element.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

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

    const announcements = [
        { type: 'Professional Event', title: 'Lamp Lighting Ceremony', text: 'The Lamp Lighting Ceremony for the first-year batch (2024-2028) on 29th Jan 2025. This significant event symbolizes the beginning of their professional journey into nursing.' },
        { type: 'Celebration', title: 'Pongal Celebration 2025', text: 'On 10th Jan 2025, the college celebrated Pongal with traditional fervor, graced by the Chairperson and Director.' },
        { type: 'Celebration', title: "Founders' Day", text: 'Commemorating the life and vision of our founder, Mr. Jeyabarathan Chelliah, on 17th Dec 2024.' },
        { type: 'Event', title: 'Fresher’s Day', text: 'Welcomed the 16th batch, "Joyful Generous Topaz," on 25th Nov 2024.' }
    ];

    const newsEvents = [
        { type: 'Initiative', title: 'Healthy Nutrition Demonstration', text: 'Radiant Rubies batch organized a Nutrition Event, preparing dishes tailored to health conditions like diabetes and anemia.' },
        { type: 'Leadership', title: 'SALT 2024', text: 'Hosted Student Advocacy and Leadership Training in collaboration with TNAI for students from 21 institutions.' },
        { type: 'Milestone', title: 'XI Graduation Day', text: '46 graduates received their degrees on 2nd April 2024, marking the culmination of their dedication.' }
    ];

    const rankHolders = [
        {
            year: 'Third Year', students: [
                { name: 'Ms. Nanthika, Ms. Vivetha', subject: 'Med Surg II' },
                { name: 'Mr. Sivashanmugam', subject: 'Child Health' },
                { name: 'Ms. Nirmala Devi', subject: 'Mental Health' }
            ]
        },
        {
            year: 'Second Year', students: [
                { name: 'Ms. Keran Jancy', subject: 'Sociology' },
                { name: 'Ms. Snowlin', subject: 'Med Surg I' },
                { name: 'Ms. Reena', subject: 'Pharmacology, Pathology' }
            ]
        }
    ];

    return (
        <div className="info-corner-page">
            <div className="inner-hero program-hero">
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>LATEST UPDATES</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }} className="reveal">Information Corner</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Stay updated with the latest circulars, professional milestones, and academic achievements at Mount Zion College of Nursing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="page-grid">
                        {/* Sticky Sidebar */}
                        <aside className="about-nav-card reveal sidebar-col" style={{ top: '120px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.2rem' }}>Quick Access</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Announcements', 'News', 'Achievements', 'Jobs'].map(item => (
                                    <li key={item} style={{ marginBottom: '15px' }}>
                                        <a href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }} className="hover-primary">
                                            <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}></i>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Content Area */}
                        <div className="info-content content-col">
                            {/* Announcements */}
                            <div id="announcements" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-bullhorn" style={{ color: 'var(--accent)' }}></i> Announcements
                                </h2>
                                {announcements.map((ann, idx) => (
                                    <div key={idx} className="info-card hover-lift">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <span className="info-type-tag" style={{ background: 'var(--bg-light)', color: 'var(--primary)' }}>{ann.type}</span>
                                        </div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{ann.title}</h4>
                                        <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{ann.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* News & Events */}
                            <div id="news" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-newspaper" style={{ color: 'var(--accent)' }}></i> Recent News
                                </h2>
                                {newsEvents.map((news, idx) => (
                                    <div key={idx} className="info-card hover-lift" style={{ borderLeftColor: 'var(--primary)' }}>
                                        <span className="info-type-tag" style={{ background: 'var(--primary)', color: 'white' }}>{news.type}</span>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{news.title}</h4>
                                        <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{news.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Achievements */}
                            <div id="achievements" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-trophy" style={{ color: 'var(--accent)' }}></i> Rank Holders
                                </h2>
                                {rankHolders.map((group, idx) => (
                                    <div key={idx} className="rank-card">
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fas fa-medal" style={{ color: 'var(--accent)' }}></i> {group.year}
                                        </h4>
                                        <div style={{ overflowX: 'auto' }}>
                                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                <thead>
                                                    <tr style={{ background: 'var(--bg-light)', textAlign: 'left' }}>
                                                        <th style={{ padding: '15px', borderBottom: '2px solid var(--primary)' }}>Student Name</th>
                                                        <th style={{ padding: '15px', borderBottom: '2px solid var(--primary)' }}>Topped Subject</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {group.students.map((s, i) => (
                                                        <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                            <td style={{ padding: '15px', fontWeight: 600 }}>{s.name}</td>
                                                            <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{s.subject}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Job Openings */}
                            <div id="jobs" className="reveal">
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-briefcase" style={{ color: 'var(--accent)' }}></i> Careers
                                </h2>
                                <div className="apply-card">
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <h3 style={{ color: 'white', marginBottom: '15px' }}>Join Our Faculty</h3>
                                        <p style={{ opacity: 0.9, marginBottom: '25px' }}>We are looking for dedicated Nursing Tutors and Assistant Professors to join our esteemed institution.</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                            <Link to="/careers" className="btn" style={{ background: 'var(--accent)', color: 'var(--primary)', fontWeight: 800, textDecoration: 'none' }}>APPLY NOW</Link>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <i className="fas fa-envelope"></i> <span>jobs@mzcn.in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoCorner;
