import { 
  Cpu, Settings, Database, Cloud, Globe, 
  ShieldAlert, Bot, Layers, Layout, Terminal
} from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function Services() {
  const sectionRef = useScrollReveal();

  const services = [
    {
      icon: <Bot size={40} />,
      title: 'Robotics & Automation',
      desc: 'End-to-end robotics development from concept design to manufacturing and AI implementation.',
      features: ['Autonomous Navigation', 'Mechatronics Design', 'Sensor Integration', 'Robot UI/UX']
    },
    {
      icon: <Layers size={40} />,
      title: 'VLSI Design & Manufacturing',
      desc: 'Comprehensive semiconductor solutions including RTL design, verification, and physical design.',
      features: ['ASIC/FPGA Design', 'IP Development', 'Pre-Silicon Verification', 'Mixed-Signal Design']
    },
    {
      icon: <Database size={40} />,
      title: 'CRM & ERP Platforms',
      desc: 'Build intelligent, scalable business management software tailored to your specific workflows.',
      features: ['Lead Management', 'Inventory Tracking', 'Financial Integration', 'Real-time Analytics']
    },
    {
      icon: <Terminal size={40} />,
      title: 'Custom Software Development',
      desc: 'Modern web and mobile applications built with the most robust and scalable tech stacks.',
      features: ['Fullstack Web', 'Native Mobile', 'API Ecosystems', 'Microservices']
    },
    {
      icon: <Layout size={40} />,
      title: 'IoT & Embedded Systems',
      desc: 'Connecting devices to create smart environments and industrial monitoring systems.',
      features: ['RTOS Development', 'Custom Hardware', 'Edge Computing', 'Security Gateways']
    },
    {
      icon: <ShieldAlert size={40} />,
      title: 'AI & Machine Learning',
      desc: 'Leverage data to build predictive models and intelligent automated decision systems.',
      features: ['Computer Vision', 'Predictive Modeling', 'NLP Integration', 'Anomalous Detection']
    },
    {
      icon: <Globe size={40} />,
      title: 'Drone Technology',
      desc: 'Aeronautics solutions for agriculture, surveillance, and industrial inspections.',
      features: ['Swarm Intelligence', 'Remote Sensing', 'Payload Engineering', 'Flight Control']
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Infrastructure',
      desc: 'Secure and scalable cloud architecture to host your mission-critical applications.',
      features: ['Cloud Migration', 'Serverless Design', 'Containerization', 'Auto-scaling']
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge">Our Expertise</div>
          <h1>Comprehensive <span>Tech Solutions</span> <br /> Scale Your Business</h1>
          <p>
            We combine engineering excellence with industry-leading practices 
            to deliver services that drive efficiency and growth.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="section">
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {services.map((service, index) => (
              <div key={index} className={`service-card glass-card fade-in stagger-${(index % 3) + 1}`}>
                <div className="service-icon" style={{ width: '80px', height: '80px' }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="product-features" style={{ marginTop: '20px' }}>
                  {service.features.map((f, i) => (
                    <span key={i} className="product-feature" style={{ fontSize: '0.75rem' }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-secondary">
        <div className="container">
           <div className="section-header fade-in">
            <h2 className="section-title">Our <span>Process</span></h2>
            <p className="section-subtitle">How we turn complex challenges into simple, elegant solutions.</p>
          </div>
          <div className="why-grid">
            <div className="why-card glass-card fade-in stagger-1">
              <div className="why-card-number">01</div>
              <h3>Discovery</h3>
              <p>Understanding your needs and defining the problem space.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-2">
              <div className="why-card-number">02</div>
              <h3>Design</h3>
              <p>Architecting the solution and creating prototypes.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-3">
              <div className="why-card-number">03</div>
              <h3>Develop</h3>
              <p>Building the solution with rigorous quality checks.</p>
            </div>
            <div className="why-card glass-card fade-in stagger-4">
              <div className="why-card-number">04</div>
              <h3>Deploy</h3>
              <p>Launching and providing ongoing global support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
