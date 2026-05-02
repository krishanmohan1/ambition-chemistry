import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Youtube } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Free Courses', path: '/free-courses' },
    { name: 'Test Series', path: '/test-series' },
    { name: 'Results', path: '/results' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <div className="navbar__logo-icon">AC</div>
            <div>
              <h1 className="navbar__logo-title">AMBITION</h1>
              <span className="navbar__logo-sub">CHEMISTRY CLASSES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.name === 'Free Courses' ? (
                    <span className="navbar__link-free">
                      <Youtube size={14} /> {link.name}
                    </span>
                  ) : link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            <a href="tel:+918709446096" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer-overlay ${mobileMenuOpen ? 'drawer-overlay--open' : ''}`} onClick={closeMenu} />
      <div className={`drawer ${mobileMenuOpen ? 'drawer--open' : ''}`}>
        <div className="drawer__header">
          <div className="drawer__logo">
            <div className="drawer__logo-icon">AC</div>
            <span className="drawer__logo-text">Ambition Chemistry</span>
          </div>
          <button onClick={closeMenu} className="drawer__close" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <ul className="drawer__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => `drawer__link ${isActive ? 'drawer__link--active' : ''} ${link.name === 'Free Courses' ? 'drawer__link--free' : ''}`}
              >
                {link.name === 'Free Courses' && <Youtube size={16} />}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="drawer__cta">
          <a href="tel:+918709446096" className="btn btn-primary w-full justify-center">
            <Phone size={18} /> Call Us: 087094 46096
          </a>
          <a href="https://wa.me/918709446096" target="_blank" rel="noreferrer" className="btn btn-success w-full justify-center">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>

      <style>{`
        /* ===== Navbar ===== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.1rem 0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
        }
        .navbar--scrolled {
          padding: 0.65rem 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 24px rgba(0, 0, 0, 0.07);
          color: var(--text-main);
        }

        /* Logo */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          z-index: 1001;
          text-decoration: none;
        }
        .navbar__logo-icon {
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
          box-shadow: 0 4px 12px rgba(13,148,136,0.35);
        }
        .navbar__logo-title {
          font-size: 1.15rem;
          margin: 0;
          line-height: 1;
          color: inherit;
          letter-spacing: 0.04em;
          font-family: var(--font-heading);
        }
        .navbar__logo-sub {
          font-size: 0.6rem;
          letter-spacing: 2.5px;
          font-weight: 600;
          color: var(--accent-amber);
          display: block;
          text-transform: uppercase;
        }
        .navbar--scrolled .navbar__logo-sub {
          color: var(--accent-teal);
        }

        /* Desktop Links */
        .navbar__links {
          display: none;
          list-style: none;
          gap: 0.15rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .navbar__link {
          position: relative;
          padding: 0.45rem 0.75rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: inherit;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.25s ease;
        }
        .navbar__link:hover {
          background: rgba(255, 255, 255, 0.12);
        }
        .navbar--scrolled .navbar__link:hover {
          background: rgba(13, 148, 136, 0.07);
          color: var(--accent-teal);
        }
        .navbar__link--active {
          color: var(--accent-amber) !important;
          font-weight: 600;
        }
        .navbar--scrolled .navbar__link--active {
          color: var(--accent-teal) !important;
          background: rgba(13, 148, 136, 0.09);
        }
        .navbar__link-free {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #ff4444;
          font-weight: 600;
        }
        .navbar--scrolled .navbar__link-free { color: #dc2626; }

        /* Desktop CTA */
        .navbar__cta { display: none; }

        /* Mobile Toggle */
        .navbar__toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          color: inherit;
          padding: 0.4rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .navbar__toggle:hover { background: rgba(255,255,255,0.12); }
        .navbar--scrolled .navbar__toggle:hover { background: rgba(0,0,0,0.06); }

        /* ===== Mobile Drawer ===== */
        .drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 1001;
          background: rgba(6, 14, 26, 0.6);
          backdrop-filter: blur(6px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s ease;
        }
        .drawer-overlay--open { opacity: 1; visibility: visible; }
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(82vw, 330px);
          z-index: 1002;
          background: white;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -15px 0 50px rgba(0, 0, 0, 0.12);
          color: var(--text-main);
        }
        .drawer--open { transform: translateX(0); }

        .drawer__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .drawer__logo { display: flex; align-items: center; gap: 0.6rem; }
        .drawer__logo-icon {
          background: var(--grad-teal);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          font-family: var(--font-heading);
        }
        .drawer__logo-text {
          font-weight: 700;
          font-size: 1rem;
          font-family: var(--font-heading);
          color: var(--text-main);
        }
        .drawer__close {
          background: rgba(0,0,0,0.05);
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .drawer__close:hover { background: rgba(0,0,0,0.1); }

        .drawer__links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
        }
        .drawer__link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-main);
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .drawer__link:hover {
          background: rgba(13, 148, 136, 0.08);
          color: var(--accent-teal);
        }
        .drawer__link--active {
          background: rgba(13, 148, 136, 0.1);
          color: var(--accent-teal);
          font-weight: 600;
        }
        .drawer__link--free { color: #dc2626; font-weight: 600; }
        .drawer__link--free:hover { background: rgba(220,38,38,0.07); color: #dc2626; }
        .drawer__cta {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-top: auto;
        }

        /* ===== Desktop breakpoint ===== */
        @media (min-width: 960px) {
          .navbar__links { display: flex; }
          .navbar__cta { display: flex; }
          .navbar__toggle { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
