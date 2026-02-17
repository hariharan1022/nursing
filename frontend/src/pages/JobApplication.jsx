import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const JobApplication = () => {
    const location = useLocation();
    const [jobTitle, setJobTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const params = new URLSearchParams(location.search);
        const title = params.get('job');
        if (title) {
            setJobTitle(title);
        }
    }, [location]);

    return (
        <div className="job-application-page">
            <style>
                {`

                .form-card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: var(--shadow-lg);
                    border-top: 5px solid var(--accent);
                    max-width: 800px;
                    margin: -50px auto 80px;
                    position: relative;
                    z-index: 10;
                }
                .field-group {
                    margin-bottom: 25px;
                }
                .field-label {
                    display: block;
                    font-weight: 600;
                    color: var(--primary-dark);
                    marginBottom: 10px;
                    font-size: 0.95rem;
                }
                .field-input {
                    width: 100%;
                    padding: 12px 15px;
                    border-radius: 10px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .field-input:focus {
                    border-color: var(--accent);
                    background: white;
                    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
                }
                .required-star {
                    color: #ef4444;
                    margin-left: 2px;
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                @media (max-width: 600px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        SOW THE SEEDS OF KNOWLEDGE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Job Application Form
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
                        Apply for the position of <strong>{jobTitle || 'Faculty Member'}</strong>
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="form-card reveal active">
                    <form action="https://formsubmit.co/hariharanmahesh34@gmail.com" method="POST">
                        {/* Configuration for FormSubmit */}
                        <input type="hidden" name="_subject" value={`Job Application: ${jobTitle} - MZCN`} />
                        <input type="hidden" name="_next" value={window.location.origin + '/nursing/#/careers?status=success'} />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="applied_for" value={jobTitle} />

                        <div className="form-grid">
                            <div className="field-group">
                                <label className="field-label">Full Name <span className="required-star">*</span></label>
                                <input type="text" name="full_name" className="field-input" placeholder="Enter your full name" required />
                            </div>
                            <div className="field-group">
                                <label className="field-label">Email Address <span className="required-star">*</span></label>
                                <input type="email" name="email" className="field-input" placeholder="Enter your email" required />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="field-group">
                                <label className="field-label">Phone Number <span className="required-star">*</span></label>
                                <input type="tel" name="phone" className="field-input" placeholder="e.g. +91 98765 43210" required />
                            </div>
                            <div className="field-group">
                                <label className="field-label">Highest Qualification <span className="required-star">*</span></label>
                                <select name="qualification" className="field-input" required>
                                    <option value="">Select Qualification</option>
                                    <option value="M.Sc. Nursing">M.Sc. Nursing</option>
                                    <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                                    <option value="Ph.D. Nursing">Ph.D. Nursing</option>
                                    <option value="Post Basic B.Sc.">Post Basic B.Sc.</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="field-group">
                                <label className="field-label">Years of Experience <span className="required-star">*</span></label>
                                <input type="text" name="experience" className="field-input" placeholder="e.g. 3 Years" required />
                            </div>
                            <div className="field-group">
                                <label className="field-label">Specialization <span className="required-star">*</span></label>
                                <input type="text" name="specialization" className="field-input" placeholder="e.g. Medical Surgical" required />
                            </div>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Current / Last Organization <span className="required-star">*</span></label>
                            <input type="text" name="last_org" className="field-input" placeholder="Company/Hospital/College name" required />
                        </div>

                        <div className="field-group">
                            <label className="field-label">Resume Link (Google Drive / Dropbox) <span className="required-star">*</span></label>
                            <input type="url" name="resume_link" className="field-input" placeholder="Paste your hosted resume link (Make sure it's public)" required />
                        </div>

                        <div className="field-group">
                            <label className="field-label">Professional Summary / Covering Letter</label>
                            <textarea name="summary" rows="5" className="field-input" placeholder="Briefly describe your professional background and why you are a good fit..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary magnetic" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', marginTop: '10px' }}>
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApplication;
