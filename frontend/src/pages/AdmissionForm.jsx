import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdmissionForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="admission-form-page">
            <style>
                {`
                .admission-form-page {
                    background: var(--bg-light);
                    min-height: 100vh;
                }
                .form-header-bg {
                    background: linear-gradient(135deg, var(--primary) 0%, #00458e 100%);
                    padding: 80px 0 80px;
                    color: white;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .form-header-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }
                .form-container {
                    max-width: 900px;
                    margin: 40px auto 80px;
                    padding: 0 20px;
                    position: relative;
                    z-index: 5;
                }
                .admission-card {
                    background: white;
                    border-radius: 30px;
                    padding: 50px;
                    box-shadow: 0 30px 60px -12px rgba(0,0,0,0.15);
                    border-bottom: 8px solid var(--accent);
                }
                .form-section-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--primary);
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .form-section-title i {
                    color: var(--accent);
                }
                .input-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    margin-bottom: 35px;
                }
                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .input-label {
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: #475569;
                    margin-left: 4px;
                }
                .form-input {
                    padding: 15px 20px;
                    border-radius: 15px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .form-input:focus {
                    background: white;
                    border-color: var(--accent);
                    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15);
                    transform: translateY(-2px);
                }
                .form-textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                .required {
                    color: #ef4444;
                    margin-left: 3px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 20px;
                    border-radius: 18px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    font-size: 1.1rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 15px 35px -8px rgba(0, 43, 91, 0.4);
                }
                .submit-btn:hover {
                    background: #001c3d;
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px -10px rgba(0, 43, 91, 0.5);
                }
                .submit-btn:active {
                    transform: translateY(0);
                }
                @media (max-width: 600px) {
                    .admission-card {
                        padding: 30px 20px;
                        border-radius: 20px;
                    }
                }
                `}
            </style>

            <div className="form-header-bg">
                <div className="container">
                    <span className="hero-tag-gold reveal-zoom active" style={{ marginBottom: '20px' }}>ADMISSIONS {new Date().getFullYear()}</span>
                    <h1 className="reveal-skew active" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Application Form</h1>
                    <p className="reveal-blur active" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Begin your journey towards a noble profession in nursing. Please fill out the details below to start your application process.
                    </p>
                </div>
            </div>

            <div className="form-container">
                <div className="admission-card reveal active">
                    <form action="https://formsubmit.co/info@mzcn.in" method="POST" onSubmit={() => setIsSubmitting(true)}>
                        <input type="hidden" name="_subject" value="New Admission Inquiry - MZCN" />
                        <input type="hidden" name="_next" value={window.location.origin + '/nursing/#/admissions?status=success'} />
                        <input type="hidden" name="_template" value="table" />

                        {/* Personal Information */}
                        <div className="form-section">
                            <h3 className="form-section-title">
                                <i className="fas fa-user"></i> Personal Information
                            </h3>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label className="input-label">Student Name <span className="required">*</span></label>
                                    <input type="text" name="student_name" className="form-input" placeholder="Enter Full Name" required />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Date of Birth <span className="required">*</span></label>
                                    <input type="date" name="dob" className="form-input" required />
                                </div>
                            </div>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label className="input-label">Gender <span className="required">*</span></label>
                                    <select name="gender" className="form-input" required>
                                        <option value="">Select Gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Blood Group</label>
                                    <input type="text" name="blood_group" className="form-input" placeholder="e.g. O+ve" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="form-section" style={{ marginTop: '40px' }}>
                            <h3 className="form-section-title">
                                <i className="fas fa-address-book"></i> Contact Details
                            </h3>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label className="input-label">Phone Number <span className="required">*</span></label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        placeholder="Enter 10 digit number"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Email Address <span className="required">*</span></label>
                                    <input type="email" name="email" className="form-input" placeholder="example@email.com" required />
                                </div>
                            </div>
                            <div className="input-group" style={{ marginBottom: '35px' }}>
                                <label className="input-label">Residential Address <span className="required">*</span></label>
                                <textarea name="address" className="form-input form-textarea" placeholder="Full Address with Pincode" required></textarea>
                            </div>
                        </div>

                        {/* Academic Background */}
                        <div className="form-section" style={{ marginTop: '40px' }}>
                            <h3 className="form-section-title">
                                <i className="fas fa-graduation-cap"></i> Academic Background
                            </h3>
                            <div className="input-grid">
                                <div className="input-group">
                                    <label className="input-label">School Last Attended <span className="required">*</span></label>
                                    <input type="text" name="previous_school" className="form-input" placeholder="Name of school" required />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">HSC (+2) Percentage / Marks</label>
                                    <input
                                        type="text"
                                        name="hsc_marks"
                                        className="form-input"
                                        placeholder="Percentage"
                                        onBlur={(e) => {
                                            let val = e.target.value.trim();
                                            if (val && !isNaN(val) && !val.includes('%')) {
                                                e.target.value = val + '%';
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Course Applied For <span className="required">*</span></label>
                                <select name="course" className="form-input" required>
                                    <option value="B.Sc. Nursing">B.Sc. Nursing</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section" style={{ marginTop: '50px' }}>
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>SUBMIT APPLICATION <i className="fas fa-paper-plane"></i></>
                                )}
                            </button>
                            <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.8rem', color: '#94a3b8' }}>
                                By clicking submit, you agree to our terms of admission and institutional policies.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;
