import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, MapPin, X } from 'lucide-react';
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

function SpeedDialFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="speed-dial-container">
      <div className={`speed-dial-actions ${open ? 'speed-dial-actions--open' : ''}`}>
        <a href="https://maps.google.com/?q=Ambition+Chemistry+Classes+Begusarai" target="_blank" rel="noopener noreferrer" className="speed-dial-action" style={{ background: '#38bdf8' }} aria-label="Directions">
          <MapPin size={20} />
        </a>
        <a href="tel:+918709446096" className="speed-dial-action" style={{ background: '#f59e0b' }} aria-label="Call Us">
          <Phone size={20} />
        </a>
        <a href="https://wa.me/918709446096?text=Hello%20Ambition%20Chemistry%20Classes,%20I%20want%20to%20inquire%20about%20classes." target="_blank" rel="noopener noreferrer" className="speed-dial-action" style={{ background: '#25D366' }} aria-label="WhatsApp">
          <MessageCircle size={20} />
        </a>
      </div>
      <button className={`fab ${open ? 'fab--open' : ''}`} onClick={() => setOpen(!open)} aria-label="Contact Options">
        <MessageCircle size={28} className="fab-icon fab-icon-main" />
        <X size={28} className="fab-icon fab-icon-close" />
      </button>
    </div>
  );
}

function LiveNotifications() {
  const [notification, setNotification] = useState(null);
  
  const notifications = [
    { name: "Rahul", action: "enrolled in Class 12th Chemistry", time: "Just now" },
    { name: "Priya", action: "inquired about IIT JEE batch", time: "2 mins ago" },
    { name: "Aman", action: "downloaded the study material", time: "5 mins ago" },
    { name: "Neha", action: "enrolled in NEET Crash Course", time: "12 mins ago" },
    { name: "Vikas", action: "gave a 5-star rating on Google", time: "1 hour ago" },
  ];

  useEffect(() => {
    const triggerRandomNotification = () => {
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(randomNotif);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setNotification(null);
      }, 4000);
      
      // Schedule next notification between 15 and 35 seconds
      const nextTime = Math.floor(Math.random() * 20000) + 15000;
      setTimeout(triggerRandomNotification, nextTime);
    };

    const initialTimer = setTimeout(triggerRandomNotification, 5000);
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div className="live-notification-wrapper">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="live-notification"
          >
            <div className="live-notification-icon">🔥</div>
            <div>
              <p className="live-notification-text"><strong>{notification.name}</strong> from Begusarai {notification.action}</p>
              <p className="live-notification-time">{notification.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      <SpeedDialFAB />
      <LiveNotifications />
    </Router>
  );
}

export default App;
