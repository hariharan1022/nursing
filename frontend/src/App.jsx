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

function App() {
  useEffect(() => {
    // Safely enable entrance animations only after mounting
    const timer = setTimeout(() => {
      document.body.setAttribute('data-reveal-init', 'true');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay"></div>
      <div className="app-container">
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
