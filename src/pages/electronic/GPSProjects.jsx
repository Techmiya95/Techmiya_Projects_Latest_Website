import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const gpsProjects = [
    { id: "gps-1", title: "GPS - 1: Real-time Vehicle Tracking and Navigation System" },
    { id: "gps-2", title: "GPS - 2: Child Safety Tracker with GPS and GSM" },
    { id: "gps-3", title: "GPS - 3: Smart Asset Tracking and Monitoring Solution" },
    { id: "gps-4", title: "GPS - 4: GPS Based Geofencing and Alerting System" },
    { id: "gps-5", title: "GPS - 5: Fitness Activity Tracker with GPS Path Mapping" },
    { id: "gps-6", title: "GPS - 6: Precision Navigation System for Drones" },
    { id: "gps-7", title: "GPS - 7: Solar Powered GPS Animal Tracking Tag" },
    { id: "gps-8", title: "GPS - 8: Emergency Panic Button with GPS Location Send" },
    { id: "gps-9", title: "GPS - 9: Fleet Management and Route Optimization System" },
    { id: "gps-10", title: "GPS - 10: Digital Speedometer and Path Logging with GPS" }
];

function GPSProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>GPS Based Projects</h1>
                    <br /><br />
                    <ol>
                        {gpsProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default GPSProjects;
