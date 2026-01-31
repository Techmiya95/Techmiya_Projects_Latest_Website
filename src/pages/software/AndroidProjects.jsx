import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { androidProjects } from '../../data/projects';
import '../../styles/projects.css';

function AndroidProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Android Projects" projects={androidProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default AndroidProjects;
