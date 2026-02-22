import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClubsAndCells = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 120,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [location.hash]);

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
            desc: 'The Curriculum Committee plans, designs, evaluates, and updates the academic curriculum to ensure alignment with regulatory requirements, current healthcare practices, and professional nursing competencies.',
            objectives: [
                'Design a comprehensive curriculum integrating theory, practice, and ethics',
                'Ensure compliance with INC, University, and regulatory standards',
                'Incorporate evidence-based practices and recent advancements',
                'Promote holistic and competency-based education',
                'Facilitate clinical skill development and simulations',
                'Encourage student and faculty feedback',
                'Monitor curriculum effectiveness and learning outcomes',
                'Promote lifelong learning and global competencies'
            ],
            members: [
                { n: 'Prof. Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Prof. Mrs. Sathiya', d: 'Professor' },
                { n: 'Prof. Mrs. Unaisy Vinolin G', d: 'Professor' }
            ]
        },
        {
            id: 'staff-welfare', title: 'Staff Welfare Committee', icon: 'fa-users-cog',
            desc: 'Promotes the physical, mental, and professional well-being of teaching and non-teaching staff and fosters a positive work environment.',
            objectives: [
                'Promote staff health and well-being',
                'Support professional development and skill enhancement',
                'Enhance job satisfaction and morale',
                'Encourage work–life balance',
                'Facilitate welfare and support services'
            ],
            members: [
                { n: 'Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Mrs. Nagajothi', d: 'Assistant Professor' },
                { n: 'Mrs. Sutha P', d: 'Assistant Professor' }
            ]
        },
        {
            id: 'student-welfare', title: "Student's Welfare Committee", icon: 'fa-user-graduate',
            desc: 'Ensures holistic development, emotional well-being, academic support, and safety of students.',
            objectives: [
                'Support academic, personal, and professional growth',
                'Provide counseling and emotional support',
                'Address student concerns and grievances',
                'Promote inclusivity and safety',
                'Facilitate financial aid and scholarships',
                'Encourage extracurricular participation'
            ],
            members: [
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Prof. Mrs. Unaisy Vinolin G', d: 'Professor' },
                { n: 'Mrs. Sivakami', d: 'Assistant Professor' }
            ]
        },
        {
            id: 'discipline', title: 'Student Disciplinary Committee', icon: 'fa-gavel',
            desc: 'Maintains discipline and upholds ethical conduct and professional behavior among students.',
            objectives: [
                'Enforce rules and code of conduct',
                'Promote ethical and responsible behavior',
                'Address misconduct and resolve conflicts',
                'Ensure a safe and respectful campus',
                'Educate students on disciplinary policies'
            ],
            members: [
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Prof. Unaisy Vinolin G', d: 'Professor' },
                { n: 'Mrs. Nagajothi', d: 'Assistant Professor' },
                { n: 'Mrs. Sutha P', d: 'Assistant Professor' },
                { n: 'Mrs. Sivakami', d: 'Assistant Professor' },
                { n: 'Ms. Anitha', d: 'Tutor' },
                { n: 'Mr. Jabez Monison', d: 'Tutor' }
            ]
        },
        {
            id: 'anti-ragging', title: 'Anti-Ragging Committee', icon: 'fa-ban',
            desc: 'Committed to maintaining a ragging-free, safe, and inclusive campus, ensuring that every student can pursue education with dignity, security, and confidence, in accordance with UGC Regulations.',
            objectives: [
                'Prevent and prohibit ragging in any form within the campus, hostel, and clinical areas',
                'Create awareness regarding anti-ragging laws and penalties',
                'Receive, investigate, and promptly address complaints',
                'Provide emotional and psychological support to affected students',
                'Enforce strict disciplinary action as per UGC norms'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal', e: 'principal@mzcn.in', p: '9965520316' },
                { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal', e: 'viceprincipal@mzcn.in', p: '9965566664' },
                { n: 'Mrs. G. Unaisy Vinolin', d: 'Associate Professor', e: 'unaisy@mzcn.in', p: '9791283281' },
                { n: 'Mrs. Sutha', d: 'Assistant Professor', e: 'sutha@mzcn.in', p: '9600763826' },
                { n: 'Ms. Anitha', d: 'Tutor', p: '9360638254' }
            ],
            extra: {
                title: 'Functions',
                icon: 'fa-cog',
                list: [
                    'Conduct anti-ragging awareness programs and orientations',
                    'Maintain continuous vigilance, especially during admission periods',
                    'Ensure confidentiality and protection of complainants',
                    'Coordinate with college administration for preventive measures'
                ]
            },
            phone: 'Students may report incidents directly to any member without fear.'
        },
        {
            id: 'grievance', title: 'Student Grievance Redressal Committee (SGRC)', icon: 'fa-comment-dots',
            desc: 'Ensures fair, transparent, and timely resolution of student grievances related to academic, administrative, or personal matters as per UGC Regulations.',
            objectives: [
                'Provide an accessible platform for student grievances',
                'Ensure impartial and time-bound resolution of complaints',
                'Safeguard student rights and promote accountability',
                'Maintain a positive student-friendly environment'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' },
                { n: 'Mrs. Sivakami', d: 'Assistant Professor' },
                { n: 'Mr. Sundar', d: 'Tutor' },
                { n: 'Ms. Anitha', d: 'Tutor' },
                { n: 'SNA Vice President', d: 'Student Representative' }
            ],
            extra: {
                title: 'Scope of Grievances',
                icon: 'fa-search-plus',
                list: [
                    'Academic matters',
                    'Administrative issues',
                    'Infrastructure and facilities',
                    'Examination-related concerns',
                    'Harassment or unfair treatment'
                ]
            },
            email: 'grievance@mzcn.in',
            note: 'Response Time: Within 15 working days'
        },
        {
            id: 'counseling', title: 'Guidance & Counseling Committee', icon: 'fa-hands-helping',
            desc: 'Provides academic, career, and psychological support to help students cope with stress, personal challenges, and career decisions in a confidential manner.',
            objectives: [
                'Provide academic guidance and mentoring',
                'Support emotional and psychological well-being',
                'Offer career counseling and professional guidance',
                'Promote preventive mental health practices',
                'Assist in conflict resolution and personal development'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' },
                { n: 'Mrs. G. Unaisy Vinolin', d: 'Associate Professor' },
                { n: 'Mrs. Nagajothi', d: 'Assistant Professor' },
                { n: 'Mrs. Saraswathy', d: 'Assistant Professor' },
                { n: 'Mrs. Sutha', d: 'Assistant Professor' },
                { n: 'Mrs. Sivagami', d: 'Assistant Professor' }
            ],
            extra: {
                title: 'Services Offered',
                icon: 'fa-heartbeat',
                list: [
                    'Individual and group counseling sessions',
                    'Stress management and coping skills workshops',
                    'Career guidance and higher education counseling',
                    'Referral to professional psychologists when required'
                ]
            },
            email: 'counseling@mzcn.in',
            note: 'All counseling services are strictly confidential.'
        },
        {
            id: 'library', title: 'Library Committee', icon: 'fa-book-reader',
            desc: 'Oversees library resources, services, and infrastructure to support academic excellence and research.',
            objectives: [
                'Ensure availability of updated resources',
                'Promote effective library usage',
                'Support research and digital access',
                'Encourage reading culture'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Mr. Sundar V', d: 'Tutor (Library In-charge)' }
            ]
        },
        {
            id: 'research', title: 'Research Committee', icon: 'fa-microscope',
            desc: 'Promotes research culture and evidence-based nursing education and practice among students and faculty.',
            objectives: [
                'Encourage faculty and student research',
                'Facilitate funding and collaborations',
                'Support publication and dissemination',
                'Monitor research quality and output'
            ],
            members: [
                { n: 'Prof. Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Prof. Sathiya', d: 'Professor' },
                { n: 'Prof. Unaisy Vinolin G', d: 'Professor' },
                { n: 'Mrs. Nagajothi', d: 'Assistant Professor' },
                { n: 'Mrs. Sutha P', d: 'Assistant Professor' },
                { n: 'Mrs. Saraswathy', d: 'Assistant Professor' },
                { n: 'Mrs. Sivakami', d: 'Assistant Professor' },
                { n: 'Mrs. Antony Asha', d: 'Assistant Professor' }
            ]
        },
        {
            id: 'ethical', title: 'Ethical Committee', icon: 'fa-balance-scale',
            desc: 'Ensures ethical compliance of research as per ICMR guidelines and protects the rights of research participants.',
            objectives: [
                'Protect research participants from harm',
                'Approve and monitor research ethics',
                'Promote integrity in scientific inquiry'
            ],
            members: [
                { n: 'Prof. Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Prof. Sathiya', d: 'Professor' },
                { n: 'Prof. Unaisy Vinolin G', d: 'Professor' },
                { n: 'Mrs. Nagajothi', d: 'Assistant Professor' }
            ]
        },
        {
            id: 'sports', title: 'Sports Committee', icon: 'fa-running',
            desc: 'Promotes physical fitness, teamwork, and sportsmanship among students and faculty.',
            objectives: [
                'Organize annual sports meets',
                'Coordinate inter-collegiate tournament participation',
                'Nurture leadership through outdoor activities'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Mr. Selva Kannan', d: 'Physical Director' },
                { n: 'Student Representative', d: 'Member' }
            ]
        },
        {
            id: 'health-food', title: 'Health and Food Committee', icon: 'fa-utensils',
            desc: 'Ensures nutritional well-being, food safety, and health awareness within the campus ecosystem.',
            objectives: [
                'Maintain high standards of food hygiene',
                'Monitor nutritional content of meals',
                'Conduct health awareness programs'
            ],
            members: [
                { n: 'Prof. Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Mrs. Saraswathy', d: 'Staff In-charge' },
                { n: 'Student Representative', d: 'Member' }
            ]
        },
        {
            id: 'recreational', title: 'Recreational Committee', icon: 'fa-palette',
            desc: 'Encourages leisure, creativity, and stress relief through various cultural and recreational activities.',
            objectives: [
                'Organize cultural events and festivals',
                'Provide platforms for artistic expression',
                'Promote student engagement beyond academics'
            ],
            members: [
                { n: 'Prof. Dr. Jerin Kumar J', d: 'Vice Principal' },
                { n: 'Mrs. Sutha P', d: 'Staff In-charge' },
                { n: 'Student Representative', d: 'Member' }
            ]
        },
        {
            id: 'editorial', title: 'Educational & Editorial Committee', icon: 'fa-pen-fancy',
            desc: 'Promotes academic activities, publications, and intellectual engagement through newsletters and journals.',
            objectives: [
                'Manage institutional publications',
                'Coordinate webinars and seminars',
                'Foster scientific writing skills'
            ],
            members: [
                { n: 'Prof. Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Mrs. Sivogami', d: 'Assistant Professor' },
                { n: 'Staff Representative', d: 'Member' }
            ]
        },
        {
            id: 'eco-friendly', title: 'Eco-Friendly Committee', icon: 'fa-leaf',
            desc: 'Promotes environmental sustainability and green initiatives within the campus through awareness and action.',
            objectives: [
                'Plastic-free campus initiatives',
                'Tree plantation and gardening drives',
                'Environmental awareness workshops'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Dr. J. Jerin Kumar', d: 'Vice Principal' },
                { n: 'Mrs. Sutha', d: 'Staff In-charge' }
            ]
        },
        {
            id: 'thought-flow', title: 'Rationalized Thought Flow Committee', icon: 'fa-brain',
            desc: 'Develops critical thinking, ethical reasoning, and problem-solving skills for complex healthcare scenarios.',
            objectives: [
                'Critical analysis of nursing cases',
                'Logical reasoning development',
                'Ethical dilemma exploration'
            ],
            members: [
                { n: 'Dr. H. M. Jasmine Sheela', d: 'Principal' },
                { n: 'Mrs. Unaisy Vinolin', d: 'Staff In-charge' },
                { n: 'Student Representative', d: 'Member' }
            ]
        }
    ];

    return (
        <div className="clubs-cells-page">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        COMMITTEES & CELLS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Empowering Excellence
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
                        Our various committees and cells ensure a balanced, safe, and progressive environment for academic and personal growth.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="page-grid">
                        {/* Interactive Sidebar */}
                        <aside className="about-nav-card reveal sidebar-col" style={{ top: '120px' }}>
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
                        <div className="committees-list content-col">
                            {committees.map((c, idx) => (
                                <div key={c.id} id={c.id} className="club-card reveal">
                                    <div className="club-header">
                                        <div className="club-icon-box">
                                            <i className={`fas ${c.icon}`}></i>
                                        </div>
                                        <h2 style={{ color: 'var(--primary)', margin: 0 }}>{c.title}</h2>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '30px' }}>{c.desc}</p>

                                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Key Objectives:</h4>
                                            <ul className="club-objectives-list" style={{ listStyle: 'none', padding: 0 }}>
                                                {c.objectives.map((obj, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-check-circle"></i>
                                                        {obj}
                                                    </li>
                                                ))}
                                            </ul>
                                            {c.extra && (
                                                <div style={{ marginTop: '25px' }}>
                                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{c.extra.title}:</h4>
                                                    <ul className="club-objectives-list" style={{ listStyle: 'none', padding: 0 }}>
                                                        {c.extra.list.map((item, i) => (
                                                            <li key={i}>
                                                                <i className={`fas ${c.extra.icon || 'fa-plus-circle'}`} style={{ color: 'var(--accent)' }}></i>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Committee Members:</h4>
                                            <div style={{ overflowX: 'auto' }}>
                                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                                    <thead>
                                                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                                                            <th style={{ padding: '10px 0' }}>Name</th>
                                                            <th style={{ padding: '10px 0' }}>Position</th>
                                                            <th style={{ padding: '10px 0' }}>Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {c.members.map((m, i) => (
                                                            <tr key={i} style={{ borderBottom: '1px solid #f9f9f9' }}>
                                                                <td style={{ padding: '10px 0', fontWeight: 600 }}>{m.n}</td>
                                                                <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>{m.d}</td>
                                                                <td style={{ padding: '10px 0', fontSize: '0.8rem' }}>
                                                                    {m.e && <div style={{ color: 'var(--accent)' }}><i className="fas fa-envelope" style={{ width: '15px' }}></i> {m.e}</div>}
                                                                    {m.p && <div style={{ color: 'var(--text-muted)' }}><i className="fas fa-phone" style={{ width: '15px' }}></i> {m.p}</div>}
                                                                    {!m.e && !m.p && '-'}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {(c.email || c.phone || c.note) && (
                                                <div style={{ marginTop: '20px', padding: '15px', background: 'var(--bg-light)', borderRadius: '10px', fontSize: '0.9rem' }}>
                                                    {c.email && <div style={{ marginBottom: '5px' }}><strong><i className="fas fa-envelope" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>Email:</strong> {c.email}</div>}
                                                    {c.phone && <div style={{ marginBottom: '5px' }}><strong><i className="fas fa-info-circle" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>Notice:</strong> {c.phone}</div>}
                                                    {c.note && <div><strong><i className="fas fa-clock" style={{ marginRight: '8px', color: 'var(--accent)' }}></i>Note:</strong> {c.note}</div>}
                                                </div>
                                            )}
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
