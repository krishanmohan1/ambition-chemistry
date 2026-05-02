import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, ChevronRight, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="blob" style={{ top: '-80px', left: '-80px', background: 'var(--accent-teal)', width: '280px', height: '280px', opacity: 0.12 }}></div>
      <div className="blob" style={{ bottom: '-80px', right: '-80px', background: 'var(--accent-amber)', width: '280px', height: '280px', opacity: 0.1 }}></div>

      <div className="container relative z-10">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">AC</div>
              <div>
                <h2 className="footer__logo-title">AMBITION</h2>
                <span className="footer__logo-sub">CHEMISTRY CLASSES</span>
              </div>
            </Link>
            <p className="footer__desc">
              Premium chemistry coaching in Begusarai, Bihar for Class 11th, 12th, IIT JEE & NEET. Expert faculty, proven results, and 4.9★ Google rating.
            </p>
            <div className="footer__socials">
              <a href="https://www.youtube.com/@sksinghambitionchemistrycl7255" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="YouTube" title="YouTube Channel">
                <Youtube size={18} />
              </a>
              <a href="https://wa.me/918709446096" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              {[
                { name: 'Home', path: '/' },
                { name: 'Courses', path: '/courses' },
                { name: 'Free Courses 🎬', path: '/free-courses' },
                { name: 'Test Series', path: '/test-series' },
                { name: 'Success Stories', path: '/results' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="footer__link">
                    <ChevronRight size={14} className="footer__link-arrow" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Programs</h3>
            <ul className="footer__links">
              {[
                'Class XI Chemistry',
                'Class XII Chemistry',
                'IIT JEE Preparation',
                'NEET Chemistry',
                'Crash Course (Hindi/Eng)',
                'B.Sc Tutorials',
              ].map(course => (
                <li key={course} className="footer__course-item">
                  <div className="footer__dot"></div>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Info</h3>
            <ul className="footer__contact">
              <li>
                <MapPin className="footer__contact-icon" size={20} />
                <span>Nala Rd, Sri Krishna Nagar, Vasant Vihar, Begusarai, Bihar 851101</span>
              </li>
              <li>
                <Phone className="footer__contact-icon" size={20} />
                <div>
                  <a href="tel:+918709446096" className="footer__link">+91 87094 46096</a>
                  <br/>
                  <a href="tel:+918434042241" className="footer__link">+91 84340 42241</a>
                </div>
              </li>
              <li>
                <Mail className="footer__contact-icon" size={20} />
                <a href="mailto:ambitioniit@gmail.com" className="footer__link">ambitioniit@gmail.com</a>
              </li>
              <li>
                <Clock className="footer__contact-icon" size={20} />
                <span>Mon - Sat: Open till 9:00 PM<br/><span style={{ color: 'var(--danger)' }}>Sunday: Closed</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Ambition Chemistry Classes. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="https://ambitionclasses.org.in" target="_blank" rel="noreferrer">Website</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--primary-darker);
          color: var(--text-white-muted);
          padding: 6rem 0 3rem;
          position: relative;
          overflow: hidden;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer__brand { display: flex; flex-direction: column; gap: 1rem; }
        .footer__logo { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; }
        .footer__logo-icon {
          background: var(--grad-teal);
          color: white;
          width: 42px;
          height: 42px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          font-family: var(--font-heading);
          flex-shrink: 0;
        }
        .footer__logo-title { font-size: 1.3rem; margin: 0; line-height: 1; color: white; letter-spacing: 0.04em; }
        .footer__logo-sub { font-size: 0.6rem; letter-spacing: 2.5px; color: var(--accent-amber); font-weight: 600; }
        .footer__desc { font-size: 0.88rem; line-height: 1.75; color: var(--text-white-muted); }
        .footer__socials { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
        .footer__social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
          color: white;
          transition: all 0.3s ease;
        }
        .footer__social-btn:hover { background: var(--accent-teal); transform: translateY(-3px); }
        .footer__col {}
        .footer__heading {
          color: white;
          font-size: 1rem;
          font-family: var(--font-heading);
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }
        .footer__heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 36px;
          height: 3px;
          border-radius: 3px;
          background: var(--grad-teal);
        }
        .footer__links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; }
        .footer__link {
          color: var(--text-white-muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          transition: all 0.25s ease;
        }
        .footer__link:hover { color: var(--accent-teal-light); }
        .footer__link-arrow { color: var(--accent-teal); transition: transform 0.25s ease; flex-shrink: 0; }
        .footer__link:hover .footer__link-arrow { transform: translateX(4px); }
        .footer__course-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; }
        .footer__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent-teal); flex-shrink: 0; }
        .footer__contact { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.1rem; }
        .footer__contact li { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.87rem; }
        .footer__contact-icon { color: var(--accent-teal-light); flex-shrink: 0; margin-top: 2px; }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer__bottom-links { display: flex; gap: 1.5rem; }
        .footer__bottom-links a { color: var(--text-white-muted); text-decoration: none; transition: color 0.25s; }
        .footer__bottom-links a:hover { color: var(--accent-teal-light); }

        @media (max-width: 1024px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer__grid { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
          .footer__brand { align-items: center; }
          .footer__logo { justify-content: center; }
          .footer__socials { justify-content: center; }
          .footer__heading::after { left: 50%; transform: translateX(-50%); }
          .footer__links { align-items: center; }
          .footer__contact { align-items: center; }
          .footer__contact li { flex-direction: column; align-items: center; text-align: center; }
          .footer__bottom { justify-content: center; flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
