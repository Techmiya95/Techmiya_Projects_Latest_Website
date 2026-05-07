import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  // Close menu on route change (when a link is clicked and page navigates)
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // When a link inside a dropdown is clicked, close everything
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>✨ We offer 100% outputs for your projects ✨</span>
      </div>
      {/* Branches Location Bar */}
      <div className="branches-bar">
        <span className="branches-label"><i className="fa fa-map-marker"></i> Branches:</span>
        <span className="branch-item"><i className="fa fa-phone"></i> Jayanagar: +91 7338631971 / +91 6361987951</span>
        <span className="branch-separator">|</span>
        <span className="branch-item"><i className="fa fa-phone"></i> RR Nagar: +91-9206798097</span>
        <span className="branch-separator">|</span>
        <span className="branch-item"><i className="fa fa-phone"></i> Vijaynagar: +91-9591745792</span>
        <span className="branch-separator">|</span>
        <span className="branch-item"><i className="fa fa-phone"></i> Davangere: +91-9591745792</span>
        <span className="branch-separator">|</span>
        <span className="branch-item"><i className="fa fa-envelope"></i> hr@techmiyaprojects.com</span>
      </div>
      {/* Overlay backdrop for mobile menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      <header className="sticky-header">
        <nav>
          <Link to="/"><img src="/images/logo.webp" alt="Logo" /></Link>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <i className="fa fa-times close-icon" onClick={closeMenu}></i>
            <ul>
              <li className="active"></li>
              <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
              <li className={activeDropdown === 1 ? 'active' : ''} onClick={(e) => handleDropdownClick(1, e)}>
                <a href="#">BRANCHES <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/software-projects/python" onClick={handleLinkClick}>Computer Science (CSE)</Link></li>
                  <li><Link to="/software-projects/java" onClick={handleLinkClick}>Information Science (ISE)</Link></li>
                  <li><Link to="/software-projects/python" onClick={handleLinkClick}>Information Technology (IT)</Link></li>
                  <li><Link to="/electronic-projects/raspberrypi" onClick={handleLinkClick}>Electronics and Communication (ECE)</Link></li>
                  <li><Link to="/electronic-projects/sensor" onClick={handleLinkClick}>Electrical and Electronics (EEE)</Link></li>
                  <li><Link to="/electronic-projects/vlsi" onClick={handleLinkClick}>VLSI Design</Link></li>
                  <li><Link to="/software-projects/machine-learning" onClick={handleLinkClick}>Machine Learning</Link></li>
                  <li><Link to="/software-projects/ai" onClick={handleLinkClick}>Artificial Intelligence</Link></li>
                  <li><Link to="/software-projects/data-science" onClick={handleLinkClick}>Data Science</Link></li>
                  <li><Link to="/software-projects/deep-learning" onClick={handleLinkClick}>Deep Learning</Link></li>
                  <li><Link to="/electronic-projects/iot" onClick={handleLinkClick}>Internet of Things (IoT)</Link></li>
                  <li><Link to="/domains/embedded-systems" onClick={handleLinkClick}>Embedded Systems</Link></li>
                  <li><Link to="/software-projects/cloud-computing" onClick={handleLinkClick}>Cloud Computing</Link></li>
                  <li><Link to="/software-projects/network" onClick={handleLinkClick}>Cyber Security</Link></li>
                  <li><Link to="/software-projects/blockchain" onClick={handleLinkClick}>Blockchain</Link></li>
                  <li><Link to="/electronic-projects/arduino" onClick={handleLinkClick}>Mechatronics</Link></li>
                  <li><Link to="/electronic-projects/sensor" onClick={handleLinkClick}>Biomedical Engineering</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 2 ? 'active' : ''} onClick={(e) => handleDropdownClick(2, e)}>
                <a href="#">ELECTRONIC PROJECTS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/electronic-projects/iot" onClick={handleLinkClick}>IoT Projects</Link></li>
                  <li><Link to="/electronic-projects/raspberrypi" onClick={handleLinkClick}>Raspberry Pi Projects</Link></li>
                  <li><Link to="/electronic-projects/arduino" onClick={handleLinkClick}>Arduino Projects</Link></li>
                  <li><Link to="/electronic-projects/drones" onClick={handleLinkClick}>Drone and Robotics</Link></li>
                  <li><Link to="/electronic-projects/sensor" onClick={handleLinkClick}>Sensor based Projects</Link></li>
                  <li><Link to="/electronic-projects/gsm" onClick={handleLinkClick}>GSM based Projects</Link></li>
                  <li><Link to="/electronic-projects/wireless" onClick={handleLinkClick}>Wireless Communication Projects</Link></li>
                  <li><Link to="/electronic-projects/solar" onClick={handleLinkClick}>Solar based Projects</Link></li>
                  <li><Link to="/electronic-projects/gps" onClick={handleLinkClick}>GPS based projects</Link></li>
                  <li><Link to="/electronic-projects/vlsi" onClick={handleLinkClick}>VLSI &amp; FPGA Projects</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 3 ? 'active' : ''} onClick={(e) => handleDropdownClick(3, e)}>
                <a href="#">SOFTWARE PROJECTS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/software-projects/machine-learning" onClick={handleLinkClick}>Machine Learning Projects</Link></li>
                  <li><Link to="/software-projects/ai" onClick={handleLinkClick}>Artificial Intelligence Projects</Link></li>
                  <li><Link to="/software-projects/python" onClick={handleLinkClick}>Python Projects</Link></li>
                  <li><Link to="/software-projects/java" onClick={handleLinkClick}>Java based Projects</Link></li>
                  <li><Link to="/software-projects/android" onClick={handleLinkClick}>Android based Projects</Link></li>
                  <li><Link to="/software-projects/data-science" onClick={handleLinkClick}>Data Science based Projects</Link></li>
                  <li><Link to="/software-projects/deep-learning" onClick={handleLinkClick}>Deep Learning Projects</Link></li>
                  <li><Link to="/software-projects/cloud-computing" onClick={handleLinkClick}>Cloud Computing Projects</Link></li>
                  <li><Link to="/software-projects/network" onClick={handleLinkClick}>Network Security Projects</Link></li>
                  <li><Link to="/software-projects/blockchain" onClick={handleLinkClick}>Block Chain Projects</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 4 ? 'active' : ''} onClick={(e) => handleDropdownClick(4, e)}>
                <a href="#">DOMAINS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/domains/embedded-systems" onClick={handleLinkClick}>Embedded Systems</Link></li>
                  <li><Link to="/electronic-projects/iot" onClick={handleLinkClick}>Internet of Things</Link></li>
                  <li><Link to="/domains/python-data-science" onClick={handleLinkClick}>Python and Data Science</Link></li>
                  <li><Link to="/domains/ai-ml" onClick={handleLinkClick}>AI and ML</Link></li>
                </ul>
              </li>
              <li className="latest-link"><Link to="/software-projects/latest-ideas-2026" onClick={handleLinkClick}>LATEST PROJECTS 2026</Link></li>
              <li><Link to="/about-us" onClick={handleLinkClick}>ABOUT US</Link></li>
              <li><Link to="/contact-us" onClick={handleLinkClick}>CONTACT US</Link></li>
              <li className="theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                <a style={{ display: 'inline-block', padding: '10px' }}>
                  {isDarkMode ? (
                    <i className="fa fa-sun-o" title="Switch to Light Mode" style={{ fontSize: '1.2rem' }}></i>
                  ) : (
                    <i className="fa fa-moon-o" title="Switch to Dark Mode" style={{ fontSize: '1.2rem' }}></i>
                  )}
                </a>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars open-icon" onClick={toggleMenu}></i>
        </nav>
      </header>
    </>
  );
}

export default Header;

