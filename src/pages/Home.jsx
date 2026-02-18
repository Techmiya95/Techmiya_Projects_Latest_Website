import TestimonialSlider from '../components/TestimonialSlider';
import YoutubeShortsSlider from '../components/YoutubeShortsSlider';
import VideoTestimonialSlider from '../components/VideoTestimonialSlider';
import SEO from '../components/common/SEO';


function Home() {
    return (
        <>
            <SEO
                title="Best Final Year Projects Center Bangalore | IEEE, AI, ML, IoT"
                description="Techmiya Projects is Bangalore's leading project center for IEEE, AI, ML, IoT, and Engineering projects. Get expert guidance, documentation, and source code."
                keywords="final year projects, IEEE projects bangalore, best project center, AI projects, ML projects, IoT projects, Techmiya"
            />
            {/* Hero Section */}
            <section className="page1" style={{ backgroundImage: "url('/images/collage.webp')" }}>
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
                            <img src="/images/softwareprojects.webp" alt="Software Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/electronicsprojects.webp" alt="Electronics Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/IT.webp" alt="IT Projects" />
                        </div>
                        <div className="slide1">
                            <img src="/images/collage.webp" alt="College Projects" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Latest Projects CTA Section */}
            <section className="latest-cta">
                <div className="cta-container">
                    <div className="cta-content">
                        <span className="badge">New for 2026</span>
                        <h2>100+ Latest Project Ideas</h2>
                        <p>Stay ahead with our curated list of 2026's most innovative project topics in AI, LLM, RAG, Blockchain, and Edge AI.</p>
                        <div className="cta-features">
                            <div className="feat"><i className="fa fa-check-circle"></i> Categorized by Tech</div>
                            <div className="feat"><i className="fa fa-check-circle"></i> Industry Relevant</div>
                            <div className="feat"><i className="fa fa-check-circle"></i> Research Oriented</div>
                        </div>
                        <a href="/software-projects/latest-ideas-2026" className="cta-main-btn">
                            View All Project Ideas <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .latest-cta {
                    padding: 80px 20px;
                    background: linear-gradient(135deg, #112c66 0%, #061129 100%);
                    color: white;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                }
                .cta-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                .latest-cta::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }
                .badge {
                    background: #00d4ff;
                    color: #112c66;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    display: inline-block;
                    margin-bottom: 20px;
                }
                .cta-content h2 {
                    font-size: clamp(2rem, 5vw, 3.5rem) !important;
                    margin-bottom: 20px;
                    color: white !important;
                }
                .cta-content p {
                    font-size: 1.2rem;
                    color: rgba(255,255,255,0.8);
                    max-width: 700px;
                    margin: 0 auto 40px;
                }
                .cta-features {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                }
                .feat {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 500;
                    color: #00d4ff;
                }
                .cta-main-btn {
                    display: inline-block;
                    padding: 18px 40px;
                    background: white;
                    color: #112c66 !important;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                .cta-main-btn:hover {
                    background: #00d4ff;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.3);
                }
            `}} />

            {/* Testimonials */}
            <TestimonialSlider />

            {/* YouTube Shorts */}
            <YoutubeShortsSlider />

            {/* Video Testimonials */}
            <VideoTestimonialSlider />

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
                        <img loading="lazy" src="/images/cutt.webp" alt="Cutting Edge Technologies at Techmiya" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Cutting Edge Technologies</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/real.webp" alt="Real World Projects Experience" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Real World Projects</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/collab.webp" alt="Collaborative Learning Environment" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Collaborative Learning</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/mentor.webp" alt="Industrial Mentorship for Students" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Industrial Mentorship</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/creativity.webp" alt="Innovation and Creativity focus" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Innovation and Creativity</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="single-service">
                        <img loading="lazy" src="/images/Certification.webp" alt="Project Certification and Recognition" />
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
                <img src="/qr.webp" alt="Internship Feedback QR Code" className="feedback-qr" />
                <a href="https://forms.gle/miP4aAFBNfFcHdF18" target="_blank" rel="noopener noreferrer" className="feedback-btn">
                    Click Here to Give Project Feedback
                </a>
            </div>
        </>
    );
}

export default Home;
