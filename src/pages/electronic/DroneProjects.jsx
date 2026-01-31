import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { droneProjects } from '../../data/projects';
import '../../styles/projects.css';

function DroneProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Drone and Robotics Projects" projects={droneProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default DroneProjects;
