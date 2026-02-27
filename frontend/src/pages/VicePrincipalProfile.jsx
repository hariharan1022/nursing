import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VicePrincipalProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const profile = {
        name: "Prof. Dr. Jerin Kumar J",
        post: "Professor cum Vice-Principal",
        qual: "Ph.D. (Nursing), M.Sc. (Counseling & Psychotherapy), M.Sc. (Psychiatric Nursing), R.N.R.M.",
        email: "drjerinkumar.jacob@gmail.com",
        phone: "+91 8754768337",
        address: "Neyyoor – 629802, K.K Dist, Tamil Nadu, South India",
        experience: "16+ Years of Teaching & Administrative Experience",
        objective: "To achieve the highest standard in work through innovative, dedicated, research-oriented practice, while simultaneously contributing to the growth and success of the organization.",
        education: [
            { degree: "Ph.D. (Nursing)", institution: "CSI Jeyaraj Annapackiam College of Nursing, Madurai (TN Dr. M.G.R. Medical University)", year: "2022" },
            { degree: "M.Sc. Counseling & Psychotherapy", institution: "MS Chellamuthu Institute of Mental Health (Tamil Nadu Open University)", year: "2014", grade: "65%" },
            { degree: "M.Sc. Nursing (Mental Health Specialty)", institution: "CSI Jeyaraj Annapackiam College of Nursing, Madurai", year: "2011", grade: "69%" },
            { degree: "B.Sc. Nursing", institution: "CSI Jeyaraj Annapackiam College of Nursing, Madurai", year: "2007", grade: "63.25%" }
        ],
        workExperience: [
            { role: "Professor cum Vice-Principal", organization: "Mount Zion College of Nursing, Pudukkottai", duration: "01 Feb 2022 – Present (4 Years)" },
            { role: "Associate Professor", organization: "Karunya Institute of Technology & Sciences, Coimbatore", duration: "27 Sep 2021 – 31 Jan 2022" },
            { role: "Professor & Vice-Principal", organization: "Grace College of Nursing, Kanyakumari District", duration: "13 Jan 2021 – 25 Sep 2021" },
            { role: "Associate Professor", organization: "Grace College of Nursing, Kanyakumari District", duration: "01 Nov 2020 – 12 Jan 2021" },
            { role: "Associate Professor", organization: "Mount Zion College of Nursing, Pudukkottai", duration: "20 Aug 2018 – 31 Oct 2020" },
            { role: "Lecturer", organization: "All India Institute of Medical Sciences (AIIMS), Patna", duration: "29 Oct 2015 – 18 Aug 2018" },
            { role: "Assistant Professor", organization: "Mount Zion College of Nursing, Pudukkottai", duration: "01 Jul 2011 – 18 Oct 2015" },
            { role: "Clinical Instructor", organization: "CSI Jeyaraj Annapackiam College of Nursing, Madurai", duration: "01 Sep 2007 – 27 Apr 2011" }
        ],
        research: [
            { type: "PUBLICATION", title: "Perception of Suicide Based on Few Case Studies", journal: "New Frontiers in Education – International Journal of Education (ISSN: 0972-1231) · Vol. 52 · 2019" },
            { type: "PH.D. VALIDATION", title: "Expert Validator for 04 Ph.D. Research Projects", detail: "2026 · Contributing to doctoral-level academic research quality assurance" },
            { type: "CONFERENCE", title: "Suicidal Risk Assessment – Scientific Presentation", detail: "National Conference · 2014" },
            { type: "HOD ROLE", title: "HOD – Mental Health Nursing Dept, MZCN", detail: "Mount Zion College of Nursing · 2019" }
        ],
        training: [
            { year: "2015", title: "NIMHANS Gatekeeper Training – Suicide Prevention, Bengaluru", type: "NATIONAL" },
            { year: "2015", title: "Trainer – Central Institute of Psychiatry, Ranchi", type: "TRAINING" },
            { year: "2016", title: "Sr. Nursing Administrators Course – NIHFW, New Delhi", type: "CERT." },
            { year: "2019", title: "Online courses: Wound Care, Renal, Endocrinology, GI, Neuro, Haematology, Pulmonary, Lactation", type: "CERT." },
            { year: "2020", title: "Post-Acute Care in Coronavirus (Covid-19) for Nursing Professionals", type: "CERT." },
            { year: "2024", title: "Basic Life Support (BLS) – TN Apex Skill Dev. Centre & TNNMC", type: "CERT." }
        ],
        achievements: [
            { year: "2024", title: "Appointed Inspector – Tamil Nadu Nurses & Midwives Council, Chennai", cat: "STATUTORY" },
            { year: "2026", title: "Resource Person – State Level Seminar: Opportunities in Forensic Nursing Education & Research", cat: "STATE" },
            { year: "2022", title: "Appointed Examination Paper-Setter – Sri Guru Ram Das University of Health Sciences, Punjab", cat: "NATIONAL" },
            { year: "2016", title: "Resource Person & Guest Speaker – Nurses Training, Ministry of Health & Family Welfare, Govt. of India", cat: "NATIONAL" },
            { year: "2007", title: "Rural Development Project – Tamil Nadu Leprosy Mission (Community Healthcare)", cat: "COMMUNITY" }
        ],
        memberships: [
            "Indian Society of Psychiatric Nurses (ISPN India) - life Member",
            "International Association for Youth Mental Health (IAYMH) - Australia",
            "Counsellors Council of India (CCI) - Life Member",
            "Trained Nurses Association of India (TNAI) - Life Member",
            "American Travel Health Nurses Association (ATHNA) - International Member",
            "Certified Professional School Counsellor (CPSC) - Board Certified",
            "NAAC-Accreditation College Counsellor (Student Support & Progression Criterion)"
        ],
        personalInfo: {
            dob: "16 Dec 1984",
            nationality: "Indian",
            maritalStatus: "Married",
            father: "Mr. Jacob Jaya Kumar P"
        }
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

            <section className="section py-10 md:py-20" style={{ background: 'var(--bg-light)' }}>
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Sidebar */}
                        <div className="lg:col-span-5 reveal-left" data-reveal-init>
                            <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-premium overflow-hidden lg:sticky lg:top-24 border border-gray-100 p-6 md:p-10">
                                {/* Resume Style Header */}
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start border-b border-slate-100 pb-10 mb-8">
                                    <div className="w-32 h-44 md:w-40 md:h-52 flex-shrink-0 rounded-[24px] overflow-hidden border-4 border-white shadow-2xl relative group">
                                        <img src={`${import.meta.env.BASE_URL}photo/Vice%20Principal.png`} alt="Vice Principal" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-grow text-center sm:text-left pt-2">
                                        <h4 className="text-xl md:text-2xl font-black mb-1 leading-tight" style={{ color: 'var(--primary)' }}>{profile.name}</h4>
                                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-accent mb-6">Vice Principal & Professor</p>

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

                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                                            <div className="text-2xl font-black text-primary">16+</div>
                                            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Yrs Experience</div>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                                            <div className="text-2xl font-black text-primary">04</div>
                                            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Degrees</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-5 h-[1.5px] bg-accent"></span>
                                            Personal Information
                                        </h4>
                                        <div className="space-y-3 text-xs font-bold text-slate-600">
                                            <div className="flex justify-between">
                                                <span className="text-slate-400 uppercase tracking-tighter text-[9px]">DOB</span>
                                                <span>{profile.personalInfo.dob}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400 uppercase tracking-tighter text-[9px]">Marital Status</span>
                                                <span>{profile.personalInfo.maritalStatus}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400 uppercase tracking-tighter text-[9px]">Father's Name</span>
                                                <span>{profile.personalInfo.father}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="p-5 bg-slate-900 rounded-[30px] text-white">
                                            <h4 className="text-[9px] font-black text-accent uppercase tracking-widest mb-1">Career Objective</h4>
                                            <p className="text-[11px] font-medium leading-relaxed opacity-80 text-justify">{profile.objective}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Research & Publications */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Research & Publications
                                </h3>
                                <div className="space-y-6">
                                    {profile.research.map((res, idx) => (
                                        <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                                            <span className="absolute -top-3 left-6 px-3 py-1 bg-white border border-slate-100 text-[8px] font-black text-accent rounded-full uppercase tracking-tighter group-hover:bg-accent group-hover:text-white transition-colors">
                                                {res.type}
                                            </span>
                                            <h4 className="text-sm font-black text-slate-800 mb-2 mt-2">{res.title}</h4>
                                            <p className="text-xs font-bold text-slate-500 leading-relaxed italic">{res.journal || res.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Training & Certifications */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Training & Certifications
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {profile.training.map((t, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border-b border-slate-100 last:border-0 border-transparent">
                                            <span className="text-[10px] font-black text-accent bg-accent/10 h-fit px-2 py-1 rounded-md">{t.year}</span>
                                            <div>
                                                <h4 className="text-xs font-black text-slate-700 mb-1">{t.title}</h4>
                                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{t.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Timeline */}
                            <div className="reveal-up bg-white rounded-[30px] md:rounded-[40px] shadow-premium p-6 md:p-10 border border-gray-100" data-reveal-init>
                                <h3 className="text-xl md:text-2xl font-black mb-10 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Work Experience
                                </h3>
                                <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                                    {profile.workExperience.map((work, idx) => (
                                        <div key={idx} className="relative pl-10 group">
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-xl bg-white border-2 border-slate-200 group-hover:border-accent flex items-center justify-center transition-colors z-10 shadow-sm">
                                                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-accent"></div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-1">
                                                <h4 className="text-sm font-black text-primary group-hover:text-accent transition-colors">{work.role}</h4>
                                                <span className="text-[9px] font-black text-slate-400 uppercase bg-slate-50 px-2 py-1 rounded-md">{work.duration}</span>
                                            </div>
                                            <p className="text-xs font-bold text-slate-500">{work.organization}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Professional Affiliations */}
                            <div className="reveal-up bg-blue-box-premium p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden" data-reveal-init>
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                        <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                        Professional Bodies
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {profile.memberships.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-sm">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>
                                                    <i className="fas fa-check text-[10px]"></i>
                                                </div>
                                                <p className="text-[11px] font-bold text-slate-700 leading-tight">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 flex flex-col items-center gap-6">
                                <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-200 w-full">
                                    <p className="text-[10px] font-black italic text-slate-400 leading-relaxed mb-4">
                                        "I hereby declare that all the details furnished above are true to the best of my knowledge."
                                    </p>
                                    <div className="h-[1px] w-20 bg-slate-200 mx-auto mb-4"></div>
                                    <p className="text-sm font-black text-primary uppercase tracking-widest">Prof. Dr. Jerin Kumar J</p>
                                    <p className="text-[9px] font-black text-slate-400 mt-1">27.02.2026</p>
                                </div>
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

export default VicePrincipalProfile;
