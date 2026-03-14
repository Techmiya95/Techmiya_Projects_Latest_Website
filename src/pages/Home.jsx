import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Settings, Database, 
  BarChart3, ShieldCheck, Globe, Zap, Users, Star
} from 'lucide-react';
import useScrollReveal from '../components/useScrollReveal';

export default function Home() {
    const sectionRef = useScrollReveal();

    return (
        <div ref={sectionRef}>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-grid"></div>
                </div>
                <div className="container">
                    <div className="hero-content fade-in">
                        <div className="hero-badge">
                            <span className="pulse"></span> INNOVATING THE FUTURE
                        </div>
                        <h1 className="hero-title">
                            Engineering <span className="gradient-text">Tomorrow's</span> <br />
                            Technology Today
                        </h1>
                        <p className="hero-description">
                            From cutting-edge robotics and VLSI design to intelligent CRM platforms and drone systems — Techmiya Solutions delivers transformative technology that empowers businesses to thrive.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary">
                                Explore Products <ArrowRight size={18} />
                            </Link>
                            <Link to="/about" className="btn btn-outline">
                                Learn More
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-number">50+</div>
                                <div className="hero-stat-label">Projects Done</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-number">25+</div>
                                <div className="hero-stat-label">Tech Experts</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-number">10+</div>
                                <div className="hero-stat-label">Global Partners</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual fade-in">
                        <div className="hero-robot-container">
                            <img src="/robo_rm_bg.png" alt="Techmiya Robot" />
                            <div className="hero-orbit hero-orbit-1"></div>
                            <div className="hero-orbit hero-orbit-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">Our Services</div>
                        <h2 className="section-title">Technological <span>Excellence</span></h2>
                        <p className="section-subtitle">We provide comprehensive technology solutions tailored to your industry needs.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card glass-card fade-in stagger-1">
                            <div className="service-icon"><Cpu size={32} /></div>
                            <h3>Robotics & Automation</h3>
                            <p>Designing and manufacturing advanced autonomous systems for industrial and educational applications.</p>
                        </div>
                        <div className="service-card glass-card fade-in stagger-2">
                            <div className="service-icon"><Settings size={32} /></div>
                            <h3>VLSI Design</h3>
                            <p>Expert semiconductor design services and IP cores for next-generation silicon products.</p>
                        </div>
                        <div className="service-card glass-card fade-in stagger-3">
                            <div className="service-icon"><Database size={32} /></div>
                            <h3>CRM & ERP Solutions</h3>
                            <p>Scalable enterprise software to streamline your business workflows and customer relations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Highlight Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">Featured Products</div>
                        <h2 className="section-title">Innovative <span>Solutions</span></h2>
                    </div>

                    <div className="products-grid">
                        <div className="product-card glass-card fade-in">
                            <div className="product-image">
                                <img src="/robo_rm_bg.png" alt="Robot Platform" />
                            </div>
                            <div className="product-content">
                                <span className="product-tag">Robotics</span>
                                <h3>Techmiya Robot Platform</h3>
                                <p>A versatile autonomous mobile robot for research and logistics automation.</p>
                                <div className="product-features">
                                    <span className="product-feature"><ShieldCheck size={14} /> AI Navigation</span>
                                    <span className="product-feature"><ShieldCheck size={14} /> Modular Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-card glass-card fade-in stagger-2">
                            <div className="product-image">
                                <img src="/drone.png" alt="Agri Drone" />
                            </div>
                            <div className="product-content">
                                <span className="product-tag">Aerospace</span>
                                <h3>Agricultural Drone</h3>
                                <p>Precision agriculture systems for crop monitoring and automated spraying.</p>
                                <div className="product-features">
                                    <span className="product-feature"><ShieldCheck size={14} /> 4K Imaging</span>
                                    <span className="product-feature"><ShieldCheck size={14} /> GPS Guided</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image fade-in">
                            <img src="/organtracking.png" alt="Innovation" className="glass-card" />
                            <div className="about-image-overlay">
                                <div className="number">99%</div>
                                <div className="label">Client Satisfaction</div>
                            </div>
                        </div>
                        <div className="about-content fade-in stagger-2">
                            <div className="section-badge">Why Choose Us</div>
                            <h2 className="section-title">Driven by <span>Innovation</span></h2>
                            <p>For years, Techmiya Solutions has been at the forefront of technological breakthroughs, helping companies navigate the complex landscape of digital transformation and robotics.</p>
                            <div className="about-values">
                                <div className="about-value">
                                    <div className="about-value-icon"><Zap size={20} /></div>
                                    <span>Fast Implementation</span>
                                </div>
                                <div className="about-value">
                                    <div className="about-value-icon"><ShieldCheck size={20} /></div>
                                    <span>Enterprise Security</span>
                                </div>
                                <div className="about-value">
                                    <div className="about-value-icon"><Users size={20} /></div>
                                    <span>Expert Team</span>
                                </div>
                                <div className="about-value">
                                    <div className="about-value-icon"><Globe size={20} /></div>
                                    <span>Global Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">Testimonials</div>
                        <h2 className="section-title">Client <span>Stories</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card glass-card fade-in stagger-1">
                            <div className="testimonial-text">"Techmiya's robotics platform revolutionized our warehouse operations within months."</div>
                            <div className="testimonial-author">
                                <div className="testimonial-info">
                                    <h4>James Wilson</h4>
                                    <p>CTO, LogiCorp</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card fade-in stagger-2">
                            <div className="testimonial-text">"The VLSI design expertise provided by their team was instrumental in our chip tape-out."</div>
                            <div className="testimonial-author">
                                <div className="testimonial-info">
                                    <h4>Sarah Chen</h4>
                                    <p>Director of Engineering, SiliconNode</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card fade-in stagger-3">
                            <div className="testimonial-text">"Their CRM solution is by far the most intuitive and powerful we've used."</div>
                            <div className="testimonial-author">
                                <div className="testimonial-info">
                                    <h4>David Kumar</h4>
                                    <p>CEO, TechReach India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section fade-in">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let's discuss how our cutting-edge technology can solve your most complex challenges.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-white">Get Started Now</Link>
                            <Link to="/services" className="btn-white-outline">Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
