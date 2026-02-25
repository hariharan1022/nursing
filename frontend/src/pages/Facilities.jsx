import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { BookOpen, Bus, Coffee, Dumbbell, Home, Landmark, PlusCircle, Wifi, X, ZoomIn, Stethoscope, Baby, HeartPulse, Microscope, Activity, Monitor, Brain, Users, Utensils, Biohazard } from 'lucide-react';
import '../styles/Gallery.css';

// Import images
import libraryImg1 from '../assets/facilites/library/library-1.jpeg';
import libraryImg2 from '../assets/facilites/library/library-2.jpeg';
import libraryImg3 from '../assets/facilites/library/library-3.jpeg';
import libraryImg4 from '../assets/facilites/library/library-4.jpeg';
import libraryImg5 from '../assets/facilites/library/library-5.jpeg';
import libraryImg6 from '../assets/facilites/library/library-6.jpeg';
import libraryImg7 from '../assets/facilites/library/library-7.jpeg';

import hostelImg1 from '../assets/facilites/hostel/hostel-1.jpeg';
import hostelImg2 from '../assets/facilites/hostel/hostel-2.jpeg';
import hostelImg3 from '../assets/facilites/hostel/hostel-3.jpeg';

import gymImg1 from '../assets/facilites/gym/gym-1.jpeg';

import transportImg1 from '../assets/facilites/transport/transport-1.jpeg';
import transportImg2 from '../assets/facilites/transport/transport-2.jpeg';
import transportImg3 from '../assets/facilites/transport/transport-3.jpeg';
import transportImg4 from '../assets/facilites/transport/transport-4.jpeg';

