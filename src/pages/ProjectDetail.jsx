import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import Sidebar from '../components/Sidebar';
import SEO from '../components/common/SEO';
import '../styles/projects.css';

function ProjectDetail() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '150px' }}>
                <div className="main-content" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#112c66', marginBottom: '20px' }}>Project Not Found</h2>
                    <p style={{ color: '#64748b', marginBottom: '30px' }}>The project you are looking for does not exist or has been moved.</p>
                    <Link to="/projectexpo" className="cta-button">Back to Project Expo</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-wrapper">
            <SEO
                title={project.title}
                description={project.intro?.substring(0, 160)}
                keywords={`${project.title}, ${project.category}, engineering projects, final year projects`}
                image={project.image}
                type="article"
            />
            <div className="container">
                <div className="main-content project-detail-modern">
                    <div className="detail-hero">
                        <h1>{project.title}</h1>
                        <div className="hero-divider"></div>
                    </div>

                    <div className="project-detail-body">
                        <section className="detail-section intro-card">
                            <div className="section-icon"><i className="fa fa-info-circle"></i></div>
                            <div className="section-text">
                                <h3>Project Overview</h3>
                                <p>{project.intro}</p>
                            </div>
                        </section>

                        <div className="project-visual-showcase">
                            <div className="image-container">
                                <img src={project.image} alt={project.title} className="detail-image" />
                                <div className="image-overlay"></div>
                                <div className="brand-floating-badge">
                                    <img src="/images/techmiya_logo_official.webp" alt="Techmiya" />
                                </div>
                            </div>
                        </div>

                        <section className="detail-section features-card">
                            <h3><i className="fa fa-star"></i> Key Advantages</h3>
                            <ul className="advantages-list">
                                {(project.advantages || []).map((adv, idx) => (
                                    <li key={idx}>
                                        <span className="check-icon"><i className="fa fa-check"></i></span>
                                        {adv}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="detail-section methodology-card">
                            <h3><i className="fa fa-cogs"></i> Methodology</h3>
                            {project.methodology ? (
                                <div className="formatted-content" style={{ color: 'black' }}>
                                    {project.methodology.split('\n').map((line, i) => {
                                        if (line.trim() === '') return <br key={i} />;
                                        /* Split by bold markers **text** */
                                        const parts = line.split(/(\*\*.*?\*\*)/g);
                                        return (
                                            <div key={i} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                                                {parts.map((part, j) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={j} style={{ fontWeight: 'bold' }}>{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p>The project follows a systematic approach including data collection, preprocessing, model training, and real-time implementation using modern algorithms to ensure high accuracy and reliability.</p>
                            )}
                        </section>

                        <section className="detail-section tech-card">
                            <h3><i className="fa fa-code"></i> Requirements</h3>
                            <div className="requirements-flex">
                                <div className="req-section">
                                    <h4>Software:</h4>
                                    {Array.isArray(project.software) ? (
                                        <ul className="req-list">
                                            {project.software.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{project.software || "Python, VS Code, Flask/Django"}</p>
                                    )}
                                </div>
                                <div className="req-section">
                                    <h4>Hardware:</h4>
                                    {Array.isArray(project.hardware) ? (
                                        <ul className="req-list">
                                            {project.hardware.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{project.hardware || "Standard PC / Embedded Modules"}</p>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="detail-section applications-card">
                            <h3><i className="fa fa-rocket"></i> Applications</h3>
                            {project.applications ? (
                                <div className="formatted-content" style={{ color: 'black' }}>
                                    {project.applications.split('\n').map((line, i) => {
                                        if (line.trim() === '') return <br key={i} />;
                                        const parts = line.split(/(\*\*.*?\*\*)/g);
                                        return (
                                            <div key={i} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                                                {parts.map((part, j) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={j} style={{ fontWeight: 'bold' }}>{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p>Widely used in industrial automation, healthcare monitoring, and smart city infrastructure for improved efficiency and better decision-making.</p>
                            )}
                        </section>

                        <section className="detail-section conclusion-card">
                            <h3><i className="fa fa-lightbulb-o"></i> Conclusion</h3>
                            <p>{project.conclusion || "A robust project demonstrating the practical application of core technical concepts in " + project.category}</p>
                        </section>

                        <div className="action-hub">
                            <div className="hub-text">
                                <h4>Ready to start this project?</h4>
                                <p>Get expert guidance, complete documentation, and source code support.</p>
                            </div>
                            <a
                                href={`https://api.whatsapp.com/send?phone=916363760275&text=Hello Techmiya, I am interested in the project: ${project.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-cta-premium"
                            >
                                <i className="fa fa-whatsapp"></i> Enquire on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .project-detail-wrapper {
                    background: #f1f5f9;
                    min-height: 100vh;
                }
                .project-detail-modern {
                    background: #fff !important;
                    padding: 40px !important;
                    border-radius: 30px !important;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.05) !important;
                    overflow: hidden;
                }
                .detail-hero {
                    text-align: center;
                    padding: 40px 0;
                    background: linear-gradient(135deg, rgba(17, 44, 102, 0.02) 0%, rgba(0, 212, 255, 0.05) 100%);
                    margin: -40px -40px 40px -40px;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .hero-badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background: #e0f2fe;
                    color: #0369a1;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 20px;
                }
                .detail-hero h1 {
                    font-size: clamp(1.8rem, 4vw, 2.8rem) !important;
                    color: #112c66 !important;
                    max-width: 900px;
                    margin: 0 auto !important;
                    line-height: 1.2 !important;
                    background: linear-gradient(135deg, #112c66 0%, #1e4d92 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-divider {
                    width: 80px;
                    height: 4px;
                    background: #00d4ff;
                    margin: 30px auto 0;
                    border-radius: 2px;
                }
                .detail-section {
                    margin-bottom: 40px;
                }
                .intro-card {
                    display: flex;
                    gap: 25px;
                    background: #f8fafc;
                    padding: 30px;
                    border-radius: 20px;
                    border: 1px solid rgba(0,0,0,0.03);
                }
                .section-icon {
                    font-size: 1.5rem;
                    color: #00d4ff;
                    background: #fff;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    flex-shrink: 0;
                }
                .section-text h3 {
                    margin: 0 0 10px 0 !important;
                    font-size: 1.4rem !important;
                    color: #1e293b !important;
                    border: none !important;
                    padding: 0 !important;
                }
                .section-text h3::after { display: none; }
                .section-text p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #475569;
                    margin: 0;
                }
                .project-visual-showcase {
                    margin: 50px 0;
                }
                .image-container {
                    position: relative;
                    border-radius: 25px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                    background: #000;
                }
                .detail-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .image-container:hover .detail-image {
                    transform: scale(1.05);
                }
                .brand-floating-badge {
                    position: absolute;
                    bottom: 25px;
                    right: 25px;
                    background: #fff;
                    padding: 12px;
                    border-radius: 15px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    z-index: 10;
                }
                .brand-floating-badge img {
                    height: 40px;
                    display: block;
                }
                .detail-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }
                .features-card, .conclusion-card, .methodology-card, .tech-card, .applications-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.05);
                    padding: 30px;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                }
                .features-card:hover, .conclusion-card:hover, .methodology-card:hover, .tech-card:hover, .applications-card:hover {
                    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                    border-color: #00d4ff;
                }
                .requirements-flex {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 40px;
                    color: #475569;
                }
                .req-section {
                    flex: 1;
                    min-width: 250px;
                }
                .req-section h4 {
                    color: #112c66;
                    font-size: 1.1rem;
                    margin: 0 0 10px 0;
                    font-weight: 600;
                }
                .req-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .req-list li {
                    padding: 8px 0 8px 25px;
                    position: relative;
                    color: #475569;
                    line-height: 1.6;
                }
                .req-list li::before {
                    content: "▸";
                    position: absolute;
                    left: 0;
                    color: #00d4ff;
                    font-weight: bold;
                }
                .req-section p {
                    margin: 0;
                    color: #475569;
                    line-height: 1.6;
                }
                .req-item strong {
                    color: #112c66;
                }
                .detail-section h3 {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1.3rem !important;
                    color: #112c66 !important;
                    margin-bottom: 25px !important;
                    border: none !important;
                    padding: 0 !important;
                }
                .detail-section h3::after { display: none; }
                .advantages-list {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 15px 40px;
                }
                .advantages-list li {
                    display: flex;
                    gap: 12px;
                    padding: 12px 0;
                    border-bottom: 1px solid #f1f5f9;
                    color: #475569;
                    font-weight: 500;
                }
                .check-icon {
                    color: #10b981;
                    font-size: 1rem;
                }
                .conclusion-card p {
                    color: #475569;
                    line-height: 1.8;
                    font-style: italic;
                    font-size: 1.05rem;
                }
                .action-hub {
                    margin-top: 60px;
                    background: linear-gradient(135deg, #112c66 0%, #061129 100%);
                    padding: 40px;
                    border-radius: 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #fff;
                }
                .hub-text h4 {
                    font-size: 1.5rem;
                    margin: 0 0 10px 0;
                }
                .hub-text p {
                    margin: 0;
                    color: rgba(255,255,255,0.7);
                }
                .whatsapp-cta-premium {
                    background: #25d366;
                    color: #fff !important;
                    padding: 18px 35px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
                }
                .whatsapp-cta-premium:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
                    background: #1eb956;
                }
                @media (max-width: 992px) {
                    .detail-grid {
                        grid-template-columns: 1fr;
                    }
                    .action-hub {
                        flex-direction: column;
                        text-align: center;
                        gap: 30px;
                    }
                }
                @media (max-width: 768px) {
                    .project-detail-modern {
                        padding: 25px !important;
                    }
                    .detail-hero {
                        padding: 30px 20px;
                        margin: -25px -25px 30px -25px;
                    }
                    .intro-card {
                        flex-direction: column;
                        padding: 20px;
                    }
                }
            `}} />
        </div>
    );
}

export default ProjectDetail;
