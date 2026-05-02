import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, CheckCircle, BookOpen, Users, Trophy, Target, Clock, MapPin, Star, GraduationCap, Video, HelpCircle } from 'lucide-react';
import heroImg from '../assets/images/classroom-hero.png';
import classroom1 from '../assets/images/classroom1.png';
import classroom2 from '../assets/images/classroom2.png';
import classroom3 from '../assets/images/classroom3.png';
import classroom4 from '../assets/images/classroom4.png';
import classroom5 from '../assets/images/classroom5.png';
import exteriorImg from '../assets/images/institute-exterior.png';

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const Home = () => {
  const reviews = [
    { name: "Rankit Kumar", text: "Best coaching in begusarai.. if you learn regular in class you achieve very beautiful result.. now join today.", stars: 5, initial: "R" },
    { name: "Vishakha Sharma", text: "It is very nice classes, sir are very talented and students are also nice so, I will give 5 star because this is very nice class.", stars: 5, initial: "V" },
    { name: "Anurag Kumar Singh", text: "Awesome experience sir.. I like you sir. Love you saket baba..", stars: 5, initial: "A" },
    { name: "Nishant Parashar", text: "Excellent Chemistry teacher in Begusarai. Highly recommended for JEE and NEET preparation.", stars: 5, initial: "N" },
    { name: "Abhinav Raj", text: "If u are in begusarai the ambition class is best chemistry class for u.", stars: 5, initial: "A" },
    { name: "Anand Vardhan", text: "Best coaching in begusarai for chemistry. The teaching methodology is excellent.", stars: 5, initial: "A" },
  ];
  const repeatedReviews = [...reviews, ...reviews];
  const photos = [classroom1, classroom2, classroom3, classroom4, classroom5, exteriorImg];
  const repeatedPhotos = [...photos, ...photos, ...photos];

  const courseCards = [
    { emoji: "🧪", title: "Class XII Chemistry", sub: "Board + Competitive (CBSE & State)", items: ['Physical, Organic & Inorganic', 'Weekly Mock Tests', 'Complete NCERT Coverage', 'Doubt Clearing Sessions'], tags: ['1 Year', 'Daily'], btnClass: "btn-primary", accentColor: "#0d9488", accentBg: "rgba(13,148,136,0.08)", borderColor: "rgba(13,148,136,0.15)" },
    { emoji: "🚀", title: "IIT JEE + NEET", sub: "Advanced Level Problem Solving", items: ['In-depth Topic Analysis', 'Previous Year Questions', 'Advanced Numericals', 'SK Singh Sir Mentorship'], tags: ['Target 2026', 'Intensive'], btnClass: "btn-amber", popular: true, accentColor: "#f59e0b", accentBg: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.2)" },
    { emoji: "⚡", title: "Crash Course", sub: "Quick Revision (Hindi/English Med)", items: ['Complete Syllabus Coverage', 'Important Questions Marking', 'Exam Time Management', 'Daily Practice Papers'], tags: ['3 Months', 'Fast-Track'], btnClass: "btn-success", accentColor: "#10b981", accentBg: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.15)" },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="blob" style={{ top: '-10%', left: '-10%', background: '#0d9488', width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px' }} />
        <div className="blob" style={{ bottom: '-10%', right: '-10%', background: '#f59e0b', width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px', animationDelay: '2s' }} />
        <div className="container relative z-10 py-16">
          <div className="hero-grid">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-content">
              <motion.div variants={fade} className="badge badge-glass" style={{ alignSelf: 'flex-start' }}>
                <Star size={16} fill="currentColor" /> Rated 4.9/5 — 39 Google Reviews
              </motion.div>
              <motion.h1 variants={fade} className="hero-title">
                Master Chemistry with <br/><span className="text-gradient-amber">Begusarai's Best</span> Faculty
              </motion.h1>
              <motion.p variants={fade} className="hero-desc">
                Join Ambition Chemistry Classes for JEE (M+A), NEET, CBSE, ICSE & BSEB. We simplify complex concepts with SK Singh Sir's expert guidance.
              </motion.p>
              <motion.div variants={fade} className="hero-buttons">
                <a href="tel:+918709446096" className="btn btn-amber"><Phone size={20} /> Call Now</a>
                <a href="https://wa.me/918709446096" className="btn btn-success"><MessageCircle size={20} /> WhatsApp</a>
                <Link to="/courses" className="btn btn-outline">View Courses <ArrowRight size={20} /></Link>
              </motion.div>
              <motion.div variants={fade} className="hero-stats">
                <div><h3 className="text-gradient-amber" style={{ fontSize: '2rem', margin: 0 }}>2K+</h3><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>Subscribers</p></div>
                <div><h3 className="text-gradient-teal" style={{ fontSize: '2rem', margin: 0 }}>10+</h3><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>Years Experience</p></div>
                <div><h3 style={{ fontSize: '2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '5px', color: 'white' }}>4.9 <Star size={20} fill="#f59e0b" color="#f59e0b" /></h3><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>Google Rating</p></div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hero-image-wrapper">
              <div className="hero-image-frame"><img src={heroImg} alt="Ambition Chemistry Classroom" /></div>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="hero-float-card hero-float-card--top">
                <div className="hero-float-icon" style={{ background: '#ccfbf1', color: '#0d9488' }}><Trophy size={22} /></div>
                <div><p className="font-bold m-0 text-dark">#1 in Begusarai</p><p className="text-sm m-0 text-muted">For Chemistry</p></div>
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="hero-float-card hero-float-card--bottom">
                <div className="hero-float-icon" style={{ background: '#fef3c7', color: '#f59e0b' }}><Target size={22} /></div>
                <div><p className="font-bold m-0 text-dark">JEE + NEET</p><p className="text-sm m-0 text-muted">Batch Open</p></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge badge-teal">Why Ambition Chemistry</span>
            <h2 className="section-title">Experience the Difference</h2>
            <p className="section-subtitle">One-stop solution for Chemistry in Begusarai — from boards to competitive exams.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: Target, title: "JEE + NEET Focus", desc: "Targeted prep for JEE Main, Advanced & NEET.", color: "teal" },
              { icon: GraduationCap, title: "SK Singh Sir", desc: "Learn from the best — 10+ years of excellence.", color: "amber" },
              { icon: BookOpen, title: "Study Material", desc: "Updated, comprehensive notes & study packages.", color: "success" },
              { icon: MessageCircle, title: "Doubt Support", desc: "Doubt clearing available whenever you need.", color: "danger" },
              { icon: CheckCircle, title: "Basics to Advanced", desc: "Strong foundations before complex problem solving.", color: "sky" },
              { icon: Clock, title: "Flexible Batches", desc: "Multiple batch timings to suit your schedule.", color: "violet" },
              { icon: Trophy, title: "Proven Track Record", desc: "Consistent toppers & successful selections.", color: "teal" },
              { icon: Video, title: "Free Video Lessons", desc: "100+ free lectures on YouTube channel.", color: "danger" },
            ].map((f, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0, transition: { delay: (idx % 4) * 0.1 } }} viewport={{ once: true, margin: "-50px" }} className="card">
                <div className={`icon-box ${f.color}`}><f.icon size={24} /></div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p className="text-muted m-0 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="py-24" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="courses-header">
            <div>
              <span className="badge badge-amber">Our Programs</span>
              <h2 className="section-title">Popular Courses</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>JEE, NEET, Board — tailored programs for every goal.</p>
            </div>
            <Link to="/courses" className="btn btn-outline-dark">View All <ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {courseCards.map((c, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="home-course-card" style={{ '--card-accent': c.accentColor, '--card-accent-bg': c.accentBg, borderColor: c.borderColor }}>
                {c.popular && <div className="home-course-popular">⭐ MOST POPULAR</div>}
                <div className="home-course-header">
                  <div className="home-course-emoji">{c.emoji}</div>
                  <h3 className="home-course-title">{c.title}</h3>
                  <p className="home-course-sub">{c.sub}</p>
                  <div className="home-course-tags">{c.tags.map((t, i) => <span key={i} className="home-course-tag">{t}</span>)}</div>
                </div>
                <div className="home-course-body">
                  <ul className="home-course-list">
                    {c.items.map((item, i) => (<li key={i}><CheckCircle size={18} style={{ color: c.accentColor, flexShrink: 0 }} /><span>{item}</span></li>))}
                  </ul>
                  <div className="home-course-actions">
                    <Link to="/courses" className="btn btn-outline-dark" style={{ padding: '0.65rem 1rem', flex: 1 }}>Syllabus</Link>
                    <a href="https://wa.me/918709446096" className={`btn ${c.btnClass}`} style={{ padding: '0.65rem 1rem', flex: 1 }}>Enroll Now</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE COURSES PROMO */}
      <section className="bg-darker py-20 relative overflow-hidden">
        <div className="blob" style={{ top: '50%', left: '20%', transform: 'translate(-50%, -50%)', background: '#dc2626', width: '400px', height: '400px', opacity: 0.12 }} />
        <div className="container relative z-10">
          <div className="free-promo-grid">
            <div>
              <span className="badge badge-danger">🎬 Free on YouTube</span>
              <h2 className="text-3xl font-bold font-heading mb-4" style={{ color: 'white' }}>Free Video Lectures by SK Singh Sir</h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-white-muted)' }}>Access complete Solutions chapter for Class 12 — absolutely free. Learn JEE & NEET concepts from the comfort of home.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/free-courses" className="btn btn-amber"><Video size={20} /> Watch Free Lectures</Link>
                <a href="https://www.youtube.com/@sksinghambitionchemistrycl7255" target="_blank" rel="noreferrer" className="btn btn-outline">Subscribe on YouTube</a>
              </div>
            </div>
            <div className="free-promo-stats">
              <div className="free-promo-stat"><h3>118</h3><p>Videos</p></div>
              <div className="free-promo-stat"><h3>76K+</h3><p>Views</p></div>
              <div className="free-promo-stat"><h3>2K</h3><p>Subscribers</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSROOM GALLERY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mb-12 text-center">
          <span className="badge badge-teal">Authentic Environment</span>
          <h2 className="section-title">Our Classrooms</h2>
          <p className="section-subtitle">Take a glimpse into our modern and engaging learning spaces.</p>
        </div>
        <div className="marquee-container" style={{ padding: '2rem 0' }}>
          <div className="marquee-content" style={{ animationDuration: '40s' }}>
            {repeatedPhotos.map((img, idx) => (
              <div key={idx} className="gallery-card-home">
                <img src={img} alt={`Ambition Chemistry ${idx + 1}`} />
                <div className="gallery-card-overlay"><div className="gallery-card-icon"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mb-12 text-center">
          <div className="flex justify-center mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={32} fill="#f59e0b" color="#f59e0b" />)}</div>
          <h2 className="section-title">Loved by Students</h2>
          <p className="section-subtitle">Real reviews from our Google Business Profile.</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {repeatedReviews.map((r, idx) => (
              <div key={idx} className="review-card-home">
                <div className="flex items-center gap-4 mb-4">
                  <div className="review-avatar" style={{ background: `hsl(${(idx * 55) % 360}, 55%, 48%)` }}>{r.initial}</div>
                  <div>
                    <h4 className="m-0 text-dark font-bold">{r.name}</h4>
                    <div className="flex mt-1">{[...Array(r.stars)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}</div>
                  </div>
                </div>
                <p className="text-muted m-0 italic text-sm">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-darker py-24 relative overflow-hidden">
        <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#0d9488', width: '600px', height: '600px', opacity: 0.2 }} />
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 font-heading" style={{ color: 'white' }}>Ready to Transform Your Chemistry Scores?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-white-muted)' }}>Join the most trusted chemistry coaching in Begusarai. Limited seats available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918709446096" className="btn btn-amber" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}><Phone size={20} /> Call: 087094 46096</a>
            <a href="https://wa.me/918709446096" className="btn btn-success" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}><MessageCircle size={20} /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section { background-color: var(--primary-darker); position: relative; overflow: hidden; min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
        .hero-content { display: flex; flex-direction: column; gap: 1.25rem; }
        .hero-title { font-size: clamp(2.5rem, 5vw, 4.2rem); color: white; margin: 0; line-height: 1.08; }
        .hero-desc { font-size: 1.12rem; color: var(--text-white-muted); max-width: 600px; margin: 0; line-height: 1.7; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
        .hero-stats { display: flex; gap: 2.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); }
        .hero-image-wrapper { position: relative; }
        .hero-image-frame { position: relative; z-index: 2; border-radius: var(--radius-md); overflow: hidden; border: 3px solid rgba(13,148,136,0.3); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .hero-image-frame img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/5; }
        .hero-float-card { position: absolute; z-index: 3; background: rgba(255,255,255,0.96); backdrop-filter: blur(12px); border-radius: 14px; padding: 0.85rem 1.1rem; display: flex; align-items: center; gap: 0.75rem; box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
        .hero-float-card--top { top: 10%; left: -10%; }
        .hero-float-card--bottom { bottom: 15%; right: -5%; }
        .hero-float-icon { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .courses-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; gap: 1.5rem; }
        .home-course-card { background: white; border-radius: 20px; overflow: hidden; position: relative; display: flex; flex-direction: column; border: 2px solid rgba(0,0,0,0.06); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
        .home-course-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(0,0,0,0.12); border-color: var(--card-accent); }
        .home-course-popular { position: absolute; top: 16px; right: 16px; background: var(--grad-amber); color: #1a1a2e; font-size: 0.7rem; font-weight: 800; padding: 0.35rem 0.9rem; border-radius: 50px; z-index: 5; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(245,158,11,0.3); }
        .home-course-header { padding: 2rem 2rem 1.5rem; background: var(--card-accent-bg); border-bottom: 1px solid rgba(0,0,0,0.04); }
        .home-course-emoji { font-size: 2.5rem; margin-bottom: 0.75rem; }
        .home-course-title { font-size: 1.35rem; font-family: var(--font-heading); font-weight: 700; color: var(--text-main); margin: 0 0 0.4rem; }
        .home-course-sub { font-size: 0.88rem; color: var(--text-muted); margin: 0 0 1rem; }
        .home-course-tags { display: flex; gap: 0.5rem; }
        .home-course-tag { background: white; color: var(--text-main); padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.78rem; font-weight: 600; border: 1px solid rgba(0,0,0,0.08); }
        .home-course-body { padding: 1.5rem 2rem 2rem; flex: 1; display: flex; flex-direction: column; }
        .home-course-list { display: flex; flex-direction: column; gap: 0.75rem; flex: 1; margin-bottom: 1.5rem; list-style: none; padding: 0; }
        .home-course-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.93rem; color: var(--text-main); }
        .home-course-list li svg { margin-top: 3px; }
        .home-course-actions { display: flex; gap: 0.75rem; }
        .review-card-home { flex: 0 0 auto; min-width: 330px; max-width: 400px; background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; }
        .review-card-home:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); transform: translateY(-3px); }
        .review-avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; }
        .gallery-card-home { flex: 0 0 auto; width: 380px; height: 260px; border-radius: 18px; overflow: hidden; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 4px solid white; transition: all 0.4s ease; cursor: pointer; }
        .gallery-card-home:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 40px rgba(13,148,136,0.2); border-color: var(--accent-teal); z-index: 10; }
        .gallery-card-home img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
        .gallery-card-home:hover img { transform: scale(1.1); }
        .gallery-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 1.5rem; }
        .gallery-card-home:hover .gallery-card-overlay { opacity: 1; }
        .gallery-card-icon { background: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transform: translateY(20px); opacity: 0; transition: all 0.4s ease; }
        .gallery-card-home:hover .gallery-card-icon { transform: translateY(0); opacity: 1; }
        .free-promo-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; align-items: center; }
        .free-promo-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .free-promo-stat { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem 1rem; text-align: center; }
        .free-promo-stat h3 { font-size: 2rem; color: var(--accent-amber); font-family: var(--font-heading); margin: 0 0 0.25rem; }
        .free-promo-stat p { color: var(--text-white-muted); font-size: 0.85rem; margin: 0; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-grid .badge { align-self: center !important; }
          .hero-buttons { justify-content: center; }
          .hero-image-wrapper { margin-top: 2rem; max-width: 400px; margin-left: auto; margin-right: auto; width: 100%; }
          .hero-float-card { display: none; }
          .hero-stats { justify-content: center; }
          .courses-header { flex-direction: column; align-items: center; text-align: center; }
          .free-promo-grid { grid-template-columns: 1fr; text-align: center; }
          .free-promo-stats { max-width: 360px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .hero-section { min-height: auto; padding-top: 100px; padding-bottom: 2rem; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .hero-stats { gap: 1.5rem; }
          .review-card-home { min-width: 270px; }
          .gallery-card-home { width: 270px; height: 190px; border-width: 2px; }
          .home-course-actions { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default Home;
