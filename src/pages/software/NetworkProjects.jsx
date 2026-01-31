import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { networkProjects } from '../../data/projects';
import '../../styles/projects.css';

function NetworkProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Network Security Projects" projects={networkProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default NetworkProjects;
