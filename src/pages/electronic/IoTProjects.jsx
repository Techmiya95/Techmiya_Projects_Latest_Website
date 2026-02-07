import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const iotProjects = [
    { id: "iot-1", title: "IOT - 1: IOT Weather Reporting System using Arduino and Ras Pi" },
    { id: "iot-2", title: "IOT - 2: IoT Smart Energy Grid using Arduino" },
    { id: "iot-3", title: "IOT - 3: Air Pollution Monitoring System using ESP8266" },
    { id: "iot-4", title: "IOT - 4: IoT Smart Irrigation System using Arduino" },
    { id: "iot-5", title: "IOT - 5: Home Automation System using ESP32" },
    { id: "iot-6", title: "IOT - 6: IoT Garbage Monitoring System" },
    { id: "iot-7", title: "IOT - 7: Smart Health Monitoring System using IoT" },
    { id: "iot-8", title: "IOT - 8: IoT Flood Monitoring and Alerting System" },
    { id: "iot-9", title: "IOT - 9: Smart Street Light System using IoT" },
    { id: "iot-10", title: "IOT - 10: IoT Smart Door Lock System" }
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
