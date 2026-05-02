import { motion } from 'framer-motion';
import { Star, Trophy, Users, Award, ExternalLink } from 'lucide-react';
import result1 from '../assets/images/result1.png';
import result2 from '../assets/images/result2.png';
import result3 from '../assets/images/result3.jpg';
import result4 from '../assets/images/result4.png';

const Results = () => {
  const stats = [
    { label: "IIT/NEET Selections", value: "50+", icon: Trophy, color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
    { label: "Success Rate", value: "95%", icon: Award, color: "#10b981", bg: "rgba(16,185,129,0.08)" },
    { label: "Google Rating", value: "4.9", icon: Star, color: "#0d9488", bg: "rgba(13,148,136,0.08)" },
    { label: "Happy Students", value: "5000+", icon: Users, color: "#38bdf8", bg: "rgba(56,189,248,0.08)" },
  ];

  const resultImages = [result1, result2, result3, result4];

  const reviews = [
    { name: "Rankit Kumar", text: "Best coaching in begusarai.. if you learn regular in class you achieve very beautiful result.. now join today.", time: "5 years ago", stars: 5, initial: "R", color: "#0d9488" },
    { name: "Vishakha Sharma", text: "It is very nice classes, sir are very talented and students are also nice so, I will give 5 star because this is very nice class.", time: "4 years ago", stars: 5, initial: "V", color: "#f59e0b" },
    { name: "Anurag Kumar Singh", text: "Awesome experience sir.. I like you sir. Love you saket baba.. The teaching style is incredible.", time: "3 years ago", stars: 5, initial: "A", color: "#a78bfa" },
    { name: "Nishant Parashar", text: "Excellent Chemistry teacher in Begusarai. Best for JEE and NEET preparation.", time: "2 years ago", stars: 5, initial: "N", color: "#38bdf8" },
    { name: "Abhinav Raj", text: "If u are in begusarai the ambition class is best chemistry class for u. Highly recommended.", time: "6 years ago", stars: 5, initial: "A", color: "#ec4899" },
    { name: "Anand Vardhan", text: "Best coaching in begusarai for chemistry. The quality of education is unmatched.", time: "5 years ago", stars: 5, initial: "A", color: "#10b981" },
  ];

  return (
    <div className="results-page">
      <section className="page-header">
        <div className="page-header__pattern" />
        <div className="blob" style={{ top: '10%', right: '10%', background: '#10b981', width: '300px', height: '300px', opacity: 0.15 }} />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-success mb-4">🏆 Results That Speak</span>
            <h1 className="page-header__title">Our <span style={{ background: 'linear-gradient(135deg, #059669, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Success Stories</span></h1>
            <p className="page-header__desc">Results speak louder than words. See what Ambition Chemistry students have achieved.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-main">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="stat-card">
                <div className="stat-card__icon" style={{ background: s.bg, color: s.color }}><s.icon size={28} /></div>
                <h3 className="stat-card__value" style={{ color: s.color }}>{s.value}</h3>
                <p className="stat-card__label">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Images */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge badge-amber">🌟 Proof of Excellence</span>
            <h2 className="section-title">Results & Achievements</h2>
            <p className="section-subtitle">Real results from our students — verified and authentic.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {resultImages.map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="result-img-card">
                <img src={img} alt={`Ambition Chemistry Result ${idx + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-main">
        <div className="container">
          <div className="results-reviews-header">
            <div>
              <span className="badge badge-teal">💬 Testimonials</span>
              <h2 className="section-title">What Students Say</h2>
              <p className="section-subtitle m-0">Real reviews from Google — 4.9★ rating with 39 reviews.</p>
            </div>
            <a href="https://maps.google.com/?q=Ambition+Chemistry+Classes+Begusarai" target="_blank" rel="noreferrer" className="btn btn-outline-dark" style={{ alignSelf: 'flex-start' }}>All Reviews <ExternalLink size={18} /></a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {reviews.map((r, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }} className="review-card" style={{ '--review-color': r.color }}>
                <div className="review-card__header">
                  <div className="review-card__avatar" style={{ background: r.color }}>{r.initial}</div>
                  <div><h4 className="review-card__name">{r.name}</h4><span className="text-xs text-muted">{r.time}</span></div>
                </div>
                <div className="review-card__stars">{[...Array(r.stars)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}</div>
                <p className="review-card__text">"{r.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: var(--primary-darker); padding: 10rem 0 5rem; position: relative; overflow: hidden; color: white; }
        .page-header__pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px; }
        .page-header__title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; color: white; margin: 0 0 1rem; line-height: 1.1; }
        .page-header__desc { font-size: 1.15rem; color: var(--text-white-muted); max-width: 580px; margin: 0 auto; line-height: 1.7; }
        .stat-card { background: white; border-radius: 20px; padding: 2rem; text-align: center; display: flex; flex-direction: column; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.35s ease; }
        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .stat-card__icon { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .stat-card__value { font-size: 2.25rem; font-weight: 800; font-family: var(--font-heading); margin: 0 0 0.25rem; }
        .stat-card__label { font-size: 0.9rem; color: var(--text-muted); margin: 0; font-weight: 500; }
        .result-img-card { border-radius: 18px; overflow: hidden; border: 3px solid rgba(0,0,0,0.06); box-shadow: 0 8px 30px rgba(0,0,0,0.06); transition: all 0.4s ease; }
        .result-img-card:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(0,0,0,0.12); border-color: var(--accent-teal); }
        .result-img-card img { width: 100%; height: auto; display: block; }
        .review-card { background: white; border-radius: 18px; padding: 1.75rem; display: flex; flex-direction: column; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: all 0.35s ease; }
        .review-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); border-color: var(--review-color); }
        .review-card__header { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.85rem; }
        .review-card__avatar { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
        .review-card__name { font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 0; }
        .review-card__stars { display: flex; gap: 2px; margin-bottom: 0.85rem; }
        .review-card__text { font-size: 0.9rem; color: var(--text-muted); font-style: italic; line-height: 1.7; margin: 0; flex: 1; }
        .results-reviews-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; gap: 1.5rem; }
        @media (max-width: 900px) { .results-reviews-header { flex-direction: column; align-items: center; text-align: center; } }
      `}</style>
    </div>
  );
};

export default Results;
