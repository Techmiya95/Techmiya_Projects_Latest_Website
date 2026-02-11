import SEO from '../components/common/SEO';
import '../styles/projectexpo.css';

function ProjectExpo() {
    return (
        <>
            <SEO
                title="Project Expo & Hackathon 2026"
                description="Join the All India Hackathon 2026 hosted by Techmiya Solutions. Showcase your innovation and compete with the brightest minds in India."
                keywords="hackathon 2026, project expo, engineering competition, Techmiya Hackathon"
            />
            <div className="container">
                <h1>All India Hackathon 2026</h1>
                <p>Get ready to showcase your innovation, creativity, and problem-solving skills in the All India Hackathon 2026, hosted by Techmiya Solutions in collaboration with Dayananda Sagar College of Engineering, Kumaraswamy Layout, Bengaluru. This event brings together the brightest minds from across the country to collaborate, compete, and create ground-breaking solutions.</p>

                <div className="slider">
                    <div className="slides">
                        <img src="/images/expo1.webp" alt="Hackathon Image 1" width="200" height="400" />
                        <img src="/images/expo2.webp" alt="Hackathon Image 2" width="200" height="400" />
                        <img src="/images/expo3.webp" alt="Hackathon Image 3" width="200" height="400" />
                        <img src="/images/expo4.webp" alt="Hackathon Image 4" width="200" height="400" />
                    </div>
                </div>

                <div className="instructions">
                    <h3>Points to Remember:</h3>
                    <ul>
                        <li>A Group can have a minimum of 2 and a maximum of 4 students.</li>
                        <li>A Group should contain students from the same department and college.</li>
                        <li>A Group can have students from different semesters.</li>
                        <li>File size of the Synopsis should be less than 10 MB.</li>
                        <li>Download PPT Synopsis from the given download button below.</li>
                    </ul>
                    <a className="download-btn" href="/Expo_synopsis_content.pptx" download>
                        <i className="fa fa-download"></i> Download Sample PPT
                    </a>
                    <br /><br />
                    <p><strong>Last Date for Registration:</strong> March 15th, 2026</p>
                </div>

                <div className="register">
                    <a href="https://forms.gle/XCKzs7PFpLeJgE1K7" target="_blank" rel="noopener noreferrer">Register Now</a>
                </div>
            </div>
        </>
    );
}

export default ProjectExpo;
