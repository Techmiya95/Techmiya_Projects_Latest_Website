import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { solarProjects } from '../../data/projects';
import '../../styles/projects.css';

function SolarProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Solar Based Projects" projects={solarProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default SolarProjects;
