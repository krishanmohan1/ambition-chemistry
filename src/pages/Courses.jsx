import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, BookOpen, Clock, Calendar, Sparkles, ArrowRight } from 'lucide-react';

const SyllabusAccordion = ({ syllabus, accentColor }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {syllabus.map((item, idx) => (
        <div key={idx} className="syllabus-item" style={{ '--syllabus-accent': accentColor }}>
          <button className="syllabus-btn" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
            <span className="font-semibold">{item.subject}</span>
            <ChevronDown size={18} style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'var(--text-muted)', flexShrink: 0 }} />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                <div className="syllabus-content">
                  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.topics.map((topic, i) => (<li key={i} className="syllabus-topic">{topic}</li>))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Courses = () => {
  const coursesData = [
    {
      id: "class12", emoji: "🧪", title: "Class XII Chemistry", target: "CBSE, ICSE & BSEB Boards",
      duration: "1 Year", timing: "Regular/Weekend",
      accentColor: "#0d9488", accentGrad: "linear-gradient(135deg, #0d9488, #14b8a6)",
      highlights: ["Complete NCERT Coverage", "Detailed Notes & Study Material", "Weekly Mock Tests & Analysis", "Previous Year Question Solving", "Special Doubt Clearing Sessions"],
      syllabus: [
        { subject: "Physical Chemistry", topics: ["Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry"] },
        { subject: "Inorganic Chemistry", topics: ["Isolation of Elements", "p-Block Elements", "d & f Block Elements", "Coordination Compounds"] },
        { subject: "Organic Chemistry", topics: ["Haloalkanes", "Alcohols & Ethers", "Aldehydes & Ketones", "Amines", "Biomolecules", "Polymers"] }
      ]
    },
    {
      id: "class11", emoji: "🔬", title: "Class XI Chemistry", target: "CBSE, ICSE & BSEB Boards",
      duration: "1 Year", timing: "Regular/Weekend",
      accentColor: "#38bdf8", accentGrad: "linear-gradient(135deg, #0284c7, #38bdf8)",
      highlights: ["Strong Foundation Building", "Focus on Basic Concepts", "Regular Assessments", "Interactive Environment", "Personalized Attention"],
      syllabus: [
        { subject: "Physical Chemistry", topics: ["Basic Concepts", "Atomic Structure", "States of Matter", "Thermodynamics", "Equilibrium"] },
        { subject: "Inorganic Chemistry", topics: ["Periodic Table", "Chemical Bonding", "Hydrogen", "s-Block Elements", "p-Block Elements"] },
        { subject: "Organic Chemistry", topics: ["Basic Principles & Techniques", "Hydrocarbons", "Environmental Chemistry"] }
      ]
    },
    {
      id: "jee", emoji: "🚀", title: "IIT JEE / NEET Prep", target: "JEE Main/Advanced & NEET UG",
      duration: "1-2 Years", timing: "Intensive Batches",
      accentColor: "#f59e0b", accentGrad: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      highlights: ["Advanced Problem Solving", "Shortcut Methods & Tricks", "All India Test Series (AITS)", "Daily Practice Problems (DPP)", "SK Singh Sir Mentorship"],
      syllabus: [
        { subject: "Physical Chemistry", topics: ["Stoichiometry", "Atomic Structure", "Equilibrium", "Thermodynamics", "Electrochemistry", "Kinetics", "Solid State", "Solutions"] },
        { subject: "Inorganic Chemistry", topics: ["Periodic Properties", "Chemical Bonding", "Coordination Compounds", "Metallurgy", "s,p,d,f Block Elements"] },
        { subject: "Organic Chemistry", topics: ["GOC", "Isomerism", "Hydrocarbons", "Halides", "O-Compounds", "N-Compounds", "Biomolecules"] }
      ]
    }
  ];

  return (
    <div className="courses-page">
      <section className="page-header">
        <div className="page-header__pattern" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-amber mb-4">📚 All Programs</span>
            <h1 className="page-header__title">Our <span className="text-gradient-amber">Courses</span></h1>
            <p className="page-header__desc">Comprehensive courses for JEE, NEET, CBSE, ICSE & BSEB — designed by SK Singh Sir.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-main">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {coursesData.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className="course-card" style={{ '--course-accent': course.accentColor, '--course-grad': course.accentGrad }}>
                <div className="course-card__stripe" />
                <div className="course-card__header">
                  <div className="course-card__header-left">
                    <span className="course-card__emoji">{course.emoji}</span>
                    <div>
                      <h2 className="course-card__title">{course.title}</h2>
                      <p className="course-card__target">{course.target}</p>
                    </div>
                  </div>
                  <div className="course-card__meta">
                    <span className="course-card__meta-tag"><Clock size={14} /> {course.duration}</span>
                    <span className="course-card__meta-tag"><Calendar size={14} /> {course.timing}</span>
                  </div>
                </div>
                <div className="course-card__body">
                  <div className="course-card__highlights">
                    <h3 className="course-card__section-title"><Sparkles size={18} style={{ color: course.accentColor }} /> What You'll Get</h3>
                    <ul className="course-card__highlight-list">
                      {course.highlights.map((h, i) => (<li key={i}><CheckCircle size={18} style={{ color: course.accentColor, flexShrink: 0 }} /><span>{h}</span></li>))}
                    </ul>
                  </div>
                  <div className="course-card__syllabus">
                    <h3 className="course-card__section-title"><BookOpen size={18} style={{ color: course.accentColor }} /> Syllabus</h3>
                    <SyllabusAccordion syllabus={course.syllabus} accentColor={course.accentColor} />
                  </div>
                </div>
                <div className="course-card__footer">
                  <a href="tel:+918709446096" className="btn btn-outline-dark" style={{ flex: 1 }}>Request Callback</a>
                  <a href="https://wa.me/918709446096" className="btn" style={{ flex: 1, background: course.accentGrad, color: course.accentColor === '#f59e0b' ? 'var(--primary-dark)' : 'white' }}>Enroll via WhatsApp <ArrowRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-darker py-20 relative overflow-hidden" style={{ color: 'white' }}>
        <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#0d9488', width: '500px', height: '500px', opacity: 0.15 }} />
        <div className="container text-center max-w-3xl relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-heading" style={{ color: 'white' }}>Confused about which course to join?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-white-muted)' }}>Get free counseling from SK Singh Sir and decide the best path for your career.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918709446096" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Call Now</a>
            <a href="https://wa.me/918709446096" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>WhatsApp Us</a>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: var(--primary-darker); padding: 10rem 0 5rem; position: relative; overflow: hidden; color: white; }
        .page-header__pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px; }
        .page-header__title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; color: white; margin: 0 0 1rem; line-height: 1.1; }
        .page-header__desc { font-size: 1.15rem; color: var(--text-white-muted); max-width: 580px; margin: 0 auto; line-height: 1.7; }
        .course-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 24px rgba(0,0,0,0.04); transition: all 0.4s ease; }
        .course-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.1); transform: translateY(-4px); border-color: var(--course-accent); }
        .course-card__stripe { height: 5px; background: var(--course-grad); }
        .course-card__header { display: flex; justify-content: space-between; align-items: flex-start; padding: 2rem 2rem 1.5rem; gap: 1rem; flex-wrap: wrap; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .course-card__header-left { display: flex; align-items: center; gap: 1rem; }
        .course-card__emoji { font-size: 2.5rem; line-height: 1; }
        .course-card__title { font-size: 1.5rem; font-family: var(--font-heading); font-weight: 700; margin: 0 0 0.25rem; color: var(--text-main); }
        .course-card__target { font-size: 0.95rem; color: var(--text-muted); margin: 0; }
        .course-card__meta { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .course-card__meta-tag { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.35rem 0.8rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600; background: rgba(0,0,0,0.04); color: var(--text-main); border: 1px solid rgba(0,0,0,0.06); }
        .course-card__body { padding: 2rem; display: grid; gap: 2rem; }
        .course-card__section-title { font-size: 1.1rem; font-family: var(--font-heading); font-weight: 700; margin: 0 0 1.25rem; display: flex; align-items: center; gap: 0.5rem; color: var(--text-main); }
        .course-card__highlight-list { display: flex; flex-direction: column; gap: 0.75rem; list-style: none; padding: 0; margin: 0; }
        .course-card__highlight-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem; color: var(--text-main); font-weight: 500; }
        .course-card__highlight-list li svg { margin-top: 2px; }
        .course-card__footer { display: flex; gap: 1rem; padding: 1.5rem 2rem; background: var(--bg-alt); border-top: 1px solid rgba(0,0,0,0.05); }
        .syllabus-item { border: 1px solid rgba(0,0,0,0.07); border-radius: 10px; overflow: hidden; transition: border-color 0.3s; }
        .syllabus-item:hover { border-color: var(--syllabus-accent); }
        .syllabus-btn { width: 100%; padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; background: white; border: none; cursor: pointer; text-align: left; color: var(--text-main); font-size: 0.9rem; transition: background 0.2s; font-family: var(--font-body); }
        .syllabus-btn:hover { background: #f0f4f8; }
        .syllabus-content { padding: 0.85rem 1rem; background: var(--bg-alt); border-top: 1px solid rgba(0,0,0,0.04); }
        .syllabus-topic { display: inline-block; padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 0.8rem; background: white; color: var(--text-muted); border: 1px solid rgba(0,0,0,0.06); font-weight: 500; }
        @media (min-width: 900px) { .course-card__body { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .course-card__header { flex-direction: column; } .course-card__footer { flex-direction: column; } .course-card__header, .course-card__body, .course-card__footer { padding-left: 1.25rem; padding-right: 1.25rem; } }
      `}</style>
    </div>
  );
};

export default Courses;
