import React, { useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Import Featured Images
import lampLightingImg from '../assets/updates/announcements/lamp-lighting-2026.jpg';
import republicDayImg from '../assets/updates/news/rajiv-gandhi-republic-day.jpg';
import antonyAmisImg from '../assets/updates/news/antony-amis-silver-medal.jpg';
import mahayagavanImg from '../assets/updates/news/mahayagavan-m-bronze-medal.jpg';
import badmintonImg from '../assets/updates/news/badminton-champions-2024.jpg';

const InfoCorner = () => {
    const location = useLocation();

    // Dynamic Image Loading for generic updates
    const updates = useMemo(() => {
        const annGlob = import.meta.glob('../assets/updates/announcements/*.{png,jpg,jpeg,webp}', { eager: true });
        const newsGlob = import.meta.glob('../assets/updates/news/*.{png,jpg,jpeg,webp}', { eager: true });

        const processGlob = (glob, defaultType) => {
            return Object.entries(glob).map(([path, module]) => {
                const fileName = path.split('/').pop().split('.')[0];
                // Skip if it's one of our hardcoded featured ones to avoid duplication
                const featured = [
                    'lamp-lighting-2026',
                    'rajiv-gandhi-republic-day',
                    'antony-amis-silver-medal',
                    'mahayagavan-m-bronze-medal',
                    'badminton-champions-2024'
                ];
                if (featured.some(f => fileName.includes(f))) return null;

                const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
                const date = dateMatch ? dateMatch[1] : null;
                const title = date ? fileName.replace(date, '').replace(/^[-_]/, '').replace(/[-_]/g, ' ').trim() : fileName.replace(/[-_]/g, ' ').trim();

                return {
                    src: module.default,
                    title: title || 'Untitled Update',
                    date: date || 'Recent',
                    type: defaultType,
                };
            }).filter(Boolean);
        };

        return {
            announcements: processGlob(annGlob, 'Announcement'),
            news: processGlob(newsGlob, 'News')
        };
    }, []);

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

    const staticAnnouncements = [
        {
            type: 'Featured Event',
            title: '17th Lamp Lighting Ceremony 2026 🪔',
            text: 'Mount Zion College of Nursing proudly conducted the 17th Lamp Lighting Ceremony 2026 — a sacred tradition symbolizing compassion ❤️, dedication 🤝, and the noble spirit of nursing 👩⚕️👨⚕️. The ceremony was graced by our respected Chairperson, Chief Guest, Guest of Honour, faculty members, and well-wishers 🎓. A proud and inspiring beginning for our future nurses as they step into a lifelong journey of service and care 🌟✨.',
            tags: '#MountZionCollegeOfNursing #LampLightingCeremony2026 #FutureNurses #NursingProfession #ProudMoment',
            image: lampLightingImg
        },
        { type: 'Professional Event', title: 'Lamp Lighting Ceremony 2025', text: 'The Lamp Lighting Ceremony for the first-year batch (2024-2028) on 29th Jan 2025. This significant event symbolizes the beginning of their professional journey into nursing.' },
        { type: 'Celebration', title: 'Pongal Celebration 2025', text: 'On 10th Jan 2025, the college celebrated Pongal with traditional fervor, graced by the Chairperson and Director.' },
        { type: 'Celebration', title: "Founders' Day", text: 'Commemorating the life and vision of our founder, Mr. Jeyabarathan Chelliah, on 17th Dec 2024.' },
        { type: 'Event', title: 'Fresher’s Day', text: 'Welcomed the 16th batch, "Joyful Generous Topaz," on 25th Nov 2024.' }
    ];

    const staticNews = [
        {
            type: 'Top Story',
            title: 'Republic Day 2026 Achievement 🎉',
            text: 'On this Republic Day 2026, Mount Zion College of Nursing celebrates with immense pride the remarkable achievement of Mr Rajiv Gandhi R, Fifth Batch B.Sc. Nursing alumnus. He was honoured by Mrs K. Porkodi, I.A.S., District Collector of Sivaganga District, in recognition of his exemplary and dedicated service as a Nursing Officer in Sivaganga District, Tamil Nadu. 👏 We congratulate him on this well-deserved recognition and wish him continued success in serving society with excellence and humanity. Proud Alumni | Proud Institution | Proud Nation |',
            image: republicDayImg
        },
        {
            type: 'Sports Achievement',
            title: '🏅 Victory shines brighter when it’s shared!',
            text: 'Congratulations to Ham Joel Raj.M and Ratan Sagar Singh for clinching the Gold Medal in Badminton Doubles, and to Sundar Gnanasekar for winning the Silver Medal in the Chief Minister Trophy 2024, Pudukkottai District Level! Both the award winners are proud B.Sc. Nursing students of Mount Zion College of Nursing. Let’s celebrate this moment of triumph and dedication together! 🥇🥈',
            tags: '#ProudMoment #Champions #BadmintonDoubles #MountZionSpirit',
            image: badmintonImg
        },
        {
            type: 'Sports Achievement',
            title: '🏅 Silver Medal in High Jump',
            text: 'Heartfelt congratulations to our student Mr. Antony Amis A for winning the Silver Medal in High Jump at the Chief Minister Trophy, Pudukkottai District Level, 2024! Your hard work, dedication, and perseverance inspire us all. Keep shining and reaching new heights!',
            tags: '#MountZionPride #SilverMedalChampion #CMTrophy2024',
            image: antonyAmisImg
        },
        {
            type: 'Sports Achievement',
            title: '🏆 Victory in Motion! 🏃♂️',
            text: 'What a joy to announce that our Mount Zion College of Nursing student, Mr. Mahayagavan M, has won the Bronze Medal in the State Level 100 Meters Run organized by The TN Dr. M.G.R. Medical University, Chennai. Your hard work and determination inspire us all. Congratulations on this incredible achievement! 💪🎉',
            tags: '#MountZionPride #StateChampion #100MetersRun #MZCN #ExcellenceInAction',
            image: mahayagavanImg
        },
        { type: 'Initiative', title: 'Healthy Nutrition Demonstration', text: 'Radiant Rubies batch organized a Nutrition Event, preparing dishes tailored to health conditions like diabetes and anemia.' },
        { type: 'Leadership', title: 'SALT 2024', text: 'Hosted Student Advocacy and Leadership Training in collaboration with TNAI for students from 21 institutions.' },
        { type: 'Milestone', title: 'XI Graduation Day', text: '46 graduates received their degrees on 2nd April 2024, marking the culmination of their dedication.' }
    ];

    const rankHolders = [
        {
            year: 'Third Year', students: [
                { name: 'Ms. Nanthika, Ms. Vivetha', subject: 'Med Surg II' },
                { name: 'Mr. Sivashanmugam', subject: 'Child Health' },
                { name: 'Ms. Nirmala Devi', subject: 'Mental Health' }
            ]
        },
        {
            year: 'Second Year', students: [
                { name: 'Ms. Keran Jancy', subject: 'Sociology' },
                { name: 'Ms. Snowlin', subject: 'Med Surg I' },
                { name: 'Ms. Reena', subject: 'Pharmacology, Pathology' }
            ]
        }
    ];

    return (
        <div className="info-corner-page">
            <div className="inner-hero program-hero">
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>LATEST UPDATES</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }} className="reveal">Information Corner</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Stay updated with the latest circulars, professional milestones, and academic achievements at Mount Zion College of Nursing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="page-grid">
                        {/* Sticky Sidebar */}
                        <aside className="about-nav-card reveal sidebar-col" style={{ top: '120px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.2rem' }}>Quick Access</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Announcements', 'News', 'Achievements', 'Jobs'].map(item => (
                                    <li key={item} style={{ marginBottom: '15px' }}>
                                        <a href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }} className="hover-primary">
                                            <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}></i>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Content Area */}
                        <div className="info-content content-col">
                            {/* Announcements */}
                            <div id="announcements" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-bullhorn" style={{ color: 'var(--accent)' }}></i> Announcements
                                </h2>

                                {/* Dynamic Announcements (Images only) */}
                                {updates.announcements.length > 0 && (
                                    <div className="updates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                                        {updates.announcements.map((ann, idx) => (
                                            <div key={`dyn-ann-${idx}`} className="update-card hover-lift" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                                    <img src={ann.src} alt={ann.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ padding: '20px' }}>
                                                    <span className="info-type-tag" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-dark)', marginBottom: '10px', fontSize: '0.7rem' }}>{ann.date}</span>
                                                    <h4 style={{ color: 'var(--primary)', margin: '5px 0' }}>{ann.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Static Announcements (Featured and Text) */}
                                {staticAnnouncements.map((ann, idx) => (
                                    <div key={idx} className={`info-card hover-lift ${ann.image ? 'featured-card' : ''}`} style={ann.image ? { padding: '0', overflow: 'hidden' } : {}}>
                                        {ann.image && (
                                            <div style={{ width: '100%', height: '400px', maxHeight: '50vh', overflow: 'hidden', position: 'relative' }}>
                                                <img src={ann.image} alt={ann.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                                            </div>
                                        )}
                                        <div style={ann.image ? { padding: '30px' } : {}}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                <span className="info-type-tag" style={{ background: ann.image ? 'var(--primary)' : 'var(--bg-light)', color: ann.image ? 'white' : 'var(--primary)' }}>{ann.type}</span>
                                            </div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: ann.image ? '1.5rem' : '1.2rem' }}>{ann.title}</h4>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.8' }}>{ann.text}</p>
                                            {ann.tags && <p style={{ marginTop: '15px', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>{ann.tags}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* News & Events */}
                            <div id="news" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-newspaper" style={{ color: 'var(--accent)' }}></i> Recent News
                                </h2>

                                {/* Dynamic News (Images only) */}
                                {updates.news.length > 0 && (
                                    <div className="updates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                                        {updates.news.map((news, idx) => (
                                            <div key={`dyn-news-${idx}`} className="update-card hover-lift" style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                                    <img src={news.src} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ padding: '20px' }}>
                                                    <span className="info-type-tag" style={{ background: 'var(--primary)', color: 'white', marginBottom: '10px', fontSize: '0.7rem' }}>{news.date}</span>
                                                    <h4 style={{ color: 'var(--primary)', margin: '5px 0' }}>{news.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {staticNews.map((news, idx) => (
                                    <div key={idx} className={`info-card hover-lift ${news.image ? 'featured-card' : ''}`} style={news.image ? { padding: '0', borderLeftColor: 'var(--accent)', overflow: 'hidden' } : { borderLeftColor: 'var(--primary)' }}>
                                        {news.image && (
                                            <div style={{ width: '100%', height: '400px', maxHeight: '50vh', overflow: 'hidden', position: 'relative' }}>
                                                <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                                            </div>
                                        )}
                                        <div style={news.image ? { padding: '30px' } : {}}>
                                            <span className="info-type-tag" style={{ background: 'var(--primary)', color: 'white', marginBottom: '15px' }}>{news.type}</span>
                                            <h4 style={{ color: 'var(--primary)', margin: '10px 0 15px', fontSize: news.image ? '1.5rem' : '1.2rem' }}>{news.title}</h4>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.8' }}>{news.text}</p>
                                            {news.tags && <p style={{ marginTop: '15px', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>{news.tags}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Achievements */}
                            <div id="achievements" className="reveal" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-trophy" style={{ color: 'var(--accent)' }}></i> Rank Holders
                                </h2>
                                {rankHolders.map((group, idx) => (
                                    <div key={idx} className="rank-card">
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fas fa-medal" style={{ color: 'var(--accent)' }}></i> {group.year}
                                        </h4>
                                        <div style={{ overflowX: 'auto' }}>
                                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                <thead>
                                                    <tr style={{ background: 'var(--bg-light)', textAlign: 'left' }}>
                                                        <th style={{ padding: '15px', borderBottom: '2px solid var(--primary)' }}>Student Name</th>
                                                        <th style={{ padding: '15px', borderBottom: '2px solid var(--primary)' }}>Topped Subject</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {group.students.map((s, i) => (
                                                        <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                            <td style={{ padding: '15px', fontWeight: 600 }}>{s.name}</td>
                                                            <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{s.subject}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Job Openings */}
                            <div id="jobs" className="reveal">
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-briefcase" style={{ color: 'var(--accent)' }}></i> Careers
                                </h2>
                                <div className="apply-card">
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <h3 style={{ color: 'white', marginBottom: '15px' }}>Join Our Faculty</h3>
                                        <p style={{ opacity: 0.9, marginBottom: '25px' }}>We are looking for dedicated Nursing Tutors and Assistant Professors to join our esteemed institution.</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                            <Link to="/careers" className="btn" style={{ background: 'var(--accent)', color: 'var(--primary)', fontWeight: 800, textDecoration: 'none' }}>APPLY NOW</Link>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <i className="fas fa-envelope"></i> <span>jobs@mzcn.in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoCorner;
