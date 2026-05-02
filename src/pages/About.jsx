import { motion } from 'framer-motion';
import { Target, Heart, Zap, Shield, CheckCircle, Video } from 'lucide-react';
import teachingImg from '../assets/images/classroom-teaching.png';
import exteriorImg from '../assets/images/institute-exterior.png';

const About = () => {
  const values = [
    { icon: Target, title: "Result Oriented", desc: "Our primary focus is delivering tangible results through structured learning.", color: "teal" },
    { icon: Heart, title: "Personal Attention", desc: "Small batch sizes ensure every student gets the attention they need.", color: "danger" },
    { icon: Zap, title: "Updated Material", desc: "Study materials constantly updated to match the latest exam patterns.", color: "amber" },
    { icon: Shield, title: "Student First", desc: "Every decision we make prioritizes student understanding and success.", color: "success" },
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="page-header__pattern" />
        <div className="blob" style={{ top: '-10%', left: '-10%', background: '#f59e0b', width: '400px', height: '400px', opacity: 0.12 }} />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-amber mb-4">🎓 Know Us Better</span>
            <h1 className="page-header__title">About <span className="text-gradient-amber">Ambition Chemistry</span></h1>
            <p className="page-header__desc">Empowering students with quality chemistry education since 2013. JEE, NEET, CBSE, ICSE & BSEB.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-main">
        <div className="container">
          <div className="about-story-grid">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="badge badge-teal mb-4">Our Journey</span>
              <h2 className="section-title text-dark">Building Foundations, Shaping Futures</h2>
              <div className="flex-col gap-4 text-muted mt-6 text-lg leading-relaxed" style={{ display: 'flex' }}>
                <p>Established in 2013, Ambition Chemistry Classes started with a mission to make quality chemistry education accessible to every student in Begusarai. Under the expert guidance of SK Singh Sir, we have grown into the city's most trusted chemistry coaching institute.</p>
                <p>We believe that chemistry is not just about memorizing equations — it's about understanding the fundamental building blocks of nature. Our teaching methodology bridges the gap between theoretical knowledge and practical application, preparing students for JEE, NEET, and all board exams.</p>
                <p>Today, with a 4.9★ Google rating, 2000+ YouTube subscribers, and thousands of successful students, Ambition Chemistry stands as a beacon of excellence, discipline, and result-oriented education in Begusarai.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="about-image-wrapper">
              <div className="about-image-frame"><img src={exteriorImg} alt="Ambition Chemistry Classes Exterior" /></div>
              <div className="about-image-bg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-dark">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our teaching philosophy.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card text-center flex-col items-center" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className={`icon-box ${v.color} mb-4`}><v.icon size={28} /></div>
                <h3 className="text-xl font-bold font-heading mb-3 text-dark">{v.title}</h3>
                <p className="text-muted m-0">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 bg-main">
        <div className="container">
          <div className="card p-0 overflow-hidden" style={{ background: 'var(--primary-dark)', color: 'white' }}>
            <div className="faculty-grid">
              <div className="faculty-info">
                <span className="badge badge-amber mb-6" style={{ alignSelf: 'flex-start' }}>Meet Your Mentor</span>
                <h2 className="text-4xl font-bold font-heading mb-2" style={{ color: 'white' }}>SK Singh Sir</h2>
                <p className="text-lg mb-8 font-medium" style={{ color: 'var(--accent-teal-light)' }}>Founder & Head Chemistry Faculty</p>
                <div className="faculty-quote">
                  <p className="italic m-0" style={{ color: 'var(--text-white-muted)', position: 'relative' }}>
                    <span style={{ fontSize: '2.5rem', position: 'absolute', top: '-12px', left: '-4px', opacity: 0.15, color: 'var(--accent-amber)', fontFamily: 'serif' }}>"</span>
                    Most qualified teacher of chemistry. He gives education for better tomorrow. His channel covers JEE (M+A), NEET, CBSE, ICSE and BSEB.
                    <span className="block mt-4 text-sm font-bold" style={{ color: 'var(--accent-amber)' }}>- Student Review</span>
                  </p>
                </div>
                <ul className="flex-col gap-4" style={{ display: 'flex' }}>
                  {["10+ Years of Teaching Experience", "Expert in JEE, NEET & Board Chemistry", "118+ Free YouTube Video Lectures", "Available for Doubt Clearance", "Hindi & English Medium Teaching"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center"><CheckCircle size={20} className="text-success shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://www.youtube.com/@sksinghambitionchemistrycl7255" target="_blank" rel="noreferrer" className="btn" style={{ background: '#dc2626', color: 'white', padding: '0.7rem 1.5rem' }}><Video size={18} /> YouTube Channel</a>
                  <a href="tel:+918709446096" className="btn btn-outline" style={{ padding: '0.7rem 1.5rem' }}>Call: 087094 46096</a>
                </div>
              </div>
              <div className="faculty-visual">
                <div className="absolute inset-0" style={{ opacity: 0.2, backgroundImage: 'radial-gradient(circle at center, var(--accent-teal) 0%, transparent 70%)' }}></div>
                <div className="faculty-avatar-wrapper">
                  <div className="faculty-avatar">SK</div>
                  <h3 className="text-2xl font-bold font-heading mb-2" style={{ color: 'white' }}>SK Singh Sir</h3>
                  <p className="italic max-w-sm" style={{ color: 'var(--text-white-muted)' }}>"Chemistry becomes easy when you understand the fundamentals. Let me help you fall in love with it."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: var(--primary-darker); padding: 10rem 0 5rem; position: relative; overflow: hidden; color: white; }
        .page-header__pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px; }
        .page-header__title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; color: white; margin: 0 0 1rem; line-height: 1.1; }
        .page-header__desc { font-size: 1.15rem; color: var(--text-white-muted); max-width: 580px; margin: 0 auto; line-height: 1.7; }
        .about-story-grid { display: grid; gap: 3rem; align-items: center; }
        .about-image-wrapper { position: relative; }
        .about-image-frame { position: relative; z-index: 2; border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.15); border: 4px solid white; }
        .about-image-frame img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3; }
        .about-image-bg { position: absolute; top: 24px; left: 24px; right: -24px; bottom: -24px; border-radius: var(--radius-md); background: var(--grad-teal); opacity: 0.6; z-index: 0; }
        .faculty-grid { display: grid; }
        .faculty-info { padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
        .faculty-quote { padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem; background: rgba(255,255,255,0.04); border-left: 4px solid var(--accent-amber); }
        .faculty-visual { position: relative; min-height: 400px; background: var(--primary-darker); display: flex; align-items: center; justify-content: center; }
        .faculty-avatar-wrapper { position: relative; z-index: 2; text-align: center; padding: 2rem; }
        .faculty-avatar { width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700; background: var(--grad-teal); color: white; margin: 0 auto 1.5rem; box-shadow: 0 10px 30px rgba(13,148,136,0.4); }
        @media (min-width: 900px) { .about-story-grid { grid-template-columns: 1fr 1fr; } .faculty-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 900px) { .faculty-info { padding: 2rem; } .faculty-visual { min-height: 300px; } }
      `}</style>
    </div>
  );
};

export default About;
