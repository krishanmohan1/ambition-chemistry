import { motion } from 'framer-motion';
import { Laptop, Activity, FileCheck, Timer, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestSeries = () => {
  const features = [
    { icon: Laptop, title: "Real Exam UI", desc: "Experience the exact interface of actual competitive exams.", color: "teal" },
    { icon: Activity, title: "Smart Analytics", desc: "Detailed performance reports and weak area identification.", color: "success" },
    { icon: FileCheck, title: "Detailed Solutions", desc: "Step-by-step solutions for every question.", color: "amber" },
    { icon: Timer, title: "Time Management", desc: "Track time spent per question to improve speed.", color: "danger" },
  ];

  const packages = [
    {
      name: "Class 12th Board Target", target: "CBSE, ICSE & BSEB",
      price: "₹999", originalPrice: "₹1999", testCount: "50+ Tests",
      accentColor: "#0d9488", accentGrad: "linear-gradient(135deg, #0d9488, #14b8a6)", popular: false,
      features: ["20 Chapter-wise Tests", "15 Part Syllabus Tests", "15 Full Mock Tests", "Previous 10 Year Papers", "Topper Answer Sheet Analysis", "Detailed Step Marking Info", "Doubt Resolution within 24 Hrs", "Accessible on Mobile & PC"]
    },
    {
      name: "IIT JEE Premium", target: "Mains & Advanced",
      price: "₹1499", originalPrice: "₹2999", testCount: "100+ Tests",
      accentColor: "#f59e0b", accentGrad: "linear-gradient(135deg, #f59e0b, #fbbf24)", popular: true,
      features: ["40 Topic-wise Tests", "20 Part Syllabus Tests", "20 Mains Full Mock Tests", "20 Advanced Full Mock Tests", "All India Ranking System", "Video Solutions for Tough Qs", "Personalized Study Planner", "Accessible on Mobile & PC"]
    },
    {
      name: "NEET Rank Booster", target: "NEET UG",
      price: "₹1299", originalPrice: "₹2499", testCount: "80+ Tests",
      accentColor: "#10b981", accentGrad: "linear-gradient(135deg, #059669, #10b981)", popular: false,
      features: ["30 Topic-wise Tests", "20 Unit Tests", "30 Full Length Mock Tests", "NCERT Based Questions", "Speed & Accuracy Analytics", "Detailed Text Solutions", "Peer Comparison Report", "Accessible on Mobile & PC"]
    }
  ];

  return (
    <div className="testseries-page">
      <section className="page-header">
        <div className="page-header__pattern" />
        <div className="blob" style={{ top: '20%', right: '5%', background: '#0d9488', width: '300px', height: '300px', opacity: 0.15 }} />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-teal mb-4">📝 Practice Makes Perfect</span>
            <h1 className="page-header__title"><span className="text-gradient-teal">Test Series</span> Portal</h1>
            <p className="page-header__desc">Evaluate your preparation with expertly crafted test series for JEE, NEET & Boards.</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-main">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card text-center flex-col items-center p-6" style={{ display: 'flex' }}>
                <div className={`icon-box ${f.color} mb-4`}><f.icon size={24} /></div>
                <h3 className="text-lg font-bold font-heading mb-2 text-dark">{f.title}</h3>
                <p className="text-muted text-sm m-0">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge badge-amber">💰 Pricing Plans</span>
            <h2 className="section-title">Choose Your Test Package</h2>
            <p className="section-subtitle">Affordable and comprehensive test series for every target exam.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className={`pricing-card ${pkg.popular ? 'pricing-card--popular' : ''}`} style={{ '--pkg-accent': pkg.accentColor, '--pkg-grad': pkg.accentGrad }}>
                {pkg.popular && <div className="pricing-popular-badge">⭐ BEST VALUE</div>}
                <div className="pricing-card__stripe" />
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name">{pkg.name}</h3>
                  <p className="pricing-card__target">{pkg.target}</p>
                  <div className="pricing-card__price-row">
                    <span className="pricing-card__price">{pkg.price}</span>
                    <span className="pricing-card__original">{pkg.originalPrice}</span>
                  </div>
                  <div className="pricing-card__test-badge"><Award size={14} /> {pkg.testCount}</div>
                </div>
                <div className="pricing-card__body">
                  <ul className="pricing-card__features">
                    {pkg.features.map((f, i) => (<li key={i}><CheckCircle size={16} style={{ color: pkg.accentColor, flexShrink: 0 }} /><span>{f}</span></li>))}
                  </ul>
                  <a href="https://wa.me/918709446096" className="btn w-full" style={{ background: pkg.popular ? pkg.accentGrad : 'var(--bg-alt)', color: pkg.popular ? 'var(--primary-dark)' : 'var(--text-main)', boxShadow: pkg.popular ? `0 8px 20px ${pkg.accentColor}40` : 'none', fontWeight: 700 }}>Buy Now <ArrowRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline CTA */}
      <section className="py-20 bg-main">
        <div className="container max-w-4xl">
          <div className="offline-cta-card">
            <div className="offline-cta-icon">✍️</div>
            <h2 className="text-3xl font-bold font-heading mb-4 text-dark">Prefer Pen & Paper?</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">Join our Sunday Offline Mock Tests at the Ambition Chemistry center.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Get Directions</Link>
              <a href="tel:+918709446096" className="btn btn-outline-dark" style={{ padding: '0.8rem 2rem' }}>Call to Register</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: var(--primary-darker); padding: 10rem 0 5rem; position: relative; overflow: hidden; color: white; }
        .page-header__pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px; }
        .page-header__title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; color: white; margin: 0 0 1rem; line-height: 1.1; }
        .page-header__desc { font-size: 1.15rem; color: var(--text-white-muted); max-width: 580px; margin: 0 auto; line-height: 1.7; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: stretch; }
        .pricing-card { background: white; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: all 0.4s ease; position: relative; }
        .pricing-card:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(0,0,0,0.1); border-color: var(--pkg-accent); }
        .pricing-card--popular { border: 2px solid var(--pkg-accent); box-shadow: 0 8px 30px rgba(0,0,0,0.08); transform: scale(1.03); z-index: 2; }
        .pricing-card--popular:hover { transform: scale(1.03) translateY(-6px); }
        .pricing-popular-badge { position: absolute; top: 0; left: 0; right: 0; z-index: 3; background: var(--pkg-grad); color: var(--primary-dark); font-size: 0.72rem; font-weight: 800; padding: 0.4rem 0; text-align: center; letter-spacing: 0.5px; }
        .pricing-card__stripe { height: 4px; background: var(--pkg-grad); }
        .pricing-card__header { padding: 2rem 1.75rem 1.5rem; text-align: center; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .pricing-card--popular .pricing-card__header { padding-top: 2.75rem; }
        .pricing-card__name { font-size: 1.2rem; font-family: var(--font-heading); font-weight: 700; margin: 0 0 0.25rem; color: var(--text-main); }
        .pricing-card__target { font-size: 0.85rem; color: var(--text-muted); margin: 0 0 1rem; }
        .pricing-card__price-row { display: flex; align-items: baseline; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem; }
        .pricing-card__price { font-size: 2.5rem; font-weight: 800; font-family: var(--font-heading); color: var(--text-main); }
        .pricing-card__original { font-size: 1.1rem; text-decoration: line-through; color: var(--text-light); }
        .pricing-card__test-badge { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.35rem 0.9rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600; background: rgba(0,0,0,0.04); color: var(--text-main); }
        .pricing-card__body { padding: 1.5rem 1.75rem 2rem; flex: 1; display: flex; flex-direction: column; }
        .pricing-card__features { list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.65rem; flex: 1; }
        .pricing-card__features li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9rem; color: var(--text-main); }
        .pricing-card__features li svg { margin-top: 2px; }
        .offline-cta-card { text-align: center; padding: 3rem 2rem; border-radius: 20px; border: 2px dashed var(--accent-teal); background: rgba(13,148,136,0.03); }
        .offline-cta-icon { font-size: 3rem; margin-bottom: 1rem; }
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; gap: 2rem; } .pricing-card--popular { transform: none; } .pricing-card--popular:hover { transform: translateY(-6px); } }
      `}</style>
    </div>
  );
};

export default TestSeries;
