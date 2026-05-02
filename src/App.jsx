import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Results from './pages/Results';
import TestSeries from './pages/TestSeries';
import About from './pages/About';
import Contact from './pages/Contact';
import FreeCourses from './pages/FreeCourses';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/918709446096?text=Hello%20Ambition%20Chemistry%20Classes,%20I%20want%20to%20inquire%20about%20classes."
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/free-courses" element={<FreeCourses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </Router>
  );
}

export default App;
