import React, { useEffect } from 'react';

// Import Calendar Images
import cal1 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.34 PM.jpeg';
import cal2 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.34 PM (1).jpeg';
import cal3 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.35 PM.jpeg';
import cal4 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.35 PM (1).jpeg';
import cal5 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.35 PM (2).jpeg';
import cal6 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.36 PM.jpeg';
import cal7 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.52.36 PM (1).jpeg';
import cal8 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.55.47 PM.jpeg';
import cal9 from '../assets/AcademicCalendar/WhatsApp Image 2026-02-23 at 9.55.48 PM.jpeg';

const AcademicCalendar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const calendarPages = [cal1, cal2, cal3, cal4, cal5, cal6, cal7, cal8, cal9];

    return (
        <div className="academic-calendar-page">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        PLANNING & SCHEDULE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init style={{ color: 'white' }}>
                        Academic Calendar
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Detailed schedule of academic activities, examinations, and institutional events for the current session.
                    </p>
                </div>
            </div>

            <section className="section py-24" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="reveal active blue-box-premium p-16 text-center shadow-2xl">
                            <i className="fas fa-calendar-alt text-7xl text-accent mb-8"></i>
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Academic Session 2025-26</h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Our comprehensive academic calendar for the upcoming session is now available for reference.
                            </p>

                            <div className="grid grid-cols-3 sm:grid-cols-1 gap-6 mb-12">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <h4 className="font-black text-accent mb-2">Internal Exams</h4>
                                    <p className="text-sm">Scheduled Quarterly</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <h4 className="font-black text-accent mb-2">Practical Sessions</h4>
                                    <p className="text-sm">Continuous Evaluation</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <h4 className="font-black text-accent mb-2">University Exams</h4>
                                    <p className="text-sm">As per M.G.R. Schedule</p>
                                </div>
                            </div>

                            <a href="#visual-calendar" className="inline-flex items-center gap-4 py-4 px-8 bg-accent text-primary font-black rounded-full text-lg shadow-lg hover:bg-white transition-all cursor-pointer no-underline">
                                <i className="fas fa-eye"></i>
                                VIEW FULL CALENDAR BELOW
                            </a>
                        </div>

                        {/* Visual Calendar Images */}
                        <div id="visual-calendar" className="mt-20 space-y-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-black text-primary mb-4">Official Calendar Pages</h3>
                                <div className="w-20 h-1 bg-accent mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-12">
                                {calendarPages.map((img, idx) => (
                                    <div key={idx} className="reveal active shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-white">
                                        <div className="bg-primary text-white py-2 px-6 text-sm font-bold flex justify-between items-center">
                                            <span>Page {idx + 1}</span>
                                            <span className="text-accent">Academic Session 2025-26</span>
                                        </div>
                                        <img
                                            src={img}
                                            alt={`Academic Calendar Page ${idx + 1}`}
                                            className="w-full h-auto block"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-20 bg-white p-12 rounded-3xl shadow-sm border border-gray-100 reveal active">
                            <h3 className="text-2xl font-black text-primary mb-8 border-b-4 border-accent inline-block">Institutional Highlights</h3>
                            <div className="space-y-6">
                                {[
                                    { date: "August 1st", event: "Commencement of New Academic Session" },
                                    { date: "September", event: "Lamp Lighting & Induction Ceremony" },
                                    { date: "January", event: "Annual Sports Meet & Cultural Week" },
                                    { date: "May/June", event: "University Theory & Practical Examinations" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 items-center p-4 hover:bg-blue-50 transition-all rounded-xl">
                                        <div className="w-32 flex-shrink-0 font-black text-primary text-xl">{item.date}</div>
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <div className="font-bold text-gray-700 text-lg">{item.event}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademicCalendar;

