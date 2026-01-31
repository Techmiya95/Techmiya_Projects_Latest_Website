import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { wirelessProjects } from '../../data/projects';
import '../../styles/projects.css';

function WirelessProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Wireless Communication Projects" projects={wirelessProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default WirelessProjects;
