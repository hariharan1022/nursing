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
        <div className="research-page">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        SCIENTIFIC INQUIRY
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init style={{ color: 'white' }}>
                        Research & Development
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Promoting a culture of evidence-based practice and community-oriented research.
                    </p>
                </div>
            </div>

            <section className="section py-20" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    {/* Intro */}
                    <div className="reveal active grid grid-cols-2 md:grid-cols-1 gap-12 mb-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-primary mb-6 leading-tight">Advancing Nursing Through Science</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Mount Zion College of Nursing promotes a culture of scientific inquiry, evidence-based practice, and community-oriented research in alignment with national healthcare priorities and academic standards prescribed by The Tamil Nadu Dr. M.G.R. Medical University.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The institution encourages faculty and students to undertake research activities that address emerging health issues, strengthen clinical practice, and contribute to public health improvement.
                            </p>
                        </div>
                        <div className="blue-box-premium p-10 transform scale-105 shadow-2xl">
                            <h3 className="text-2xl font-black mb-8 border-b border-accent pb-4">Objectives of Research Cell</h3>
                            <ul className="space-y-4">
                                {objectives.map((obj, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <i className="fas fa-check-circle text-accent mt-1"></i>
                                        <span className="font-bold text-white/90">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Governance */}
                    <div className="reveal active bg-white p-12 rounded-3xl shadow-lg border border-gray-100 mb-20">
                        <div className="flex items-center gap-6 mb-10">
                            <i className="fas fa-gavel text-5xl text-primary"></i>
                            <div>
                                <h2 className="text-3xl font-black text-primary uppercase">Research Governance & Ethics</h2>
                                <p className="text-accent font-bold">Maintaining integrity in scientific studies</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
                            {[
                                { title: "Academic Rigor", text: "Conducted as part of the B.Sc. Nursing curriculum with institutional oversight.", icon: "fas fa-graduation-cap" },
                                { title: "IRC Approval", text: "All student research projects are approved by the Institutional Research Committee.", icon: "fas fa-shield-alt" },
                                { title: "Ethical Review", text: "Reviewed for ethical considerations and informed consent before data collection.", icon: "fas fa-user-check" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:bg-primary hover:text-white transition-all group">
                                    <i className={`${item.icon} text-3xl text-primary mb-4 group-hover:text-accent transition-colors`}></i>
                                    <h4 className="font-black text-xl mb-3">{item.title}</h4>
                                    <p className="text-gray-600 group-hover:text-white/80">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research Areas */}
                    <div className="reveal active mb-20">
                        <h2 className="text-4xl font-black text-primary text-center mb-12 uppercase tracking-tight">Research Domains (2013 – 2025)</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                            {researchAreas.map((area, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-l-8 border-accent">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                            <i className={`${area.icon} text-2xl text-primary`}></i>
                                        </div>
                                        <h3 className="text-2xl font-black text-primary">{area.title}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                        {area.projects.map((proj, pIdx) => (
                                            <div key={pIdx} className="flex gap-3 items-center text-gray-700 font-semibold p-3 bg-gray-50 rounded-lg">
                                                <i className="fas fa-microscope text-accent"></i>
                                                {proj}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats & Impact */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-12">
                        <div className="reveal active blue-box-premium p-12">
                            <h3 className="text-3xl font-black mb-10 text-center border-b border-white/20 pb-6 uppercase tracking-widest">Output Summary</h3>
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-5xl font-black text-accent mb-2">54</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Studies Completed</p>
                                    <span className="text-[10px] text-white/40">(2013-2025)</span>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-5xl font-black text-accent mb-2">4</div>
                                    <p className="text-sm font-bold uppercase tracking-widest">Ongoing Projects</p>
                                    <span className="text-[10px] text-white/40">(2025-2026)</span>
                                </div>
                            </div>
                            <div className="mt-8 p-6 bg-primary/20 rounded-xl border border-white/5">
                                <p className="text-center font-bold text-white/80">
                                    Focus on preventive, promotive, and rehabilitative healthcare across Government Hospitals, PHCs, Schools, and Community Areas.
                                </p>
                            </div>
                        </div>

                        <div className="reveal active bg-white p-12 rounded-3xl shadow-xl border-t-8 border-primary">
                            <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                                <i className="fas fa-hand-holding-heart text-accent"></i> Community Impact
                            </h3>
                            <p className="text-gray-600 mb-8 font-medium italic">Studies conducted in rural and urban areas of Pudukkottai district have contributed to:</p>
                            <div className="space-y-4">
                                {[
                                    { t: "NCD Awareness", d: "Increased awareness of non-communicable diseases." },
                                    { t: "MCH Practices", d: "Strengthened maternal and child health practices." },
                                    { t: "Adolescent Health", d: "Improved adolescent health education." },
                                    { t: "Preventive Behavior", d: "Enhanced preventive health behavior." }
                                ].map((impact, i) => (
                                    <div key={i} className="flex gap-5 items-start p-4 hover:bg-blue-50 transition-all rounded-xl">
                                        <div className="w-10 h-10 bg-primary text-white font-black flex items-center justify-center rounded-lg flex-shrink-0">
                                            {String.fromCharCode(97 + i)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">{impact.t}</h4>
                                            <p className="text-sm text-gray-600">{impact.d}</p>
                                        </div>
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

export default Research;
