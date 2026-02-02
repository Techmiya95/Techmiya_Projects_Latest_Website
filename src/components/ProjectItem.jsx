import { Link } from 'react-router-dom';

function ProjectItem({ id, title }) {
    return (
        <li className="project-item">
            <Link to={`/project/${id}`}>
                <span className="project-title">{title}</span>
                <span className="view-detail-btn">
                    View Details
                    <i className="fa fa-arrow-right"></i>
                </span>
            </Link>
        </li>
    );
}

export default ProjectItem;
