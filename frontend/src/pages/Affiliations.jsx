import React, { useEffect } from 'react';

const Affiliations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const governmentHospitals = [
        {
            name: "Government Medical College Hospital, Pudukkottai",
            type: "Government Teaching Hospital",
            location: "Pudukkottai",
            departments: "Medicine, Surgery, Orthopedics, Pediatrics, OBG, ICU, Emergency, Specialty Units",
            nature: "Core Medical-Surgical Clinical Training"
        },
        {
            name: "Raniyar Government Reproductive and Child Health Hospital, Pudukkottai",
            type: "Government Maternal & Child Health Hospital",
            location: "Pudukkottai",
            departments: "Obstetrics, Labour Room, Neonatal Care, High-Risk Pregnancy, Pediatric Units",
            nature: "Maternal & Child Health Nursing"
        }
    ];

    const specialtyHospitals = [
        {
            name: "Harshamitra Cancer and Multi-Speciality Hospital",
            specialty: "Oncology",
            location: "Tiruchirappalli",
            exposure: "Medical & Surgical Oncology, Chemotherapy, Palliative Care",
            duration: "As per curriculum"
        },
        {
            name: "Athma Mind Care Hospital",
            specialty: "Psychiatry",
            location: "Tiruchirappalli",
            exposure: "Psychiatric Nursing, Mental Health Services, Counseling & De-addiction",
            duration: "As per syllabus"
        },
        {
            name: "Gleneagles Hospital",
            specialty: "Corporate Multi-Specialty",
            location: "Chennai",
            exposure: "Critical Care, Specialty Units, Advanced Nursing Practice",
            duration: "3-Month Intensive Posting"
        }
    ];

    const communityAffiliations = [
        {
            institution: "Directorate of Public Health and Preventive Medicine, Tamil Nadu (DPH)",
            type: "Government Public Health Authority",
            location: "Tamil Nadu",
            area: "Public Health Programs, National Health Schemes"
        },
        {
            institution: "Government Block Primary Health Centre, Natchanthupati",
            type: "Block PHC",
            location: "Natchanthupati",
            area: "Community Health Nursing, MCH Services, Immunization"
        },
        {
            institution: "Primary Health Centre, Virachilai",
            type: "PHC",
            location: "Virachilai",
            area: "Rural Health Services, School Health, Family Welfare"
        },
        {
            institution: "Urban Primary Health Centre, Kamarajapuram",
            type: "Urban PHC",
            location: "Kamarajapuram",
            area: "Urban Community Health & Preventive Services"
        }
    ];

    const communityScope = [
        "Home visits",
        "Family health assessment",
        "Maternal & Child Health services",
        "Immunization programs",
        "National Health Programme implementation",
        "School health services",
        "Epidemiological surveys",
        "Health education & awareness campaigns"
    ];

    return (
        <div className="affiliations-page">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        PRACTICAL EXPOSURE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init style={{ color: 'white' }}>
                        Clinical & Community Training
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Established formal affiliations with Government and Specialty Hospitals as per INC & University norms.
                    </p>
                </div>
            </div>

            <section className="section py-20" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="reveal active mb-16 p-8 bg-white rounded-xl shadow-sm border-l-8 border-primary">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Mount Zion College of Nursing has established formal clinical and community health training affiliations with Government and Specialty Hospitals to provide comprehensive practical exposure in accordance with the norms prescribed by the Indian Nursing Council (INC) and the affiliating University, The Tamil Nadu Dr. M.G.R. Medical University.
                        </p>
                    </div>

                    {/* Section A */}
                    <div className="reveal active mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <i className="fas fa-hospital-alt text-4xl text-accent"></i>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-primary">A. Government Tertiary Care & Major Clinical Affiliations</h2>
                        </div>
                        <div className="overflow-x-auto shadow-xl rounded-2xl">
                            <table className="w-full text-left border-collapse bg-white">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-5 border-b border-primary-light">S.No</th>
                                        <th className="p-5 border-b border-primary-light">Hospital Name</th>
                                        <th className="p-5 border-b border-primary-light">Type</th>
                                        <th className="p-5 border-b border-primary-light">Departments Covered</th>
                                        <th className="p-5 border-b border-primary-light">Nature of Posting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {governmentHospitals.map((h, i) => (
                                        <tr key={i} className="hover:bg-blue-50 transition-colors">
                                            <td className="p-5 border-b border-gray-100 font-bold text-primary">{i + 1}</td>
                                            <td className="p-5 border-b border-gray-100 font-bold">{h.name}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600 font-semibold">{h.type}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600">{h.departments}</td>
                                            <td className="p-5 border-b border-gray-100 font-bold text-accent">{h.nature}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section B */}
                    <div className="reveal active mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <i className="fas fa-star-of-life text-4xl text-accent"></i>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-primary">B. Specialty & Super-Specialty Clinical Affiliations</h2>
                        </div>
                        <div className="overflow-x-auto shadow-xl rounded-2xl">
                            <table className="w-full text-left border-collapse bg-white">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-5 border-b border-primary-light">S.No</th>
                                        <th className="p-5 border-b border-primary-light">Hospital Name</th>
                                        <th className="p-5 border-b border-primary-light">Specialty</th>
                                        <th className="p-5 border-b border-primary-light">Exposure</th>
                                        <th className="p-5 border-b border-primary-light">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specialtyHospitals.map((h, i) => (
                                        <tr key={i} className="hover:bg-blue-50 transition-colors">
                                            <td className="p-5 border-b border-gray-100 font-bold text-primary">{i + 3}</td>
                                            <td className="p-5 border-b border-gray-100 font-bold">{h.name}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600 font-semibold">{h.specialty}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600">{h.exposure}</td>
                                            <td className="p-5 border-b border-gray-100 font-bold text-accent">{h.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section C */}
                    <div className="reveal active mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <i className="fas fa-users-medical text-4xl text-accent"></i>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-primary">C. Community Health Training Affiliations</h2>
                        </div>
                        <div className="overflow-x-auto shadow-xl rounded-2xl mb-12">
                            <table className="w-full text-left border-collapse bg-white">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-5 border-b border-primary-light">S.No</th>
                                        <th className="p-5 border-b border-primary-light">Institution</th>
                                        <th className="p-5 border-b border-primary-light">Type</th>
                                        <th className="p-5 border-b border-primary-light">Area of Training</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {communityAffiliations.map((h, i) => (
                                        <tr key={i} className="hover:bg-blue-50 transition-colors">
                                            <td className="p-5 border-b border-gray-100 font-bold text-primary">{i + 6}</td>
                                            <td className="p-5 border-b border-gray-100 font-bold">{h.institution}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600 font-semibold">{h.type}</td>
                                            <td className="p-5 border-b border-gray-100 text-sm text-gray-600">{h.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="blue-box-premium p-10 reveal active">
                            <h3 className="text-2xl font-black mb-8 border-b-2 border-accent pb-4 flex items-center gap-3">
                                <i className="fas fa-search-location"></i> Scope of Community Health Training
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                                {communityScope.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all border border-white/5">
                                        <i className="fas fa-check-circle text-accent"></i>
                                        <span className="font-bold text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Compliance Declaration */}
                    <div className="reveal active bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100">
                        <h2 className="text-3xl font-bold mb-8 text-primary flex items-center gap-4">
                            <i className="fas fa-clipboard-check text-accent"></i> Compliance Declaration
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "All affiliations are supported by valid permissions/MoUs.",
                                "Clinical and community postings are scheduled as per INC norms.",
                                "Student rotation plans are approved by the affiliating University.",
                                "Clinical and community attendance records are maintained and verified.",
                                "Government health facilities ensure adequate exposure to real-time public health programs."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start text-gray-700 font-medium text-lg leading-snug">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold">{i + 1}</span>
                                    <p>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Affiliations;
