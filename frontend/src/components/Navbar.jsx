import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Search data - pages that can be searched
    const searchablePages = [
        { title: 'Home', path: '/', keywords: 'home main landing' },
        { title: 'About Us', path: '/about', keywords: 'about us institution college' },
        { title: 'Vision & Mission', path: '/about#vision', keywords: 'vision mission goals' },
        { title: 'Institutional Profile', path: '/about#profile', keywords: 'profile institution details' },
        { title: 'Leadership', path: '/about#leadership', keywords: 'leadership management principal' },
        { title: 'Organogram', path: '/about#organogram', keywords: 'organogram structure organization' },
        { title: 'Course Details', path: '/course-details', keywords: 'course details curriculum' },
        { title: 'B.Sc. Nursing', path: '/bsc-nursing', keywords: 'bsc nursing degree program' },
        { title: 'Academic Infrastructure', path: '/facilities#academic', keywords: 'classrooms seminar hall infrastructure' },
        { title: 'Library & Resources', path: '/facilities#library', keywords: 'library books journals e-library research' },
        { title: 'Specialized Laboratories', path: '/facilities#laboratories', keywords: 'labs clinical nursing simulation' },
        { title: 'Campus Environment', path: '/facilities#campus', keywords: 'campus environment green eco-friendly gym' },
        { title: 'Hostel & Amenities', path: '/facilities#hostel', keywords: 'hostel staying accommodation canteen atm' },
        { title: 'Transport & Connectivity', path: '/facilities#transport', keywords: 'transport bus railway connectivity' },
        { title: 'Our Faculty', path: '/faculty', keywords: 'faculty teachers professors staff' },

        { title: 'Clubs & Cells', path: '/clubs-and-cells', keywords: 'clubs cells activities extracurricular' },
        { title: 'Information Corner', path: '/info-corner', keywords: 'info corner information news' },
        { title: 'Announcements', path: '/info-corner#announcements', keywords: 'announcements notice' },
        { title: 'News & Events', path: '/info-corner#news', keywords: 'news events happenings' },
        { title: 'Rank Holders', path: '/info-corner#achievements', keywords: 'rank holders achievements toppers' },
        { title: 'Current Openings', path: '/careers', keywords: 'careers jobs recruitment vacancy current openings' },
        { title: 'Job Application', path: '/apply-job', keywords: 'job application apply work' },
        { title: 'Admissions', path: '/admissions', keywords: 'admissions apply enrollment' },
        { title: 'Contact', path: '/contact', keywords: 'contact us phone email address' },
        { title: 'Feedback', path: '/feedback', keywords: 'feedback review comments' },
        { title: 'Gallery', path: '/gallery', keywords: 'gallery photos images pictures' },
    ];

    // Handle Scroll for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : 'auto';
        if (!newState) {
            setActiveDropdown(null);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
        setActiveDropdown(null);
    };

    const toggleDropdown = (e, name) => {
        // Prevent default navigation when toggling dropdown on mobile
        if (window.innerWidth <= 1100) {
            if (e && e.preventDefault) e.preventDefault();
            if (e && e.stopPropagation) e.stopPropagation();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchQuery('');
    };

    const filteredResults = searchQuery.trim().length > 0
        ? searchablePages.filter(page =>
            page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.keywords.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const handleSearchNavigate = (path) => {
        navigate(path);
        setIsSearchOpen(false);
        setSearchQuery('');
        closeMobileMenu();
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter' && filteredResults.length > 0) {
            handleSearchNavigate(filteredResults[0].path);
        }
        if (e.key === 'Escape') {
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <>
            {/* Sticky Header Container */}
            <div className={`header-wrapper ${isSticky ? 'sticky' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
                {/* Top Bar - Utility Links */}
                <div className="top-bar">
                    <div className="container top-bar-content">
                        <div className="top-bar-left">
                            {/* Left side empty or add phone/email */}
                        </div>

                        <div className="top-bar-right">
                            <div className="top-utility-links">
                                <a href="http://betanet.mzcet.in:8080/" target="_blank" rel="noopener noreferrer"><i className="fas fa-user-graduate" style={{ fontSize: '0.75rem' }}></i> Student Portal</a>
                                <a href="https://mail.google.com/a/mzcn.in" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope" style={{ fontSize: '0.75rem' }}></i> Web Mail</a>
                                <Link to="/contact"><i className="fas fa-info-circle" style={{ fontSize: '0.75rem' }}></i> Helpdesk</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Header - Logo & Search/CTA */}
                <div className="main-header">
                    <div className="container header-container">
                        <Link to="/" className={`logo ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={closeMobileMenu}>
                            <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="MZCN Logo" />
                            <div className="logo-text">
                                <h2>MOUNT ZION</h2>
                                <p>COLLEGE OF NURSING</p>
                            </div>
                        </Link>

                        <div className="header-actions">
                            <div className="header-search-container">
                                <input
                                    className="header-search-input"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearchKeyDown}
                                />
                                <i className="fas fa-search header-search-icon"></i>
                                {/* Search Results Dropdown */}
                                {searchQuery.trim().length > 0 && (
                                    <ul className="search-results-dropdown">
                                        {filteredResults.length > 0 ? (
                                            filteredResults.map((result, index) => (
                                                <li key={index}>
                                                    <button onClick={() => handleSearchNavigate(result.path)}>
                                                        {result.title}
                                                    </button>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="search-no-results">No results found</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                            <Link to="/admissions" className="apply-btn">
                                APPLY NOW
                            </Link>

                            <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                                <div className="burger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Links Row */}
                <nav id="navbar">
                    <div className="container nav-container">
                        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                            <li className="mobile-menu-close-li">
                                <button className="mobile-menu-close-btn" onClick={closeMobileMenu} aria-label="Close Menu">
                                    <i className="fas fa-times"></i>
                                </button>
                            </li>

                            <li className="reveal-item" style={{ transitionDelay: '0.05s' }}><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>

                            <li className={`reveal-item ${activeDropdown === 'about' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.1s' }}>
                                <NavLink to="/about" onClick={(e) => toggleDropdown(e, 'about')}>
                                    About Us <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'about' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'about' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/about#vision" onClick={closeMobileMenu}><i className="fas fa-eye"></i> Vision & Mission</Link></li>
                                    <li><Link to="/about#profile" onClick={closeMobileMenu}><i className="fas fa-university"></i> Institutional Profile</Link></li>
                                    <li><Link to="/about#leadership" onClick={closeMobileMenu}><i className="fas fa-users-cog"></i> Leadership</Link></li>
                                    <li><Link to="/organogram" onClick={closeMobileMenu}><i className="fas fa-sitemap"></i> Organogram</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'campus' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.15s' }}>
                                <NavLink to="/facilities" onClick={(e) => toggleDropdown(e, 'campus')}>
                                    Campus Life <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'campus' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'campus' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/facilities#academic" onClick={closeMobileMenu}><i className="fas fa-university"></i> Academic</Link></li>
                                    <li><Link to="/facilities#library" onClick={closeMobileMenu}><i className="fas fa-book"></i> Library</Link></li>
                                    <li><Link to="/facilities#laboratories" onClick={closeMobileMenu}><i className="fas fa-flask"></i> Laboratories</Link></li>
                                    <li><Link to="/facilities#campus" onClick={closeMobileMenu}><i className="fas fa-campground"></i> Campus Environment</Link></li>
                                    <li><Link to="/facilities#hostel" onClick={closeMobileMenu}><i className="fas fa-bed"></i> Hostel & Amenities</Link></li>
                                    <li><Link to="/facilities#transport" onClick={closeMobileMenu}><i className="fas fa-bus"></i> Transport</Link></li>

                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'academics' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.2s' }}>
                                <NavLink to="/course-details" onClick={(e) => toggleDropdown(e, 'academics')}>
                                    Academics <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'academics' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'academics' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/course-details" onClick={closeMobileMenu}><i className="fas fa-book-open"></i> Department</Link></li>
                                    <li><Link to="/faculty" onClick={closeMobileMenu}><i className="fas fa-chalkboard-teacher"></i> Faculty</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'updates' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.25s' }}>
                                <NavLink to="/info-corner" onClick={(e) => toggleDropdown(e, 'updates')}>
                                    Updates <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'updates' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'updates' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/info-corner#announcements" onClick={closeMobileMenu}><i className="fas fa-bullhorn"></i> Announcements</Link></li>
                                    <li><Link to="/info-corner#news" onClick={closeMobileMenu}><i className="fas fa-newspaper"></i> News & Events</Link></li>
                                    <li><Link to="/info-corner#achievements" onClick={closeMobileMenu}><i className="fas fa-trophy"></i> Rank Holders</Link></li>
                                    <li><Link to="/careers" onClick={closeMobileMenu}><i className="fas fa-briefcase"></i> Current Openings</Link></li>
                                    <li><Link to="/apply-job" onClick={closeMobileMenu}><i className="fas fa-id-card"></i> Job Application</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'clubs' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.3s' }}>
                                <NavLink to="/clubs-and-cells" onClick={(e) => toggleDropdown(e, 'clubs')}>
                                    Clubs & Cells <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'clubs' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'clubs' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/clubs-and-cells#curriculum" onClick={closeMobileMenu}><i className="fas fa-list-ul"></i> Curriculum Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#anti-ragging" onClick={closeMobileMenu}><i className="fas fa-shield-alt"></i> Anti Ragging Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#student-welfare" onClick={closeMobileMenu}><i className="fas fa-hand-holding-heart"></i> Students Welfare Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#grievance" onClick={closeMobileMenu}><i className="fas fa-exclamation-triangle"></i> Grievance Redressal Cell</Link></li>
                                    <li><Link to="/clubs-and-cells#research" onClick={closeMobileMenu}><i className="fas fa-microscope"></i> Research Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#sports" onClick={closeMobileMenu}><i className="fas fa-running"></i> Sport Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#eco-friendly" onClick={closeMobileMenu}><i className="fas fa-leaf"></i> Eco Friendly Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#thought-flow" onClick={closeMobileMenu}><i className="fas fa-lightbulb"></i> Rationalized Thought Flow</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'admissions' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.35s' }}>
                                <NavLink to="/admissions" onClick={(e) => toggleDropdown(e, 'admissions')}>
                                    Admissions <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'admissions' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'admissions' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/admissions#eligibility" onClick={closeMobileMenu}><i className="fas fa-check-circle"></i> Eligibility Criteria</Link></li>
                                    <li><Link to="/admissions#age-limit" onClick={closeMobileMenu}><i className="fas fa-user-clock"></i> Age Limit</Link></li>
                                    <li><Link to="/admissions#documents" onClick={closeMobileMenu}><i className="fas fa-file-alt"></i> Required Documents</Link></li>
                                    <li><Link to="/admissions#scholarships" onClick={closeMobileMenu}><i className="fas fa-graduation-cap"></i> Scholarships</Link></li>
                                    <li><Link to="/admissions#selection" onClick={closeMobileMenu}><i className="fas fa-user-check"></i> Selection Process</Link></li>
                                    <li><Link to="/admissions#apply" onClick={closeMobileMenu}><i className="fas fa-edit"></i> Start Application</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'contact' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.4s' }}>
                                <NavLink to="/contact" onClick={(e) => toggleDropdown(e, 'contact')}>
                                    Contact <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'contact' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'contact' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/contact#address" onClick={closeMobileMenu}><i className="fas fa-map-marker-alt"></i> Campus Address</Link></li>
                                    <li><Link to="/contact#numbers" onClick={closeMobileMenu}><i className="fas fa-phone-alt"></i> Contact Numbers</Link></li>
                                    <li><Link to="/contact#email" onClick={closeMobileMenu}><i className="fas fa-envelope"></i> Email Support</Link></li>
                                    <li><Link to="/contact#map" onClick={closeMobileMenu}><i className="fas fa-map-marked-alt"></i> Find Us on Map</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'feedback' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.45s' }}>
                                <NavLink to="/feedback" onClick={(e) => toggleDropdown(e, 'feedback')}>
                                    Feedback <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'feedback' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'feedback' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/feedback#general" onClick={closeMobileMenu}><i className="fas fa-comment-alt"></i> General Feedback</Link></li>
                                    <li><Link to="/feedback#staff-student" onClick={closeMobileMenu}><i className="fas fa-users"></i> Staff & Student</Link></li>
                                    <li><Link to="/feedback#course" onClick={closeMobileMenu}><i className="fas fa-book"></i> Course Feedback</Link></li>
                                    <li><Link to="/feedback#hostel" onClick={closeMobileMenu}><i className="fas fa-bed"></i> Hostel Feedback</Link></li>
                                    <li><Link to="/feedback#quality" onClick={closeMobileMenu}><i className="fas fa-award"></i> Institutional Quality</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'portals' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.5s' }}>
                                <NavLink to="#" onClick={(e) => toggleDropdown(e, 'portals')}>
                                    Portals <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'portals' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'portals' ? 'active-mobile' : ''}`}>
                                    <li><a href="http://betanet.mzcet.in:8080/" target="_blank" rel="noopener noreferrer"><i className="fas fa-user-graduate" style={{ width: '20px', color: 'var(--accent)' }}></i> Student Portal</a></li>
                                    <li><a href="https://mail.google.com/a/mzcn.in" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope-open-text" style={{ width: '20px', color: 'var(--accent)' }}></i> Web Mail</a></li>
                                    <li><Link to="/contact#helpdesk" onClick={closeMobileMenu}><i className="fas fa-headset" style={{ width: '20px', color: 'var(--accent)' }}></i> Helpdesk</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="search-overlay" onClick={(e) => { if (e.target.classList.contains('search-overlay')) toggleSearch(); }}>
                    <div className="search-modal">
                        <div className="search-header">
                            <i className="fas fa-search search-input-icon"></i>
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="search-input"
                                placeholder="Search pages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                            />
                            <button className="search-close-btn" onClick={toggleSearch}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        {filteredResults.length > 0 && (
                            <ul className="search-results">
                                {filteredResults.map((result, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleSearchNavigate(result.path)}>
                                            <i className="fas fa-arrow-right"></i>
                                            {result.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {searchQuery.trim().length > 0 && filteredResults.length === 0 && (
                            <div className="search-no-results">
                                <p>No results found for "{searchQuery}"</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
