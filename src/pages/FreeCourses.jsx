import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Clock, BookOpen, ExternalLink, X } from 'lucide-react';

const FreeCourses = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: 1, title: "Solutions 01 — Introduction and Concentration Terms", duration: "26:40", ytId: null, chapter: "Solutions" },
    { id: 2, title: "Solutions 04 — Colligative Property & Relative Lowering of Vapour Pressure", duration: "37:30", ytId: null, chapter: "Solutions" },
    { id: 3, title: "Solutions 10 — Isotonic, Hypertonic and Hypotonic Solution", duration: "29:37", ytId: null, chapter: "Solutions" },
    { id: 4, title: "Solution 12 — How to Solve Numericals on Van't Hoff Factor", duration: "25:30", ytId: null, chapter: "Solutions" },
    { id: 5, title: "Solutions 13 — Ideal & Non-Ideal Solutions, Raoult's Law", duration: "45:46", ytId: null, chapter: "Solutions" },
    { id: 6, title: "Solutions 14 — Azeotropic Mixture, Solubility & Henry's Law", duration: "25:20", ytId: null, chapter: "Solutions" },
  ];

  return (
    <div className="free-courses-page">
      {/* Header */}
      <section className="page-header fc-header">
        <div className="page-header__pattern" />
        <div className="blob" style={{ top: '20%', right: '10%', background: '#dc2626', width: '350px', height: '350px', opacity: 0.12 }} />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-danger mb-4"><Video size={16} /> Free on YouTube</span>
            <h1 className="page-header__title">Free Video <span style={{ background: 'linear-gradient(135deg, #dc2626, #f87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lectures</span></h1>
            <p className="page-header__desc">Learn Chemistry for JEE & NEET from SK Singh Sir — completely free. High-quality video lectures on our YouTube channel.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="https://www.youtube.com/@sksinghambitionchemistrycl7255" target="_blank" rel="noreferrer" className="btn" style={{ background: '#dc2626', color: 'white' }}><Video size={20} /> Subscribe on YouTube</a>
              <a href="https://wa.me/918709446096?text=I%20want%20to%20know%20about%20full%20courses" className="btn btn-outline">Want Full Course?</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Channel Stats */}
      <section className="py-16 bg-main">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Total Videos", value: "118", icon: Play, color: "#dc2626", bg: "rgba(220,38,38,0.08)" },
              { label: "Total Views", value: "76K+", icon: Video, color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
              { label: "Subscribers", value: "2K+", icon: BookOpen, color: "#0d9488", bg: "rgba(13,148,136,0.08)" },
              { label: "Since", value: "2013", icon: Clock, color: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
            ].map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="fc-stat-card">
                <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><s.icon size={24} /></div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', margin: '0 0 0.2rem', color: s.color }}>{s.value}</h3>
                <p className="text-muted text-sm m-0 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Playlist */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge badge-amber">📘 Complete Chapter</span>
            <h2 className="section-title">Solutions — English Medium (JEE & NEET)</h2>
            <p className="section-subtitle">Class 12 Chapter 1 — Complete free course by SK Singh Sir. Watch all lectures below.</p>
          </div>

          <div className="fc-video-grid">
            {videos.map((video, idx) => (
              <motion.div key={video.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }} className="fc-video-card" onClick={() => setActiveVideo(video)}>
                <div className="fc-video-thumb">
                  {video.ytId ? (
                    <img src={`https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="fc-video-num">{String(video.id).padStart(2, '0')}</div>
                  )}
                  <div className="fc-video-play"><Play size={24} fill="white" /></div>
                </div>
                <div className="fc-video-info">
                  <span className="fc-video-chapter">{video.chapter}</span>
                  <h3 className="fc-video-title">{video.title}</h3>
                  <div className="fc-video-meta">
                    <span><Clock size={14} /> {video.duration}</span>
                    <span className="fc-video-free">FREE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/@sksinghambitionchemistrycl7255/playlists" target="_blank" rel="noreferrer" className="btn btn-outline-dark" style={{ padding: '1rem 2rem' }}>
              View All Playlists on YouTube <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-darker py-20 relative overflow-hidden">
        <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#dc2626', width: '500px', height: '500px', opacity: 0.1 }} />
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 font-heading" style={{ color: 'white' }}>Want the Complete Classroom Experience?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-white-muted)' }}>Free videos are just the beginning. Join Ambition Chemistry for detailed classes, study material, test series & personal mentorship.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918709446096" className="btn btn-amber" style={{ padding: '1rem 2.5rem' }}>Call: 087094 46096</a>
            <a href="https://wa.me/918709446096" className="btn btn-success" style={{ padding: '1rem 2.5rem' }}>Enroll via WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fc-modal-overlay" 
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              className="fc-modal-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="fc-modal-close" onClick={() => setActiveVideo(null)}>
                <X size={24} />
              </button>
              <div className="fc-modal-video">
                {activeVideo.ytId ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${activeVideo.ytId}?autoplay=1`} 
                    title={activeVideo.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#1a1a2e', color: 'white', flexDirection: 'column', gap: '1rem' }}>
                    <Video size={48} />
                    <p>Please provide a YouTube ID for this video to play.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .page-header { background: var(--primary-darker); padding: 10rem 0 5rem; position: relative; overflow: hidden; color: white; }
        .page-header__pattern { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px; }
        .page-header__title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-family: var(--font-heading); font-weight: 800; color: white; margin: 0 0 1rem; line-height: 1.1; }
        .page-header__desc { font-size: 1.15rem; color: var(--text-white-muted); max-width: 580px; margin: 0 auto; line-height: 1.7; }
        .fc-stat-card { background: white; border-radius: 18px; padding: 1.75rem; text-align: center; display: flex; flex-direction: column; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; }
        .fc-stat-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .fc-video-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .fc-video-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: all 0.4s ease; cursor: pointer; }
        .fc-video-card:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(0,0,0,0.1); border-color: #dc2626; }
        .fc-video-thumb { position: relative; background: linear-gradient(135deg, #1a1a2e, #16213e); height: 140px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .fc-video-num { position: absolute; top: 12px; left: 12px; background: rgba(255,255,255,0.15); color: white; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 6px; backdrop-filter: blur(6px); }
        .fc-video-play { width: 56px; height: 56px; border-radius: 50%; background: rgba(220,38,38,0.9); display: flex; align-items: center; justify-content: center; transition: all 0.3s; box-shadow: 0 4px 20px rgba(220,38,38,0.4); }
        .fc-video-card:hover .fc-video-play { transform: scale(1.1); background: #dc2626; }
        .fc-video-info { padding: 1.25rem; }
        .fc-video-chapter { font-size: 0.72rem; font-weight: 700; color: #dc2626; text-transform: uppercase; letter-spacing: 0.5px; }
        .fc-video-title { font-size: 0.95rem; font-weight: 600; font-family: var(--font-heading); color: var(--text-main); margin: 0.4rem 0 0.75rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .fc-video-meta { display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); }
        .fc-video-meta span { display: inline-flex; align-items: center; gap: 0.3rem; }
        .fc-video-free { background: rgba(16,185,129,0.1); color: #059669; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.7rem; }
        .fc-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(8px); }
        .fc-modal-content { background: #0f1e35; width: 100%; max-width: 900px; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 25px 60px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        .fc-modal-close { position: absolute; top: 1rem; right: 1rem; background: rgba(0,0,0,0.5); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: background 0.3s; backdrop-filter: blur(4px); }
        .fc-modal-close:hover { background: rgba(220,38,38,0.9); }
        .fc-modal-video { width: 100%; aspect-ratio: 16/9; background: black; }
        @media (max-width: 900px) { .fc-video-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .fc-video-grid { grid-template-columns: 1fr; } .fc-modal-overlay { padding: 0.5rem; } .fc-modal-close { top: 0.5rem; right: 0.5rem; } }
      `}</style>
    </div>
  );
};

export default FreeCourses;
