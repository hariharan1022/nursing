import React, { useState, useMemo } from 'react';
import { Calendar, Layers, ZoomIn, X, Image as ImageIcon } from 'lucide-react';
import '../styles/Gallery.css';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    // Dynamic Image Loading
    const galleryData = useMemo(() => {
        const glob = import.meta.glob('../assets/gallery/**/*.{png,jpg,jpeg,svg}', { eager: true });

        return Object.entries(glob).map(([path, module], index) => {
            // Path example: "../assets/gallery/2024/image.jpg" or "../assets/gallery/Events/Graduation/image.jpg"
            const parts = path.split('/');
            const fileName = parts[parts.length - 1];
            const folderName = parts[parts.length - 2];
            const parentFolder = parts[parts.length - 3]; // might be 'Events' or 'gallery'

            let year = '2024';
            let event = 'General';

            // Metadata extraction logic
            // Check if the parent folder is a year (e.g. gallery/2025/EventName/image.jpg)
            if (/^\d{4}$/.test(parentFolder)) {
                year = parentFolder;
                event = folderName.replace(/_/g, ' '); // Replace underscores with spaces if any
            }
            // Check if the folder itself is a year (e.g. gallery/2025/image.jpg)
            else if (/^\d{4}$/.test(folderName)) {
                year = folderName;
                event = 'Campus Life';
            }
            // Logic for existing structure (e.g. gallery/Events/EventName/image.jpg)
            else if (parentFolder === 'Events') {
                event = folderName.replace(/([A-Z])/g, ' $1').trim();
                year = '2024';
            }
            else {
                // Fallback
                if (folderName === '2023') year = '2023';
                else if (folderName === '2022') year = '2022';
            }

            return {
                id: index,
                src: module.default, // Vite returns module with default export as URL
                year,
                event,
                title: fileName.replace(/\.[^/.]+$/, "").replace(/WhatsApp Image/, "Photo"), // Clean up filename
                category: parentFolder === 'Events' ? folderName : year
            };
        });
    }, []);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage(null);
        document.body.style.overflow = 'auto';
    };

    // Grouping Logic
    const sections = useMemo(() => {
        // Helper to group by a key
        const groupBy = (data, keySelector) => {
            return data.reduce((acc, item) => {
                const key = keySelector(item);
                if (!acc[key]) acc[key] = [];
                acc[key].push(item);
                return acc;
            }, {});
        };

        // Group by Year -> Then by Event
        const yearGroups = groupBy(galleryData, item => item.year);
        // Sort years descending
        return Object.keys(yearGroups).sort((a, b) => b - a).map(year => {
            const photosInYear = yearGroups[year];
            const eventGroupsInYear = groupBy(photosInYear, item => item.event);

            // Sort events alphabetically
            const sortedEvents = Object.keys(eventGroupsInYear).sort();

            return {
                title: year,
                count: photosInYear.length,
                subSections: sortedEvents.map(event => ({
                    title: event,
                    photos: eventGroupsInYear[event]
                }))
            };
        });
    }, [galleryData]);

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="hero-tag-gold">
                        Visual Journey
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 animate-fade-in-scale stagger-1 drop-shadow-2xl">
                        Moments of Excellence
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-blue-100/90 leading-relaxed animate-fade-in-scale stagger-2 font-light drop-shadow-sm">
                        Explore the vibrant life at Mount Zion College of Nursing, captured through the lens of our events, achievements, and daily campus life.
                    </p>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="container" style={{ paddingBottom: '5rem' }}>
                {galleryData.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>No photos found in the gallery.</p>
                    </div>
                ) : (
                    sections.map((section, sectionIndex) => (
                        <div key={section.title} className="section-group animate-on-scroll" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                            {/* Main Section Header (Year or Event Name) */}
                            <div className="group-header">
                                <h2 className="group-title">
                                    {section.title}
                                </h2>
                                <div className="group-line"></div>
                                <span className="group-count">
                                    {section.count} Photos
                                </span>
                            </div>

                            {/* Subsections (Events within Year) */}
                            {section.subSections.map((sub, subIndex) => (
                                <div key={`${section.title}-${sub.title || subIndex}`} className="subsection">
                                    {sub.title && (
                                        <h3 className="subsection-title">
                                            {sub.title}
                                        </h3>
                                    )}

                                    <div className="gallery-grid">
                                        {sub.photos.map((item) => (
                                            <div
                                                key={item.id}
                                                className="gallery-card"
                                                onClick={() => openLightbox(item)}
                                            >
                                                <div className="card-image-wrapper">
                                                    <img
                                                        src={item.src}
                                                        alt={item.title}
                                                        className="card-image"
                                                        loading="lazy"
                                                    />
                                                    <div className="card-overlay">
                                                        <div className="zoom-icon">
                                                            <ZoomIn size={20} />
                                                        </div>
                                                        <span className="card-year">
                                                            {item.year}
                                                        </span>
                                                        <h3 className="card-title">
                                                            {item.event}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Spacer between subsections */}
                                    <div className="h-12"></div>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>

            {/* Lightbox */}
            {lightboxOpen && currentImage && (
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
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="lightbox-image"
                        />
                        <div className="lightbox-info">
                            <h3 className="lightbox-event">{currentImage.event}</h3>
                            <p className="lightbox-meta">{currentImage.year} • {currentImage.title}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
