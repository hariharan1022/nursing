import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faculty = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const departments = [
        {
            name: '1. Child Health Nursing',
            staff: [
                { name: 'Prof. Dr. Jasmine Sheela H. M.', qual: 'M.Sc. (N), Ph.D., R.N.R.M.', post: 'Professor cum Principal' },
                { name: 'Prof. Sathiyaa N.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Professor & Head of the Department' },
                { name: 'Mrs. Anthonyasha J.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Assistant Professor' }
            ]
        },
        {
            name: '2. Mental Health Nursing',
            staff: [
                { name: 'Prof. Dr. Jerin Kumar J.', qual: 'M.Sc. (N), Ph.D., M.Sc. (Psy.Tpy & Cou)., R.N.R.M.', post: 'Professor cum Vice Principal & Head of the Department' },
                { name: 'Prof. Unaisy Vinolin', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Professor' },
                { name: 'Ms. Devakirubai Daniya P.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' }
            ]
        },
        {
            name: '3. Adult Health Nursing',
            staff: [
                { name: 'Mrs. Nagajothi K.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Associate Professor & Head of the Department' },
                { name: 'Mr. Sundar V.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Senior Tutor' },
                { name: 'Ms. Yogeshwari R.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' },
                { name: 'Ms. Anitha P.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' }
            ]
        },
        {
            name: '4. Fundamentals of Nursing',
            staff: [
                { name: 'Mrs. Sivakami G.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Assistant Professor & Head of the Department' },
                { name: 'Mrs. Prithika R.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' },
                { name: 'Mrs. Balasundari D.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' },
                { name: 'Mrs. Viveka M.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' }
            ]
        },
        {
            name: '5. Community Health Nursing',
            staff: [
                { name: 'Mrs. Saraswathy K.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Assistant Professor & Head of the Department' },
                { name: 'Mrs. Mariammal K.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' },
                { name: 'Mr. Jabez Monison J.', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' }
            ]
        },
        {
            name: '6. Obstetrics & Gynaecological Nursing',
            staff: [
                { name: 'Mrs. Sutha P.', qual: 'M.Sc. (N)., R.N.R.M.', post: 'Assistant Professor & Head of the Department' },
                { name: 'Mrs. Rajeswari', qual: 'B.Sc. (N)., R.N.R.M.', post: 'Tutor' }
            ]
        }
    ];

    return (
        <div className="faculty-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container relative z-10 text-center">
                    <span className="hero-tag-gold reveal-zoom" data-reveal-init>
                        ACADEMIC EXCELLENCE
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Faculty Profile
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Qualified and experienced faculty team across all core nursing specialties as per statutory norms.
                    </p>
                </div>
            </div>

            <section className="section bg-mesh-premium">
                <div className="container">
                    {/* Intro Card */}
                    <div className="reveal-up mb-16" data-reveal-init>
                        <div className="blue-box-premium p-10 md:p-14 rounded-[40px] shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight" style={{ color: 'var(--primary)' }}>Departmental Distribution</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Mount Zion College of Nursing maintains a qualified and experienced faculty team across all core nursing specialties to ensure academic excellence, research development, and quality clinical training as per the requirements of <span className="text-primary font-bold">Indian Nursing Council</span> and <span className="text-primary font-bold">Tamil Nadu Dr. M.G.R. Medical University</span>.
                            </p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-white/20">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: 'var(--primary)' }}><i className="fas fa-check text-xs"></i></div>
                                    <span className="text-sm font-bold text-slate-700">Optimal Teacher-Student Ratio</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-white/20">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: 'var(--primary)' }}><i className="fas fa-check text-xs"></i></div>
                                    <span className="text-sm font-bold text-slate-700">Qualified Specialty Supervisors</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Bio - Principal */}
                    <div className="reveal-left bg-white rounded-[40px] shadow-premium overflow-hidden border border-gray-100 mb-12" data-reveal-init>
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="lg:w-1/3 bg-slate-50 p-10 text-center flex flex-col items-center justify-center border-r border-gray-100">
                                <div className="w-64 h-80 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl mb-6 transform hover:scale-105 transition-transform bg-white">
                                    <img src={`${import.meta.env.BASE_URL}photo/PRINCIPAL.png`} alt="Principal" className="w-full h-full object-cover object-top" />
                                </div>
                                <h4 className="text-2xl font-black mb-1" style={{ color: 'var(--primary)' }}>Prof. Dr. Jasmine Sheela</h4>
                                <span className="px-4 py-1 text-[10px] font-black rounded-full uppercase tracking-widest leading-none" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>Principal & Professor</span>
                                <p className="text-xs text-slate-500 font-bold mt-2">M.Sc. (N), Ph.D., R.N.R.M.</p>
                                <Link to="/principal-profile" className="mt-5 px-6 py-2.5 bg-primary text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-accent/20">
                                    View Profile <i className="fas fa-arrow-right ml-2"></i>
                                </Link>
                            </div>
                            <div className="lg:w-2/3 p-10 md:p-14">
                                <h3 className="text-3xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-8 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Principal's Perspective
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify">
                                    Prof. Dr. Jasmine Sheela embarked on her remarkable nursing journey as a Registered Nurse and Midwife (RN RM) in 1990. With clinical expertise and extensive teaching experience, she has served as the Principal of Mount Zion College of Nursing for 14 years. Her leadership ensures the integration of innovative teaching methodologies and core nursing values into the educational curriculum.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Bio - Vice Principal */}
                    <div className="reveal-right bg-white rounded-[40px] shadow-premium overflow-hidden border border-gray-100 mb-24" data-reveal-init>
                        <div className="flex flex-col lg:flex-row-reverse items-stretch">
                            <div className="lg:w-1/3 bg-slate-50 p-10 text-center flex flex-col items-center justify-center border-l border-gray-100">
                                <div className="w-64 h-80 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl mb-6 transform hover:scale-105 transition-transform bg-white">
                                    <img src={`${import.meta.env.BASE_URL}photo/Vice%20Principal.png`} alt="Vice Principal" className="w-full h-full object-cover object-top" />
                                </div>
                                <h4 className="text-2xl font-black mb-1" style={{ color: 'var(--primary)' }}>Prof. Dr. Jerin Kumar J</h4>
                                <span className="px-4 py-1 text-[10px] font-black rounded-full uppercase tracking-widest leading-none" style={{ background: 'var(--accent)', color: 'var(--primary)' }}>Vice Principal & Professor</span>
                                <p className="text-xs text-slate-500 font-bold mt-2">M.Sc. (N), Ph.D., M.Sc. (Psy.Tpy)., R.N.R.M.</p>
                                <Link to="/vice-principal-profile" className="mt-5 px-6 py-2.5 bg-primary text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-accent/20 inline-block">
                                    View Profile <i className="fas fa-arrow-right ml-2"></i>
                                </Link>
                            </div>
                            <div className="lg:w-2/3 p-10 md:p-14">
                                <h3 className="text-3xl font-black mb-6 flex items-center gap-4" style={{ color: 'var(--primary)' }}>
                                    <span className="w-1.5 h-8 rounded-full" style={{ background: 'var(--accent)' }}></span>
                                    Vice Principal's Perspective
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify">
                                    Prof. Dr. Jerin Kumar J serves as the Vice Principal with over 15 years of academic leadership. He holds a Ph.D. in Nursing and specialized Master's degrees in Mental Health Nursing and Counseling. His work focuses on mental health advocacy and innovative clinical practices, contributing significantly through research development and professional training.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16 reveal-up" data-reveal-init>
                        <h2 className="section-title-premium inline-block">Specialty Departments</h2>
                        <p className="text-slate-500 font-bold mt-4 uppercase tracking-widest text-sm">Faculty Distribution & Expertise</p>
                    </div>

                    {/* Department Grids */}
                    <div className="grid grid-cols-1 gap-12">
                        {departments.map((dept, idx) => (
                            <div key={idx} className="reveal-up bg-white rounded-[40px] shadow-premium border border-gray-100 overflow-hidden" data-reveal-init style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="p-8 text-white flex justify-between items-center relative overflow-hidden" style={{ background: 'var(--primary)' }}>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-white">{dept.name}</h3>
                                        <div className="w-12 h-1 mt-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                                    </div>
                                    <i className="fas fa-users-crown text-6xl text-white/10 absolute -right-2 -bottom-2"></i>
                                </div>
                                <div className="p-2 md:p-8 overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b-2 border-slate-50">
                                                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">No.</th>
                                                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Faculty Name</th>
                                                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Qualification</th>
                                                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Designation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {dept.staff.map((s, i) => (
                                                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-6 py-5 text-sm font-black text-slate-300">0{i + 1}</td>
                                                    <td className="px-6 py-5">
                                                        <div className="font-bold text-base group-hover:translate-x-1 transition-transform" style={{ color: 'var(--primary)' }}>{s.name}</div>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="text-sm font-bold text-slate-500">{s.qual}</span>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="px-4 py-1.5 bg-blue-50 text-indigo-900 text-[10px] font-black rounded-lg uppercase tracking-wider group-hover:bg-accent group-hover:text-primary transition-colors">
                                                            {s.post}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Institutional Commitments */}
                    <div className="mt-24 reveal-up" data-reveal-init>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Optimal Ratio", desc: "Adequate faculty-student ratio as per norms.", icon: "fa-users" },
                                { title: "Qualified Staff", desc: "Qualified faculty in all core nursing specialties.", icon: "fa-user-graduate" },
                                { title: "Leadership", desc: "Structured leadership with HODs for each wing.", icon: "fa-sitemap" },
                                { title: "CNE Activities", desc: "Continuous development (FDP) & Workshops.", icon: "fa-chalkboard-teacher" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(0, 43, 91, 0.05)' }}>
                                        <i className={`fas ${item.icon} text-2xl`} style={{ color: 'var(--accent)' }}></i>
                                    </div>
                                    <h4 className="font-black mb-3 text-lg leading-tight uppercase tracking-tighter" style={{ color: 'var(--primary)' }}>{item.title}</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
