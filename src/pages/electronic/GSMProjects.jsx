import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const gsmProjects = [
    { id: "gsm-1", title: "GSM - 1: GSM Based Home Automation and Security System" },
    { id: "gsm-2", title: "GSM - 2: Real-time Vehicle Tracking and Monitoring using GSM" },
    { id: "gsm-3", title: "GSM - 3: Smart Security System with GSM Alerts and SMS" },
    { id: "gsm-4", title: "GSM - 4: GSM Based Smart Energy Metering and Billing" },
    { id: "gsm-5", title: "GSM - 5: Wireless Weather Station with GSM Data Transmission" },
    { id: "gsm-6", title: "GSM - 6: GSM Based Fire and Gas Leakage Alert System" },
    { id: "gsm-7", title: "GSM - 7: Remote Health Monitoring System using GSM" },
    { id: "gsm-8", title: "GSM - 8: GSM Based Smart Irrigation and Agricultural System" },
    { id: "gsm-9", title: "GSM - 9: SMS Based Water Level Controller and Monitor" },
    { id: "gsm-10", title: "GSM - 10: GSM Based Industrial Machine Monitoring and Control" }
];

function GSMProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>GSM Based Projects</h1>
                    <br /><br />
                    <ol>
                        {gsmProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default GSMProjects;
