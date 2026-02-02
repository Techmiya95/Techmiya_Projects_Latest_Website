import TestimonialSlider from '../components/TestimonialSlider';
import YoutubeShortsSlider from '../components/YoutubeShortsSlider';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="page1" style={{ backgroundImage: "url('/images/collage.png')" }}>
                <div className="hero-overlay"></div>
                <div className="text-box">
                    <p className="hero-keywords"><strong>Expert Guidance for Final Year Projects, IEEE Projects, and Project for Students.</strong></p>
                    <h1>Techmiya Projects</h1>
                    <p>Empowering the next generation of innovators where boundless creativity converges with cutting-edge technology.</p>
                </div>
            </section>

            {/* Final Year Projects */}
            <section className="final">
                <h2>Final Year Project</h2>
                <div className="row">
                    <div className="final-year" id="final-year">
                        <div className="slide1">
                            <img src="/images/softwareprojects.png" alt="Software Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/electronicsprojects.png" alt="Electronics Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/IT.png" alt="IT Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/collage.png" alt="College Projects" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialSlider />

            {/* YouTube Shorts */}
            <YoutubeShortsSlider />

            {/* FAQ Section */}
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <div>
                    <h3>Do you provide final year project guidance?</h3>
                    <p>Yes, we provide full project development, documentation, and demo support.</p>
                    <h3>Can students register online for projects?</h3>
                    <p>Yes, students can register for project expo, games, and final year projects online.</p>
                    <h3>Do you offer IEEE and real-world projects?</h3>
                    <p>Yes, we provide IEEE + real-world industry projects for all branches.</p>
                </div>
            </section>

            {/* Welcome to Techmiya - Moved down */}
            <section id="feature">
                <div className="welcome">
                    <p>WELCOME TO TECHMIYA</p>
                    <h2>Why Should You Join Us!!!</h2>
                </div>
                <div className="service-box">
                    <div className="single-service">
                        <img loading="lazy" src="/images/cutt.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Cutting Edge Technologies</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/real.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Real World Projects</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/collab.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Collaborative Learning</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/mentor.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Industrial Mentorship</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/creativity.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Innovation and Creativity</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/Certification.png" alt="Techmiya review" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Certification and Recognition</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship Feedback Section */}
            <div className="internship-feedback">
                <h2>Project Feedback</h2>
                <p>Your feedback helps us improve our project program.</p>
                <img src="/qr.png" alt="Internship Feedback QR Code" className="feedback-qr" />
                <a href="https://forms.gle/miP4aAFBNfFcHdF18" target="_blank" rel="noopener noreferrer" className="feedback-btn">
                    Click Here to Give Project Feedback
                </a>
            </div>
        </>
    );
}

export default Home;
