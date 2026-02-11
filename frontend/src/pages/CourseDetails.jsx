import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
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

    return (
        <div className="course-details-page">
            <div className="inner-hero" style={{ background: 'var(--primary)', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container reveal">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>ACADEMIC EXCELLENCE</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Course Details</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Comprehensive information about our Academic Programs, Departments, and Facilities
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Section 1: Academic Program */}
                <section id="academic-program" className="section reveal">
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.2rem', marginBottom: '15px' }}>Academic Program</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Bachelor of Science (B.Sc.) in Nursing</p>
                    </div>

                    <div className="hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', borderLeft: '5px solid var(--primary)', marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Program Overview</h3>
                        <p style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                            The B.Sc. nursing degree program is a four-year full-time program comprising eight semesters, which prepares graduates qualified to practice nursing and midwifery in a variety of settings.
                        </p>
                        <div style={{ marginTop: '25px' }}>
                            <Link to="/bsc-nursing" className="btn btn-primary">View Full Syllabus & Details</Link>
                        </div>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div className="hover-lift" style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}><i className="fas fa-bullseye" style={{ marginRight: '10px', color: 'var(--accent)' }}></i> Aims</h4>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>
                                <li>Provide comprehensive nursing care knowledge.</li>
                                <li>Develop professional competencies.</li>
                                <li>Inculcate ethical values and leadership skills.</li>
                            </ul>
                        </div>
                        <div className="hover-lift" style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '15px' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}><i className="fas fa-lightbulb" style={{ marginRight: '10px', color: 'var(--accent)' }}></i> Objectives</h4>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>
                                <li>Critical thinking and effective patient care.</li>
                                <li>Demonstrate proficiency in nursing techniques.</li>
                                <li>Commit to lifelong learning.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Departments */}
                <section className="section reveal">
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.2rem', marginBottom: '15px' }}>Departments</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Our specialized academic structure</p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {['Medical Surgical Nursing', 'Child Health Nursing', 'Mental Health Nursing', 'Community Health Nursing'].map((dept, i) => (
                            <div key={i} className="hover-lift" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--primary)' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{dept}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Specialized training and clinical exposure in {dept.toLowerCase()}.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CourseDetails;
