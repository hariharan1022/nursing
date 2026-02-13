import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Feedback = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('institutional');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab === 'staff-student' || tab === 'course' || tab === 'hostel' || tab === 'general' || tab === 'institutional') {
            setActiveTab(tab);
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
    }, [activeTab]);

    const tabs = [
        { id: 'general', label: 'General Feedback', icon: 'fa-comments' },
        { id: 'staff-student', label: 'Staff & Student', icon: 'fa-user-friends' },
        { id: 'course', label: 'Course Feedback', icon: 'fa-graduation-cap' },
        { id: 'hostel', label: 'Hostel Feedback', icon: 'fa-hotel' },
        { id: 'institutional', label: 'Institutional Quality', icon: 'fa-university' }
    ];

    return (
        <div className="feedback-page">
            <div className="inner-hero">
                <div className="container">
                    <span className="estd-tag" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>VOICE YOUR THOUGHTS</span>
                    <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Feedback System</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                        Your feedback helps us grow and improve our standards. Please choose the relevant category below.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="feedback-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setActiveTab(tab.id)}
                                style={{ textTransform: 'none', padding: '12px 25px', transition: 'all 0.3s ease', transform: activeTab === tab.id ? 'translateY(-2px)' : 'none' }}
                            >
                                <i className={`fas ${tab.icon}`} style={{ marginRight: '8px' }}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="feedback-content" style={{ animation: 'fadeIn 0.5s ease' }}>
                        {activeTab === 'general' && (
                            <div className="feedback-card active" style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fas fa-comments"></i> General Feedback</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>We would love to hear your thoughts or feedback on how we can improve your experience!</p>
                                <p style={{ color: '#d93025', fontSize: '0.8rem', marginDirection: '20px' }}>* Indicates required question</p>

                                <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                                    <input type="hidden" name="_subject" value="New General Feedback - MZCN" />
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Email <span style={{ color: '#d93025' }}>*</span></label>
                                        <input type="email" name="email" className="form-control" placeholder="Your email" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Feedback <span style={{ color: '#d93025' }}>*</span></label>
                                        <textarea name="message" rows="4" className="form-control" placeholder="Your answer" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Submit</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'staff-student' && (
                            <div className="feedback-card active" style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fas fa-user-friends"></i> Staff & Student Satisfaction</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Help us understand how we can support our community better.</p>

                                <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                                    <input type="hidden" name="_subject" value="New Staff/Student Satisfaction Feedback - MZCN" />
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>I am a: <span style={{ color: '#d93025' }}>*</span></label>
                                        <select name="role" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
                                            <option value="">Select Role</option>
                                            <option value="Student">Student</option>
                                            <option value="Staff">Staff Member</option>
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Rate the following (1-5 Scale): <span style={{ color: '#d93025' }}>*</span></label>
                                        <div className="rating-questions" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {[
                                                { q: 'Relationship and support from mentors/teachers', n: 'mentor_support' },
                                                { q: 'Availability of campus resources (Library, Labs, etc.)', n: 'resources' },
                                                { q: 'Opportunities for personal and professional growth', n: 'growth_opps' },
                                                { q: 'Communication and transparency from administration', n: 'admin_comm' },
                                                { q: 'Overall sense of safety and inclusion on campus', n: 'safety_inclusion' }
                                            ].map((item, idx) => (
                                                <div key={idx} style={{ padding: '15px', background: 'var(--bg-light)', borderRadius: '10px' }}>
                                                    <p style={{ marginBottom: '10px', fontWeight: 600, fontSize: '0.9rem' }}>{item.q}</p>
                                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
                                                        {[
                                                            { val: 1, label: 'Very Poor' },
                                                            { val: 2, label: 'Poor' },
                                                            { val: 3, label: 'Average' },
                                                            { val: 4, label: 'Good' },
                                                            { val: 5, label: 'Excellent' }
                                                        ].map(opt => (
                                                            <label key={opt.val} className="feedback-option" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer', padding: '8px 12px', borderRadius: '5px', transition: 'all 0.2s' }}>
                                                                <input type="radio" name={item.n} value={opt.label} required />
                                                                {opt.val}. {opt.label}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Submit</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'course' && (
                            <div className="feedback-card active" style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fas fa-graduation-cap"></i> Course & Academic Feedback</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Your academic feedback is crucial for maintaining our high educational standards.</p>

                                <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                                    <input type="hidden" name="_subject" value="New Course Academic Feedback - MZCN" />
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Course Name <span style={{ color: '#d93025' }}>*</span></label>
                                        <input type="text" name="course_name" placeholder="B.Sc. Nursing" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Rate the following (1-5 Scale): <span style={{ color: '#d93025' }}>*</span></label>
                                        <div className="rating-questions" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {[
                                                { q: 'Coverage of syllabus and key learning outcomes', n: 'syllabus_coverage' },
                                                { q: 'Effectiveness of teaching methods and clinical training', n: 'teaching_effectiveness' },
                                                { q: 'Quality and fairness of assessments/examinations', n: 'exam_quality' },
                                                { q: 'Accessibility and helpfulness of the faculty', n: 'faculty_accessibility' },
                                                { q: 'Integration of practical skills with theory', n: 'theory_practical' }
                                            ].map((item, idx) => (
                                                <div key={idx} style={{ padding: '15px', background: 'var(--bg-light)', borderRadius: '10px' }}>
                                                    <p style={{ marginBottom: '10px', fontWeight: 600, fontSize: '0.9rem' }}>{item.q}</p>
                                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
                                                        {[
                                                            { val: 1, label: 'Very Poor' },
                                                            { val: 2, label: 'Poor' },
                                                            { val: 3, label: 'Average' },
                                                            { val: 4, label: 'Good' },
                                                            { val: 5, label: 'Excellent' }
                                                        ].map(opt => (
                                                            <label key={opt.val} className="feedback-option" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer', padding: '8px 12px', borderRadius: '5px', transition: 'all 0.2s' }}>
                                                                <input type="radio" name={item.n} value={opt.label} required />
                                                                {opt.val}. {opt.label}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Submit</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'hostel' && (
                            <div className="feedback-card active" style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fas fa-hotel"></i> Hostel & Residential Feedback</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Help us maintain a comfortable and safe living environment.</p>

                                <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                                    <input type="hidden" name="_subject" value="New Hostel Feedback - MZCN" />
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Room Number / Block <span style={{ color: '#d93025' }}>*</span></label>
                                        <input type="text" name="room_block" placeholder="Your answer" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Rate the following (1-5 Scale): <span style={{ color: '#d93025' }}>*</span></label>
                                        <div className="rating-questions" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {[
                                                { q: 'Cleanliness and maintenance of rooms/common areas', n: 'cleanliness' },
                                                { q: 'Security and safety measures within the hostel', n: 'hostel_security' },
                                                { q: 'Support and responsiveness of hostel staff/wardens', n: 'staff_responsiveness' },
                                                { q: 'Quality and variety of meals provided', n: 'meal_quality' },
                                                { q: 'Wi-Fi and study environment facilities', n: 'hostel_facilities' }
                                            ].map((item, idx) => (
                                                <div key={idx} style={{ padding: '15px', background: 'var(--bg-light)', borderRadius: '10px' }}>
                                                    <p style={{ marginBottom: '10px', fontWeight: 600, fontSize: '0.9rem' }}>{item.q}</p>
                                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
                                                        {[
                                                            { val: 1, label: 'Very Poor' },
                                                            { val: 2, label: 'Poor' },
                                                            { val: 3, label: 'Average' },
                                                            { val: 4, label: 'Good' },
                                                            { val: 5, label: 'Excellent' }
                                                        ].map(opt => (
                                                            <label key={opt.val} className="feedback-option" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer', padding: '8px 12px', borderRadius: '5px', transition: 'all 0.2s' }}>
                                                                <input type="radio" name={item.n} value={opt.label} required />
                                                                {opt.val}. {opt.label}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Submit</button>
                                </form>
                            </div>
                        )}
                        {activeTab === 'institutional' && (
                            <div className="feedback-card active" style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
                                <h2 style={{ color: 'var(--primary)', marginBottom: '5px' }}><i className="fas fa-university"></i> Institutional Quality Feedback</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Evaluate the institution's overall quality and standards.</p>

                                <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                                    <input type="hidden" name="_subject" value="New Institutional Quality Feedback - MZCN" />
                                    <div className="form-group" style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '8px' }}>Rate the following (1-5 Scale): <span style={{ color: '#d93025' }}>*</span></label>
                                        <div className="rating-questions" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {[
                                                { q: 'Overall infrastructure and campus maintenance', n: 'infrastructure' },
                                                { q: 'Quality of laboratory and clinical learning facilities', n: 'lab_quality' },
                                                { q: 'Support for extracurricular and cultural activities', n: 'extracurricular' },
                                                { q: 'Efficiency of student grievance redressal system', n: 'grievance_redressal' },
                                                { q: 'Institution\'s commitment to professional ethics and values', n: 'ethics_values' }
                                            ].map((item, idx) => (
                                                <div key={idx} style={{ padding: '15px', background: 'var(--bg-light)', borderRadius: '10px' }}>
                                                    <p style={{ marginBottom: '10px', fontWeight: 600, fontSize: '0.9rem' }}>{item.q}</p>
                                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
                                                        {[
                                                            { val: 1, label: 'Very Poor' },
                                                            { val: 2, label: 'Poor' },
                                                            { val: 3, label: 'Average' },
                                                            { val: 4, label: 'Good' },
                                                            { val: 5, label: 'Excellent' }
                                                        ].map(opt => (
                                                            <label key={opt.val} className="feedback-option" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer', padding: '8px 12px', borderRadius: '5px', transition: 'all 0.2s' }}>
                                                                <input type="radio" name={item.n} value={opt.label} required />
                                                                {opt.val}. {opt.label}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Submit</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;
