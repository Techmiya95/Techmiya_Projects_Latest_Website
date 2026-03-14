import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare, Cpu, Linkedin, Youtube, Instagram } from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const whatsappNumber = '916363760275';
    const text = `*New Inquiry from Techmiya Website*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Company:* ${formData.company || 'N/A'}%0A` +
      `*Service:* ${formData.service || 'N/A'}%0A` +
      `*Message:* ${formData.message}`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge">Contact Us</div>
          <h1>Let's Start a <span>Conversation</span></h1>
          <p>
            Have a project in mind or want to learn more about our technology?
            Our team is ready to discuss how we can help you innovate.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-cards fade-in">
              <div className="contact-info-card glass-card">
                <div className="contact-icon-box"><Mail size={24} /></div>
                <div className="contact-info-content">
                  <h3>Email</h3>
                  <p>hr@techmiya.com</p>
                  {/* <p>sales@techmiyasolutions.com</p> */}
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-icon-box"><Phone size={24} /></div>
                <div className="contact-info-content">
                  <h3>Phone</h3>
                  <p>+91 9591745792</p>
                  {/* <p>+91 87654 32109</p> */}
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-icon-box"><MapPin size={24} /></div>
                <div className="contact-info-content">
                  <h3>Office</h3>
                  <p>Techmiya Solutions Pvt. Ltd.<br />#1400, 2nd Floor,<br />28th Main S & C Cross Rd,<br />Jayanagar 9th Block,<br />Bengaluru - 560069</p>
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-icon-box"><Clock size={24} /></div>
                <div className="contact-info-content">
                  <h3>Business Hours</h3>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  <p>Sat: 10:00 AM - 2:00 PM IST</p>
                </div>
              </div>

              <div className="contact-info-card glass-card">
                <div className="contact-icon-box"><Globe size={24} /></div>
                <div className="contact-info-content">
                  <h3>Follow Us</h3>
                  <div className="footer-social" style={{ marginTop: '10px' }}>
                    <a href="https://in.linkedin.com/company/techmiya-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-primary)' }}><Linkedin size={20} /></a>
                    <a href="https://www.youtube.com/channel/UCs-OZYwk-dY9Ik66zub0PGQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'var(--text-primary)' }}><Youtube size={20} /></a>
                    <a href="https://www.instagram.com/techmiyaprojects/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--text-primary)' }}><Instagram size={20} /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-box glass-card fade-in stagger-2">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Your Company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="robotics">Robotics & Automation</option>
                    <option value="vlsi">VLSI Design</option>
                    <option value="software">Custom Software</option>
                    <option value="iot">IoT Solutions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-badge">Work With Us</div>
            <h2 className="section-title">Support for <span>Global Clients</span></h2>
            <p className="section-subtitle">We partner with organizations across continents to deliver world-class engineering.</p>
          </div>
          <div className="why-grid">
            <div className="why-card fade-in stagger-1">
              <Globe size={48} color="#00d4ff" style={{ margin: '0 auto 20px' }} />
              <h3>Global Delivery</h3>
              <p>Remote and on-site support for international deployments.</p>
            </div>
            <div className="why-card fade-in stagger-2">
              <MessageSquare size={48} color="#00d4ff" style={{ margin: '0 auto 20px' }} />
              <h3>Expert Consultation</h3>
              <p>Access our top engineers for technical strategy sessions.</p>
            </div>
            <div className="why-card fade-in stagger-3">
              <MapPin size={48} color="#00d4ff" style={{ margin: '0 auto 20px' }} />
              <h3>Local Presence</h3>
              <p>Partners and offices in key technological hubs.</p>
            </div>
            <div className="why-card fade-in stagger-4">
              <Cpu size={48} color="#00d4ff" style={{ margin: '0 auto 20px' }} />
              <h3>Lab Access</h3>
              <p>Virtual and physical access to our robotics testing labs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
