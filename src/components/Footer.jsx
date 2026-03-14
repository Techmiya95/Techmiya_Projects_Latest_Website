import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/tecmiyam_logo_rm_bg.png" alt="Techmiya Solutions" style={{ filter: 'invert(1) brightness(2)' }} />
                            <div className="footer-logo-text">
                                Techmiya <span>Solutions</span>
                            </div>
                        </div>
                        <p>
                            Pioneering the future with innovative technology solutions. From robotics to VLSI,
                            we engineer excellence for businesses worldwide.
                        </p>
                        <div className="footer-social">
                            <a href="https://in.linkedin.com/company/techmiya-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="https://www.youtube.com/channel/UCs-OZYwk-dY9Ik66zub0PGQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
                            <a href="https://www.instagram.com/techmiyaprojects/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Products</h4>
                        <Link to="/products">CRM Platform</Link>
                        <Link to="/products">Robotic Kits</Link>
                        <Link to="/products">Robot Manufacturing</Link>
                        <Link to="/products">VLSI Solutions</Link>
                        <Link to="/products">Drone Systems</Link>
                        <Link to="/products">ERP Solutions</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <Link to="/services">Software Development</Link>
                        <Link to="/services">IoT Solutions</Link>
                        <Link to="/services">AI & Machine Learning</Link>
                        <Link to="/services">VLSI Design</Link>
                        <Link to="/services">Embedded Systems</Link>
                        <Link to="/services">Cloud Solutions</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/team">Our Team</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">Careers</Link>
                        <Link to="/about">Partners</Link>
                        <Link to="/about">Blog</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Techmiya Solutions. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
