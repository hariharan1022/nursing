import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';
import BScNursing from './pages/BScNursing';
import Facilities from './pages/Facilities';
import Faculty from './pages/Faculty';
import ClubsAndCells from './pages/ClubsAndCells';
import InfoCorner from './pages/InfoCorner';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import JobApplication from './pages/JobApplication';
import Organogram from './pages/Organogram';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const Placeholder = ({ title }) => (
  <div className="section" style={{ padding: '100px 0', textAlign: 'center' }}>
    <div className="container">
      <h1 style={{ color: 'var(--primary)', marginBottom: '20px' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>This page is currently being refined as part of our premium React experience.</p>
    </div>
  </div>
);

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Safely enable entrance animations only after mounting
    const timer = setTimeout(() => {
      document.body.setAttribute('data-reveal-init', 'true');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.05 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-skew, .reveal-blur, .reveal-flip, .reveal-stagger, .typewriter');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById("scrollBar");
      if (progressBar) progressBar.style.width = scrolled + "%";
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div id="scrollBar" className="scroll-progress"></div>
      <ScrollToTop />
      <div className="noise-overlay"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/bsc-nursing" element={<BScNursing />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/clubs-and-cells" element={<ClubsAndCells />} />
        <Route path="/info-corner" element={<InfoCorner />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply-job" element={<JobApplication />} />
        <Route path="/organogram" element={<Organogram />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
