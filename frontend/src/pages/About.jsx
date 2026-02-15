import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/organogram.css';

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
                    <div className="about-grid">
                        {/* Sidebar Navigation */}
                        <div className="about-nav-card">
                            <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Identity</h2>
                            <div className="motto-card">
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Our Motto</h4>
                                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.9, textAlign: 'center' }}>"To make man whole."</p>
                            </div>
                            <div className="quick-links-card">
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Quick Links</h4>
                                <ul className="quick-links-list">
                                    <li><Link to="/about#leadership" onClick={() => document.getElementById('leadership').scrollIntoView({ behavior: 'smooth' })}>Our Leadership <i className="fas fa-chevron-right"></i></Link></li>
                                    <li><Link to="/about#vision" onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}>Vision & Mission <i className="fas fa-chevron-right"></i></Link></li>
                                    <li><Link to="/about#idp" onClick={() => document.getElementById('idp').scrollIntoView({ behavior: 'smooth' })}>Development Plan <i className="fas fa-chevron-right"></i></Link></li>
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
                                <div style={{ marginBottom: '30px', background: 'white', padding: '30px', borderRadius: '15px', borderLeft: '4px solid var(--primary)' }}>
                                    <h4 style={{ color: 'var(--primary)' }}>Vision</h4>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Mount Zion Institutions will be the preferred choice of all those who aspire for excellence.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Mission</h4>
                                    <ul className="mission-list">
                                        <li><i className="fas fa-check"></i> Provide education of the highest quality.</li>
                                        <li><i className="fas fa-check"></i> Empower students to meet global healthcare challenges.</li>
                                        <li><i className="fas fa-check"></i> Foster attitudes for a sustainable environment.</li>
                                        <li><i className="fas fa-check"></i> Focus on mental, physical, and spiritual holistic excellence.</li>
                                        <li><i className="fas fa-check"></i> Synergize excellence through a wholesome ambience.</li>
                                        <li><i className="fas fa-check"></i> Train for competence and selfless service.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="idp" style={{ marginBottom: '60px', paddingTop: '20px' }} className="reveal">
                                <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--accent)', display: 'inline-block' }}>
                                    Institutional Development Plan (IDP)
                                </h3>
                                <div className="idp-grid">
                                    <div className="idp-card">
                                        <i className="fas fa-hospital"></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>MZ Multispecialty Hospital</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Developing a 150-bedded hospital with specialized palliative care.</p>
                                    </div>
                                    <div className="idp-card">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Academic Autonomy</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Strategizing to achieve autonomous status by the year 2030.</p>
                                    </div>
                                    <div className="idp-card">
                                        <i className="fas fa-vial"></i>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Centers of Excellence</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>High-fidelity simulation labs for advanced clinical skills.</p>
                                    </div>
                                    <div className="idp-card">
                                        <i className="fas fa-medal"></i>
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
                                <div className="organogram-wrapper" style={{ overflowX: 'auto', paddingBottom: '20px' }}>
                                    <div className="org-tree">
                                        <ul>
                                            <li>
                                                <div className="org-node root-node">Chair Person and Trustees</div>
                                                <ul>
                                                    <li>
                                                        <div className="org-node">Director</div>
                                                        <ul>
                                                            <li>
                                                                <div className="org-node">Principal</div>
                                                                <ul>
                                                                    {/* Left Branch */}
                                                                    <li style={{ verticalAlign: 'top' }}>
                                                                        <div className="vertical-list">
                                                                            <div className="org-node vertical-node">Vice-Principal</div>
                                                                            <div className="org-node vertical-node">Associate Professor</div>
                                                                            <div className="org-node vertical-node">Asst. Professor</div>
                                                                            <div className="org-node vertical-node">Lecturer</div>
                                                                            <div className="org-node vertical-node">Clinical Instructor</div>
                                                                            <div className="org-node vertical-node">Librarian</div>
                                                                            <div className="org-node vertical-node">Lab assistant</div>
                                                                            <div className="org-node vertical-node">Peon</div>
                                                                        </div>
                                                                    </li>
                                                                    {/* Middle Branch */}
                                                                    <li style={{ verticalAlign: 'top' }}>
                                                                        <div className="vertical-list">
                                                                            <div className="org-node vertical-node">Administrative Officer</div>
                                                                            <div className="org-node vertical-node">Accountant</div>
                                                                            <div className="org-node vertical-node">Cashier</div>
                                                                            <div className="org-node vertical-node">Clerk</div>
                                                                            <div className="org-node vertical-node">Office Assistant</div>
                                                                            <div className="org-node vertical-node">Security</div>
                                                                            <div className="org-node vertical-node">IV Class</div>
                                                                        </div>
                                                                    </li>
                                                                    {/* Right Branch */}
                                                                    <li style={{ verticalAlign: 'top' }}>
                                                                        <div className="vertical-list">
                                                                            <div className="org-node vertical-node">Warden</div>
                                                                            <div className="org-node vertical-node">House Keeper</div>
                                                                            <div className="org-node vertical-node">Security</div>
                                                                            <div className="org-node vertical-node">IV Class</div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                        <a href={`${import.meta.env.BASE_URL}photo/Organogram_MZCN.jpg`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                                            <i className="fas fa-search-plus" style={{ marginRight: '8px' }}></i> View Original Chart
                                        </a>
                                    </div>
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
                    <div id="chairman" className="founder-card reveal">
                        <div className="founder-img-container">
                            <img src={`${import.meta.env.BASE_URL}photo/FOUNDER.png`} alt="Founder" />
                        </div>
                        <div className="leader-bio">
                            <div style={{ marginBottom: '15px' }}>
                                <h3 style={{ color: 'var(--primary)', fontSize: '2rem' }}>Mr. Jayabarathan Chelliah</h3>
                                <small style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Founder Chairman, M.A. (USA), B.Ed.</small>
                            </div>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Tribute to Our Founder</h4>
                            <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
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
                            <div className="leader-card">
                                <div className="leader-img-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}photo/CHAIRPERSON.png`} alt="Chairperson" />
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
                            <div id="director" className="leader-card">
                                <div className="leader-img-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}photo/DIRECTOR.png`} alt="Director" />
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
                            <div className="leader-card">
                                <div className="leader-img-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}photo/TRUSTEE.png`} alt="Trustee" />
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
                            <div id="principal" className="leader-card">
                                <div style={{ display: 'flex', gap: '30px', marginBottom: '25px', alignItems: 'start' }}>
                                    <div className="leader-img-wrapper" style={{ margin: 0, borderRadius: '15px' }}>
                                        <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" />
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
                            <div className="leader-card">
                                <div style={{ display: 'flex', gap: '30px', marginBottom: '25px', alignItems: 'start' }}>
                                    <div className="leader-img-wrapper" style={{ margin: 0, borderRadius: '15px' }}>
                                        <img src={`${import.meta.env.BASE_URL}photo/Vice%20Principal.png`} alt="Vice Principal" />
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
