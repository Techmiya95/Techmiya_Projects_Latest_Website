import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { raspberryPiProjects } from '../../data/projects';
import '../../styles/projects.css';

function RaspberryPiProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Raspberry Pi Projects" projects={raspberryPiProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default RaspberryPiProjects;
