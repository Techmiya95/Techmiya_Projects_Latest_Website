import { Linkedin, Twitter, Mail, ExternalLink, Globe, Cpu, Bot, Code, Zap, Briefcase, ArrowRight } from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function Team() {
  const sectionRef = useScrollReveal();

  const leadership = [
    {
      name: "Sandeep Rao",
      role: "Founder & CEO",
      bio: "15+ years in Robotics & AI. Previously led large-scale automation projects for Fortune 500 companies.",
      initials: "SR"
    },
    {
      name: "Priyanka Sharma",
      role: "Chief Technology Officer",
      bio: "Expert in VLSI design and embedded systems. Holds 10+ patents in semiconductor technology.",
      initials: "PS"
    },
    {
      name: "Arjun Kapoor",
      role: "VP of Engineering",
      bio: "Software veteran with a focus on scalable enterprise solutions and cloud-native architecture.",
      initials: "AK"
    }
  ];

  const departments = [
    {
      name: "Robotics & Hardware",
      icon: <Bot size={20} />,
      members: [
        { name: "Rahul Verma", role: "Sr. Robotics Engineer" },
        { name: "Ananya Dixit", role: "Mechatronics Specialist" },
        { name: "Vikram Reddy", role: "Hardware Architect" },
        { name: "Sneha Nair", role: "Control Systems Lead" }
      ]
    },
    {
      name: "VLSI & Semiconductor",
      icon: <Cpu size={20} />,
      members: [
        { name: "Karthik Subramanyam", role: "Sr. RTL Designer" },
        { name: "Deepa Mehta", role: "Verification Lead" },
        { name: "Abhishek Jain", role: "Physical Design Expert" },
        { name: "Meera Iyer", role: "Analog Design Engineer" }
      ]
    },
    {
      name: "Software & AI",
      icon: <Code size={20} />,
      members: [
        { name: "Rohan Gupta", role: "Full Stack Architect" },
        { name: "Ishita Roy", role: "AI Research Scientist" },
        { name: "Aditya Malhotra", role: "Cloud Infra Expert" },
        { name: "Tanvi Sareen", role: "ML Engineer" }
      ]
    },
    {
      name: "Product & Business",
      icon: <Briefcase size={20} />,
      members: [
        { name: "Neha Bajaj", role: "Head of Product" },
        { name: "Manish Pandey", role: "Business Dev Lead" },
        { name: "Ritika Singh", role: "UX Design Director" },
        { name: "Amit Thakur", role: "Marketing Strategist" }
      ]
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge">Our Team</div>
          <h1>The Minds Behind <span>The Innovation</span></h1>
          <p>
            Meet the diverse team of engineers, designers, and visionaries 
            working together to build the next generation of technology.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-badge">Leadership</div>
            <h2 className="section-title">Our <span>Leadership Team</span></h2>
            <p className="section-subtitle">Experienced leaders who guide our vision, strategy, and technical direction.</p>
          </div>

          <div className="team-leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="team-leader-card glass-card fade-in stagger-1">
                <div className="team-leader-image">
                  <div className="team-avatar">{leader.initials}</div>
                </div>
                <div className="team-leader-info">
                  <h3>{leader.name}</h3>
                  <div className="team-role">{leader.role}</div>
                  <p>{leader.bio}</p>
                  <div className="team-card-social" style={{ justifyContent: 'center', marginTop: '20px' }}>
                    <a href="#"><Linkedin size={18} /></a>
                    <a href="#"><Twitter size={18} /></a>
                    <a href="#"><Mail size={18} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="section bg-dark">
        <div className="container">
          {departments.map((dept, deptIdx) => (
            <div key={deptIdx} style={{ marginBottom: deptIdx === departments.length - 1 ? 0 : '80px' }}>
              <div className="section-header fade-in" style={{ textAlign: 'left', marginBottom: '40px' }}>
                <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {dept.icon} {dept.name}
                </div>
              </div>
              
              <div className="team-grid">
                {dept.members.map((member, index) => (
                  <div key={index} className="team-card fade-in stagger-1">
                    <div className="team-card-image">
                      <div className="team-avatar">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="team-card-overlay">
                        <div className="team-card-social">
                          <a href="#"><Linkedin size={16} /></a>
                          <a href="#"><Twitter size={16} /></a>
                        </div>
                      </div>
                    </div>
                    <div className="team-card-info">
                      <h3>{member.name}</h3>
                      <div className="team-role">{member.role}</div>
                      <div className="team-department-badge">Active</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in">
              <div className="section-badge">Join Us</div>
              <h2 className="section-title">Built on <span>Collaborative Culture</span></h2>
              <p>
                We foster an environment of continuous learning, diversity, and extreme 
                ownership. At Techmiya Solutions, every team member has the freedom 
                to explore, innovate, and contribute to world-changing projects.
              </p>
              <div className="about-values" style={{ marginTop: '30px' }}>
                 <div className="about-value">
                   <div className="about-value-icon"><Zap size={20} /></div>
                   <span>Fast-Paced</span>
                 </div>
                 <div className="about-value">
                   <div className="about-value-icon"><Globe size={20} /></div>
                   <span>Global-Scale</span>
                 </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: '40px' }}>
                Explore Career Opportunities <ArrowRight size={18} style={{ marginLeft: '10px' }} />
              </button>
            </div>
            <div className="about-image fade-in stagger-2">
              <img src="/drone.png" alt="Company Culture" className="glass-card" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
