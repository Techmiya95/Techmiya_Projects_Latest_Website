import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const mlProjects = [
    { id: "ml-1", title: "ML - 1: AI Healthcare Bot System using Python" },
    { id: "ml-2", title: "ML - 2: Chronic Obstructive Pulmonary Disease Prediction System" },
    { id: "ml-3", title: "ML - 3: College Placement System Using Python" },
    { id: "ml-4", title: "ML - 4: Face Recognition Attendance System for Employees using Python" },
    { id: "ml-5", title: "ML - 5: Liver Cirrhosis Prediction System using Random Forest" },
    { id: "ml-6", title: "ML - 6: Multiple Disease Prediction System using Machine Learning" },
    { id: "ml-7", title: "ML - 7: Secure Persona Prediction and Data Leakage Prevention System using Python" },
    { id: "ml-8", title: "ML - 8: Stroke Prediction System using Linear Regression" },
    { id: "ml-9", title: "ML - 9: Toxic Comment Classification System using Deep Learning" },
    { id: "ml-10", title: "ML - 10: Skin Disease Detection System Using CNN" }
];

function MachineLearningProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Machine Learning Projects</h1>
                    <br /><br />
                    <ol>
                        {mlProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default MachineLearningProjects;
