import React, { useEffect, useState } from 'react';
import alumniSivaImg from '../assets/updates/Alumni/Mr. Sivashanmugam.jpeg';
import alumniMurugavelImg from '../assets/updates/Alumni/MR.MURUGAVEL.jpeg';
import alumniSivabalanImg from '../assets/updates/Alumni/Sivabalan.jpeg';
import alumniAbiramiImg from '../assets/updates/Alumni/Abirami Murugesan.jpeg';
import alumniSathyaImg from '../assets/updates/Alumni/SATHYA M.jpeg';
import alumniChristyImg from '../assets/updates/Alumni/Christy Princia.jpeg';
import alumniAnbumathiImg from '../assets/updates/Alumni/Anbumathi Sampathkumar.jpeg';
import alumniJonathanImg from '../assets/updates/Alumni/Jonathan Keith Moses.jpeg';
import alumniAnishImg from '../assets/updates/Alumni/Anish.png';
import alumniAnithaImg from '../assets/updates/Alumni/Anitha.jpeg';
import alumniManjulaImg from '../assets/updates/Alumni/Manjula.jpeg';
import alumniPaulImg from '../assets/updates/Alumni/Paul Daril.jpeg';
import alumniNavasakthivelImg from '../assets/updates/Alumni/Navasakthivel.jpeg'

const alumniVoices = [
    {
        name: 'Mr. Murugavel',
        batch: '2019 - 2023',
        designation: 'Nursing Officer',
        hospital: 'JIPMER, Puducherry',
        image: alumniMurugavelImg,
        quote: 'I had a great learning experience at MZCN. The college is located in a calm, cool, and pollution-free environment that is ideal for focused study. The mess and canteen facilities are hygienic and well maintained compared to many other colleges. Well-equipped Foundation, Community, Pediatric, Psychiatry and OBG labs strengthened our practical skills. The good hostel facilities and playground made campus life comfortable and enjoyable.'
    },
    {
        name: 'Sivabalan',
        batch: 'Innovators (2011 - 2015)',
        designation: 'Senior Nursing Officer',
        hospital: 'All India Institute of Medical Sciences',
        image: alumniSivabalanImg,
        quote: 'This college provided an incredible blend of academic knowledge and constant mentor support. The faculty truly left no stone unturned in shaping my future and building my confidence.'
    },
    {
        name: 'Abirami Murugesan',
        batch: 'Innovators (2011 - 2015)',
        designation: 'IT (Medical Coding) QA Senior Specialist',
        hospital: 'Chennai',
        image: alumniAbiramiImg,
        quote: 'The background of my success is Mount Zion College of Nursing - the place that turned my dreams into achievements and gave me lifelong pride. Grateful to Mount Zion for shaping my journey and turning dreams into reality.'
    },
    {
        name: 'Sathya M',
        batch: 'Innovators (2011 - 2015)',
        designation: 'Infection Control Officer',
        hospital: 'Saudi Arabia',
        image: alumniSathyaImg,
        quote: 'You are not just gaining knowledge and exposure; they are the ones guiding you in the right pathway as well as in spiritual growth. Now we are in a different country with a higher-paying salary because we chose the right college and had proper guidance. I thank all the faculties who gave us the confidence to survive apart from India. A special thanks to our beloved Jayabharathan Sir, Florence Ma\'am, Principal Ma\'am, and also our most admired person, Jerin Sir.'
    },
    {
        name: 'Christy Princia',
        batch: '2011 - 2015',
        designation: 'Registered Nurse',
        hospital: 'Sultan Qaboos Hospital, MOH, Salalah, Oman',
        image: alumniChristyImg,
        quote: 'First of all, I thank God for giving me this college at the right age. Now I am very strong in my spiritual life, and I can say that my college is one of the main reasons for that. I corrected many of my mistakes there. When I left the college, I became a smart and confident girl. While working in an outside hospital, I realized how much patience we need with others. I also understood how our studies help us in real life. I am proud to say that I studied in one place - our MZ College. I believe this quote is suitable: "To Make Man Whole."'
    },
    {
        name: 'Anbumathi Sampathkumar',
        batch: 'Innovators (2011 - 2015)',
        designation: 'ICU DOH RN',
        hospital: 'Al Dhannah Hospital, Burjeel Holdings, Abu Dhabi, UAE',
        image: alumniAnbumathiImg,
        quote: 'I am very thankful to my college for giving me strong knowledge, good clinical training, and confidence in my profession. The support and guidance from my teachers helped me grow into a responsible and skilled nurse. Today, I am proud to serve patients internationally because of the foundation built by my college.'
    },
    {
        name: 'Jonathan Keith Moses',
        batch: 'Innovators (2011 - 2015)',
        designation: 'Practical Nurse Instructor',
        hospital: 'School of Health and Wellness, Red Deer Polytechnic, Red Deer, Canada',
        image: alumniJonathanImg,
        quote: 'All honour and glory be unto God alone. Mount Zion has been an integral part of both my personal and professional lives. I am always thankful for my College leadership, my dear and encouraging teachers, support staff who kept the campus clean and ambient for learning and also the hostel and cafeteria caretakers who nourished us well. My college gave me a wholesome development exactly as per the vision they had and made sure to equip us for the ever advancing professional future. My college is close to my heart.'
    },
    {
        name: 'Anish',
        batch: 'Innovators (2011 - 2015)',
        designation: 'General Nurse',
        hospital: 'Royal Hospital, Sultanate of Oman',
        image: alumniAnishImg,
        quote: 'The college provided excellent academic education and clinical training which helped me develop professional knowledge, skills, and confidence in nursing practice. As a Christian institution, the college also contributed positively to my spiritual growth. Through regular prayers and Biblical teachings, my spiritual life was strengthened, and I gained valuable Bible knowledge that continues to guide me in my personal and professional life. I am grateful to the management and faculty for their support in shaping both my career and spiritual values.'
    },
    {
        name: 'Anitha',
        batch: 'Innovators (2011 - 2015)',
        designation: 'Nursing Professional',
        hospital: '',
        image: alumniAnithaImg,
        quote: 'Degree is just a paper, but the lessons I learned here are life-long treasures. From a simple Tamil medium girl to a confident professional, my journey here was totally extraordinary. Thank you, my dear college, for giving me the best memories and the best life. Special thanks to all my teachers and leadership in the college.'
    },
    {
        name: 'Manjula',
        batch: '2011 - 2015',
        designation: 'Senior ICU Nurse',
        hospital: 'Jedaiah Steve Hospital, Karaikudi',
        image: alumniManjulaImg,
        quote: 'I am Manjula, from the 2011-2015 batch, currently working in ICU as a Senior Nurse in Jedaiah Steve Hospital, Karaikudi.'
    },
    {
        name: 'Paul Daril',
        batch: 'Third Batch (SPR: 83)',
        designation: 'RN',
        hospital: 'MOH Abu Dhabi',
        image: alumniPaulImg,
        quote: 'I am a proud graduate of the third batch of Mount Zion College of Nursing. I am so proud to have finished my degree at MZ because of the supportive college teachers and management, which contribute to the success of every individual student\'s career and bright future. This is due to the foundation of good teaching, knowledgeable education, wisdom in spiritual life, discipline, and motivation from co-curricular and extracurricular activities. After completing my degree in 2015, I started working in various job fields such as hospitals, home care, ambulance services, and industrial settings. Each of these different fields has taught me various aspects of patient care, involvement, knowledge, confidence, and leadership. These achievements are all thanks to my education at this college, and I take great pride in it. Thank you, Mount Zion.'
    },
    {
        name: 'Mr. Sivashanmugam',
        batch: '2020 - 2025',
        designation: 'Cath Lab Scrub Nurse',
        hospital: 'Dr. Rela Institute and Medical Centre, Chennai',
        image: alumniSivaImg,
        quote: 'My journey at MZCN from 2020 to 2025 has been one of growth, learning, and unforgettable memories. The supportive faculty and disciplined academic environment shaped both my professional skills and personal values. Clinical exposure and hands-on training at MZ gave me the confidence to face real-world challenges. Beyond academics, friendships and campus life made these years truly special. Today, I, Sivashanmugam, working as a Cath Lab Scrub Nurse at Dr. Rela Institute and Medical Centre, Chennai, proudly carry the lessons learned at MZCN. MZ will always remain the foundation of my nursing career and success.'
    },
    {
        name: 'Mr. Navasakthivel',
        batch: 'Innovators (2011 - 2015)',
        designation: 'Staff Nurse',
        hospital: 'Big Security Force hospital,Saudi Arabia',
        image: alumniNavasakthivelImg,
        quote: "When I first entered this gate, I was having so much fear because of my Tamil medium background. But my professors and friends gave me full support and encouraged me to speak without any hesitation. Today I am working in a big Security Force hospital, Saudi Arabia as a registered staff nurse, and all the credit goes to my college only. Really, I can't forget those golden days in my life. Always, Thankful for my college."
    }
];

