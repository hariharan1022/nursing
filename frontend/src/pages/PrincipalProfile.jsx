import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrincipalProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const profile = {
        name: "Dr. H. M. Jasmine Sheela",
        post: "Principal & Professor",
        qual: "M.Sc. (N), Ph.D., R.N.R.M.",
        email: "jasminjl2006@gmail.com",
        phone: "9486564154",
        address: "W/O A Benedict Michael, 2/526 A, Annai Illam, Thondi Road (Near Tasmac Godown), Sivagangai District, Tamilnadu, South India.",
        nationality: "Indian",
        experience: "Worked as a staff nurse in multi-specialty hospitals and has extensive academic leadership experience spanning over 14 years as Principal.",
        awards: [
            "Lifelong Membership - TNAI (No - 528)",
            "Best Teacher in Pudukkottai District (06/2013)",
            "Rotarian Pudukkottai",
            "St. Anns School of Nursing Alumni Achievement Award (02/2026) for Leadership & Excellence",
            "Member - CAHO (Consortium of Accredited Healthcare Organization)",
            "Member - Clinical Establishment Act, Pudukkottai District"
        ],
        registrations: [
            "Registered Nurse – 30821 (08/1990 – Present) - TNNMC",
            "Registered Nurse Midwife – 37563 (05/1991 – Present) - TNNMC"
        ],
        languages: [
            { name: "English", level: "Native or Bilingual Proficiency" },
            { name: "Tamil", level: "Native or Bilingual Proficiency" },
            { name: "Malayalam", level: "Professional Working Proficiency" }
        ],
        projects: [
            "Carrier Ladder in Nursing",
            "Pediatric Emergencies & Seizure Management",
            "EMCON Nursing – 2016 Presentation",
            "Child Health Promoters: Growth and developmental needs of children",
            "Welfare Services Available for Challenged Children in India",
            "Child Abuse Prevention Advocacy"
        ]
    };

    return (
        <div className="profile-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero" style={{ padding: 'clamp(80px, 15vh, 120px) 0 80px' }}>
                <div className="container relative z-10 text-center px-4">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        LEADERSHIP PROFILE
                    </span>
                    <h1 className="reveal-skew stagger-1 text-3xl md:text-5xl lg:text-6xl" data-reveal-init>
                        {profile.name}
                    </h1>
                    <p className="reveal-blur stagger-2 font-bold uppercase tracking-widest text-xs md:text-sm" data-reveal-init style={{ color: 'var(--accent)' }}>
                        {profile.post}
                    </p>
                </div>
            </div>

            <section className="section py-10 md:py-20" style={{ background: 'var(--bg-light)', position: 'relative' }}>
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Sidebar - Resume Styled Card */}
                        <div className="lg:col-span-5 reveal-left" data-reveal-init>
                            <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-premium overflow-hidden lg:sticky lg:top-24 border border-gray-100 p-6 md:p-10">
                                {/* Resume Style Header (Photo Left, Details Right) */}
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start border-b border-slate-100 pb-10 mb-8">
                                    {/* Left: Professional Photo */}
                                    <div className="w-32 h-44 md:w-40 md:h-52 flex-shrink-0 rounded-[24px] overflow-hidden border-4 border-white shadow-2xl relative group">
                                        <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>

                                    {/* Right: Personal Details */}
                                    <div className="flex-grow text-center sm:text-left pt-2">
                                        <h4 className="text-xl md:text-2xl font-black mb-1 leading-tight" style={{ color: 'var(--primary)' }}>{profile.name}</h4>
                                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-accent mb-6">Principal & Professor</p>

                                        <div className="space-y-3.5">
                                            <div className="flex items-center justify-center sm:justify-start gap-4 group/item">
                                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/item:bg-accent transition-all">
                                                    <i className="fas fa-envelope text-primary text-[10px]"></i>
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Email Address</span>
                                                    <span className="text-xs font-bold text-slate-600 break-all">{profile.email}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-4 group/item">
                                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/item:bg-accent transition-all">
                                                    <i className="fas fa-phone text-primary text-[10px]"></i>
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Contact Number</span>
                                                    <span className="text-xs font-bold text-slate-600">{profile.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Lower Sections */}
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                                            <span className="w-5 h-[1.5px] bg-accent"></span>
                                            Expertise Proficiency
                                        </h4>
                                        <div className="space-y-5">
                                            {profile.languages.map((lang, idx) => (
                                                <div key={idx} className="group/progress">
                                                    <div className="flex justify-between text-[11px] font-bold mb-2">
                                                        <span className="uppercase tracking-tight" style={{ color: 'var(--primary)' }}>{lang.name}</span>
                                                        <span className="text-slate-400 text-[9px] group-hover/progress:text-accent transition-colors">{lang.level}</span>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden p-[1px]">
                                                        <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: idx === 2 ? '75%' : '100%' }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <div className="p-5 bg-slate-50 rounded-[30px] border border-slate-100 flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Nationality</h4>
                                                <p className="text-xs font-black text-primary uppercase tracking-wider">{profile.nationality}</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                <i className="fas fa-flag text-accent text-xs"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Academic Credentials */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Academic Credentials
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium mb-8">
                                    {profile.qual}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {profile.registrations.map((reg, idx) => (
                                        <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 italic font-medium text-slate-500 text-xs md:text-sm">
                                            <i className="fas fa-id-card-alt mr-3 text-accent text-[10px]"></i>
                                            {reg}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Expertise & Vision */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Professional Experience
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium text-justify">
                                    {profile.experience}
                                </p>
                            </div>

                            {/* Awards & Honors */}
                            <div className="reveal-up bg-blue-box-premium p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden" data-reveal-init>
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                        <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                        Honor Awards & Memberships
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {profile.awards.map((award, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-sm">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>
                                                    <i className="fas fa-award text-[10px]"></i>
                                                </div>
                                                <p className="text-[11px] font-bold text-slate-700 leading-tight">{award}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <i className="fas fa-trophy text-[6rem] md:text-[10rem] text-primary/5 absolute -right-4 -bottom-4 md:-right-10 md:-bottom-10 pointer-events-none"></i>
                            </div>

                            {/* Projects */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Projects & Presentations
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {profile.projects.map((proj, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <i className="fas fa-check-circle text-accent mt-1 text-[10px]"></i>
                                            <span className="font-bold text-slate-600 text-[11px] md:text-xs leading-relaxed">{proj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Address */}
                            <div className="reveal-up bg-slate-900 p-6 md:p-10 rounded-[30px] md:rounded-[40px] text-white shadow-2xl" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-4 flex items-center gap-4 text-white">
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Address & Declaration
                                </h3>
                                <p className="text-slate-400 text-xs md:text-sm font-medium mb-8 leading-relaxed">
                                    {profile.address}
                                </p>
                                <div className="p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[10px] md:text-xs font-bold leading-relaxed text-slate-400 italic text-justify">
                                        "I hereby declare that all the information mentioned in my resume is true and correct to my knowledge and I take full responsibility for the accuracy of the particulars mentioned."
                                    </p>
                                </div>
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
