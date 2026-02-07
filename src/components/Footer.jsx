import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className="footercontainer">
                    <div className="row">
                        {/* About Us & Contact */}
                        <div className="col">
                            <div className="footer-content">
                                <h3>About Us</h3>
                                <p>At Techmiya Projects, an IEEE project development center, we fuel innovation through cutting-edge engineering projects. Our diverse range of projects empowers students and enthusiasts to explore technology and make a real impact.</p>

                                <div style={{ marginTop: '30px' }}>
                                    <h3>Contact Us</h3>
                                    <div className="footernav">
                                        <ul>
                                            <li><a href="#">Partner with Us</a></li>
                                            <li><Link to="/contact-us">Enquire Now</Link></li>
                                            <li><a href="#">Buy a Product</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Logo & Info */}
                        <div className="col">
                            <div className="slogan" style={{ textAlign: 'center' }}>
                                <img src="/images/logo.png" alt="Techmiya Logo" />
                            </div>

                            <div className="payments">
                                <a href="https://www.visa.co.in/"><img src="/images/visa.png" alt="Visa" /></a>
                                <a href="https://www.rupay.co.in/"><img src="/images/rupay.png" alt="Rupay" /></a>
                                <a href="https://www.mastercard.co.in/en-in.html"><img src="/images/mastercard.png" alt="Mastercard" /></a>
                                <a href="https://www.americanexpress.com/en-in/"><img src="/images/american-express.png" alt="Amex" /></a>
                            </div>

                            <div className="socialIcons">
                                <a href="https://www.facebook.com/people/Techmiyaprojects/61556387159246/"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/techmiyaprojects/"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.youtube.com/@TechMiyaProjects"><i className="fa fa-youtube"></i></a>
                            </div>

                            <div className="add">
                                <address style={{ fontStyle: 'normal' }}>
                                    <p><strong>Techmiya Solutions</strong></p>
                                    <p>#1400, 2nd Floor, 28th main S & C Cross Rd</p>
                                    <p>Jayanagar 9th Block, Bengaluru</p>
                                    <p><i className="fa fa-phone"></i> +91 63637 60275</p>
                                    <p><i className="fa fa-envelope"></i> support@techmiyaprojects.com</p>
                                </address>
                            </div>
                        </div>

                        {/* Links & Policies */}
                        <div className="col">
                            <div className="footer-content">
                                <h3>Direct Links</h3>
                                <div className="footernav">
                                    <ul>
                                        <li><a href="#">Facial Age Synthesis</a></li>
                                        <li><a href="#">Skin Disease Detection</a></li>
                                        <li><a href="#">Face Recognition Attendance</a></li>
                                        <li><a href="#">Parkinson's Detector System</a></li>
                                        <li><Link to="/electronic-projects/raspberrypi">Raspberry Pi Projects</Link></li>
                                    </ul>
                                </div>

                                <div style={{ marginTop: '30px' }}>
                                    <h3>Our Policies</h3>
                                    <div className="footernav">
                                        <ul>
                                            <li><Link to="/faq">FAQ's</Link></li>
                                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link to="/refund-policy">Refund & Shipping</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footerBottom">
                <p>CopyRight &copy; 2024; Designed by <span className="designer">2024 Techmiya Projects. All rights reserved.</span></p>
            </div>
        </>
    );
}

export default Footer;
