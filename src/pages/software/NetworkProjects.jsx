import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const networkProjects = [
    { id: "ns-1", title: "NS - 1: Network Intrusion Detection and Prevention System" },
    { id: "ns-2", title: "NS - 2: Real-time Network Traffic Monitoring and Analysis" },
    { id: "ns-3", title: "NS - 3: Advanced Firewall Implementation and Security Rules" },
    { id: "ns-4", title: "NS - 4: Secure VPN System with Multi-factor Authentication" },
    { id: "ns-5", title: "NS - 5: Network Packet Sniffer and Protocol Analyzer Tool" },
    { id: "ns-6", title: "NS - 6: Distributed Denial of Service (DDoS) Protection System" },
    { id: "ns-7", title: "NS - 7: End-to-End Data Encryption and Decryption Tool" },
    { id: "ns-8", title: "NS - 8: Automated Network Vulnerability Scanning and Reporting" },
    { id: "ns-9", title: "NS - 9: Role-Based Access Control and Authentication System" },
    { id: "ns-10", title: "NS - 10: Enterprise Network Security Audit and Compliance Tool" }
];

function NetworkProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Network Security Projects</h1>
                    <br /><br />
                    <ol>
                        {networkProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default NetworkProjects;
