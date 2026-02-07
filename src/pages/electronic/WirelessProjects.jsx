import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const wirelessProjects = [
    { id: "wl-1", title: "WL - 1: Bluetooth Based Smart Home Automation System" },
    { id: "wl-2", title: "WL - 2: WiFi Enabled Security Camera and Surveillance" },
    { id: "wl-3", title: "WL - 3: Zigbee Based Wireless Sensor Network for Industry" },
    { id: "wl-4", title: "WL - 4: LoRa Based Long Range Communication System" },
    { id: "wl-5", title: "WL - 5: Contactless Payment System using NFC Technology" },
    { id: "wl-6", title: "WL - 6: RFID Based Advanced Access Control System" },
    { id: "wl-7", title: "WL - 7: Wireless Power Transfer and Charging Solution" },
    { id: "wl-8", title: "WL - 8: Multi-node Mesh Network for Smart Cities" },
    { id: "wl-9", title: "WL - 9: Wireless Industrial Monitoring and Control System" },
    { id: "wl-10", title: "WL - 10: 5G Network Simulation and Performance Analysis" }
];

function WirelessProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Wireless Communication Projects</h1>
                    <br /><br />
                    <ol>
                        {wirelessProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default WirelessProjects;
