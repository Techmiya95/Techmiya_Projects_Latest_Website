import { ArrowRight, Target, Eye, Shield, Award, Users, Rocket } from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge">About Us</div>
          <h1>Pioneering <span>Innovation</span> <br /> For a Better Tomorrow</h1>
          <p>
            At Techmiya Solutions, we believe that technology should empower humanity. 
            We are a group of deep-tech engineers dedicated to solving real-world 
            problems through robotics, VLSI, and intelligent software.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in">
              <h2 className="section-title">Our <span>Journey</span></h2>
              <p>
                Founded with a vision to make high-end technology accessible, Techmiya Solutions 
                has grown from a small robotics lab into a multi-disciplinary technology 
                powerhouse. Our name combines "Tech" with "Miya" (Japanese for palace/shrine), 
                symbolizing our commitment to treating technology with respect and excellence.
              </p>
              <p>
                Today, we serve global clients across industries including healthcare, 
                aerospace, agriculture, and retail, providing them with the tools 
                they need to lead in the digital era.
              </p>
            </div>
            <div className="about-image fade-in stagger-2">
              <img src="/drone.png" alt="Our Work" className="glass-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-dark">
        <div className="container">
          <div className="services-grid">
            <div className="service-card glass-card fade-in stagger-1">
              <div className="service-icon"><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To engineer innovative, reliable, and ethical technology solutions that enhance productivity and improve lives globally.</p>
            </div>
            <div className="service-card glass-card fade-in stagger-2">
              <div className="service-icon"><Eye size={32} /></div>
              <h3>Our Vision</h3>
              <p>To be the world's most trusted partner for complex technological challenges, known for our craftsmanship and integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Core <span>Expertise</span></h2>
            <p className="section-subtitle">Our interdisciplinary approach allows us to solve problems that others cannot.</p>
          </div>

          <div className="why-grid">
            <div className="why-card glass-card fade-in stagger-1">
              <div className="why-card-number">15+</div>
              <h3>Years Experience</h3>
              <p>Collective leadership experience in high-tech fields.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-2">
              <div className="why-card-number">100+</div>
              <h3>Patents & IPs</h3>
              <p>Continuous investment in research and development.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-3">
              <div className="why-card-number">24/7</div>
              <h3>Global Support</h3>
              <p>Always available for our clients across timezones.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-4">
              <div className="why-card-number">A+</div>
              <h3>Quality Grade</h3>
              <p>Rigorous testing and quality assurance protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-badge">Core Values</div>
            <h2 className="section-title">What <span>Defines</span> Us</h2>
          </div>
          <div className="about-values">
            {[
              { icon: <Shield size={20} />, label: 'Integrity' },
              { icon: <Award size={20} />, label: 'Excellence' },
              { icon: <Users size={20} />, label: 'Collaboration' },
              { icon: <Rocket size={20} />, label: 'Innovation' },
            ].map((v, i) => (
              <div key={i} className={`about-value fade-in stagger-${i+1}`}>
                <div className="about-value-icon">{v.icon}</div>
                <span>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
