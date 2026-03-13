import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownClick = (index, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
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
      <header className="sticky-header">
        <nav>
          <Link to="/"><img src="/images/logo.webp" alt="Logo" /></Link>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <i className="fa fa-times close-icon" onClick={toggleMenu}></i>
            <ul onClick={closeDropdowns}>
              <li className="active"></li>
              <li><Link to="/">HOME</Link></li>
              <li className={activeDropdown === 1 ? 'active' : ''} onClick={(e) => handleDropdownClick(1, e)}>
                <a href="#">BRANCHES <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/software-projects/python">Computer Science (CSE)</Link></li>
                  <li><Link to="/software-projects/java">Information Science (ISE)</Link></li>
                  <li><Link to="/software-projects/python">Information Technology (IT)</Link></li>
                  <li><Link to="/electronic-projects/raspberrypi">Electronics and Communication (ECE)</Link></li>
                  <li><Link to="/electronic-projects/sensor">Electrical and Electronics (EEE)</Link></li>
                  <li><Link to="/electronic-projects/vlsi">VLSI Design</Link></li>
                  <li><Link to="/software-projects/machine-learning">Machine Learning</Link></li>
                  <li><Link to="/software-projects/ai">Artificial Intelligence</Link></li>
                  <li><Link to="/software-projects/data-science">Data Science</Link></li>
                  <li><Link to="/software-projects/deep-learning">Deep Learning</Link></li>
                  <li><Link to="/electronic-projects/iot">Internet of Things (IoT)</Link></li>
                  <li><Link to="/domains/embedded-systems">Embedded Systems</Link></li>
                  <li><Link to="/software-projects/cloud-computing">Cloud Computing</Link></li>
                  <li><Link to="/software-projects/network">Cyber Security</Link></li>
                  <li><Link to="/software-projects/blockchain">Blockchain</Link></li>
                  <li><Link to="/electronic-projects/arduino">Mechatronics</Link></li>
                  <li><Link to="/electronic-projects/sensor">Biomedical Engineering</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 2 ? 'active' : ''} onClick={(e) => handleDropdownClick(2, e)}>
                <a href="#">ELECTRONIC PROJECTS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/electronic-projects/iot">IoT Projects</Link></li>
                  <li><Link to="/electronic-projects/raspberrypi">Raspberry Pi Projects</Link></li>
                  <li><Link to="/electronic-projects/arduino">Arduino Projects</Link></li>
                  <li><Link to="/electronic-projects/drones">Drone and Robotics</Link></li>
                  <li><Link to="/electronic-projects/sensor">Sensor based Projects</Link></li>
                  <li><Link to="/electronic-projects/gsm">GSM based Projects</Link></li>
                  <li><Link to="/electronic-projects/wireless">Wireless Communication Projects</Link></li>
                  <li><Link to="/electronic-projects/solar">Solar based Projects</Link></li>
                  <li><Link to="/electronic-projects/gps">GPS based projects</Link></li>
                  <li><Link to="/electronic-projects/vlsi">VLSI & FPGA Projects</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 3 ? 'active' : ''} onClick={(e) => handleDropdownClick(3, e)}>
                <a href="#">SOFTWARE PROJECTS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/software-projects/machine-learning">Machine Learning Projects</Link></li>
                  <li><Link to="/software-projects/ai">Artificial Intelligence Projects</Link></li>
                  <li><Link to="/software-projects/python">Python Projects</Link></li>
                  <li><Link to="/software-projects/java">Java based Projects</Link></li>
                  <li><Link to="/software-projects/android">Android based Projects</Link></li>
                  <li><Link to="/software-projects/data-science">Data Science based Projects</Link></li>
                  <li><Link to="/software-projects/deep-learning">Deep Learning Projects</Link></li>
                  <li><Link to="/software-projects/cloud-computing">Cloud Computing Projects</Link></li>
                  <li><Link to="/software-projects/network">Network Security Projects</Link></li>
                  <li><Link to="/software-projects/blockchain">Block Chain Projects</Link></li>
                </ul>
              </li>
              <li className={activeDropdown === 4 ? 'active' : ''} onClick={(e) => handleDropdownClick(4, e)}>
                <a href="#">DOMAINS <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><Link to="/domains/embedded-systems">Embedded Systems</Link></li>
                  <li><Link to="/electronic-projects/iot">Internet of Things</Link></li>
                  <li><Link to="/domains/python-data-science">Python and Data Science</Link></li>
                  <li><Link to="/domains/ai-ml">AI and ML</Link></li>
                </ul>
              </li>
              <li className="latest-link"><Link to="/software-projects/latest-ideas-2026">LATEST PROJECTS 2026</Link></li>
              <li><Link to="/about-us">ABOUT US</Link></li>
              <li><Link to="/contact-us">CONTACT US</Link></li>
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
