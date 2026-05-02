import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, Navigation, Mail, ChevronDown, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitMethod, setSubmitMethod] = useState('whatsapp');
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitMethod === 'whatsapp') {
      const text = `Hello Ambition Chemistry Classes,%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Course:* ${formData.course}%0A*Query:* ${formData.message}%0A%0APlease contact me regarding admission.`;
      window.open(`https://wa.me/918709446096?text=${text}`, '_blank');
    } else {
      const subject = `Inquiry from ${formData.name} - ${formData.course}`;
      const body = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACourse: ${formData.course}%0AMessage: ${formData.message}`;
      window.open(`mailto:ambitioniit@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }
  };

  const faqs = [
    { q: "What courses does Ambition Chemistry Classes offer?", a: "We offer comprehensive chemistry coaching for Class 11th, Class 12th, IIT JEE (Mains + Advanced), NEET, CBSE, ICSE, and BSEB boards. We also have crash courses and B.Sc tutorials." },
    { q: "Who is the faculty at Ambition Chemistry?", a: "SK Singh Sir is the founder and head faculty with 10+ years of teaching experience. He specializes in making complex chemistry concepts easy to understand for competitive exams." },
    { q: "What are the timings and batch schedule?", a: "Classes run Monday to Saturday with multiple batch timings available. The institute is open till 9 PM. Contact us for the latest batch schedule." },
    { q: "Is there any free study material available?", a: "Yes! We have 118+ free video lectures on our YouTube channel covering Solutions chapter and more. Visit our Free Courses page to access them." },
    { q: "How can I enroll in a course?", a: "You can enroll by visiting our center at Nala Rd, Sri Krishna Nagar, Begusarai, calling us at 087094 46096, or sending a WhatsApp message. Walk-ins are welcome!" },
    { q: "What is the fee structure?", a: "Our fee structure is very competitive and affordable. Please call us at 087094 46096 or visit the center for detailed fee information for each course." },
    { q: "Do you offer test series?", a: "Yes, we offer comprehensive test series for Board exams, IIT JEE, and NEET with detailed analysis, ranking systems, and solutions." },
    { q: "Is there a mobile app available?", a: "Currently, students can access free video lectures on our YouTube channel. For more information about digital resources, please contact us." },
  ];

  const quickActions = [
    { icon: Phone, title: "Call Us", desc: "087094 46096", link: "tel:+918709446096", color: "teal" },
    { icon: MessageCircle, title: "WhatsApp", desc: "Chat Now", link: "https://wa.me/918709446096", color: "success" },
    { icon: Navigation, title: "Directions", desc: "Open in Maps", link: "https://maps.google.com/?q=Ambition+Chemistry+Classes+Begusarai", color: "sky" },
    { icon: Clock, title: "Hours", desc: "Open till 9 PM", link: "#", color: "amber" },
  ];

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header__pattern" />
        <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#0d9488', width: '500px', height: '500px', opacity: 0.1 }} />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge badge-teal mb-4">📞 Reach Out</span>
            <h1 className="page-header__title">Get in <span className="text-gradient-teal">Touch</span></h1>
            <p className="page-header__desc">Have questions about admissions, courses, or fees? We're here to help.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-main">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {quickActions.map((a, idx) => (
              <motion.a key={idx} href={a.link} target={a.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card text-center flex-col items-center p-6 hover-lift" style={{ display: 'flex', textDecoration: 'none' }}>
                <div className={`icon-box ${a.color} mb-4`}><a.icon size={24} /></div>
                <h3 className="text-lg font-bold font-heading mb-2 text-dark">{a.title}</h3>
                <p className="text-muted text-sm m-0 font-medium">{a.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="contact-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 shadow-lg" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
              <span className="badge badge-teal mb-4">Admissions Open</span>
              <h2 className="text-3xl font-bold font-heading mb-2 text-dark">Send a Query</h2>
              <p className="text-muted mb-6">Fill the form and reach us via WhatsApp or Email instantly.</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div><label className="contact-label">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" /></div>
                <div><label className="contact-label">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="10-digit mobile number" /></div>
                <div><label className="contact-label">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" /></div>
                <div>
                  <label className="contact-label">Interested Course *</label>
                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="" disabled>Select a course</option>
                    <option value="Class 11 Chemistry">Class 11 Chemistry</option>
                    <option value="Class 12 Chemistry">Class 12 Chemistry</option>
                    <option value="IIT JEE Preparation">IIT JEE Preparation</option>
                    <option value="NEET Chemistry">NEET Chemistry</option>
                    <option value="Crash Course">Crash Course</option>
                    <option value="B.Sc Tutorials">B.Sc Tutorials</option>
                  </select>
                </div>
                <div><label className="contact-label">Your Query / Message</label><textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Any specific questions?" className="resize-none"></textarea></div>
                <div className="contact-submit-row">
                  <button type="submit" onClick={() => setSubmitMethod('whatsapp')} className="btn btn-success w-full"><MessageCircle size={18} /> Send via WhatsApp</button>
                  <button type="submit" onClick={() => setSubmitMethod('email')} className="btn btn-outline-dark w-full"><Mail size={18} /> Send via Email</button>
                </div>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="contact-map-wrapper">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.497482416981!2d86.12318737558222!3d25.42162642257351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21baa5ce34305%3A0xb1407d5c660af716!2sAmbition%20Chemistry%20Classes!5e0!3m2!1sen!2sin!4v1777719833820!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, position: 'absolute', top: 0, left: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ambition Chemistry Map"></iframe>
              </div>
              <div className="contact-info-box">
                <h3 className="text-xl font-bold font-heading mb-6" style={{ color: 'white' }}>Visit Our Center</h3>
                <div className="contact-info-row"><div className="contact-info-icon"><MapPin size={20} /></div><div><p className="font-bold mb-1" style={{ color: 'white' }}>Address</p><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>Nala Rd, Sri Krishna Nagar, Vasant Vihar, Begusarai, Bihar 851101</p></div></div>
                <div className="contact-info-row"><div className="contact-info-icon"><Phone size={20} /></div><div><p className="font-bold mb-1" style={{ color: 'white' }}>Phone</p><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>087094 46096 / 084340 42241</p></div></div>
                <div className="contact-info-row"><div className="contact-info-icon"><Mail size={20} /></div><div><p className="font-bold mb-1" style={{ color: 'white' }}>Email</p><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>ambitioniit@gmail.com</p></div></div>
                <div className="contact-info-row"><div className="contact-info-icon"><Clock size={20} /></div><div><p className="font-bold mb-1" style={{ color: 'white' }}>Hours</p><p className="text-sm" style={{ color: 'var(--text-white-muted)' }}>Mon-Sat: Open till 9 PM</p><p className="text-sm" style={{ color: 'var(--danger)' }}>Sunday: Closed</p></div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-16">
            <span className="badge badge-amber"><HelpCircle size={16} /> FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to the most common queries about Ambition Chemistry Classes.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  <span className="faq-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{faq.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
        .contact-grid { display: grid; gap: 2rem; align-items: stretch; }
        .contact-form { display: flex; flex-direction: column; gap: 1.1rem; }
        .contact-label { display: block; font-size: 0.88rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.4rem; }
        .contact-submit-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem; }
        .contact-map-wrapper { display: flex; flex-direction: column; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid rgba(0,0,0,0.05); }
        .contact-map { flex: 1; position: relative; min-height: 300px; background: var(--bg-alt); }
        .contact-info-box { background: var(--primary-dark); padding: 2rem; color: white; }
        .contact-info-row { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.1rem; }
        .contact-info-row:last-child { margin-bottom: 0; }
        .contact-info-icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--accent-teal-light); }
        .faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .faq-item { background: white; border-radius: 14px; border: 1px solid rgba(0,0,0,0.06); overflow: hidden; transition: all 0.3s ease; box-shadow: 0 2px 10px rgba(0,0,0,0.03); }
        .faq-item--open { border-color: var(--accent-teal); box-shadow: 0 8px 30px rgba(13,148,136,0.08); }
        .faq-btn { width: 100%; display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font-body); color: var(--text-main); }
        .faq-num { font-size: 0.8rem; font-weight: 700; color: var(--accent-teal); background: rgba(13,148,136,0.08); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .faq-question { flex: 1; font-weight: 600; font-size: 0.98rem; }
        .faq-chevron { color: var(--text-light); transition: transform 0.3s; flex-shrink: 0; }
        .faq-item--open .faq-chevron { transform: rotate(180deg); color: var(--accent-teal); }
        .faq-answer { padding: 0 1.5rem 1.25rem 4.5rem; color: var(--text-muted); font-size: 0.93rem; line-height: 1.7; margin: 0; }
        @media (min-width: 900px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .contact-map { min-height: 250px; } .contact-submit-row { grid-template-columns: 1fr; } .faq-answer { padding-left: 1.5rem; } }
      `}</style>
    </div>
  );
};

export default Contact;
