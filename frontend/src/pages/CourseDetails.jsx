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

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-skew, .reveal-blur, .reveal-flip, .reveal-up, .reveal-stagger');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="course-details-page">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        ACADEMIC EXCELLENCE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Course Details
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init>
                        Comprehensive information about our Academic Programs, Departments, and Facilities.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Section 1: Academic Program */}
                <section id="academic-program" className="section">
                    <div style={{ marginBottom: '50px' }} className="reveal-skew" data-reveal-init>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '10px' }}>Academic Program</h2>
                        <div style={{ height: '4px', width: '80px', background: 'var(--accent)', marginBottom: '20px' }}></div>
                        <p className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 500 }}>Bachelor of Science (B.Sc.) in Nursing</p>
                    </div>

                    <div className="premium-card reveal-zoom mb-5" data-reveal-init>
                        <h3 className="text-primary mb-4" style={{ fontSize: '1.8rem' }}>Program Overview</h3>
                        <p style={{ lineHeight: '2', fontSize: '1.1rem' }} className="text-muted">
                            The B.Sc. nursing degree program is a four-year full-time program comprising eight semesters, which prepares graduates qualified to practice nursing and midwifery in a variety of settings. The curriculum is meticulously designed to foster clinical brilliance and holistic development.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <Link to="/bsc-nursing" className="btn btn-primary magnetic" style={{ padding: '15px 40px' }}>View Full Syllabus & Details &rarr;</Link>
                        </div>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }} data-reveal-init>
                        <div className="info-stats-box reveal-left">
                            <i className="fas fa-bullseye"></i>
                            <div>
                                <h4 className="text-primary" style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Program Aims</h4>
                                <p className="text-muted" style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>Develop professional competencies and ethical leadership.</p>
                            </div>
                        </div>
                        <div className="info-stats-box reveal-right">
                            <i className="fas fa-lightbulb"></i>
                            <div>
                                <h4 className="text-primary" style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Learning Objectives</h4>
                                <p className="text-muted" style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>Critical thinking and proficiency in patient care techniques.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Departments */}
                <section className="section reveal">
                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.2rem', marginBottom: '15px' }}>Departments</h2>
                        <p className="text-muted">Our specialized academic structure</p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {['Fundamentals of Nursing', 'Adult Health Nursing', 'Child Health Nursing', 'Mental Health Nursing', 'Community Health Nursing', 'Obstetrics and Gynecological Nursing'].map((dept, i) => (
                            <div key={i} className="hover-lift bg-white p-5 rounded-xl shadow-sm" style={{ borderTop: '4px solid var(--primary)' }}>
                                <h4 className="text-primary mb-4" style={{ fontSize: '1.2rem', fontWeight: 600 }}>{dept}</h4>
                                <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>Specialized training and clinical exposure in {dept.toLowerCase()}.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CourseDetails;
