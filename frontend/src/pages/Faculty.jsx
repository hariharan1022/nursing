import React, { useEffect } from 'react';

const Faculty = () => {
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

    const departments = [
        {
            name: 'Child Health (Pediatric) Nursing',
            staff: [
                { name: 'Dr. H.M. Jasmine Sheela', qual: 'PhD. Nursing', post: 'Principal', spec: 'Child Health' },
                { name: 'Mrs. Sathiya', qual: 'M.Sc. Nursing', post: 'Professor', spec: 'Child Health' },
                { name: 'Mrs. Aarthika', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' }
            ]
        },
        {
            name: 'Mental Health (Psychiatric) Nursing',
            staff: [
                { name: 'Dr. Jerin Kumar. J', qual: 'Ph.D. Nursing', post: 'Vice Principal', spec: 'Psychiatric' },
                { name: 'Mrs. Unaisy Vinolini', qual: 'M.Sc. Nursing', post: 'Associate Professor', spec: 'Psychiatric' },
                { name: 'Mrs. Prithika', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' }
            ]
        },
        {
            name: 'Medical and Surgical Nursing',
            staff: [
                { name: 'Mrs. Nagajothi', qual: 'M.Sc. Nursing', post: 'Assistant Professor', spec: 'Medical & Surgical' },
                { name: 'Ms. Haripriya', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' },
                { name: 'Ms. Yogeshwari. R', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' }
            ]
        },
        {
            name: 'Fundamentals of Nursing',
            staff: [
                { name: 'Mrs. Sivakami. G', qual: 'M.Sc. Nursing', post: 'Assistant Professor', spec: 'Medical & Surgical' },
                { name: 'Ms. Viveka. C', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' },
                { name: 'Mrs. Sumithra', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' }
            ]
        },
        {
            name: 'Community Health Nursing',
            staff: [
                { name: 'Mrs. Saraswathy', qual: 'M.Sc. Nursing', post: 'Assistant Professor', spec: 'Community Health' },
                { name: 'Mr. Ebinesar. J', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' },
                { name: 'Mrs. Mariyammal', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' }
            ]
        },
        {
            name: 'Obstetric & Gynecological Nursing',
            staff: [
                { name: 'Mrs. Sutha', qual: 'M.Sc. Nursing', post: 'Assistant Professor', spec: 'OBG' },
                { name: 'Mrs. Balasundari', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'General' },
                { name: 'Ms. Priscilla Jancy', qual: 'B.Sc. Nursing', post: 'Tutor', spec: 'OBG' }
            ]
        }
    ];

    return (
        <div className="faculty-page">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        ACADEMIC TEAM
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Department Faculty
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
                        Our team of dedicated and qualified nursing professionals.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    {/* Leadership Bio - Principal */}
                    <div className="reveal grid grid-cols-2 md-grid-cols-1" style={{
                        gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '40px',
                        background: 'white', padding: '40px', borderRadius: '30px',
                        boxShadow: 'var(--shadow-lg)', marginBottom: '40px', borderLeft: '10px solid var(--accent)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ padding: '10px', border: '5px solid var(--bg-light)', borderRadius: '20px', marginBottom: '15px' }}>
                                <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" style={{ width: '100%', borderRadius: '12px' }} />
                            </div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Prof. Dr. Jasmine Sheela</h4>
                            <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem' }}>PRINCIPAL, Ph.D.</span>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.8rem' }}>Principal's Perspective</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'justify', fontSize: '0.95rem' }}>
                                Prof. Dr. Jasmine Sheela embarked on her remarkable nursing journey as a Registered Nurse and Midwife (RN RM) in 1990. With 8 years of clinical expertise and 20 years of teaching experience, she has served as the Principal of Mount Zion College of Nursing for 14 years. Her expertise includes curriculum planning, policy development, and integrating innovative teaching methodologies into nursing education.
                            </p>
                        </div>
                    </div>

                    {/* Leadership Bio - Vice Principal */}
                    <div className="reveal grid grid-cols-2 md-grid-cols-1" style={{
                        gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '40px',
                        background: 'white', padding: '40px', borderRadius: '30px',
                        boxShadow: 'var(--shadow-lg)', marginBottom: '60px', borderLeft: '10px solid var(--accent)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ padding: '10px', border: '5px solid var(--bg-light)', borderRadius: '20px', marginBottom: '15px' }}>
                                <img src={`${import.meta.env.BASE_URL}photo/Vice%20Principal.png`} alt="Vice Principal" style={{ width: '100%', borderRadius: '12px' }} />
                            </div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Prof. Dr. Jerin Kumar J</h4>
                            <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem' }}>VICE PRINCIPAL, Ph.D.</span>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.8rem' }}>Vice Principal's Perspective</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'justify', fontSize: '0.95rem' }}>
                                Prof. Dr. Jerin Kumar J serves as the Vice Principal with over 15 years of teaching experience. He holds a Ph.D. in Nursing and Master's degrees in both Mental Health Nursing and Counseling & Psychotherapy. His work focuses on mental health, suicide prevention, and innovative nursing practices, contributing significantly through research papers in reputed journals.
                            </p>
                        </div>
                    </div>

                    <h2 style={{ color: 'var(--primary)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }} className="reveal">Departmental Faculty</h2>

                    {/* Department Tables */}
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))', gap: '30px' }}>
                        {departments.map((dept, idx) => (
                            <div key={idx} className="reveal" style={{
                                background: 'white', padding: '30px', borderRadius: '20px',
                                boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)'
                            }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>{dept.name}</h3>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead style={{ background: 'var(--bg-light)', color: 'var(--primary)' }}>
                                            <tr>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>S.No</th>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>Name</th>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>Qualification</th>
                                                <th style={{ padding: '15px', textAlign: 'left' }}>Designation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dept.staff.map((s, i) => (
                                                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                                    <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{i + 1}</td>
                                                    <td style={{ padding: '15px', fontWeight: 600 }}>{s.name}</td>
                                                    <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{s.qual}</td>
                                                    <td style={{ padding: '15px', color: 'var(--primary-light)', fontWeight: 700 }}>{s.post}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
