import { Link } from 'react-router-dom';

function ProjectList({ title, projects }) {
    return (
        <div className="main-content">
            <h1>{title}</h1>
            <br />
            <br />
            <ol>
                {projects.map((project, index) => (
                    <li key={index}>
                        <Link to={project.link || '#'}>{project.id}: {project.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ProjectList;
