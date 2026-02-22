import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Import Featured Images
import lampLightingImg from '../assets/updates/announcements/lamp-lighting-2026.jpg';
import pongal2026Img from '../assets/updates/announcements/pongal 2026.jpeg';
import graduation12Img from '../assets/updates/announcements/12th graduation.jpeg';
import foundersDay2024Img from '../assets/updates/announcements/founders day 2025.jpeg';
import lampLighting16Img from '../assets/updates/announcements/16th lamp lighting 2025.jpeg';
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
                    'pongal 2026',
                    '12th graduation',
                    'founders day 2025',
                    '16th lamp lighting 2025',
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

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 120; // Account for sticky header
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

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

    const staticAnnouncements = [
        {
            type: 'Featured Event',
            title: '17th Lamp Lighting Ceremony 2026 🪔',
            text: 'Mount Zion College of Nursing proudly conducted the 17th Lamp Lighting Ceremony 2026 — a sacred tradition symbolizing compassion ❤️, dedication 🤝, and the noble spirit of nursing 👩⚕️👨⚕️. The ceremony was graced by our respected Chairperson, Chief Guest, Guest of Honour, faculty members, and well-wishers 🎓. A proud and inspiring beginning for our future nurses as they step into a lifelong journey of service and care 🌟✨.',
            tags: '#MountZionCollegeOfNursing #LampLightingCeremony2026 #FutureNurses #NursingProfession #ProudMoment',
            image: lampLightingImg
        },
        {
            type: 'Cultural Celebration',
            title: 'Pongal Celebration 2026 🌾✨',
            text: 'Celebrating the spirit of Tamil heritage and the vibrant essence of nature, Mount Zion College of Nursing proudly hosted Pongal Celebration 2026 under the theme Thamilan Who Lived with Nature. The event was a symphony of culture and tradition, featuring beautiful rhyming poems, soulful traditional dances, and an engaging skit reflecting the harmony between humans and nature. Students relived the charm of old traditional games like tug-of-war, showcasing the strength of unity and camaraderie. Through every activity, from the aromatic preparation of Pongal to heartfelt greetings and cultural expressions, we rejoiced in recalling the beauty of Tamil culture - a timeless connection to our roots. Here is to cherishing tradition and celebrating togetherness! 🌿🌞 Happy Pongal to all! 🪷🎉',
            tags: '#MZCN #PongalCelebration #ThamilanWithNature #TraditionsAlive',
            image: pongal2026Img
        },
        {
            type: 'Milestone Achievement',
            title: '12th Graduation Day - A Moment of Pride and Blessings! 🎓🎉',
            text: 'With hearts full of gratitude and dreams held high, the Class of 2025 stepped into a new chapter of purpose and service. Held on 18th July 2025, this memorable occasion was graced by esteemed dignitaries, heartfelt songs, and proud moments of recognition. We celebrate the dedication, perseverance, and success of our graduates - our future nurses committed to care, compassion, and excellence.',
            tags: '#MZCNGraduationDay2025 #ProudMoment #NursingGraduates #MountZionCollegeOfNursing #ClassOf2025 #NurseWithPurpose #ServingWithCompassion',
            image: graduation12Img
        },
        {
            type: 'Special Event',
            title: 'A Heartwarming Founder\'s Day ✨',
            text: 'On 17th December 2024 by 6 p.m., Mount Zion College of Nursing celebrated Founder\'s Day with 50 joyful kids from Christhu King Home for Children, Irudhayapuram. 💖 A red carpet welcome, heartfelt songs, motivational messages, fun games, delightful gifts, and a memorable dinner filled the evening with love and laughter. 🌈 The hugs, smiles, and shared moments truly embodied the spirit of love and care, making this Founder\'s Day unforgettable. 🫂💫',
            tags: '#FoundersDay2024 #MountZionCollegeOfNursing #SpreadingLove #JoyfulMemories',
            image: foundersDay2024Img
        },
        {
            type: 'Professional Ceremony',
            title: 'XVI Lamp Lighting Ceremony - Batch of 2024-25 📸✨',
            text: 'Mount Zion College of Nursing proudly conducted its 16th Lamp Lighting Ceremony on 29th January 2025 at 10:30 a.m. The event marked a significant milestone in the journey of our aspiring nurses as they embraced the noble profession with dedication and commitment. The ceremony was graced by esteemed dignitaries, including Mrs. Florence Jayabarathan, Chairperson, Mount Zion Educational Institutions, and our Chief Guest, Dr. Prameed Pilli, a distinguished Orthopedic Surgeon from Bengaluru. The lighting of the Nightingale\'s lamp symbolized the beginning of a lifelong journey in service, care, and compassion. A heartfelt appreciation to all our faculty, students, and guests for making this occasion memorable. We extend our best wishes to the Batch of 2024-25 as they step forward with purpose and integrity in their nursing profession. 🌟 "Take my life and let it be, consecrated, Lord, to Thee." 🌟',
            tags: '#MZCN #LampLightingCeremony #NursingProfession #Batch2024_25 #FutureNurses #FlorenceNightingaleLegacy',
            image: lampLighting16Img
        },

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
            title: '🏅 Victory shines brighter when it\'s shared!',
            text: 'Congratulations to Ham Joel Raj.M and Ratan Sagar Singh for clinching the Gold Medal in Badminton Doubles, and to Sundar Gnanasekar for winning the Silver Medal in the Chief Minister Trophy 2024, Pudukkottai District Level! Both the award winners are proud B.Sc. Nursing students of Mount Zion College of Nursing. Let\'s celebrate this moment of triumph and dedication together! 🥇🥈',
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

    const [selectedItem, setSelectedItem] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openLightbox = (item) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="info-corner-page">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        LATEST UPDATES
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Information Corner
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
                        Stay updated with the latest circulars, professional milestones, and academic achievements at Mount Zion College of Nursing.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="page-grid">
                        {/* Sticky Sidebar */}
                        <aside className="about-nav-card reveal-zoom sidebar-col glow-card" style={{ top: '120px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '1.2rem' }}>Quick Access</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    { name: 'Announcements', id: 'announcements' },
                                    { name: 'News & Events', id: 'news' },
                                    { name: 'Rank Holders', id: 'achievements' },
                                    { name: 'Careers', id: 'jobs' }
                                ].map(item => (
                                    <li key={item.id} style={{ marginBottom: '15px' }}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScrollToSection(item.id);
                                            }}
                                            style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                                            className="hover-primary"
                                        >
                                            <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}></i>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {/* Content Area */}
                        <div className="info-content content-col">
                            {/* Announcements Section - Top */}
                            <div id="announcements" style={{ marginBottom: '50px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px' }}>
                                    <i className="fas fa-bullhorn" style={{ color: 'var(--accent)' }}></i> Announcements
                                </h2>

                                {/* Dynamic Announcements Grid */}
                                {updates.announcements.length > 0 && (
                                    <div className="updates-sub-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                                        {updates.announcements.map((ann, idx) => (
                                            <div key={`dyn-ann-${idx}`}
                                                className="update-card hover-lift cursor-pointer"
                                                onClick={() => openLightbox({ ...ann, image: ann.src })}
                                                style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                                <div style={{ height: '140px', overflow: 'hidden' }}>
                                                    <img src={ann.src} alt={ann.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ padding: '15px' }}>
                                                    <span className="info-type-tag" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-dark)', marginBottom: '8px', fontSize: '0.65rem' }}>{ann.date}</span>
                                                    <h4 style={{ color: 'var(--primary)', margin: '4px 0', fontSize: '0.9rem', lineHeight: '1.4' }}>{ann.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Static Featured Announcements */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
                                    {staticAnnouncements.map((ann, idx) => (
                                        <div key={idx}
                                            className="info-card-compact hover-lift reveal-blur cursor-pointer"
                                            onClick={() => openLightbox(ann)}
                                            style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                                            {ann.image && (
                                                <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                                                    <img src={ann.image} alt={ann.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            )}
                                            <div style={{ padding: '20px' }}>
                                                <span className="info-type-tag" style={{ background: 'var(--bg-light)', color: 'var(--primary)', fontSize: '0.7rem', padding: '4px 12px' }}>{ann.type}</span>
                                                <h4 style={{ color: 'var(--primary)', margin: '12px 0', fontSize: '1.1rem' }}>{ann.title}</h4>
                                                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>{ann.text ? ann.text.substring(0, 180) + '...' : 'No description available.'}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* News & Events Section - Bottom */}
                            <div id="news" style={{ marginBottom: '50px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>
                                    <i className="fas fa-newspaper" style={{ color: 'var(--accent)' }}></i> News & Events
                                </h2>

                                {/* Dynamic News Grid */}
                                {updates.news.length > 0 && (
                                    <div className="updates-sub-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                                        {updates.news.map((news, idx) => (
                                            <div key={`dyn-news-${idx}`}
                                                className="update-card hover-lift cursor-pointer"
                                                onClick={() => openLightbox({ ...news, image: news.src })}
                                                style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
                                                <div style={{ height: '140px', overflow: 'hidden' }}>
                                                    <img src={news.src} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ padding: '15px' }}>
                                                    <span className="info-type-tag" style={{ background: 'var(--primary)', color: 'white', marginBottom: '8px', fontSize: '0.65rem' }}>{news.date}</span>
                                                    <h4 style={{ color: 'var(--primary)', margin: '4px 0', fontSize: '0.9rem', lineHeight: '1.4' }}>{news.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
                                    {staticNews.map((news, idx) => (
                                        <div key={idx}
                                            className="info-card-compact hover-lift reveal-blur cursor-pointer"
                                            onClick={() => openLightbox(news)}
                                            style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
                                            {news.image && (
                                                <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                                                    <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            )}
                                            <div style={{ padding: '20px' }}>
                                                <span className="info-type-tag" style={{ background: 'var(--primary)', color: 'white', fontSize: '0.7rem', padding: '4px 12px' }}>{news.type}</span>
                                                <h4 style={{ color: 'var(--primary)', margin: '12px 0', fontSize: '1.1rem' }}>{news.title}</h4>
                                                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>{news.text ? news.text.substring(0, 180) + '...' : 'No description available.'}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rank Holders */}
                            <div id="achievements" style={{ marginBottom: '60px' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-trophy" style={{ color: 'var(--accent)' }}></i> Rank Holders
                                </h2>
                                {rankHolders.map((group, idx) => (
                                    <div key={idx} className="rank-card reveal-flip">
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
                            <div id="jobs">
                                <h2 style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <i className="fas fa-briefcase" style={{ color: 'var(--accent)' }}></i> Careers
                                </h2>
                                <div className="apply-card reveal-zoom">
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

            {/* Premium Info Lightbox */}
            {selectedItem && (
                <div className="lightbox-overlay" style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 15, 30, 0.9)',
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    animation: 'fadeIn 0.4s ease-out'
                }} onClick={closeLightbox}>
                    {/* Visual Close Button */}
                    <button onClick={closeLightbox} className="lightbox-close-btn" style={{
                        position: 'absolute',
                        top: '30px',
                        right: '30px',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10002,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}>
                        <i className="fas fa-times"></i>
                    </button>

                    <div
                        className="lightbox-card-premium"
                        style={{
                            background: 'white',
                            maxWidth: '1100px',
                            width: '100%',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: windowWidth < 900 ? 'column' : 'row',
                            maxHeight: '85vh',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.6)',
                            position: 'relative',
                            opacity: 1,
                            transform: 'scale(1)',
                            zIndex: 10001,
                            animation: 'fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Showcase Section */}
                        <div style={{
                            flex: '1.2',
                            minHeight: windowWidth < 900 ? '250px' : '500px',
                            background: '#001c30',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Blurred background for depth */}
                            <div style={{
                                position: 'absolute',
                                inset: -20,
                                backgroundImage: `url(${selectedItem.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'blur(40px) brightness(0.4)',
                                opacity: 0.6
                            }}></div>

                            <img src={selectedItem.image} alt={selectedItem.title}
                                style={{
                                    maxWidth: '92%',
                                    maxHeight: '92%',
                                    objectFit: 'contain',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                    borderRadius: '8px'
                                }} />
                        </div>

                        {/* Details Content Section */}
                        <div style={{
                            flex: '1',
                            padding: windowWidth < 600 ? '30px 24px' : '50px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                        }}>
                            <div className="reveal-blur active">
                                <span style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    boxShadow: '0 4px 12px rgba(0, 43, 91, 0.2)'
                                }}>{selectedItem.type || selectedItem.date}</span>

                                <h2 style={{
                                    color: 'var(--primary)',
                                    marginTop: '24px',
                                    marginBottom: '16px',
                                    fontSize: windowWidth < 600 ? '1.5rem' : '2.2rem',
                                    fontWeight: 800,
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.5px',
                                    fontFamily: 'Outfit, sans-serif'
                                }}>{selectedItem.title}</h2>

                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: 'var(--accent)',
                                    borderRadius: '2px',
                                    marginBottom: '24px'
                                }}></div>

                                <p style={{
                                    color: '#475569',
                                    lineHeight: '1.8',
                                    fontSize: '1.05rem',
                                    marginBottom: '30px',
                                    fontWeight: '400'
                                }}>
                                    {selectedItem.text || "View the official announcement image for full details regarding this update."}
                                </p>

                                {selectedItem.tags && selectedItem.tags.length > 0 && (
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '12px',
                                        paddingTop: '20px',
                                        borderTop: '1px solid #e2e8f0'
                                    }}>
                                        {selectedItem.tags.split(' ').map((tag, i) => (
                                            <span key={i} style={{
                                                color: 'var(--primary)',
                                                background: 'rgba(0, 43, 91, 0.05)',
                                                padding: '4px 12px',
                                                borderRadius: '6px',
                                                fontWeight: 600,
                                                fontSize: '0.85rem'
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                )}

                                <button
                                    onClick={closeLightbox}
                                    style={{
                                        marginTop: '40px',
                                        width: '100%',
                                        padding: '16px',
                                        borderRadius: '16px',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        letterSpacing: '1.5px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        boxShadow: '0 12px 24px -8px rgba(0, 43, 91, 0.4)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="btn-hover-glow"
                                >
                                    DISMISS <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoCorner;
