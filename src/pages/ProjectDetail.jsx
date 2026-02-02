import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import Sidebar from '../components/Sidebar';
import '../styles/projects.css';

function ProjectDetail() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    if (!project) {
        return (
            <div className="container">
                <div className="main-content">
                    <h2>Project Not Found</h2>
                    <Link to="/projectexpo">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content project-detail-page">
                    <nav className="breadcrumb">
                        <Link to="/projectexpo">Projects</Link> / <span>{project.category}</span>
                    </nav>

                    <h1>{project.title}</h1>

                    <div className="project-detail-content">
                        <div className="project-intro-section">
                            <h3>Introduction</h3>
                            <p>{project.intro}</p>
                        </div>

                        <div className="project-image-showcase">
                            <img src={project.image} alt={project.title} className="detail-main-image" />
                            <div className="brand-badge">
                                <img src="/images/techmiya_logo_official.jpg" alt="Techmiya" />
                            </div>
                        </div>

                        <div className="project-advantages-section">
                            <h3>Key Advantages</h3>
                            <ul>
                                {project.advantages.map((adv, idx) => (
                                    <li key={idx}><i className="fa fa-check-circle"></i> {adv}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-conclusion-section">
                            <h3>Conclusion</h3>
                            <p>{project.conclusion}</p>
                        </div>

                        <div className="detail-actions">
                            <a
                                href={`https://api.whatsapp.com/send?phone=916363760275&text=Hello Techmiya, I am interested in the project: ${project.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button"
                            >
                                Enquire About This Project
                            </a>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default ProjectDetail;
