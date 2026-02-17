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
        { title: 'Campus Facilities', path: '/facilities', keywords: 'campus facilities infrastructure lab library' },
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
        if (window.innerWidth <= 1100) {
            e.preventDefault();
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
            <div className={`header-wrapper ${isSticky ? 'sticky' : ''}`}>
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="container top-bar-content">
                        <div className="top-bar-left">
                            <a href="http://betanet.mzcet.in:8080/" target="_blank" rel="noopener noreferrer">Student Portal</a>
                            <a href="https://mail.google.com/a/mzcn.in" target="_blank" rel="noopener noreferrer">WebMail</a>
                        </div>

                        <div className="top-bar-right">
                            <div className="search-bar-container">
                                <input
                                    className="top-search-input"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearchKeyDown}
                                />
                                <i className="fas fa-search search-icon"></i>
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
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav id="navbar">
                    <div className="container nav-container">
                        <Link to="/" className={`logo ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={closeMobileMenu}>
                            <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="MZCN Logo" />
                            <div className="logo-text">
                                <h2>MOUNT ZION</h2>
                                <p>COLLEGE OF NURSING</p>
                            </div>
                        </Link>

                        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                            {/* Close button inside mobile menu */}
                            <li className="mobile-menu-close-li">
                                <button className="mobile-menu-close-btn" onClick={closeMobileMenu} aria-label="Close Menu">
                                    <i className="fas fa-times"></i>
                                </button>
                            </li>

                            <li className="reveal-item" style={{ transitionDelay: '0.1s' }}><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>

                            <li className={`reveal-item ${activeDropdown === 'about' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.15s' }}>
                                <NavLink to="/about" onClick={(e) => toggleDropdown(e, 'about')}>
                                    About Us <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'about' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'about' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/about#vision" onClick={closeMobileMenu}>Vision & Mission</Link></li>
                                    <li><Link to="/about#profile" onClick={closeMobileMenu}>Institutional Profile</Link></li>
                                    <li><Link to="/about#leadership" onClick={closeMobileMenu}>Leadership</Link></li>
                                    <li><Link to="/organogram" onClick={closeMobileMenu}>Organogram</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'campus' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.2s' }}>
                                <NavLink to="/facilities" onClick={(e) => toggleDropdown(e, 'campus')}>
                                    Campus Life <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'campus' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'campus' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/facilities#library" onClick={closeMobileMenu}>Library</Link></li>
                                    <li><Link to="/facilities#hostel" onClick={closeMobileMenu}>Hostel</Link></li>
                                    <li><Link to="/facilities#gym" onClick={closeMobileMenu}>Gym</Link></li>
                                    <li><Link to="/facilities#transport" onClick={closeMobileMenu}>Transport</Link></li>
                                    <li><Link to="/facilities#extra-plus" onClick={closeMobileMenu}>Extra Plus</Link></li>
                                    <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'academics' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.25s' }}>
                                <NavLink to="/course-details" onClick={(e) => toggleDropdown(e, 'academics')}>
                                    Academics <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'academics' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'academics' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/course-details" onClick={closeMobileMenu}>Department</Link></li>
                                    <li><Link to="/faculty" onClick={closeMobileMenu}>Faculty</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'updates' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.3s' }}>
                                <NavLink to="/info-corner" onClick={(e) => toggleDropdown(e, 'updates')}>
                                    Updates <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'updates' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'updates' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/info-corner#announcements" onClick={closeMobileMenu}>Announcements</Link></li>
                                    <li><Link to="/info-corner#news" onClick={closeMobileMenu}>News & Events</Link></li>
                                    <li><Link to="/info-corner#achievements" onClick={closeMobileMenu}>Rank Holders</Link></li>
                                    <li><Link to="/careers" onClick={closeMobileMenu}>Current Openings</Link></li>
                                    <li><Link to="/apply-job" onClick={closeMobileMenu}>Job Application</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'clubs' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.35s' }}>
                                <NavLink to="/clubs-and-cells" onClick={(e) => toggleDropdown(e, 'clubs')}>
                                    Clubs & Cells <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'clubs' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'clubs' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/clubs-and-cells#curriculum" onClick={closeMobileMenu}>Curriculum Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#anti-ragging" onClick={closeMobileMenu}>Anti Ragging Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#student-welfare" onClick={closeMobileMenu}>Students Welfare Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#grievance" onClick={closeMobileMenu}>Grievance Redressal Cell</Link></li>
                                    <li><Link to="/clubs-and-cells#research" onClick={closeMobileMenu}>Research Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#sports" onClick={closeMobileMenu}>Sport Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#eco-friendly" onClick={closeMobileMenu}>Eco Friendly Committee</Link></li>
                                    <li><Link to="/clubs-and-cells#thought-flow" onClick={closeMobileMenu}>Rationalized Thought Flow</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'admissions' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.4s' }}>
                                <NavLink to="/admissions" onClick={(e) => toggleDropdown(e, 'admissions')}>
                                    Admissions <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'admissions' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'admissions' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/admissions#eligibility" onClick={closeMobileMenu}>Eligibility Criteria</Link></li>
                                    <li><Link to="/admissions#age-limit" onClick={closeMobileMenu}>Age Limit</Link></li>
                                    <li><Link to="/admissions#documents" onClick={closeMobileMenu}>Required Documents</Link></li>
                                    <li><Link to="/admissions#scholarships" onClick={closeMobileMenu}>Scholarships</Link></li>
                                    <li><Link to="/admissions#selection" onClick={closeMobileMenu}>Selection Process</Link></li>
                                    <li><Link to="/admissions#apply" onClick={closeMobileMenu}>Start Application</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'contact' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.45s' }}>
                                <NavLink to="/contact" onClick={(e) => toggleDropdown(e, 'contact')}>
                                    Contact <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'contact' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'contact' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/contact#address" onClick={closeMobileMenu}>Campus Address</Link></li>
                                    <li><Link to="/contact#phone" onClick={closeMobileMenu}>Contact Numbers</Link></li>
                                    <li><Link to="/contact#email" onClick={closeMobileMenu}>Email Support</Link></li>
                                    <li><Link to="/contact#map" onClick={closeMobileMenu}>Find Us on Map</Link></li>
                                </ul>
                            </li>

                            <li className={`reveal-item ${activeDropdown === 'feedback' ? 'dropdown-open' : ''}`} style={{ transitionDelay: '0.5s' }}>
                                <NavLink to="/feedback" onClick={(e) => toggleDropdown(e, 'feedback')}>
                                    Feedback <i className={`fas fa-chevron-down dropdown-arrow ${activeDropdown === 'feedback' ? 'rotated' : ''}`} style={{ fontSize: '0.7rem', marginLeft: '5px' }}></i>
                                </NavLink>
                                <ul className={`dropdown ${activeDropdown === 'feedback' ? 'active-mobile' : ''}`}>
                                    <li><Link to="/feedback?tab=general" onClick={closeMobileMenu}>General Feedback</Link></li>
                                    <li><Link to="/feedback?tab=course" onClick={closeMobileMenu}>Course Feedback</Link></li>
                                    <li><Link to="/feedback?tab=staff-student" onClick={closeMobileMenu}>Staff & Student Feedback</Link></li>
                                    <li><Link to="/feedback?tab=hostel" onClick={closeMobileMenu}>Hostel Feedback</Link></li>
                                    <li><Link to="/feedback?tab=institutional" onClick={closeMobileMenu}>Institutional Quality Feedback</Link></li>
                                </ul>
                            </li>

                        </ul>

                        <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                            <div className="burger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </nav>

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
            </div>
        </>
    );
};

export default Navbar;
