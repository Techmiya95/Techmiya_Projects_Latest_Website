import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { arduinoProjects } from '../../data/projects';
import '../../styles/projects.css';

function ArduinoProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Arduino Projects" projects={arduinoProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default ArduinoProjects;
