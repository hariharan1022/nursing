import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, Bus, Coffee, Dumbbell, Home, Landmark, PlusCircle, Wifi, X, ZoomIn } from 'lucide-react';
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
    { id: 'library', label: 'Library', icon: BookOpen },
    { id: 'hostel', label: 'Hostel', icon: Home },
    { id: 'gym', label: 'Gym', icon: Dumbbell },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'extra-plus', label: 'Extra-Plus', icon: PlusCircle },
];

const Facilities = () => {
    const [activeTab, setActiveTab] = useState('library');

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
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveTab(id);
        }
    };

    const libraryImages = [libraryImg1, libraryImg2, libraryImg3, libraryImg4, libraryImg5, libraryImg6, libraryImg7];
    const hostelImages = [hostelImg1, hostelImg2, hostelImg3];
    const gymImages = [gymImg1];
    const transportImages = [transportImg1, transportImg2, transportImg3, transportImg4];
    const extraPlusImages = [extraPlusImg1, extraPlusImg2];





    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">

            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        Infrastructure & Beyond
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Facilities & Ecosystem
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
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

                {/* LIBRARY SECTION */}
                <section id="library" className="reveal scroll-mt-32">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl shadow-inner">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Digital Library</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
                                <div className="space-y-6">
                                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-2 first-letter:float-left">
                                        The Mount Zion Library is the primary resource for study, teaching, and research, catering to the ever-growing intellectual requirements of students and faculty.
                                    </p>
                                    <p>
                                        With over 3,500 new volumes added annually, our collection includes 165 national and international journals, 45 magazines, and a vast digital repository of e-books accessible via the intranet.
                                    </p>
                                    <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                            <Wifi className="w-4 h-4" /> Member of IEEE & DELNET
                                        </h4>
                                        <p className="text-sm">
                                            Access thousands of global research papers and digital resources anytime.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Key Services</h3>
                                        <ul className="space-y-3">
                                            {['Inter-Library Loan (ILL)', 'Reference & Current Awareness', 'Book Bank & Reprographic', 'Audio-Video Digital Content'].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm">
                                                    <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">E-Journals Access</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['Springerlink', 'Delnet', 'National Digital Library', 'E-ShodhSindhu'].map((badge, i) => (
                                                <span key={i} className="px-3 py-1 bg-white text-blue-600 text-xs font-semibold rounded-full border border-blue-100 shadow-sm">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ImageGallery images={libraryImages} />
                        </div>
                    </div>
                </section>

                {/* HOSTEL SECTION */}
                <section id="hostel" className="reveal scroll-mt-32">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-green-100 text-green-600 rounded-2xl shadow-inner">
                                    <Home className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Hostel</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {[
                                    { title: "Wi-Fi & Connectivity", desc: "High-speed internet and access to central computing facilities available on premises.", icon: Wifi },
                                    { title: "Purified RO Water", desc: "1500 LPH RO water purification plant providing safe water for drinking and cooking.", icon: PlusCircle },
                                    { title: "Recreation & TV", desc: "Television and recreation facilities are provided for residents during leisure hours.", icon: Coffee },
                                    { title: "Games & Sports", desc: "Indoor and outdoor gaming equipment available with wardens upon request.", icon: Landmark },
                                    { title: "Medical Care", desc: "Doctors are available 24/7 to attend to the health needs of hostel students.", icon: Home },
                                    { title: "Communication", desc: "Telephone booths are available for regular communication with parents.", icon: Wifi },
                                ].map((card, i) => (
                                    <div key={i} className="bg-green-50/50 p-6 rounded-2xl hover:bg-green-50 transition-all duration-300 border border-green-100/50">
                                        <card.icon className="w-6 h-6 text-green-600 mb-4" />
                                        <h3 className="text-md font-bold text-gray-800 mb-2">{card.title}</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 mb-8 shadow-sm text-sm text-green-800">
                                <p className="font-medium italic">"You can avail rooms with A/Cs at a nominal fee. Hostel Rules are to be strictly followed."</p>
                            </div>

                            <ImageGallery images={hostelImages} />
                        </div>
                    </div>
                </section>

                {/* GYM SECTION */}
                <section id="gym" className="reveal scroll-mt-32">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl shadow-inner">
                                    <Dumbbell className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Fitness Center</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed mb-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-800">State-of-the-Art Gymnasium</h3>
                                    <p>
                                        Our fitness center is fully equipped with high-quality weights, training machines, and aerobic equipment to ensure students maintain their physical health and vitality.
                                    </p>
                                    <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm text-sm">
                                        Professional trainers are available to guide students through their workout routines safely and effectively.
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Equipment Available</h3>
                                    <ul className="grid grid-cols-2 gap-3">
                                        {['Dumbbells', 'Cables & Pulleys', 'Pull-up Bars', 'Leg Press', 'Benches', 'Cardio Gear'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <span className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <ImageGallery images={gymImages} />
                        </div>
                    </div>
                </section>

                {/* TRANSPORT SECTION */}
                <section id="transport" className="reveal scroll-mt-32">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 opacity-60"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl shadow-inner">
                                    <Bus className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Transport Fleet</h2>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8 mb-8 border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-4">Extensive Connectivity</h3>
                                <p className="text-orange-800/80 mb-6">
                                    Our fleet of college buses connects major towns and cities including Melur, Karambakkudi, Pattukkottai, Karaikudi, Trichy, and more.
                                    <span className="font-semibold block mt-2 text-orange-900">New routes are constantly added based on student needs.</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Melur', 'Trichy', 'Pudukkottai', 'Sivagangai', 'Karaikudi', 'Aranthangi'].map((city, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/60 backdrop-blur-sm text-orange-700 text-xs font-bold rounded-lg border border-orange-200">
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ImageGallery images={transportImages} />
                        </div>
                    </div>
                </section>

                {/* EXTRA-PLUS SECTION */}
                <section id="extra-plus" className="reveal scroll-mt-32 pb-24">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl shadow-inner">
                                    <PlusCircle className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Campus Amenities</h2>
                            </div>

                            {/* Residential Description */}
                            <div className="bg-purple-50/50 rounded-2xl p-8 mb-12 border border-purple-100 text-gray-600 space-y-4">
                                <p className="text-lg font-medium text-purple-900">Extensive Residential System</p>
                                <p>Mount Zion College offers an extensive residential system. The on-campus accommodation offers the infrastructure necessary for a student to feel at home as well as excel in their academic pursuits.</p>
                                <p>Students who are from distant places or who prefer to spend more time studying than travelling can opt in for hostel accommodation. It supports a productive living and learning experience for students in Mount Zion College Hostel.</p>
                                <p>Professional, full-time staff are available at each residential area to address questions or concerns regarding your room, your roommate, the neighborhood, or the College at large.</p>
                                <p className="font-semibold text-purple-800">There are four hostels - 2 for girls and 2 for boys within the college campus. Inbuilt cupboards and shelves are provided for each room.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Banking Card */}
                                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md group/card">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white shadow-sm rounded-xl text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-colors">
                                            <Landmark className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Banking & Finance</h3>
                                    </div>
                                    <div className="space-y-4 text-sm text-gray-600">
                                        <p>TMB has a fully fledged branch with core banking network on campus. Mount Zion also has a tie-up with Corporation Bank.</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-1">●</span> Co-branded debit cards provided to all students.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-1">●</span> No transaction charges between students and college.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-1">●</span> Forms for new accounts available at the Admin Office.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Canteen Card */}
                                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-200 transition-colors shadow-sm hover:shadow-md group/card">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white shadow-sm rounded-xl text-yellow-600 group-hover/card:bg-yellow-500 group-hover/card:text-white transition-colors">
                                            <Coffee className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Dining Services</h3>
                                    </div>
                                    <div className="space-y-4 text-sm text-gray-600">
                                        <p>The Campus Dining Services provide meals for the Hostels through a hygienic mess with a modern kitchen.</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-500 mt-1">●</span> High quality vegetarian food based on student menu.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-500 mt-1">●</span> Non-vegetarian food is also provided on request.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-500 mt-1">●</span> Modern equipment ensuring quality and cleanliness.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-12">
                                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <Home className="w-5 h-5 text-gray-400" />
                                    Additional Views
                                </h3>
                                <ImageGallery images={extraPlusImages} />
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Facilities;
