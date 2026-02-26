import React, { useEffect } from 'react';

const Research = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const objectives = [
        "To promote evidence-based nursing practice",
        "To encourage student research projects in clinical and community settings",
        "To address local and regional health problems through scientific studies",
        "To enhance faculty research publications and presentations",
        "To foster ethical research practices"
    ];

    const researchAreas = [
        {
            title: "I. Medical-Surgical Nursing",
            icon: "fas fa-heartbeat",
            projects: [
                "Cardiovascular disease risk assessment",
                "Hypertension prevalence studies",
                "Diabetes management education",
                "Post-resuscitation care knowledge"
            ]
        },
        {
            title: "II. Maternal & Child Health Nursing",
            icon: "fas fa-baby",
            projects: [
                "Breastfeeding promotion",
                "Menarche awareness",
                "Child safety and home accident prevention",
                "Knowledge on cervical cancer vaccination"
            ]
        },
        {
            title: "III. Mental Health Nursing",
            icon: "fas fa-brain",
            projects: [
                "Stress among students and teachers",
                "Mental illness awareness",
                "Substance abuse prevention",
                "Smartphone addiction among adolescents"
            ]
        },
        {
            title: "IV. Community Health Nursing",
            icon: "fas fa-users",
            projects: [
                "Dengue awareness studies",
                "Waste disposal practices",
                "COVID-19 knowledge and preventive behavior",
                "Public health program awareness",
                "Obesity and lifestyle disease studies"
            ]
        },
        {
            title: "V. Oncology & Specialized Nursing",
            icon: "fas fa-file-medical",
            projects: [
                "Breast cancer awareness",
                "Chemotherapy-related patient education",
                "Chronic kidney disease self-management",
                "EECP awareness studies"
            ]
        }
    ];

    return (
        <div className="research-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        SCIENTIFIC INQUIRY
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Research & Development
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Promoting a culture of evidence-based practice and community-oriented research in health sciences.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    {/* Intro */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div className="reveal-left" data-reveal-init>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 leading-tight">Advancing Nursing Through Science</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                Mount Zion College of Nursing promotes a culture of scientific inquiry, evidence-based practice, and community-oriented research in alignment with national healthcare priorities and academic standards prescribed by <span className="text-primary font-bold">The Tamil Nadu Dr. M.G.R. Medical University</span>.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                The institution encourages faculty and students to undertake research activities that address emerging health issues, strengthen clinical practice, and contribute to public health improvement.
                            </p>
                        </div>
                        <div className="reveal-right" data-reveal-init>
                            <div className="blue-box-premium p-10 md:p-12 rounded-[40px] shadow-2xl">
                                <h3 className="text-2xl font-black mb-10 border-b border-white/20 pb-4 text-primary uppercase tracking-tight">Objectives of Research Cell</h3>
                                <ul className="space-y-5">
                                    {objectives.map((obj, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                                                <i className="fas fa-check text-[10px] text-primary"></i>
                                            </div>
                                            <span className="font-bold text-slate-700">{obj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Governance */}
                    <div className="reveal-up mb-24" data-reveal-init>
                        <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-premium border border-blue-50">
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center">
                                    <i className="fas fa-gavel text-4xl text-primary"></i>
                                </div>
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-black text-primary uppercase tracking-tighter">Research Governance & Ethics</h2>
                                    <p className="text-accent font-bold uppercase tracking-widest text-sm mt-1">Maintaining integrity in scientific studies</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "Academic Rigor", text: "Conducted as part of the B.Sc. Nursing curriculum with strict institutional oversight.", icon: "fas fa-graduation-cap" },
                                    { title: "IRC Approval", text: "All research projects are mandatory reviewed and approved by the Research Committee.", icon: "fas fa-shield-alt" },
                                    { title: "Ethical Review", text: "Reviewed for ethical considerations and informed consent compliance before data collection.", icon: "fas fa-user-check" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-8 bg-slate-50 rounded-[32px] hover:bg-primary hover:text-white transition-all duration-500 group border border-transparent hover:border-primary">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                                            <i className={`${item.icon} text-xl text-primary`}></i>
                                        </div>
                                        <h4 className="font-black text-xl mb-4">{item.title}</h4>
                                        <p className="text-slate-500 font-bold group-hover:text-white/80 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Research Areas */}
                    <div className="mb-24">
                        <div className="text-center mb-16 reveal-up" data-reveal-init>
                            <h2 className="section-title-premium inline-block">Research Domains</h2>
                            <p className="text-slate-500 font-bold mt-4 uppercase tracking-widest text-sm">Historical Scientific Output (2013 – {new Date().getFullYear() - 1})</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {researchAreas.map((area, idx) => (
                                <div key={idx} className="reveal-zoom bg-white p-8 md:p-10 rounded-[40px] shadow-premium hover:shadow-2xl transition-all border border-gray-100 group" data-reveal-init style={{ transitionDelay: `${idx * 0.1}s` }}>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                            <i className={`${area.icon} text-white text-2xl`}></i>
                                        </div>
                                        <h3 className="text-2xl font-black text-primary">{area.title}</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {area.projects.map((proj, pIdx) => (
                                            <div key={pIdx} className="flex gap-4 items-center text-slate-600 font-bold p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50/50 transition-colors">
                                                <i className="fas fa-microscope text-accent text-sm"></i>
                                                <span className="text-sm">{proj}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats & Impact */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-12 xl:col-span-7 reveal-left" data-reveal-init>
                            <div className="blue-box-premium p-10 md:p-14 rounded-[50px] shadow-2xl h-full">
                                <h3 className="text-3xl font-black mb-12 text-primary uppercase tracking-tighter">Research Output Summary</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 bg-slate-50 rounded-[32px] border border-blue-100 text-center">
                                        <div className="text-6xl font-black text-primary mb-2">54</div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Studies Completed</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-1">(2013-{new Date().getFullYear() - 1} Accumulated)</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[32px] border border-blue-100 text-center">
                                        <div className="text-6xl font-black text-primary mb-2">04</div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Ongoing Projects</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-1">({new Date().getFullYear() - 1}-{new Date().getFullYear()} Session)</p>
                                    </div>
                                </div>
                                <div className="mt-10 p-8 bg-blue-50/30 rounded-3xl border border-blue-100">
                                    <p className="text-slate-600 font-bold text-center leading-relaxed">
                                        Focus on preventive, promotive, and rehabilitative healthcare research integrated across Government Hospitals, Primary Health Centers, Schools, and Rural Communities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-5 reveal-right" data-reveal-init>
                            <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-premium border border-gray-100 h-full">
                                <h3 className="text-2xl font-black text-primary mb-10 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary">
                                        <i className="fas fa-hand-holding-heart"></i>
                                    </span>
                                    Community Impact
                                </h3>
                                <div className="space-y-5">
                                    {[
                                        { t: "NCD Awareness", d: "Massive scale-up in awareness of non-communicable diseases." },
                                        { t: "MCH Practices", d: "Strengthened maternal and child health protocols." },
                                        { t: "Adolescent Health", d: "Impactful improvements in student health education." },
                                        { t: "Preventive Behavior", d: "Shift in rural community preventive health behavior." }
                                    ].map((impact, i) => (
                                        <div key={i} className="flex gap-6 items-start p-6 rounded-[28px] hover:bg-slate-50 transition-all border border-transparent hover:border-gray-50">
                                            <div className="w-10 h-10 bg-primary text-white font-black flex items-center justify-center rounded-2xl flex-shrink-0 text-sm">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-primary text-lg leading-tight mb-1">{impact.t}</h4>
                                                <p className="text-sm text-slate-500 font-bold">{impact.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
