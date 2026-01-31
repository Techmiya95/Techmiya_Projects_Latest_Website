import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { gpsProjects } from '../../data/projects';
import '../../styles/projects.css';

function GPSProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="GPS Based Projects" projects={gpsProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default GPSProjects;
