import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const droneProjects = [
    { id: "dr-1", title: "DR - 1: Autonomous Delivery Drone with GPS Navigation" },
    { id: "dr-2", title: "DR - 2: Surveillance Drone with Real-time Video Streaming" },
    { id: "dr-3", title: "DR - 3: Multi-sensor Agricultural Monitoring Drone" },
    { id: "dr-4", title: "DR - 4: Search and Rescue Drone with Thermal Imaging" },
    { id: "dr-5", title: "DR - 5: High-speed Racing Drone with FPV Camera" },
    { id: "dr-6", title: "DR - 6: Aerial Photography and Videography Drone" },
    { id: "dr-7", title: "DR - 7: Mapping and 3D Modeling Drone System" },
    { id: "dr-8", title: "DR - 8: Infrastructure Inspection Drone with AI detection" },
    { id: "dr-9", title: "DR - 9: Cooperative Swarm Drone Formation System" },
    { id: "dr-10", title: "DR - 10: Underwater ROV Drone for Marine Exploration" }
];

function DroneProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Drone and Robotics Projects</h1>
                    <br /><br />
                    <ol>
                        {droneProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default DroneProjects;
