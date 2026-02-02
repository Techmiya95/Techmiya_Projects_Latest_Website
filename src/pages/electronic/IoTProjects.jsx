import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const iotProjects = [
    { id: "iot-1", title: "IOT Weather Reporting System using Arduino and Ras Pi" },
    { id: "iot-2", title: "IoT Smart Energy Grid using Arduino" },
    { id: "iot-3", title: "Air Pollution Monitoring System using ESP8266" },
    { id: "iot-4", title: "IoT Smart Irrigation System using Arduino" },
    { id: "iot-5", title: "Home Automation System using ESP32" },
    { id: "iot-6", title: "IoT Garbage Monitoring System" },
    { id: "iot-7", title: "Smart Health Monitoring System using IoT" },
    { id: "iot-8", title: "IoT Flood Monitoring and Alerting System" },
    { id: "iot-9", title: "Smart Street Light System using IoT" },
    { id: "iot-10", title: "IoT Smart Door Lock System" }
];

function IoTProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Internet of Things (IoT) Projects</h1>
                    <br /><br />
                    <ol>
                        {iotProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default IoTProjects;
