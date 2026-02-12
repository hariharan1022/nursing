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
        { title: 'Info Corner', path: '/info-corner', keywords: 'info corner information news' },
        { title: 'Announcements', path: '/info-corner#announcements', keywords: 'announcements notice' },
        { title: 'News & Events', path: '/info-corner#news', keywords: 'news events happenings' },
        { title: 'Rank Holders', path: '/info-corner#achievements', keywords: 'rank holders achievements toppers' },
        { title: 'Careers', path: '/info-corner#jobs', keywords: 'careers jobs recruitment' },
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
        if (window.innerWidth <= 1024) {
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
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-contact">
                        <a href="tel:+917502173000"><i className="fas fa-phone-alt"></i> +91 75021 73000</a>
                        <a href="mailto:info@mzcn.in" style={{ marginLeft: '20px' }}><i className="fas fa-envelope"></i> info@mzcn.in</a>
                    </div>
                    <div className="top-bar-links">
                        <a href="http://betanet.mzcet.in:8080/" target="_blank" rel="noopener noreferrer">Portal</a>
                        <a href="https://mail.google.com/a/mzcn.in" target="_blank" rel="noopener noreferrer">WebMail</a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav id="navbar" className={isSticky ? 'sticky' : ''}>
                <div className="container nav-container">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
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

                        <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>

                        <li className={activeDropdown === 'about' ? 'dropdown-open' : ''}>
                            <NavLink to="/about" onClick={(e) => toggleDropdown(e, 'about')}>
                                About Us
                            </NavLink>
                            <ul className={`dropdown ${activeDropdown === 'about' ? 'active-mobile' : ''}`}>
                                <li><Link to="/about#vision" onClick={closeMobileMenu}>Vision & Mission</Link></li>
                                <li><Link to="/about#profile" onClick={closeMobileMenu}>Institutional Profile</Link></li>
                                <li><Link to="/about#leadership" onClick={closeMobileMenu}>Leadership</Link></li>
                                <li><Link to="/about#organogram" onClick={closeMobileMenu}>Organogram</Link></li>
                            </ul>
                        </li>

                        <li className={activeDropdown === 'course' ? 'dropdown-open' : ''}>
                            <NavLink to="/course-details" onClick={(e) => toggleDropdown(e, 'course')}>
                                Course Details
                            </NavLink>
                            <ul className={`dropdown ${activeDropdown === 'course' ? 'active-mobile' : ''}`}>
                                <li><Link to="/bsc-nursing" onClick={closeMobileMenu}>B.Sc. Nursing</Link></li>
                                <li><Link to="/facilities" onClick={closeMobileMenu}>Campus Facilities</Link></li>
                                <li><Link to="/faculty" onClick={closeMobileMenu}>Our Faculty</Link></li>
                            </ul>
                        </li>

                        <li><NavLink to="/clubs-and-cells" onClick={closeMobileMenu}>Clubs & Cells</NavLink></li>

                        <li className={activeDropdown === 'info' ? 'dropdown-open' : ''}>
                            <NavLink to="/info-corner" onClick={(e) => toggleDropdown(e, 'info')}>
                                Info Corner
                            </NavLink>
                            <ul className={`dropdown ${activeDropdown === 'info' ? 'active-mobile' : ''}`}>
                                <li><Link to="/info-corner#announcements" onClick={closeMobileMenu}>Announcements</Link></li>
                                <li><Link to="/info-corner#news" onClick={closeMobileMenu}>News & Events</Link></li>
                                <li><Link to="/info-corner#achievements" onClick={closeMobileMenu}>Rank Holders</Link></li>
                                <li><Link to="/info-corner#jobs" onClick={closeMobileMenu}>Careers</Link></li>
                            </ul>
                        </li>

                        <li><NavLink to="/admissions" onClick={closeMobileMenu}>Admissions</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
                        <li className={activeDropdown === 'feedback' ? 'dropdown-open' : ''}>
                            <NavLink to="/feedback" onClick={(e) => toggleDropdown(e, 'feedback')}>
                                Feedback
                            </NavLink>
                            <ul className={`dropdown ${activeDropdown === 'feedback' ? 'active-mobile' : ''}`}>
                                <li><Link to="/feedback?tab=staff-student" onClick={closeMobileMenu}>Staff & Student</Link></li>
                                <li><Link to="/feedback?tab=general" onClick={closeMobileMenu}>General</Link></li>
                                <li><Link to="/feedback?tab=course" onClick={closeMobileMenu}>Course</Link></li>
                                <li><Link to="/feedback?tab=hostel" onClick={closeMobileMenu}>Hostel</Link></li>
                                <li><Link to="/feedback?tab=institutional" onClick={closeMobileMenu}>Institutional Quality</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="nav-actions">
                        {/* Search Icon */}
                        <button className="nav-search-btn" onClick={toggleSearch} aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

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
        </>
    );
};

export default Navbar;
