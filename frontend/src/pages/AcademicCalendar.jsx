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

    const academicActivities = [
        { month: "October", activities: ["Commencement of Academic Session", "Student Induction & Orientation Programme", "University Theory & Practical Examinations (Senior Batch)"] },
        { month: "November", activities: ["Fresher’s Reception & Professional Integration Programme"] },
        { month: "December", activities: ["Institutional Christmas Observance & Value-Based Reflection Programme"] },
        { month: "January", activities: ["Lamp Lighting & Oath Taking Ceremony", "Pongal Celebration – Cultural Heritage Programme"] },
        { month: "February", activities: ["Annual Sports Meet (Physical Wellness Initiative)", "Cultural & Literary Week"] },
        { month: "March", activities: ["Structured Revision Programme", "Internal Model University Examinations"] },
        { month: "April", activities: ["University Theory & Practical Examinations"] },
        { month: "May", activities: ["Educational Field Visit / Study Tour", "Academic Recess"] },
        { month: "June", activities: ["Graduation Ceremony", "Alumni Association Meet (Periodic Engagement Initiative)", "Alumni Sports Meet & Get-together (Once in Four Years)"] },
        { month: "July", activities: ["Institutional & Advanced Clinical Exposure Visits"] },
        { month: "August", activities: ["National / State Level Conferences, Seminars & Workshops (FDP & CNE Activities)"] },
        { month: "September", activities: ["Farewell Ceremony for Outgoing Batch", "Intensive Revision Programme", "Model Examinations"] }
    ];

    return (
        <div className="academic-calendar-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container relative z-10 text-center">
                    <span className="hero-tag-gold float-breathe reveal-zoom" data-reveal-init>
                        PLANNING & SCHEDULE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Academic Calendar
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ maxWidth: '800px', margin: '0 auto' }}>
                        A comprehensive schedule of structured theory, clinical training, and co-curricular enrichment activities as per Tamil Nadu Dr. M.G.R. Medical University norms.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    {/* Introduction Summary */}
                    <div className="reveal-up mb-16" data-reveal-init>
                        <div className="blue-box-premium p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-black mb-8 text-primary uppercase tracking-tighter">
                                    Institutional Academic & Co-Curricular Calendar
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                    In addition to the structured curriculum comprising Block Theory Instruction, Skill Laboratory Demonstrations, Simulation-Based Learning, and Supervised Clinical Training as per the norms of <span className="text-primary font-bold">Tamil Nadu Dr. M.G.R. Medical University</span> and the <span className="text-primary font-bold">Indian Nursing Council</span>, the institution implements the following annual academic enrichment activities:
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-blue-50 flex items-center gap-3">
                                        <i className="fas fa-check-circle text-accent"></i>
                                        <span className="font-bold text-sm text-primary">University Norms Compliant</span>
                                    </div>
                                    <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-blue-50 flex items-center gap-3">
                                        <i className="fas fa-check-circle text-accent"></i>
                                        <span className="font-bold text-sm text-primary">Professional Integration</span>
                                    </div>
                                    <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-blue-50 flex items-center gap-3">
                                        <i className="fas fa-check-circle text-accent"></i>
                                        <span className="font-bold text-sm text-primary">Skill-Based Learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Activities Table/Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[40px] shadow-premium border border-gray-100 overflow-hidden reveal-left" data-reveal-init>
                                <div className="bg-primary p-8 text-white flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight">Activity Schedule</h3>
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Monthly Institutional Roadmap</p>
                                    </div>
                                    <i className="fas fa-calendar-alt text-4xl text-white/20"></i>
                                </div>
                                <div className="divide-y divide-gray-50">
                                    {academicActivities.map((item, idx) => (
                                        <div key={idx} className="group hover:bg-slate-50 transition-all p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
                                            <div className="md:w-32 flex-shrink-0">
                                                <span className="inline-block px-4 py-2 bg-blue-50 text-primary font-black text-sm rounded-xl uppercase tracking-tighter group-hover:bg-accent group-hover:text-primary transition-colors">
                                                    {item.month}
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <ul className="space-y-3">
                                                    {item.activities.map((act, i) => (
                                                        <li key={i} className="flex gap-4 items-start text-slate-700 font-bold leading-snug">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                                            {act}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 sticky top-24">
                            <div className="space-y-8">
                                <div className="blue-box-premium p-10 rounded-[40px] shadow-xl reveal-zoom" data-reveal-init>
                                    <h4 className="text-2xl font-black text-primary mb-6">Key Milestones</h4>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">1</div>
                                            <div>
                                                <p className="font-black text-primary leading-tight">Theory Session</p>
                                                <p className="text-xs text-slate-500 font-bold">Standard Block Instruction</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">2</div>
                                            <div>
                                                <p className="font-black text-primary leading-tight">Clinical Exposure</p>
                                                <p className="text-xs text-slate-500 font-bold">Supervised Training Norms</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">3</div>
                                            <div>
                                                <p className="font-black text-primary leading-tight">Assessment</p>
                                                <p className="text-xs text-slate-500 font-bold">University & Model Exams</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-[40px] shadow-md border border-gray-100 reveal-right animate-pulse-slow" data-reveal-init>
                                    <i className="fas fa-info-circle text-accent text-3xl mb-4"></i>
                                    <h4 className="text-lg font-black text-primary mb-3">Important Note</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed">
                                        Dates and specific events are subject to official university notifications. Students are advised to check the notice board regularly for micro-schedules.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Calendar Sections */}
                    <div id="visual-calendar" className="reveal-up" data-reveal-init>
                        <div className="text-center mb-16">
                            <h3 className="section-title-premium inline-block">Official Activity Roadmap</h3>
                            <p className="text-slate-500 font-bold mt-4">Documented schedule for the Academic Session 2025-26</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {calendarPages.map((img, idx) => (
                                <div key={idx} className="reveal-zoom active group" style={{ transitionDelay: `${idx * 0.05}s` }}>
                                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-50 transform group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                                        <div className="mb-4 flex justify-between items-center px-2">
                                            <span className="font-black text-primary text-xs uppercase tracking-widest">Page {idx + 1}</span>
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                        </div>
                                        <img
                                            src={img}
                                            alt={`Academic Calendar Page ${idx + 1}`}
                                            className="w-full h-auto rounded-2xl border border-gray-100 shadow-inner"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademicCalendar;

