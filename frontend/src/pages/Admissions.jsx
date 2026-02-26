import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Admissions = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const rect = element.getBoundingClientRect();
                    const absoluteTop = rect.top + window.pageYOffset;
                    window.scrollTo({
                        top: absoluteTop - 120,
                        behavior: 'smooth'
                    });
                }, 150);
            }
        }
    }, [location.hash]);
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-skew, .reveal-blur, .reveal-flip, .reveal-up, .reveal-stagger');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="admissions-page overflow-x-hidden">
            {/* Hero Section */}
            <div className="inner-hero">
                <div className="w-full px-6 lg:px-16 relative z-10 text-center">
                    <span className="hero-tag-gold float-breathe reveal-zoom" data-reveal-init>
                        ADMISSION PORTAL
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init>
                        Join the Future of Nursing
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ margin: '0 auto' }}>
                        Admission to the B.Sc. Nursing Programme for the academic year {new Date().getFullYear()} is governed by Indian Nursing Council norms.
                    </p>
                </div>
            </div>

            <section className="w-full bg-[var(--bg-light)] py-16" style={{ background: 'var(--bg-light)' }}>
                <div className="w-full px-6 lg:px-16">
                    <div className="w-full">
                        <div className="admission-main w-full">
                            {/* General Eligibility */}
                            <div id="eligibility" className="admission-card w-full reveal-skew" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-graduation-cap"></i>
                                    General Eligibility Criteria
                                </h3>
                                <p className="mb-8 italic text-muted text-lg border-b pb-4">Applicable to All Categories</p>

                                <div className="space-y-12">
                                    <div className="eligibility-item">
                                        <h4 className="flex items-center gap-4 text-primary text-xl font-bold mb-6">
                                            <span className="eligibility-marker">1</span>
                                            <span id="age-limit">Age Limit</span>
                                        </h4>
                                        <ul className="custom-list">
                                            <li>Minimum age: 17 years on or before 31st December of the year of admission.</li>
                                            <li>Maximum age: 35 years.</li>
                                            <li>Upper age relaxation of 5 years for candidates with disability (as per norms).</li>
                                        </ul>
                                    </div>

                                    <div className="eligibility-item">
                                        <h4 className="flex items-center gap-4 text-primary text-xl font-bold mb-6">
                                            <span className="eligibility-marker">2</span>
                                            Educational Qualification
                                        </h4>
                                        <ul className="custom-list">
                                            <li>Passed 10+2 (Higher Secondary) with Physics, Chemistry, Biology, and English.</li>
                                            <li className="mt-4">
                                                <div className="p-4 bg-gray-50 rounded-2xl inline-block border border-gray-100">
                                                    <strong className="text-secondary block mb-2">Minimum PCB Aggregate:</strong>
                                                    <div className="flex gap-8">
                                                        <span>General: <strong>45%</strong></span>
                                                        <span>SC/ST/OBC: <strong>40%</strong></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mt-4">English must be passed individually.</li>
                                            <li>Open School candidates (State Govt/NIOS) with Science & English are eligible.</li>
                                        </ul>
                                    </div>

                                    <div className="eligibility-item">
                                        <h4 className="flex items-center gap-4 text-primary text-xl font-bold mb-6">
                                            <span className="eligibility-marker">3</span>
                                            Entrance Examination
                                        </h4>
                                        <p className="mb-6 text-muted font-medium">Selection is strictly based on institutional excellence through our merit-based entrance test.</p>
                                        <div className="blue-box-premium p-10 rounded-3xl mb-6 shadow-sm border border-slate-100">
                                            <h5 className="font-extrabold text-primary mb-6 flex items-center gap-4 text-2xl">
                                                <i className="fas fa-pen-nib text-accent"></i> Entrance Test Pattern (100 Marks)
                                            </h5>
                                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                                {['Aptitude: 20', 'Physics: 20', 'Chemistry: 20', 'Biology: 20', 'English: 20'].map(m => (
                                                    <div key={m} className="bg-slate-50 border border-slate-100 p-4 text-center rounded-2xl">
                                                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{m.split(':')[0]}</p>
                                                        <p className="font-black text-primary text-xl">{m.split(':')[1]}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <h5 className="font-bold text-sm text-primary uppercase mb-3 letter-spacing-1">Minimum Qualifying Percentiles:</h5>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="p-3 bg-white border border-gray-100 rounded-xl text-center">
                                                <p className="text-[10px] opacity-60 uppercase mb-1">General</p>
                                                <p className="font-bold">50th</p>
                                            </div>
                                            <div className="p-3 bg-white border border-gray-100 rounded-xl text-center">
                                                <p className="text-[10px] opacity-60 uppercase mb-1">SC/ST/OBC</p>
                                                <p className="font-bold">40th</p>
                                            </div>
                                            <div className="p-3 bg-white border border-gray-100 rounded-xl text-center">
                                                <p className="text-[10px] opacity-60 uppercase mb-1">Gen-PwD</p>
                                                <p className="font-bold">45th</p>
                                            </div>
                                            <div className="p-3 bg-white border border-gray-100 rounded-xl text-center">
                                                <p className="text-[10px] opacity-60 uppercase mb-1">Res-PwD</p>
                                                <p className="font-bold">40th</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                    <div className="p-6 bg-gradient-to-br from-white to-blue-50/30 rounded-3xl border border-blue-50 shadow-sm">
                                        <h4 className="text-primary font-bold mb-3 flex items-center gap-3">
                                            <i className="fas fa-stethoscope text-accent"></i> Medical Fitness
                                        </h4>
                                        <p className="text-sm text-muted leading-relaxed font-medium">Candidates must be medically fit. Colour blind students are eligible if corrected with official aids.</p>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-white to-blue-50/30 rounded-3xl border border-blue-50 shadow-sm">
                                        <h4 className="text-primary font-bold mb-3 flex items-center gap-3">
                                            <i className="fas fa-heart text-accent"></i> Marital Status
                                        </h4>
                                        <p className="text-sm text-muted leading-relaxed font-medium">Married candidates are legally eligible to apply for the B.Sc. Nursing programme.</p>
                                    </div>
                                </div>

                                <div className="mt-12 blue-box-premium admission-timeline-box reveal-blur" data-reveal-init>
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <i className="fas fa-clock text-4xl text-accent"></i>
                                            <div>
                                                <h4 className="font-black text-2xl uppercase tracking-tight text-primary">Admission Timeline</h4>
                                                <p className="text-slate-500 text-sm font-bold">Strict adherence to academic windows is required.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-10">
                                            <div className="text-center">
                                                <p className="text-[10px] uppercase font-bold text-accent mb-1 tracking-widest">Classes Start</p>
                                                <p className="text-2xl font-black text-primary">1st August</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[10px] uppercase font-bold text-accent mb-1 tracking-widest">Final Cut-off</p>
                                                <p className="text-2xl font-black text-primary">30th Sept</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Selection Process */}
                            <div id="selection" className="admission-card reveal-zoom" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-user-check"></i>
                                    Selection Process
                                </h3>
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                    <ul className="custom-list">
                                        <li>Merit List based on +2 PCB Aggregate (Physics, Chemistry, Biology).</li>
                                        <li>Performance in the Institutional Entrance test.</li>
                                        <li>Personal interview and aptitude assessment.</li>
                                        <li>Final selection subject to medical fitness and document verification.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Category Wise */}
                            <div id="categories" className="admission-card reveal-left" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-map-marked-alt"></i>
                                    Category-wise Criteria
                                </h3>

                                <div className="space-y-8 mt-10">
                                    <div className="category-block p-8 rounded-3xl bg-white border border-gray-100 shadow-sm border-l-[6px] border-accent">
                                        <h4 className="text-primary font-black text-xl mb-5">Tamil Nadu Residents</h4>
                                        <ul className="custom-list">
                                            <li>Must be a domicile of Tamil Nadu state.</li>
                                            <li>Reservation follows TN Government norms (SC/ST/OBC/MBC/EWS/PwD).</li>
                                            <li>5% seats reserved for loco-motor disability (40%–50% of lower extremity).</li>
                                            <li><strong>Mandatory:</strong> Community certificate issued by competent state authority.</li>
                                        </ul>
                                    </div>

                                    <div className="category-block p-8 rounded-3xl bg-white border border-gray-100 shadow-sm border-l-[6px] border-blue-500">
                                        <h4 className="text-primary font-black text-xl mb-5">Other Indian Residents</h4>
                                        <ul className="custom-list">
                                            <li>Candidates from all other Indian states are eligible.</li>
                                            <li>Must have valid 10+2 from a recognized Central/State board.</li>
                                            <li>Reservation applicable as per prevailing Central Government norms.</li>
                                            <li>Migration & Transfer Certificates are mandatory during counseling.</li>
                                        </ul>
                                    </div>

                                    <div className="category-block p-8 rounded-3xl bg-white border border-gray-100 shadow-sm border-l-[6px] border-orange-500">
                                        <h4 className="text-primary font-black text-xl mb-5">Foreign Nationals</h4>
                                        <ul className="custom-list italic">
                                            <li>Must obtain <strong>Equivalency certificate</strong> from AIU, New Delhi.</li>
                                            <li>Valid Student Visa and Passport are mandatory for all registrations.</li>
                                            <li>Selection subject to University and SNRC verification of foreign credentials.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Reservation Policy */}
                            <div id="reservation" className="admission-card reveal-right" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-balance-scale-left"></i>
                                    Reservation Policy
                                </h3>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <ul className="custom-list space-y-4">
                                        <li>Sanctioned intake strictly governs reservation quotas.</li>
                                        <li><strong>Eligibility Relaxation:</strong> 40% aggregate in PCB for SC/ST/OBC candidates.</li>
                                        <li>5% seats reserved for loco-motor disability (40–50% disability range).</li>
                                        <li>Certification must be authorized by the official State Medical Board.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Admission Committee */}
                            <div id="committee" className="admission-card reveal-zoom" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-shield-alt"></i>
                                    Admission Committee
                                </h3>
                                <p className="mb-8 text-muted font-medium">The college leadership committee ensures total transparency and adherence to institutional excellence.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { role: 'Principal' },
                                        { role: 'Vice-Principal' },
                                        { role: 'Professor' },
                                        { role: 'Chief Nursing Officer / Nursing Superintendent' }
                                    ].map(member => (
                                        <div key={member.role} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                                                <i className="fas fa-user-tie"></i>
                                            </div>
                                            <div>
                                                <p className="font-black text-primary leading-tight">{member.role}</p>
                                                <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{member.pos}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Required Documents */}
                            <div id="documents" className="admission-card reveal-left" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-file-invoice"></i>
                                    Required Documents
                                </h3>
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                    <ul className="custom-list grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li>SSC / 10th Original Mark Sheet</li>
                                        <li>HSC / 12th Original Mark Sheet</li>
                                        <li>Transfer Certificate (TC)</li>
                                        <li>Conduct Certificate</li>
                                        <li>Community Certificate</li>
                                        <li>Migration Certificate (for Non-TN)</li>
                                        <li>Eligibility Certificate (from University)</li>
                                        <li>Physical Fitness Certificate</li>
                                        <li>Aadhaar Card Copy</li>
                                        <li>Passport Size Photos (10 Nos)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Scholarship */}
                            <div id="scholarships" className="admission-card reveal-right" data-reveal-init>
                                <h3 className="section-title-premium">
                                    <i className="fas fa-hand-holding-usd"></i>
                                    Scholarships
                                </h3>
                                <div className="p-8 bg-blue-50/30 border border-blue-100 rounded-3xl">
                                    <p className="mb-6 text-primary font-bold">We support student excellence through various government and institutional schemes:</p>
                                    <ul className="custom-list space-y-3">
                                        <li><strong>SC / ST / SCC Special Scholarship:</strong> Full support for eligible candidates.</li>
                                        <li><strong>Minority Scholarship:</strong> For Christian, Muslim, and other minority students.</li>
                                        <li><strong>First Graduate Scholarship:</strong> As per Tamil Nadu Government norms.</li>
                                        <li><strong>Merit Scholarship:</strong> Awarded to top rankers in institutional entrance tests.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Start Application */}
                            <div id="apply" className="admission-card reveal-up" data-reveal-init>
                                <h3 className="section-title-premium text-accent">
                                    <i className="fas fa-edit"></i>
                                    Apply Now
                                </h3>
                                <div className="blue-box-premium p-10 rounded-3xl text-center">
                                    <h4 className="text-2xl font-black text-primary mb-4">Ready to Begin?</h4>
                                    <p className="text-muted mb-8 font-medium">Download the prospectus or fill out our online inquiry form to get started with your application process.</p>
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <Link to="/contact" className="btn btn-primary magnetic px-8 py-4">Inquire Online</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
