import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const arduinoProjects = [
    { id: "ard-1", title: "ARD - 1: Home Automation System using Arduino" },
    { id: "ard-2", title: "ARD - 2: Smart Irrigation System using Arduino" },
    { id: "ard-3", title: "ARD - 3: Line Following Robot using Arduino" },
    { id: "ard-4", title: "ARD - 4: Weather Station using Arduino" },
    { id: "ard-5", title: "ARD - 5: Digital Door Lock System using Arduino" },
    { id: "ard-6", title: "ARD - 6: Smart Dustbin using Arduino" },
    { id: "ard-7", title: "ARD - 7: Fire Detection System using Arduino" },
    { id: "ard-8", title: "ARD - 8: Ultrasonic Radar System using Arduino" },
    { id: "ard-9", title: "ARD - 9: Heart Rate Monitor using Arduino" },
    { id: "ard-10", title: "ARD - 10: Bluetooth Controlled Car using Arduino" }
];

function ArduinoProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Arduino Projects</h1>
                    <br /><br />
                    <ol>
                        {arduinoProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default ArduinoProjects;
