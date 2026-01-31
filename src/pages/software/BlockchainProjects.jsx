import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { blockchainProjects } from '../../data/projects';
import '../../styles/projects.css';

function BlockchainProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Blockchain Projects" projects={blockchainProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default BlockchainProjects;
