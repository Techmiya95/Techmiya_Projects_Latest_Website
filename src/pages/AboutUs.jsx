import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import '../styles/about.css';

function AboutUs() {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn more about Techmiya Projects, our mission to empower students with innovative final year projects and industry-standard R&D solutions."
            />
            <h1>About Us</h1>

            <p>Welcome to Techmiya Projects, your one-stop destination for innovative and cutting-edge final year engineering projects. At Techmiya Projects, we are passionate about fostering creativity, learning, and providing students with the tools they need to succeed in their academic endeavors.</p>

            <p>Our mission is to empower students with hands-on experience in developing real-world projects across various domains, from software engineering to electronics. We believe in the power of practical learning, and our carefully curated project list reflects the latest trends and technologies in the engineering field.</p>

            <h3>Why choose Techmiya Projects?</h3>

            <ul>
                <li><strong>Diverse Project Portfolio:</strong> Explore a wide range of projects, including software applications, mobile apps, electronics, and more.</li>
                <li><strong>Expert Guidance:</strong> Benefit from our experienced team's guidance and support throughout your project development journey.</li>
                <li><strong>Hands-On Learning:</strong> Gain practical, hands-on experience that goes beyond the classroom, preparing you for the challenges of the professional world.</li>
                <li><strong>Innovation and Creativity:</strong> Engage in projects that encourage innovative thinking and problem-solving skills.</li>
            </ul>

            <p>Whether you are a computer science enthusiast, electrical engineering whiz, or someone exploring the world of technology, Techmiya Projects is your partner in turning ideas into reality. Join us on this exciting journey of exploration, learning, and project development.</p>

            <p>For any inquiries or collaboration opportunities, feel free to <Link to="/contact-us">contact us</Link>.</p>
        </div>
    );
}

export default AboutUs;
