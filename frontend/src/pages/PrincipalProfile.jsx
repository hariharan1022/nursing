import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrincipalProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const profile = {
        name: "Dr. H. M. Jasmine Sheela",
        post: "Principal & Professor",
        qual: "M.Sc. (Child Health Nursing), Ph.D. (Nursing), R.N.R.M.",
        email: "jasminjl2006@gmail.com",
        phone: "9486564154",
        address: "W/O A Benedict Michael, 2/526 A, Annai Illam, Thondi Road (Near Tasmac Godown), Sivagangai District, Tamilnadu, South India.",
        nationality: "Indian",
        skills: [
            "Periodic programme assessment and evaluation",
            "Leadership and Team building",
            "Workshop and Seminar presentation"
        ],
        education: [
            {
                degree: "Ph.D. Nursing",
                institution: "TN. Dr. MGR Medical University, Chennai",
                duration: "10/2010 - 10/2015",
                detail: "Thesis: To determine the incidence of secondary lactose intolerance by evaluating the effects of lactose free feeds in controlling diarrhea and correcting dehydration among children"
            },
            {
                degree: "M.Sc. Child Health Nursing",
                institution: "Sacred Heart Nursing College, Madurai (TN. Dr. MGR Medical University)",
                duration: "07/2003 - 07/2005",
                detail: "Focus: Incidence of Lactose intolerance and effect of lactose free formula in controlling diarrhea"
            },
            {
                degree: "PC B.Sc. Nursing",
                institution: "Matha College of Nursing, Sivagangai District (TN. Dr. MGR Medical University)",
                duration: "08/1992 - 05/2001"
            },
            {
                degree: "Diploma in Nursing & Midwifery",
                institution: "St. Anns School of Nursing, Sacred Heart Hospital, Tuticorin",
                duration: "07/1986 - 12/1989"
            }
        ],
        experience: [
            {
                role: "Principal",
                organization: "Mount Zion College of Nursing, Pudukkottai",
                duration: "03/2011 - Present",
                tasks: [
                    "Budget development and College Administration",
                    "Performance Standards and Classroom Evaluation",
                    "Teaching Mentoring and Development",
                    "Curriculum Improvements and standardized testing scores",
                    "Student Teacher Supervision and College Safety",
                    "Program Management and co-ordination"
                ]
            },
            {
                role: "Associate Professor",
                organization: "Matha College of Nursing, Sivagangai",
                duration: "03/2005 - 03/2011",
                tasks: [
                    "Subject In-charge for Fundamental of Nursing",
                    "Class coordinator for B.Sc and PC B.Sc Nursing Program",
                    "Guiding Diploma, B.Sc and M.Sc Nursing students"
                ]
            }
        ],
        panelMembership: [
            { role: "Inspection Panel", org: "TN Dr. MGR Medical University, Chennai", period: "05/2015 - Present" },
            { role: "Inspection Panel", org: "TN Nurses and Midwives Council, Chennai", period: "03/2015 - Present" },
            { role: "Lifelong Membership", org: "TNAI (No - 528)", period: "Active" },
            { role: "Member", org: "CAHO (Consortium of Accredited Healthcare Organization)", period: "Active" },
            { role: "Member", org: "Clinical establishment act, Pudukkottai district", period: "Active" }
        ],
        volunteerExperience: {
            title: "Conference Organizing Experience",
            period: "03/2011 - Present",
            location: "Pudukkottai District",
            conferences: [
                "State Level: Critical and Emergency Care",
                "State Level: Nursing Perspective in Trauma and Disaster",
                "State Level: Innovative approach to OBG Nursing",
                "State Level: Life battles from childhood to adulthood",
                "State Level: Enhancing and Empowering Nursing Managerial Skills",
                "State Level: Infection Control and standard precautions (funded by MHFW)",
                "State Level: AED Launch - Emergency and critical care nursing",
                "National Level: Life threating moments and lifesaving skills"
            ]
        },
        awards: [
            { title: "Best Teacher in Pudukkottai District", year: "06/2013" },
            { title: "Rotarian Pudukkottai", year: "Active Member" },
            { title: "St. Anns School of Nursing Alumni Achievement Award", year: "02/2026", reason: "For Leadership & Excellence" }
        ],
        registrations: [
            "Registered Nurse – 30821 (08/1990 – Present) - TNNMC",
            "Registered Nurse Midwife – 37563 (05/1991 – Present) - TNNMC"
        ],
        languages: [
            { name: "English", level: "Native or Bilingual Proficiency" },
            { name: "Tamil", level: "Native or Bilingual Proficiency" },
            { name: "Malayalam", level: "Professional Working Proficiency" }
        ]
    };

    return (
        <div className="profile-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero" style={{ padding: 'clamp(80px, 15vh, 120px) 0 80px' }}>
                <div className="container relative z-10 text-center px-4">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        PRINCIPAL'S PROFILE
                    </span>
                    <h1 className="reveal-skew stagger-1 text-3xl md:text-5xl lg:text-6xl" data-reveal-init>
                        {profile.name}
                    </h1>
                    <p className="reveal-blur stagger-2 font-bold uppercase tracking-widest text-xs md:text-sm" data-reveal-init style={{ color: 'var(--accent)' }}>
                        {profile.post}
                    </p>
                </div>
            </div>

            <section className="section py-10 md:py-20 bg-mesh-premium">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Sidebar */}
                        <div className="lg:col-span-5 reveal-left" data-reveal-init>
                            <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-premium overflow-hidden lg:sticky lg:top-24 border border-gray-100 p-6 md:p-10">
                                {/* Resume Style Header */}
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start border-b border-slate-100 pb-10 mb-8">
                                    <div className="w-32 h-44 md:w-40 md:h-52 flex-shrink-0 rounded-[24px] overflow-hidden border-4 border-white shadow-2xl relative group">
                                        <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>

                                    <div className="flex-grow text-center sm:text-left pt-2">
                                        <h4 className="text-xl md:text-2xl font-black mb-1 leading-tight" style={{ color: 'var(--primary)' }}>{profile.name}</h4>
                                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-accent mb-6">Principal & Professor</p>

                                        <div className="space-y-3.5">
                                            <div className="flex items-center justify-center sm:justify-start gap-4 group/item">
                                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/item:bg-accent transition-all">
                                                    <i className="fas fa-envelope text-primary text-[10px]"></i>
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Email</span>
                                                    <span className="text-xs font-bold text-slate-600 break-all">{profile.email}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-4 group/item">
                                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/item:bg-accent transition-all">
                                                    <i className="fas fa-phone text-primary text-[10px]"></i>
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Phone</span>
                                                    <span className="text-xs font-bold text-slate-600">{profile.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                                            <span className="w-5 h-[1.5px] bg-accent"></span>
                                            Core Skills
                                        </h4>
                                        <div className="space-y-3">
                                            {profile.skills.map((skill, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-accent transition-colors">
                                                    <i className="fas fa-check-circle text-accent text-[10px]"></i>
                                                    <span className="text-xs font-bold text-slate-700">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Panel Memberships */}
                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                                            <span className="w-5 h-[1.5px] bg-accent"></span>
                                            Panel Memberships
                                        </h4>
                                        <div className="space-y-3">
                                            {profile.panelMembership.map((item, idx) => (
                                                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <p className="text-[10px] font-black text-primary uppercase leading-tight">{item.role}</p>
                                                    <p className="text-[9px] font-bold text-slate-500 mt-0.5">{item.org}</p>
                                                    <span className="text-[8px] font-black text-accent block mt-1">{item.period}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Academic Credentials */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Education & Credentials
                                </h3>
                                <div className="space-y-6">
                                    {profile.education.map((edu, idx) => (
                                        <div key={idx} className="relative pl-10 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[1px] before:bg-slate-100 last:before:hidden">
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center z-10">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-1">
                                                <h4 className="text-sm font-black text-primary uppercase tracking-tight">{edu.degree}</h4>
                                                <span className="text-[9px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{edu.duration}</span>
                                            </div>
                                            <p className="text-xs font-bold text-slate-600 mb-1">{edu.institution}</p>
                                            {edu.detail && <p className="text-[10px] font-bold text-slate-500 italic leading-relaxed">{edu.detail}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Professional Experience */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Work Experience
                                </h3>
                                <div className="space-y-10">
                                    {profile.experience.map((exp, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                                <div>
                                                    <h4 className="text-base font-black text-primary uppercase group-hover:text-accent transition-colors">{exp.role}</h4>
                                                    <p className="text-sm font-bold text-slate-600">{exp.organization}</p>
                                                </div>
                                                <span className="text-[10px] font-black text-accent bg-accent/5 px-3 py-1.5 rounded-full tracking-widest">{exp.duration}</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {exp.tasks.map((task, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-transparent hover:border-slate-100 transition-all">
                                                        <i className="fas fa-caret-right text-accent"></i>
                                                        <span className="text-[11px] font-bold text-slate-600">{task}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Volunteer & Conferences */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    {profile.volunteerExperience.title}
                                </h3>
                                <div className="p-5 bg-slate-900 rounded-[24px] text-white mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-[9px] font-black text-accent uppercase tracking-widest">Active Since</p>
                                        <p className="text-sm font-bold">{profile.volunteerExperience.period}</p>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <p className="text-[9px] font-black text-accent uppercase tracking-widest">Location</p>
                                        <p className="text-sm font-bold">{profile.volunteerExperience.location}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {profile.volunteerExperience.conferences.map((conf, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                                <i className="fas fa-bullhorn text-accent text-[8px]"></i>
                                            </div>
                                            <p className="text-[11px] font-bold text-slate-700 leading-tight">{conf}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Honor Awards */}
                            <div className="reveal-up bg-blue-box-premium p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden" data-reveal-init>
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                        <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                        Honor Awards
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {profile.awards.map((award, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-sm">
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>
                                                    <i className="fas fa-award text-xs"></i>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[11px] font-black text-primary leading-tight">{award.title}</p>
                                                    <span className="text-[9px] font-bold text-slate-700 mt-1 uppercase tracking-widest">{award.year}</span>
                                                    {award.reason && <p className="text-[9px] font-medium text-slate-500 italic mt-0.5">{award.reason}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <i className="fas fa-trophy text-[6rem] md:text-[10rem] text-primary/5 absolute -right-4 -bottom-4 md:-right-10 md:-bottom-10 pointer-events-none"></i>
                            </div>

                            <div className="pt-10 flex flex-col items-center">
                                <Link to="/faculty" className="btn btn-primary w-full sm:w-auto">
                                    <i className="fas fa-arrow-left mr-3"></i> Back to Faculty
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrincipalProfile;
