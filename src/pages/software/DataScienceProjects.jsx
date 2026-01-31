import ProjectList from '../../components/ProjectList';
import Sidebar from '../../components/Sidebar';
import { dataScienceProjects } from '../../data/projects';
import '../../styles/projects.css';

function DataScienceProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <ProjectList title="Data Science Projects" projects={dataScienceProjects} />
                <Sidebar />
            </div>
        </>
    );
}

export default DataScienceProjects;