import extraPlusImg1 from '../assets/facilites/extra-plus/extra-plus-1.jpeg';
import extraPlusImg2 from '../assets/facilites/extra-plus/extra-plus-2.jpeg';

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setCurrentIndex(0);
    };

    const goToNext = (e) => {
        if (e) e.stopPropagation();
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    };

    const goToPrev = (e) => {
        if (e) e.stopPropagation();
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
    };

    React.useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
                setCurrentIndex(0);
            } else if (e.key === 'ArrowRight') {
                const nextIndex = (currentIndex + 1) % images.length;
                setCurrentIndex(nextIndex);
                setSelectedImage(images[nextIndex]);
            } else if (e.key === 'ArrowLeft') {
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                setCurrentIndex(prevIndex);
                setSelectedImage(images[prevIndex]);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage, currentIndex, images]);

    return (
        <>
            <div className="gallery-grid mt-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-card"
                        onClick={() => openLightbox(index)}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="card-image-wrapper">
                            <img
                                src={img}
                                alt={`Facility ${index + 1}`}
                                className="card-image"
                                loading="lazy"
                            />
                            <div className="card-overlay">
                                <div className="zoom-icon">
                                    <ZoomIn size={20} />
                                </div>
                                <h3 className="card-title">Facility View</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && createPortal(
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                    >
                        <X size={24} />
                    </button>

                    <div
                        className="lightbox-content-wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt={`Facility ${currentIndex + 1}`}
                            className="lightbox-image"
                        />

                        <div className="lightbox-info">
                            <h3 className="lightbox-event">Facility Detail</h3>
                            <p className="lightbox-meta">{currentIndex + 1} / {images.length}</p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

const tabs = [
    { id: 'academic', label: 'Academic', icon: Landmark },
    { id: 'library', label: 'Library', icon: BookOpen },
    { id: 'laboratories', label: 'Laboratories', icon: PlusCircle },
    { id: 'campus', label: 'Campus Life', icon: Landmark },
    { id: 'hostel', label: 'Hostel & Amenities', icon: Home },
    { id: 'transport', label: 'Transport', icon: Bus },
];

const Facilities = () => {
    const [activeTab, setActiveTab] = useState('academic');
    const location = useLocation();

    // Handle initial hash scroll and hash changes
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                setTimeout(() => {
                    const navHeight = 120; // Exact height of the sticky header
                    window.scrollTo({
                        top: element.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                    setActiveTab(hash);
                }, 100);
            }
        }
    }, [location.hash]);

    useEffect(() => {
        const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    if (entry.target.id) {
                        setActiveTab(entry.target.id);
                    }
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const navHeight = 120;
            window.scrollTo({
                top: element.offsetTop - navHeight,
                behavior: 'smooth'
            });
            setActiveTab(id);
        }
    };

    const libraryImages = [libraryImg1, libraryImg2, libraryImg3, libraryImg4, libraryImg5, libraryImg6, libraryImg7];
    const hostelImages = [hostelImg1, hostelImg2, hostelImg3];
    const transportImages = [transportImg1, transportImg2, transportImg3, transportImg4];
    const extraPlusImages = [extraPlusImg1, extraPlusImg2];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">

            {/* Hero Section */}
            <div className="inner-hero">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold float-breathe reveal-zoom" data-reveal-init>
                        INFRASTRUCTURE & BEYOND
                    </span>
                    <h1 className="reveal-skew stagger-1" data-reveal-init style={{ color: 'white' }}>
                        Facilities & Ecosystem
                    </h1>
                    <p className="reveal-blur stagger-2" data-reveal-init style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Providing a holistic environment for academic excellence and personal growth.
                    </p>
                </div>
            </div>

            {/* Sticky Navigation */}
            <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex justify-center min-w-max space-x-2 md:space-x-8 py-4">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => scrollToSection(tab.id)}
                                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform active:scale-95 ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'animate-bounce' : ''}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl space-y-20">

                {/* ACADEMIC INFRASTRUCTURE */}
                <section id="academic" className="reveal scroll-mt-32">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 opacity-60"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl shadow-inner">
                                    <Landmark className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Academic Infrastructure</h2>
                            </div>

                            <div className="grid md-grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="blue-box-premium p-10 reveal-left" data-reveal-init>
                                        <h3 className="text-2xl font-bold text-primary mb-4">Modern Classrooms</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                            Five spacious, well-ventilated classrooms equipped with modern projected and non-projected audio-visual aids to facilitate interactive and outcome-based learning.
                                        </p>
                                    </div>
                                    <div className="blue-box-premium p-10 reveal-left" data-reveal-init>
                                        <h3 className="text-2xl font-bold text-primary mb-4">Seminar Hall</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                            A fully equipped seminar hall with smart board technology, ideal for academic programs, workshops, conferences, CNE programs, and guest lectures.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="premium-card reveal-right" data-reveal-init>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Multipurpose Facilities</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            Three spacious multipurpose halls with modern projection systems suitable for academic, cultural, and professional development activities.
                                        </p>
                                        <div className="flex gap-3">
                                            <span className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-black rounded-xl border border-slate-200 uppercase tracking-widest">Academic</span>
                                            <span className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-black rounded-xl border border-slate-200 uppercase tracking-widest">Cultural</span>
                                            <span className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-black rounded-xl border border-slate-200 uppercase tracking-widest">Growth</span>
                                        </div>
                                    </div>
                                    <div className="interaction-box reveal-right" data-reveal-init>
                                        <p className="text-lg italic text-slate-600 border-l-4 border-blue-500 pl-6 font-semibold">
                                            "Infrastructure thoughtfully designed to foster clinical brilliance and holistic development."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LIBRARY SECTION */}
                <section id="library" className="reveal scroll-mt-32">
                    <div className="premium-card" style={{ padding: '0', border: 'none' }}>
                        <div className="p-8 md:p-12 relative overflow-hidden">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="club-icon-box shadow-lg" style={{ background: 'var(--primary)', color: 'white' }}>
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Library & Resources</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed mb-12">
                                <div className="space-y-8">
                                    <p className="text-2xl font-medium text-slate-700 leading-relaxed">
                                        Our well-established library serves as the academic heart, providing a quiet, resource-rich environment encouraging research and lifelong learning.
                                    </p>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="interaction-box text-center shadow-sm">
                                            <div className="text-3xl font-black text-primary">3,500+</div>
                                            <div className="text-[12px] uppercase font-black text-slate-500 tracking-widest mt-2">Books</div>
                                        </div>
                                        <div className="interaction-box text-center shadow-sm">
                                            <div className="text-3xl font-black text-primary">1,500+</div>
                                            <div className="text-[12px] uppercase font-black text-slate-500 tracking-widest mt-2">Titles</div>
                                        </div>
                                        <div className="interaction-box text-center shadow-sm">
                                            <div className="text-3xl font-black text-primary">12</div>
                                            <div className="text-[12px] uppercase font-black text-slate-500 tracking-widest mt-2">Journals</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blue-box-premium reveal-zoom" data-reveal-init>
                                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <Wifi size={24} className="text-blue-600" /> Digital Infrastructure
                                    </h3>
                                    <ul className="space-y-6 text-sm font-bold text-slate-600">
                                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(0,43,91,0.2)]"></div> Digital / Virtual Library Access</li>
                                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(0,43,91,0.2)]"></div> Barcode Management System</li>
                                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(0,43,91,0.2)]"></div> Member of IEEE & DELNET</li>
                                    </ul>
                                </div>
                            </div>

                            <ImageGallery images={libraryImages} />
                        </div>
                    </div>
                </section>

                {/* LABORATORIES SECTION */}
                <section id="laboratories" className="reveal scroll-mt-32">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-60"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="club-icon-box shadow-lg" style={{ background: '#10b981', color: 'white' }}>
                                            <Microscope className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Specialized Clinical Laboratories</h2>
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                        High-fidelity simulation units architected to bridge the gap between theoretical pedagogy and real-world clinical dexterity. Each laboratory is equipped with advanced manikins, specialized hardware, and outcome-based diagnostic tools.
                                    </p>
                                </div>
                                <div className="hidden lg:block text-right">
                                    <div className="text-6xl font-black text-emerald-600 opacity-20">10+</div>
                                    <div className="text-[12px] font-black uppercase text-slate-500 tracking-[0.3em] mt-2">Clinical Units</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger" data-reveal-init>
                                {[
                                    { t: "Nursing Foundation", d: "Core clinical skill rehearsals and basic nursing procedures on high-fidelity manikins.", icon: Stethoscope },
                                    { t: "Adult Health Nursing", d: "Sophisticated simulation of intensive care and advanced medical-surgical protocols.", icon: Activity },
                                    { t: "Child Health Nursing", d: "Neonatal resuscitation modules and pediatric specialty care simulation units.", icon: Baby },
                                    { t: "OBG Laboratory", d: "Maternity and midwifery simulations focused on labor, delivery and postnatal support.", icon: HeartPulse },
                                    { t: "Community Health", d: "Simulation of rural and urban primary healthcare setups for public health training.", icon: Users },
                                    { t: "Mental Health Unit", d: "Dedicated environment for therapeutic communication and behavioral health observation.", icon: Brain },
                                    { t: "Nutrition & Dietetics", d: "Scientific food preparation, dietary calculation, and therapeutic meal mapping.", icon: Utensils },
                                    { t: "Microbiology Lab", d: "Clinical pathology, staining techniques, and advanced diagnostic microscopy.", icon: Microscope },
                                    { t: "Anatomy & Physiology", d: "An exhaustive museum of biological specimens, intricate models, and skeletal systems.", icon: Landmark },
                                    { t: "Advanced Computer Lab", d: "Training in Hospital Management Systems (HMS) and digital medical record analysis.", icon: Monitor }
                                ].map((lab, i) => (
                                    <div key={i} className="premium-card shine-effect group transition-all duration-300">
                                        <div className="flex flex-col gap-6">
                                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                                <lab.icon size={30} className="transition-transform group-hover:scale-110" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
                                                    {lab.t}
                                                </h3>
                                                <p className="text-slate-500 font-medium leading-relaxed">
                                                    {lab.d}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAMPUS LIFE & ENVIRONMENT */}
                <section id="campus" className="reveal scroll-mt-32">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-green-100 text-green-600 rounded-2xl shadow-inner">
                                    <Landmark className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Campus Life</h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-green-900 flex items-center gap-3">
                                        30-Acre Eco-Friendly Sanctuary
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Situated on a serene 30-acre eco-friendly campus, our institution offers a peaceful atmosphere conducive for intense academic pursuits and holistic personal growth.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                            <div className="text-green-700 font-black text-xs uppercase mb-2">Campus Area</div>
                                            <div className="text-2xl font-black text-green-900">30+ Acres</div>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                            <div className="text-blue-700 font-black text-xs uppercase mb-2">Environment</div>
                                            <div className="text-xl font-black text-blue-900 italic">Eco-Friendly</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="font-bold text-rose-700 mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                                                <PlusCircle size={16} className="text-rose-500" /> Health & Safety
                                            </h4>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                                Dedicated sick room equipped with essential first-aid and AED (Automated External Defibrillator) facilities for immediate emergency response.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="font-bold text-indigo-700 mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                                                <Landmark size={16} className="text-indigo-500" /> Medical Support
                                            </h4>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                                Strategic proximity to advanced healthcare centers within 6km, ensuring prompt and specialized medical services whenever required.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="gym" className="border-t border-gray-100 pt-12">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Sports & Vitality</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-transform hover:scale-110">
                                                    <Dumbbell size={28} />
                                                </div>
                                                <div>
                                                    <span className="block text-xs font-black uppercase text-slate-400 tracking-widest mb-1">Fitness Center</span>
                                                    <span className="text-lg font-bold text-slate-800">Professional Gymnasium</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm transition-transform hover:scale-110">
                                                    <Landmark size={28} />
                                                </div>
                                                <div>
                                                    <span className="block text-xs font-black uppercase text-slate-400 tracking-widest mb-1">Indoor & Outdoor</span>
                                                    <span className="text-lg font-bold text-slate-800">Comprehensive Sports Facilities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white-100">
                                        <img
                                            src={gymImg1}
                                            alt="Gymnasium Facility"
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOSTEL & AMENITIES */}
                <section id="hostel" className="reveal scroll-mt-32">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
                                    <Home className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Residential & Student Amenities</h2>
                            </div>

                            <div className="grid md:grid-cols-5 gap-8 mb-12">
                                <div className="md:col-span-3 space-y-8">
                                    <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 group relative">
                                        <h3 className="text-2xl font-bold text-emerald-900 mb-6">In-Campus Residency</h3>
                                        <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6 italic">Separate accommodation for boys and girls providing a safe, secure, and comfortable living environment.</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['24/7 Security', 'Safe & Comfortable', 'RO Drinking Water', 'Productive Living'].map((feat, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs font-black text-emerald-700 uppercase tracking-tight">
                                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <ImageGallery images={hostelImages} />
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    {[
                                        { title: "ATM & Institutional Banking", icon: Landmark },
                                        { title: "Hygienic Modern Cafeteria", icon: Coffee },
                                        { title: "On-Campus Stationery Store", icon: BookOpen },
                                        { title: "Laundry & Support Services", icon: PlusCircle },
                                        { title: "Snack Vending Machines", icon: Coffee }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-all hover:bg-emerald-50 hover:border-emerald-200">
                                            <div className="p-3 bg-white text-emerald-600 rounded-xl shadow-sm"><item.icon size={20} /></div>
                                            <span className="text-xs font-black text-slate-800 uppercase tracking-widest">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="extra-plus" className="mt-8 border-t border-gray-100 pt-8">
                                <ImageGallery images={extraPlusImages} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRANSPORT SECTION */}
                <section id="transport" className="reveal scroll-mt-32">
                    <div className="premium-card rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-blue-100 rounded-2xl shadow-inner">
                                    <Bus className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Transport & Connectivity</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-widest text-xs">Campus Connectivity</h3>
                                        <div className="space-y-8">
                                            <div className="flex items-start gap-5">
                                                <div className="p-4 bg-white rounded-2xl border border-slate-100"><Landmark size={24} className="text-blue-600" /></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-1">Railway Proximity</h4>
                                                    <p className="text-sm text-slate-600">Close proximity to Nachanthupatti Railway Station.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-5">
                                                <div className="p-4 bg-white rounded-2xl border border-slate-100"><PlusCircle size={24} className="text-blue-600" /></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-1">Aviation Access</h4>
                                                    <p className="text-sm text-slate-600">Tiruchirappalli International Airport (56 KM).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 space-y-6">
                                    <h3 className="text-xl font-bold text-indigo-900">Regional Coverage</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium"> Extensive bus facilities with convenient access from nearby locations including Melur, Karambakkudi, Pattukkottai, Karaikudi, and Trichy. </p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {['TRICHY', 'PUDUKKOTTAI', 'KARAIKUDI', 'MELUR'].map((city, i) => (
                                            <span key={i} className="px-5 py-2 bg-blue-100 text-blue-800 text-[10px] font-black tracking-widest rounded-xl border border-blue-200">
                                                {city}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <ImageGallery images={transportImages} />
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 pb-24 reveal">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Mount Zion College of Nursing</p>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-8">A Campus Designed for Excellence</h3>
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed font-medium px-4">
                        Mount Zion College of Nursing offers a well-structured, modern, and supportive physical
                        environment that nurtures academic distinction, professional skill development, and overall
                        student well-being. Our infrastructure reflects our commitment to preparing competent,
                        compassionate, and confident nursing professionals for global healthcare settings.
                    </p>
                    <div className="mt-12 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>



            </div>
        </div>
    );
};

export default Facilities;
