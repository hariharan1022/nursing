import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const navHeight = 120;
                    window.scrollTo({
                        top: element.offsetTop - navHeight,
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

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-skew, .reveal-blur, .reveal-flip, .reveal-up, .reveal-stagger');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="inner-hero about-hero-match">
                <div className="container relative z-10 text-center">
                    <span className="hero-tag-gold float-breathe reveal-zoom" data-reveal-init>
                        PREMIER INSTITUTION
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        About Our Institution
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Mount Zion College of Nursing is committed to nurturing future nursing professionals with excellence, compassion, and spiritual leadership.
                    </p>
                </div>
            </div>

            {/* About Section Content */}
            <section className="section about-main-section">
                <div className="container">
                    <div className="about-content about-content-full">
                            <div id="profile" style={{ marginBottom: '54px' }} className="reveal-blur" data-reveal-init>
                                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '0 0 15px' }}>Institution Profile</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                                    Mount Zion College of Nursing is a premier institution dedicated to nurturing future nursing
                                    professionals. Affiliated with The Tamil Nadu Dr. M.G.R. Medical University and approved by
                                    the Indian Nursing Council (INC) and Tamil Nadu Nurses and Midwives Council, our college
                                    offers a robust four-year B.Sc. Nursing degree program.
                                </p>
                            </div>

                            <div id="vision" style={{ marginBottom: '52px', paddingTop: '6px' }} className="reveal-skew" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '30px', borderBottom: '2px solid var(--accent)', display: 'inline-block', fontSize: '1.8rem' }}>
                                    Vision & Mission
                                </h3>
                                <div style={{ marginBottom: '40px', background: 'white', padding: '40px', borderRadius: '24px', borderLeft: '6px solid var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                    <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '15px' }}>Our Vision</h4>
                                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', fontStyle: 'italic' }}>"Mount Zion Institutions will be the preferred choice of all those who aspire for excellence."</p>
                                </div>
                                <div className="premium-card">
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '25px', fontSize: '1.5rem' }}>Our Mission</h4>
                                    <ul className="mission-list mission-list-grid">
                                        {[
                                            "Provide education of the highest quality.",
                                            "Empower students to meet global healthcare challenges.",
                                            "Foster attitudes for a sustainable environment.",
                                            "Focus on mental, physical, and spiritual holistic excellence.",
                                            "Synergize excellence through a wholesome ambience.",
                                            "Train for competence and selfless service."
                                        ].map((item, i) => (
                                            <li key={i} className="interaction-box mission-item">
                                                <span className="mission-item-index">{String(i + 1).padStart(2, '0')}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div id="idp" style={{ marginBottom: '60px', paddingTop: '20px' }} className="reveal-flip" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '30px', borderBottom: '2px solid var(--accent)', display: 'inline-block', fontSize: '1.8rem' }}>
                                    Institutional Development Plan (IDP)
                                </h3>
                                <div className="idp-grid">
                                    <div className="premium-card">
                                        <div className="club-icon-box idp-icon-box">
                                            <i className="fas fa-hospital"></i>
                                        </div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>MZ Multispecialty Hospital</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Developing a 150-bedded hospital with specialized palliative care.</p>
                                    </div>
                                    <div className="premium-card">
                                        <div className="club-icon-box idp-icon-box">
                                            <i className="fas fa-graduation-cap"></i>
                                        </div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>Academic Autonomy</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Strategizing to achieve autonomous status by the year 2030.</p>
                                    </div>
                                    <div className="premium-card">
                                        <div className="club-icon-box idp-icon-box">
                                            <i className="fas fa-vial"></i>
                                        </div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>Centers of Excellence</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>High-fidelity simulation labs for advanced clinical skills.</p>
                                    </div>
                                    <div className="premium-card">
                                        <div className="club-icon-box idp-icon-box">
                                            <i className="fas fa-medal"></i>
                                        </div>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>NAAC Excellence</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Working towards an "A" grade in the NAAC accreditation.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="organogram" style={{ marginBottom: '24px', paddingTop: '20px' }} className="reveal-zoom" data-reveal-init>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '30px', borderBottom: '2px solid var(--accent)', display: 'inline-block', fontSize: '1.8rem' }}>
                                    Organogram
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    The organizational structure of Mount Zion College of Nursing follows a systematic hierarchy to ensure effective administration and academic excellence.
                                </p>
                                <div className="blue-box-premium reveal-skew" data-reveal-init style={{
                                    textAlign: 'center',
                                    padding: '56px 36px',
                                    maxWidth: '1040px',
                                    margin: '0 auto'
                                }}>
                                    <div className="club-icon-box shadow-lg float-breathe" style={{
                                        margin: '0 auto 22px',
                                        width: '84px',
                                        height: '84px',
                                        fontSize: '2.35rem',
                                        background: '#ffffff',
                                        color: 'var(--primary)',
                                        transform: 'none'
                                    }}>
                                        <i className="fas fa-sitemap"></i>
                                    </div>
                                    <h3 style={{ fontSize: '2.1rem', color: 'var(--primary)', marginBottom: '16px', fontWeight: 800 }}>View Organizational Chart</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.1rem', fontWeight: 500 }}>
                                        Explore the detailed administrative and academic structure of our institution in a dedicated interactive view.
                                    </p>
                                    <Link to="/organogram" className="btn btn-primary magnetic" style={{ padding: '16px 50px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '1.02rem' }}>
                                        Open Full Organogram &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section about-leadership-section" style={{ background: 'var(--bg-light)' }} id="leadership">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '60px' }} className="reveal-zoom" data-reveal-init>Our Leadership</h2>

                    {/* Founder */}
                    <div id="chairman" className="founder-card reveal-flip" data-reveal-init>
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
