import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { cloudProjects } from '../../data/projects';
import '../../styles/projects.css';

function CloudComputingProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Cloud Computing Projects" projects={cloudProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default CloudComputingProjects;
