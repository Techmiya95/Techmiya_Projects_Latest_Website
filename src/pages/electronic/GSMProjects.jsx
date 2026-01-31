import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { gsmProjects } from '../../data/projects';
import '../../styles/projects.css';

function GSMProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="GSM Based Projects" projects={gsmProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default GSMProjects;
