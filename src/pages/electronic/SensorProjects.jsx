import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const sensorProjects = [
    { id: "sn-1", title: "SN - 1: Digital Temperature and Humidity Monitoring System" },
    { id: "sn-2", title: "SN - 2: Motion Detection and Intruder Alert System" },
    { id: "sn-3", title: "SN - 3: Smart Air Quality Monitor with Gas Sensors" },
    { id: "sn-4", title: "SN - 4: Soil Moisture Sensing for Automatic Irrigation" },
    { id: "sn-5", title: "SN - 5: Digital Light Intensity Measurement System" },
    { id: "sn-6", title: "SN - 6: Ultrasonic Proximity and Distance Measurement" },
    { id: "sn-7", title: "SN - 7: Industrial Pressure and Load Monitoring System" },
    { id: "sn-8", title: "SN - 8: Non-contact Heart Rate and Spo2 Monitor" },
    { id: "sn-9", title: "SN - 9: Water Level and Purity Monitoring System" },
    { id: "sn-10", title: "SN - 10: Multi-Gas Leakage Detection and Warning System" }
];

function SensorProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Sensor Based Projects</h1>
                    <br /><br />
                    <ol>
                        {sensorProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default SensorProjects;