const AlumniVoices = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="alumni-voices-page">
            <div className="inner-hero">
                <div className="container relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        ALUMNI STORIES
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Alumni Voices
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ maxWidth: '820px', margin: '0 auto' }}>
                        Real journeys from our graduates and the impact of Mount Zion College of Nursing in their professional lives.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 gap-8">
                        {alumniVoices.map((alumni, idx) => (
                            <div key={idx} className="alumni-voice-card reveal-zoom" style={{
                                background: 'white',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                flexDirection: windowWidth < 768 ? 'column' : 'row',
                                border: '1px solid #f0f0f0'
                            }}>
                                <div style={{
                                    flex: '0 0 300px',
                                    height: windowWidth < 768 ? '300px' : 'auto',
                                    background: '#f8fafc',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <img src={alumni.image} alt={alumni.name} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '20px',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        color: 'white'
                                    }}>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>{alumni.name}</h4>
                                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>Batch {alumni.batch}</p>
                                    </div>
                                </div>
                                <div style={{
                                    flex: 1,
                                    padding: windowWidth < 600 ? '30px 20px' : '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <i className="fas fa-quote-left" style={{
                                        fontSize: '2rem',
                                        color: 'var(--accent)',
                                        opacity: 0.3,
                                        marginBottom: '10px'
                                    }}></i>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        color: 'var(--text-dark)',
                                        fontStyle: 'italic',
                                        marginBottom: '20px',
                                        position: 'relative',
                                        zIndex: 2
                                    }}>
                                        "{alumni.quote}"
                                    </p>
                                    <div style={{
                                        paddingTop: '15px',
                                        borderTop: '1px solid #f0f0f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2px'
                                    }}>
                                        <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem' }}>{alumni.designation}</span>
                                        {alumni.hospital ? (
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{alumni.hospital}</span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AlumniVoices;
