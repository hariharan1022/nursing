import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClubsAndCells = () => {
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

    const committees = [
        {
            id: 'curriculum', title: 'Curriculum Committee', icon: 'fa-book-open',
            desc: 'Designing and updating academic programs to meet regulatory standards and professional requirements.',
            objectives: ['Align with INC, TNNMC & MGR University standards', 'Integrate theory and practice effectively', 'Promote evidence-based nursing practices'],
            members: [{ n: 'Mrs. Florence Jayabharathan', d: 'Chairperson' }, { n: 'Dr. Jayson K Jayabharathan', d: 'Director' }, { n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }]
        },
        {
            id: 'anti-ragging', title: 'Anti-Ragging Committee', icon: 'fa-ban',
            desc: 'Dedicated to preventing and addressing instances of ragging within the college campus with zero tolerance.',
            objectives: ['Strict adherence to national anti-ragging laws', 'Awareness programs for freshers and seniors', 'Zero-tolerance policy against any form of bullying'],
            members: [{ n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' }, { n: 'Mrs. G. Unaisy Vinolin', d: 'Associate Professor' }]
        },
        {
            id: 'student-welfare', title: "Student's Welfare Committee", icon: 'fa-user-graduate',
            desc: 'Addressing the needs and overall well-being of students to create a supportive success environment.',
            objectives: ['Emotional well-being through counseling', 'Facilitating student-led campus initiatives', 'Addressing academic and non-academic grievances'],
            members: [{ n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' }, { n: 'Mrs. Nagajothi', d: 'Assistant Professor' }]
        },
        {
            id: 'grievance', title: 'Grievance Redressal Cell', icon: 'fa-comment-dots',
            desc: 'Providing a confidential and fair platform for students and staff to resolve their concerns and complaints.',
            objectives: ['Timely resolution of issues', 'Impartial investigation processes', 'Maintaining campus harmony and transparency'],
            members: [{ n: 'Mrs. Florence Jayabharathan', d: 'Chairperson' }, { n: 'Dr. Jayson K Jayabharathan', d: 'Director' }, { n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }]
        },
        {
            id: 'research', title: 'Research Committee', icon: 'fa-microscope',
            desc: 'Fostering a culture of scientific inquiry and inquiry-driven clinical practice among students and faculty.',
            objectives: ['Encouraging student research projects', 'Ethical clearance for scientific studies', 'Guiding publications in indexed journals'],
            members: [{ n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' }, { n: 'Mrs. Saraswathy', d: 'Assistant Professor' }]
        },
        {
            id: 'sports', title: 'Sports Committee', icon: 'fa-running',
            desc: 'Promoting physical fitness, teamwork, and healthy competition alongside rigorous academic schedules.',
            objectives: ['Organizing annual sports meets', 'Inter-collegiate tournament participation', 'Nurturing leadership through team dynamics'],
            members: [{ n: 'Dr. Jayson K Jayabharathan', d: 'Director' }, { n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Mr. Selva Kannan', d: 'Physical Director' }]
        },
        {
            id: 'eco-friendly', title: 'Eco-Friendly Committee', icon: 'fa-leaf',
            desc: 'Promoting environmental awareness and sustainability within the campus through green initiatives.',
            objectives: ['Plastic-free campus initiatives', 'Tree plantation and gardening drives', 'Environmental awareness workshops'],
            members: [{ n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' }, { n: 'Mrs. Sutha', d: 'Staff In-charge' }]
        },
        {
            id: 'thought-flow', title: 'Rationalized Thought Flow', icon: 'fa-brain',
            desc: 'Fostering critical thinking and ethical reasoning for complex healthcare decision-making.',
            objectives: ['Critical analysis of nursing scenarios', 'Logical reasoning development', 'Ethical dilemma explorations'],
            members: [{ n: 'Dr. H.M. Jasmine Sheela', d: 'Principal' }, { n: 'Mrs. Unaisy Vinolin', d: 'Staff In-charge' }, { n: 'Mr. Jabez Daniel', d: 'Student Representative' }]
        }
    ];

    return (
        <div className="clubs-cells-page">
            <div className="inner-hero" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>COMMITTEES & CELLS</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }} className="reveal">Empowering Excellence</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Our various committees and cells ensure a balanced, safe, and progressive environment for academic and personal growth.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="grid grid-cols-2 md-grid-cols-1" style={{ gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '40px', alignItems: 'start' }}>
                        {/* Interactive Sidebar */}
                        <aside className="reveal" style={{ background: 'white', padding: '30px', borderRadius: '25px', boxShadow: 'var(--shadow-md)', position: 'sticky', top: '120px' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px' }}>Quick Navigation</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {committees.map(c => (
                                    <li key={c.id} style={{ marginBottom: '15px' }}>
                                        <a href={`#${c.id}`} style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, display: 'block', transition: 'color 0.3s' }} className="hover-primary">
                                            {c.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Committee Content */}
                        <div className="committees-list">
                            {committees.map((c, idx) => (
                                <div key={c.id} id={c.id} className="reveal" style={{
                                    background: 'white', padding: '40px', borderRadius: '30px',
                                    boxShadow: 'var(--shadow-lg)', borderLeft: '8px solid var(--primary)',
                                    marginBottom: '40px'
                                }}>
                                    <div style={{ display: 'flex', gap: '25px', marginBottom: '20px', alignItems: 'center' }}>
                                        <div style={{
                                            width: '60px', height: '60px', background: 'var(--bg-light)',
                                            color: 'var(--primary)', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', borderRadius: '15px', fontSize: '1.5rem'
                                        }}>
                                            <i className={`fas ${c.icon}`}></i>
                                        </div>
                                        <h2 style={{ color: 'var(--primary)', margin: 0 }}>{c.title}</h2>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '30px' }}>{c.desc}</p>

                                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Key Objectives:</h4>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {c.objectives.map((obj, i) => (
                                                    <li key={i} style={{ marginBottom: '12px', paddingLeft: '30px', position: 'relative', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                                        <i className="fas fa-check-circle" style={{ position: 'absolute', left: 0, color: 'var(--accent)', top: '4px' }}></i>
                                                        {obj}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Committee Members:</h4>
                                            <div style={{ overflowX: 'auto' }}>
                                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                                    <thead>
                                                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                                                            <th style={{ padding: '10px 0' }}>Name</th>
                                                            <th style={{ padding: '10px 0' }}>Position</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {c.members.map((m, i) => (
                                                            <tr key={i} style={{ borderBottom: '1px solid #f9f9f9' }}>
                                                                <td style={{ padding: '10px 0', fontWeight: 600 }}>{m.n}</td>
                                                                <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>{m.d}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClubsAndCells;
