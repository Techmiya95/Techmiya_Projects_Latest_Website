import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const cloudProjects = [
    { id: "cc-1", title: "CC - 1: Cloud-Based File Storage and Sharing System" },
    { id: "cc-2", title: "CC - 2: Serverless Application Development using AWS Lambda" },
    { id: "cc-3", title: "CC - 3: Cloud-Based Customer Relationship Management (CRM)" },
    { id: "cc-4", title: "CC - 4: Multi-Cloud Deployment and Management Platform" },
    { id: "cc-5", title: "CC - 5: Secure Cloud Architecture for E-commerce" },
    { id: "cc-6", title: "CC - 6: Scalable Microservices Orchestration on Cloud" },
    { id: "cc-7", title: "CC - 7: Cloud-Based Data Analytics and Visualization" },
    { id: "cc-8", title: "CC - 8: Automated Cloud Infrastructure Resource Provisioning" },
    { id: "cc-9", title: "CC - 9: Disaster Recovery and Backup Solutions in Cloud" },
    { id: "cc-10", title: "CC - 10: Cloud Monitoring and Alerting Dashboard System" }
];

function CloudComputingProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Cloud Computing Projects</h1>
                    <br /><br />
                    <ol>
                        {cloudProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default CloudComputingProjects;
