import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Handle Theme Toggle
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.body.classList.add('light-theme');
        } else {
            setIsDarkMode(true);
            document.body.classList.remove('light-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (!newMode) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/products', label: 'Products' },
        { path: '/team', label: 'Team' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link to="/" className="navbar-logo">
                        <img 
                            src="/tecmiyam_logo_rm_bg.png" 
                            alt="Techmiya Solutions Logo" 
                            style={{ filter: isDarkMode ? 'invert(1) brightness(2)' : 'none' }} 
                        />
                        <div className="navbar-logo-text">
                            Techmiya <span>Solutions</span>
                        </div>
                    </Link>

                    <div className="navbar-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="navbar-cta">
                        <button 
                            className="theme-toggle-btn" 
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
                            Get Started <ArrowRight size={18} />
                        </Link>
                        
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span style={{ background: isDarkMode ? '#fff' : '#0f172a' }}></span>
                            <span style={{ background: isDarkMode ? '#fff' : '#0f172a' }}></span>
                            <span style={{ background: isDarkMode ? '#fff' : '#0f172a' }}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
                    <X size={28} />
                </button>
                {navLinks.map((link) => (
                    <Link key={link.path} to={link.path}>
                        {link.label}
                    </Link>
                ))}
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <button 
                        className="theme-toggle-btn" 
                        onClick={toggleTheme}
                        style={{ margin: 0 }}
                    >
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>
                    Get Started <ArrowRight size={16} />
                </Link>
            </div>
        </>
    );
}
