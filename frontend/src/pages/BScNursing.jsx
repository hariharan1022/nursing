import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BScNursing = () => {
    const [activeSem, setActiveSem] = useState('sem1');

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal, .reveal-stagger');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [activeSem]);

    const semesters = [
        {
            id: 'sem1', label: 'Sem 1', title: 'First Semester',
            totalCredits: 24, totalHours: 720,
            subjects: [
                { code: 'ENGL101', title: 'Communicative English', tc: 2, th: 40, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 2, tth: 40 },
                { code: 'ANAT105', title: 'Applied Anatomy', tc: 3, th: 60, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'PHYS110', title: 'Applied Physiology', tc: 3, th: 60, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'SOCI115', title: 'Applied Sociology', tc: 3, th: 60, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'PSYC120', title: 'Applied Psychology', tc: 3, th: 60, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'N-NF(1)125', title: 'Nursing Foundation-I incl. First Aid Module', tc: 6, th: 120, slc: 2, slh: 80, cc: 2, ch: 160, ttc: 10, tth: 360 },
                { code: 'SSCC (I)130', title: 'Self Study/ Co-curricular Activities', tc: '-', th: '-', slc: '-', slh: 40, cc: '-', ch: 40, ttc: 3, tth: 60 }
            ]
        },
        {
            id: 'sem2', label: 'Sem 2', title: 'Second Semester',
            totalCredits: 21, totalHours: 800,
            subjects: [
                { code: 'BIOC135', title: 'Applied Biochemistry', tc: 2, th: 40, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 2, tth: 40 },
                { code: 'NUTR140', title: 'Applied Nutrition and Dietetics', tc: 3, th: 60, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'N-NF(II)125', title: 'Nursing Foundation-II incl. Health Assessment', tc: 6, th: 120, slc: 3, slh: 120, cc: 4, ch: 320, ttc: 13, tth: 560 },
                { code: 'HNIT145', title: 'Health/ Nursing Informatics', tc: 2, th: 40, slc: 1, slh: 40, cc: '-', ch: '-', ttc: 2, tth: 80 },
                { code: 'SSCC(II)130', title: 'Self Study/ Co-curricular Activities', tc: '-', th: '-', slc: '-', slh: 40, cc: '-', ch: 20, ttc: '-', tth: '-' }
            ]
        },
        {
            id: 'sem3', label: 'Sem 3', title: 'Third Semester',
            totalCredits: 19, totalHours: 800,
            subjects: [
                { code: 'MICR201', title: 'Applied Microbiology and Infection Control', tc: 2, th: 40, slc: 1, slh: '-', cc: '-', ch: '-', ttc: 2, tth: 80 },
                { code: 'PHAR(1)205', title: 'Pharmacology-I', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 1, tth: 20 },
                { code: 'PATH(1)210', title: 'Pathology-I', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 1, tth: 20 },
                { code: 'N-AHN(I)215', title: 'Adult Health Nursing-I incl. BCLS Module', tc: 7, th: 140, slc: 1, slh: 40, cc: 6, ch: '-', ttc: 11, tth: 660 },
                { code: 'SSCC(II)220', title: 'Self Study/ Co-curricular Activities', tc: '-', th: '-', slc: '-', slh: 20, cc: '-', ch: '-', ttc: '-', tth: '-' }
            ]
        },
        {
            id: 'sem4', label: 'Sem 4', title: 'Fourth Semester',
            totalCredits: 19, totalHours: 800,
            subjects: [
                { code: 'PHAR(II)205', title: 'Pharmacology-II incl. Prescribing', tc: 3, th: 60, slc: 1, slh: '-', cc: '-', ch: '-', ttc: 3, tth: 60 },
                { code: 'PATH(II)210', title: 'Pathology-II and Genetics', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 1, tth: 20 },
                { code: 'N-AHN(II)225', title: 'Adult Health Nursing-II incl. Palliative Care', tc: 7, th: 140, slc: 1, slh: 40, cc: 6, ch: '-', ttc: 12, tth: 660 },
                { code: 'PROF230', title: 'Professionalism, Values and Ethics', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: '-', ttc: 1, tth: 20 },
                { code: 'SSCC(II)220', title: 'Self Study/ Co-curricular Activities', tc: '-', th: '-', slc: '-', slh: 40, cc: '-', ch: '-', ttc: '-', tth: '-' }
            ]
        },
        {
            id: 'sem5', label: 'Sem 5', title: 'Fifth Semester',
            totalCredits: 21, totalHours: 800,
            subjects: [
                { code: 'N-CHN-I 301', title: 'Child Health Nursing-I incl. ENBC, IMNCI', tc: 3, th: 60, slc: 1, slh: 40, cc: 2, ch: '-', ttc: 5, tth: 260 },
                { code: 'N-MHN-I 305', title: 'Mental Health Nursing-I', tc: 3, th: 60, slc: 1, slh: '-', cc: '-', ch: '-', ttc: 3, tth: 140 },
                { code: 'N-COMH-I 310', title: 'Community Health Nursing-I', tc: 5, th: 100, slc: '-', slh: '-', cc: 2, ch: 160, ttc: 5, tth: 260 },
                { code: 'EDUC315', title: 'Educational Technology/ Nursing Education', tc: 2, th: 40, slc: 1, slh: 40, cc: '-', ch: '-', ttc: 2, tth: 80 },
                { code: 'N-FORN 320', title: 'Intro to Forensic Nursing and Indian Laws', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: 40, ttc: 1, tth: 20 },
                { code: 'SSCCI 325', title: 'Self Study/ Co-curricular Activities', tc: '-', th: '-', slc: '-', slh: 20, cc: '-', ch: 20, ttc: '-', tth: '-' }
            ]
        },
        {
            id: 'sem6', label: 'Sem 6', title: 'Sixth Semester',
            totalCredits: 18, totalHours: 800,
            subjects: [
                { code: 'N-CHN-II 301', title: 'Child Health Nursing-II', tc: 2, th: 40, slc: 1, slh: '-', cc: '-', ch: 80, ttc: 2, tth: 120 },
                { code: 'N-MHN-II 305', title: 'Mental Health Nursing-II', tc: 2, th: 40, slc: 2, slh: '-', cc: '-', ch: 160, ttc: 2, tth: 200 },
                { code: 'NMLE330', title: 'Nursing Management and Leadership', tc: 3, th: 60, slc: 1, slh: '-', cc: '-', ch: 80, ttc: 3, tth: 140 },
                { code: 'N-MIDW(I) 335', title: 'Midwifery/ OBG Nursing-I incl. SBA', tc: 3, th: 60, slc: 1, slh: 40, cc: 3, ch: '-', ttc: 4, tth: 340 },
                { code: 'SSCCII 325', title: 'Self Study/ Co-curricular Activities', tc: 1, th: 20, slc: '-', slh: '-', cc: '-', ch: 40, ttc: 1, tth: 20 }
            ]
        },
        {
            id: 'sem7', label: 'Sem 7', title: 'Seventh Semester',
            totalCredits: 19, totalHours: 800,
            subjects: [
                { code: 'N-COMH-II 401', title: 'Community Health Nursing-II', tc: 5, th: 100, slc: 2, slh: '-', cc: '-', ch: 160, ttc: 5, tth: 260 },
                { code: 'NRST405', title: 'Nursing Research and Statistics', tc: 2, th: 40, slc: 2, slh: '-', cc: '-', ch: 80, ttc: 3, tth: 120 },
                { code: 'N-MIDW-II 410', title: 'Midwifery/ OBG Nursing-II incl. Delivery App', tc: 3, th: 60, slc: 1, slh: '-', cc: 1, ch: 40, ttc: 4, tth: 420 }
            ]
        },
        {
            id: 'sem8', label: 'Sem 8', title: 'Eighth Semester (Internship)',
            totalHours: 1056,
            subjects: [
                { code: 'INTE415', title: 'Community Health Nursing', duration: '4 weeks', hours: 88 },
                { code: 'INTE420', title: 'Adult Health Nursing', duration: '6 weeks', hours: '-' },
                { code: 'INTE425', title: 'Child Health Nursing', duration: '4 weeks', hours: '-' },
                { code: 'INTE430', title: 'Mental Health Nursing', duration: '4 weeks', hours: '-' },
                { code: 'INTE435', title: 'Midwifery', duration: '4 weeks', hours: '-' }
            ]
        }
    ];

    const activeSemData = semesters.find(s => s.id === activeSem);

    return (
        <div className="bsc-nursing-page">
            <div className="inner-hero" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container reveal">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>BACHELOR OF SCIENCE</span>
                    <h1 style={{ fontSize: '3.5rem', margin: '20px 0' }}>B.Sc. Nursing</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                        A comprehensive four-year program preparing graduates for clinical excellence and professional leadership in nursing and midwifery.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '40px' }}>
                        <div className="reveal">
                            <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Program Description</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                The B.Sc. nursing degree program is a four-year fulltime program comprising eight semesters, which prepares B.Sc. nursing graduates qualified to practice nursing and midwifery in a variety of settings in either public/government or private healthcare settings. It adopts credit system and semester system as per the Authority guidelines with minor modifications suitable to professional education in a hybrid form.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginTop: '20px' }}>
                                The program encompasses foundational, core and elective courses. Knowledge acquisition related to wellness, health promotion, illness, disease management and care of the dying is core to nursing practice. Mastery of competencies is the main focus. Students are provided with opportunities to learn a whole range of skills in skill lab/simulated lab and clinical environment.
                            </p>
                        </div>

                        <div className="grid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                            <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '20px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}><i className="fas fa-bullseye" style={{ marginRight: '10px' }}></i>Aims of the Program</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'Prepare students with knowledge, skills, and attitudes for comprehensive care.',
                                        'Develop professional competencies through theory and clinical experience.',
                                        'Inculcate ethical values and leadership for community health challenges.'
                                    ].map((aim, i) => (
                                        <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '10px', fontSize: '0.95rem' }}>
                                            <i className="fas fa-check" style={{ color: 'var(--primary)', marginTop: '4px' }}></i>
                                            {aim}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}><i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>Objectives</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        'Develop critical thinking and decision-making skills.',
                                        'Demonstrate proficiency in nursing techniques and healthcare technology.',
                                        'Promote health and prevent illness in individuals and communities.',
                                        'Collaborate with healthcare teams to improve health outcomes.',
                                        'Commit to lifelong learning and adapt to healthcare advancements.'
                                    ].map((obj, i) => (
                                        <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '10px', fontSize: '0.95rem' }}>
                                            <i className="fas fa-star" style={{ color: 'var(--accent)', marginTop: '4px' }}></i>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-light)' }} id="curriculum">
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ color: 'var(--primary)' }}>Detailed Syllabus & Credits</h2>
                        <p>Explore the semester-wise academic breakdown and practical training components.</p>
                    </div>

                    <div className="curriculum-tabs reveal" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
                        {semesters.map(sem => (
                            <button
                                key={sem.id}
                                onClick={() => setActiveSem(sem.id)}
                                className={`btn ${activeSem === sem.id ? 'btn-primary' : 'btn-outline'}`}
                                style={{ padding: '12px 25px', borderRadius: '50px', textTransform: 'none' }}
                            >
                                {sem.label}
                            </button>
                        ))}
                    </div>

                    <div className="reveal" style={{ background: 'white', padding: '40px', borderRadius: '25px', boxShadow: 'var(--shadow-lg)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
                            <h3 style={{ color: 'var(--primary)', margin: 0 }}>{activeSemData?.title}</h3>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                {activeSemData?.totalCredits && (
                                    <div className="glass" style={{ padding: '8px 15px', borderRadius: '10px', fontSize: '0.9rem', background: 'rgba(128,0,0,0.05)', color: 'var(--primary)', fontWeight: 700 }}>
                                        Total Credits: {activeSemData.totalCredits}
                                    </div>
                                )}
                                <div className="glass" style={{ padding: '8px 15px', borderRadius: '10px', fontSize: '0.9rem', background: 'rgba(255,215,0,0.1)', color: 'var(--primary-dark)', fontWeight: 700 }}>
                                    Total Hours: {activeSemData?.totalHours}
                                </div>
                            </div>
                        </div>

                        <div className="syllabus-table-wrapper">
                            <table className="syllabus-table">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Subject Title</th>
                                        {activeSem !== 'sem8' ? (
                                            <>
                                                <th title="Theory Credits">TC</th>
                                                <th title="Theory Hours">TH</th>
                                                <th title="Skill Lab Credits">SLC</th>
                                                <th title="Skill Lab Hours">SLH</th>
                                                <th title="Clinical Credits">CC</th>
                                                <th title="Clinical Hours">CH</th>
                                                <th title="Total Subject Credits">Total Credits</th>
                                            </>
                                        ) : (
                                            <>
                                                <th>Duration</th>
                                                <th>Clinical Hours</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeSemData?.subjects.map((sub, i) => (
                                        <tr key={i}>
                                            <td style={{ fontWeight: 800, color: 'var(--primary)' }}>{sub.code}</td>
                                            <td style={{ fontWeight: 600 }}>{sub.title}</td>
                                            {activeSem !== 'sem8' ? (
                                                <>
                                                    <td>{sub.tc}</td>
                                                    <td>{sub.th}</td>
                                                    <td>{sub.slc}</td>
                                                    <td>{sub.slh}</td>
                                                    <td>{sub.cc}</td>
                                                    <td>{sub.ch}</td>
                                                    <td style={{ fontWeight: 800, color: 'var(--primary)', background: 'rgba(128,0,0,0.02)' }}>{sub.ttc}</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>{sub.duration}</td>
                                                    <td>{sub.hours}</td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {activeSem !== 'sem8' && (
                            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <span>* TC: Theory Credits</span>
                                <span>* TH: Theory Hours</span>
                                <span>* SLC: Skill Lab Credits</span>
                                <span>* SLH: Skill Lab Hours</span>
                                <span>* CC: Clinical Credits</span>
                                <span>* CH: Clinical Hours</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="section reveal">
                <div className="container">
                    <div style={{ background: 'var(--primary)', borderRadius: '30px', padding: '60px', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{ color: 'var(--accent)', marginBottom: '20px' }}>Ready to start your nursing career?</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>Join Mount Zion College of Nursing and become a qualified professional nurse.</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                <Link to="/admissions" className="btn btn-primary" style={{ background: 'var(--accent)', color: 'var(--primary)', padding: '15px 40px' }}>ADMISSION INFO</Link>
                                <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '15px 40px' }}>CONTACT US</Link>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BScNursing;
