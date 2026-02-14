import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
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

    return (
        <div className="about-page">
            {/* Inner Hero */}
            <div className="inner-hero">
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>PREMIER INSTITUTION</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>About Our Institution</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Mount Zion College of Nursing is committed to nurturing future nursing professionals with excellence, compassion, and spiritual leadership.
                    </p>
                </div>
            </div>

            {/* About Section Content */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 md-grid-cols-1" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '60px', alignItems: 'start' }}>
                        {/* Sidebar Navigation */}
                        <div className="about-nav-card" style={{ position: 'sticky', top: '100px' }}>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Identity</h2>
                            <div className="motto-card" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', padding: '30px', borderRadius: '12px', color: 'white', marginBottom: '30px', position: 'relative', overflow: 'hidden' }}>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Our Motto</h4>
                                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.9, textAlign: 'center' }}>"To make man whole."</p>
                            </div>
                            <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Quick Links</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '10px' }}><Link to="/about#leadership" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Our Leadership</Link></li>
                                    <li style={{ marginBottom: '10px' }}><Link to="/about#vision" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Vision & Mission</Link></li>
                                    <li style={{ marginBottom: '10px' }}><Link to="/about#idp" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Development Plan</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-content">
                            <div id="profile" style={{ marginBottom: '60px' }} className="reveal">
                                <span className="estd-tag" style={{ background: 'var(--primary)', color: 'white' }}>ESTABLISHED 2009</span>
                                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '15px 0' }}>Institution Profile</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                                    Mount Zion College of Nursing is a premier institution dedicated to nurturing future nursing
                                    professionals. Affiliated with The Tamil Nadu Dr. M.G.R. Medical University and approved by
                                    the Indian Nursing Council (INC) and Tamil Nadu Nurses and Midwives Council, our college
                                    offers a robust four-year B.Sc. Nursing degree program.
                                </p>
                            </div>

                            <div id="vision" style={{ marginBottom: '60px', paddingTop: '20px' }} className="reveal">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>
                                    Vision & Mission
                                </h3>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ color: 'var(--primary-light)' }}>Vision</h4>
                                    <p>Mount Zion Institutions will be the preferred choice of all those who aspire for excellence.</p>
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{ color: 'var(--primary-light)' }}>Mission</h4>
                                    <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                        <li>Provide education of the highest quality.</li>
                                        <li>Empower students to meet global healthcare challenges.</li>
                                        <li>Foster attitudes for a sustainable environment.</li>
                                        <li>Focus on mental, physical, and spiritual holistic excellence.</li>
                                        <li>Synergize excellence through a wholesome ambience.</li>
                                        <li>Train for competence and selfless service.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="idp" style={{ marginBottom: '60px', paddingTop: '20px' }} className="reveal">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>
                                    Institutional Development Plan (IDP)
                                </h3>
                                <div className="grid grid-cols-2 sm-grid-cols-1" style={{ gap: '20px' }}>
                                    <div className="idp-card" style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                        <i className="fas fa-hospital" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>MZ Multispecialty Hospital</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Developing a 150-bedded hospital with specialized palliative care.</p>
                                    </div>
                                    <div className="idp-card" style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                        <i className="fas fa-graduation-cap" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Academic Autonomy</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Strategizing to achieve autonomous status by the year 2030.</p>
                                    </div>
                                    <div className="idp-card" style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                        <i className="fas fa-vial" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Centers of Excellence</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>High-fidelity simulation labs for advanced clinical skills.</p>
                                    </div>
                                    <div className="idp-card" style={{ padding: '20px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                        <i className="fas fa-medal" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>NAAC Excellence</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Working towards an "A" grade in the NAAC accreditation.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="organogram" style={{ marginBottom: '60px', paddingTop: '20px' }} className="reveal">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>
                                    Organogram
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                                    The organizational structure of Mount Zion College of Nursing follows a systematic hierarchy to ensure effective administration and academic excellence.
                                </p>
                                <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--primary-light)' }}>
                                    <i className="fas fa-sitemap" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '15px', opacity: 0.5 }}></i>
                                    <h4 style={{ color: 'var(--primary)' }}>View Organizational Chart</h4>
                                    <a href={`${import.meta.env.BASE_URL}photo/Organogram MZCN.jpg`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '15px', display: 'inline-block' }}>Open Full Organogram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section" style={{ background: 'var(--bg-light)' }} id="leadership">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '60px' }} className="reveal">Our Leadership</h2>

                    {/* Founder */}
                    <div id="chairman" className="grid grid-cols-2 md-grid-cols-1 reveal" style={{ gridTemplateColumns: '1fr 2fr', gap: '40px', background: 'white', padding: '40px', borderRadius: '20px', marginBottom: '40px', borderLeft: '5px solid var(--accent)' }}>
                        <div className="leader-img">
                            <div style={{ padding: '10px', border: '2px solid var(--primary-light)', borderRadius: '12px', maxWidth: '300px', margin: '0 auto' }}>
                                <img src={`${import.meta.env.BASE_URL}photo/FOUNDER.png`} alt="Founder" style={{ width: '100%', borderRadius: '8px' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '15px' }}>
                                <h4 style={{ color: 'var(--primary)' }}>Mr. Jayabarathan Chelliah</h4>
                                <small>Founder Chairman, M.A. (USA), B.Ed.</small>
                            </div>
                        </div>
                        <div className="leader-bio">
                            <h3 style={{ color: 'var(--primary)' }}>Tribute to Our Founder</h3>
                            <p style={{ marginTop: '15px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                                Mr. Jayabarathan Chelliah, was the Founder-Chairman of Mount Zion Christian Education Trust. Under his able leadership the
                                first school which was started in 1988 grew into many institutions. He held a bachelor's degree
                                in science from Alagappa University, Karaikudi, Tamil Nadu, a bachelor's degree in education
                                from Calicut University, Kerala. He graduated in June, 1978 with a master's degree in
                                Educational administration from the prestigious Loma Linda University, California, U.S.A. He was
                                also an honoured alumnus of Loma Linda University, California, USA. He was also presented the
                                Dr. Radhakrishnan (Nallasiriyar) Award by the Governemnt of Tamil Nadu. The institutions he
                                started will continue to strive to reach the lofty ideals he envisioned.
                            </p>
                        </div>
                    </div>

                    {/* Institutional Trust Leadership */}
                    <div id="trustees" style={{ marginBottom: '60px' }} className="reveal">
                        <h3 style={{ color: 'var(--primary)', borderLeft: '4px solid var(--accent)', paddingLeft: '15px', marginBottom: '30px' }}>
                            Institutional Trust
                        </h3>
                        <div className="grid grid-cols-3 md-grid-cols-1" style={{ gap: '30px' }}>
                            {/* Chairperson */}
                            <div className="leader-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ width: '140px', height: '140px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--bg-light)', flexShrink: 0 }}>
                                    <img src={`${import.meta.env.BASE_URL}photo/CHAIRPERSON.png`} alt="Chairperson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--primary)' }}>Mrs. Florence Jayabarathan</h4>
                                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '15px' }}>
                                    Chairperson, M.A., B.Ed.
                                </p>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'justify', flexGrow: 1 }}>
                                    Mrs. Florence Jayabarathan is the Chairperson of the Mount Zion Christian Educational Trust
                                    which sponsors Mount Zion College of Engineering and Technology. She along with her husband
                                    and founding chairman Mr. Jayabarathan Chelliah started the Mount Zion Institutions in
                                    Pudukkottai District. She is a dedicated teacher and motivates teachers and students to
                                    perform to their fullest.
                                </div>
                            </div>

                            {/* Director */}
                            <div id="director" className="leader-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ width: '140px', height: '140px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--bg-light)', flexShrink: 0 }}>
                                    <img src={`${import.meta.env.BASE_URL}photo/DIRECTOR.png`} alt="Director" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--primary)' }}>Prof. Jayson Keerthy Jayabarathan</h4>
                                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '15px' }}>
                                    Director, B.E., M.Tech., Ph.D.
                                </p>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'justify', flexGrow: 1 }}>
                                    Dr. Jayson Keerthy Jayabarathan holds a bachelor's degree in Computer Science & Engineering
                                    from Mookambigai College of Engineering and a master's degree from SASTRA University,
                                    Thanjavur. He has over 23 years of experience in managing the institution. Providing the
                                    best of technical information and latest technology for the students is his foremost aim. He
                                    is also concentrating on Quality of Service in ad-hoc communication for his PhD and is
                                    deeply interested in grooming athletes for the future.
                                </div>
                            </div>

                            {/* Trustee */}
                            <div className="leader-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ width: '140px', height: '140px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--bg-light)', flexShrink: 0 }}>
                                    <img src={`${import.meta.env.BASE_URL}photo/TRUSTEE.png`} alt="Trustee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--primary)' }}>Mrs. Vivian Jayson</h4>
                                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 700, marginBottom: '15px' }}>
                                    Trustee, B.E., M.E.
                                </p>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'justify', flexGrow: 1 }}>
                                    Prof. Vivian Jayson holds a Bachelor's degree in Computer Science & Engineering and a
                                    Master's degree from Vinayaga Mission University, Salem. She has over 19 years of experience
                                    managing Mount Zion Christian Educational Trust institutions. Her primary goal is to provide
                                    students with top-notch technical education and access to the latest technology through her
                                    leadership of a team of dedicated and qualified faculty.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Leadership */}
                    <div className="reveal">
                        <h3 style={{ color: 'var(--primary)', borderLeft: '4px solid var(--accent)', paddingLeft: '15px', marginBottom: '30px' }}>
                            Academic Administration
                        </h3>
                        <div className="grid grid-cols-2 md-grid-cols-1" style={{ gap: '30px' }}>
                            {/* Principal */}
                            <div id="principal" className="leader-card" style={{ textAlign: 'left', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ display: 'flex', gap: '30px', marginBottom: '25px', alignItems: 'start' }}>
                                    <div style={{ width: '160px', height: '200px', borderRadius: '15px', overflow: 'hidden', border: '4px solid var(--bg-light)', flexShrink: 0 }}>
                                        <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Prof. Dr. Jasmine Sheela</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 700 }}>Principal, M.Sc. (N), Ph.D.</p>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8, borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '15px' }}>
                                        Prof. Dr. Jasmine Sheela embarked on her remarkable nursing journey as a Registered Nurse and Midwife (RN RM) from 1990 to 1994 at a reputed
                                        multispecialty hospital in Chennai. She earned her M.Sc. in Paediatric Nursing in 2005 and attained a Ph.D. in Nursing in 2018 from The Tamil Nadu Dr. M.G.R. Medical University.
                                    </p>
                                    <p style={{ marginBottom: '15px' }}>
                                        With 8 years of clinical expertise and 20 years of teaching experience, she has served as the Principal of Mount Zion College of Nursing for 14
                                        years. Her expertise includes curriculum planning, policy development, and integrating innovative teaching methodologies into nursing education.
                                    </p>
                                    <p>
                                        Under her guidance, MZCN has consistently excelled in fostering professional growth and academic achievement. She has organized numerous national conferences and contributed
                                        significantly to professional development through peer-reviewed publications and scientific articles.
                                    </p>
                                </div>
                            </div>

                            {/* Vice Principal */}
                            <div className="leader-card" style={{ textAlign: 'left', padding: '40px', background: 'white', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ display: 'flex', gap: '30px', marginBottom: '25px', alignItems: 'start' }}>
                                    <div style={{ width: '160px', height: '200px', borderRadius: '15px', overflow: 'hidden', border: '4px solid var(--bg-light)', flexShrink: 0 }}>
                                        <img src={`${import.meta.env.BASE_URL}photo/Vice%20Principal.png`} alt="Vice Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Prof. Dr. Jerin Kumar J</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 700 }}>Vice Principal, M.Sc.(N), Ph.D.</p>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8, borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '15px' }}>
                                        Prof. Dr. Jerin Kumar J serves as the Vice Principal of Mount Zion College of Nursing. With over 15 years of teaching experience, he holds a
                                        Ph.D. in Nursing and Master's degrees in both Mental Health Nursing and Counseling & Psychotherapy. He is a Doctoral Committee Expert at Chettinad Academy of Research and Education.
                                    </p>
                                    <p style={{ marginBottom: '15px' }}>
                                        He has held key positions in reputed institutions including AIIMS Patna and Karunya Institute of Technology and Sciences. His work focuses on mental
                                        health, suicide prevention, and innovative nursing practices, contributing significantly through research papers in reputed journals.
                                    </p>
                                    <p>
                                        Dr. Jerin Kumar is committed to promoting quality education and research, ensuring students excel in their nursing careers as balanced, compassionate professionals in the
                                        global healthcare landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
