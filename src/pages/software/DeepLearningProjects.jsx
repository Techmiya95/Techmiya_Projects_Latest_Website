import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { deepLearningProjects } from '../../data/projects';
import '../../styles/projects.css';

function DeepLearningProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Deep Learning Projects" projects={deepLearningProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default DeepLearningProjects;
