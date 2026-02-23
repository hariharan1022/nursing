import React, { useEffect } from 'react';

const AcademicCalendar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                Our comprehensive academic calendar for the upcoming session is currently being finalized in accordance with the university guidelines.
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

                            <div className="inline-flex items-center gap-4 py-4 px-8 bg-accent text-primary font-black rounded-full text-lg shadow-lg hover:bg-white transition-all cursor-pointer">
                                <i className="fas fa-file-pdf"></i>
                                DOWNLOAD PDF CALENDAR (COMING SOON)
                            </div>
                        </div>

                        <div className="mt-16 bg-white p-12 rounded-3xl shadow-sm border border-gray-100 reveal active">
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
