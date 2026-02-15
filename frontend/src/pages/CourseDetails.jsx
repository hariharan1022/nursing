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
            <div className="inner-hero program-hero">
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
                        <p className="text-muted">Bachelor of Science (B.Sc.) in Nursing</p>
                    </div>

                    <div className="hover-lift bg-white rounded-xl shadow-md p-5 mb-5" style={{ borderLeft: '5px solid var(--primary)' }}>
                        <h3 className="text-primary mb-4">Program Overview</h3>
                        <p style={{ lineHeight: '1.8' }} className="text-muted">
                            The B.Sc. nursing degree program is a four-year full-time program comprising eight semesters, which prepares graduates qualified to practice nursing and midwifery in a variety of settings.
                        </p>
                        <div style={{ marginTop: '25px' }}>
                            <Link to="/bsc-nursing" className="btn btn-primary">View Full Syllabus & Details</Link>
                        </div>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="hover-lift bg-light rounded-lg p-5">
                            <h4 className="text-primary mb-4"><i className="fas fa-bullseye text-accent" style={{ marginRight: '10px' }}></i> Aims</h4>
                            <ul className="text-muted" style={{ paddingLeft: '20px' }}>
                                <li>Provide comprehensive nursing care knowledge.</li>
                                <li>Develop professional competencies.</li>
                                <li>Inculcate ethical values and leadership skills.</li>
                            </ul>
                        </div>
                        <div className="hover-lift bg-light rounded-lg p-5">
                            <h4 className="text-primary mb-4"><i className="fas fa-lightbulb text-accent" style={{ marginRight: '10px' }}></i> Objectives</h4>
                            <ul className="text-muted" style={{ paddingLeft: '20px' }}>
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
                        <p className="text-muted">Our specialized academic structure</p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {['Medical Surgical Nursing', 'Child Health Nursing', 'Mental Health Nursing', 'Community Health Nursing'].map((dept, i) => (
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
