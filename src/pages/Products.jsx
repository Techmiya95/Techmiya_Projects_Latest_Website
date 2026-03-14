import { ArrowRight, CheckCircle2, Shield, Zap, Cpu, Settings } from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function Products() {
  const sectionRef = useScrollReveal();

  const hardwareProducts = [
    {
      id: 'robot-platform',
      tag: 'Robotics',
      title: 'Techmiya Robot Platform',
      desc: 'Our flagship robotic platform engineered for education, research, and industrial automation. Features ROS integration, LIDAR navigation, and modular hardware expansion.',
      image: '/robo_rm_bg.png',
      features: ['LIDAR Mapping', 'AI Object Detection', 'ROS2 Compatible', '8-Hour Battery Life']
    },
    {
      id: 'agri-drone',
      tag: 'Aerospace',
      title: 'Agricultural Drone Systems',
      desc: 'Precision farming solutions with multi-spectral imaging and automated spray systems. Increase crop yields through GPS-guided precision agriculture.',
      image: '/drone.png',
      features: ['20L Payload', 'Automated Flight', 'Multi-spectral Camera', 'RTK Precision']
    },
    {
      id: 'organ-tracking',
      tag: 'Healthcare IoT',
      title: 'Logistics Tracking Systems',
      desc: 'High-precision tracker designed for mission-critical logistics like organ transport. Provides real-time temperature, humidity, and location monitoring.',
      image: '/organtracking.png',
      features: ['Real-time Bio-alerts', 'Shock Correction', 'LTE-M Connection', 'Encrypted Data']
    },
    {
      id: 'robot-kit',
      tag: 'STEM Education',
      title: 'Educational Robotic Kits',
      desc: 'Modular building blocks for the next generation of engineers. Comprehensive kits that teach mechanics, electronics, and coding through play.',
      image: '/robo_rm_bg2.png',
      features: ['Python Programmable', 'Plug & Play Sensors', '3D Printable Parts', 'Courseware Included']
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge">Our Products</div>
          <h1>Innovation-Driven <span>Product Portfolio</span></h1>
          <p>
            Explore our comprehensive range of technology products designed 
            to solve real-world challenges across robotics, IoT, software, and VLSI.
          </p>
        </div>
      </section>

      {/* Hardware Showcase */}
      <section className="section">
        <div className="container">
          {hardwareProducts.map((p, index) => (
            <div key={p.id} className={`product-showcase-item ${index % 2 !== 0 ? 'reverse' : ''} fade-in`}>
              <div className="product-showcase-content">
                <span className="product-tag">{p.tag}</span>
                <h2>{p.title.split(' ')[0]} <span>{p.title.split(' ').slice(1).join(' ')}</span></h2>
                <p>{p.desc}</p>
                <div className="product-feature-list">
                  {p.features.map((f, i) => (
                    <div key={i} className="product-feature-item">
                      <CheckCircle2 size={20} />
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button className="btn btn-primary">Download Datasheet</button>
                  <button className="btn btn-outline">Inquiry Now</button>
                </div>
              </div>
              <div className="product-showcase-image">
                <img src={p.image} alt={p.title} className="glass-card" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Software & IP Products */}
      <section className="section bg-dark">
        <div className="container">
          <div className="section-header fade-in">
             <div className="section-badge">Enterprise Solutions</div>
            <h2 className="section-title">Software & <span>IP Cores</span></h2>
            <p className="section-subtitle">Scalable digital infrastructure for your organization.</p>
          </div>

          <div className="products-grid">
            {[
              { 
                icon: <Settings color="#00d4ff" />, 
                tag: 'Business', 
                title: 'Techmiya CRM', 
                desc: 'Client relationship management with built-in automation.' 
              },
              { 
                icon: <Cpu color="#00d4ff" />, 
                tag: 'Semiconductor', 
                title: 'VLSI IP Cores', 
                desc: 'Validated silicon components for fast chip development.' 
              },
              { 
                icon: <Shield color="#00d4ff" />, 
                tag: 'Security', 
                title: 'IoT Gateway', 
                desc: 'Military-grade encryption for your connected devices.' 
              },
              { 
                icon: <Zap color="#00d4ff" />, 
                tag: 'Logistics', 
                title: 'Techmiya ERP', 
                desc: 'Unifying your entire supply chain under one platform.' 
              }
            ].map((p, i) => (
              <div key={i} className={`product-card glass-card fade-in stagger-${i+1}`} style={{ gridTemplateColumns: '80px 1fr', padding: '30px' }}>
                <div className="service-icon" style={{ marginBottom: 0 }}>{p.icon}</div>
                <div>
                  <span className="product-tag" style={{ marginBottom: '8px' }}>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p style={{ marginBottom: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
