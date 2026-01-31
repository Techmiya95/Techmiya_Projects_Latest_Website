import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { sensorProjects } from '../../data/projects';
import '../../styles/projects.css';

function SensorProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Sensor Based Projects" projects={sensorProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default SensorProjects;
