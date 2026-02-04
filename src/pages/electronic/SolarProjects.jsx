import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const solarProjects = [
    { id: "sl-1", title: "SL - 1: Smart Solar Power Monitoring and Management System" },
    { id: "sl-2", title: "SL - 2: Dual-Axis Solar Tracking System for Maximum Efficiency" },
    { id: "sl-3", title: "SL - 3: Solar Based Automatic Water Heating and Distribution" },
    { id: "sl-4", title: "SL - 4: Intelligent Solar Street Lighting with Auto Intensity Control" },
    { id: "sl-5", title: "SL - 5: Portable Solar Battery Charger with Fast Charging" },
    { id: "sl-6", title: "SL - 6: Solar Powered Automatic Irrigation and Crop Monitoring" },
    { id: "sl-7", title: "SL - 7: Solar MPPT Charge Controller for Renewable Energy" },
    { id: "sl-8", title: "SL - 8: Solar Grid-Tie Inverter System Performance Analysis" },
    { id: "sl-9", title: "SL - 9: Solar Powered Electric Vehicle Charging Station" },
    { id: "sl-10", title: "SL - 10: Hybrid Solar-Wind Power Generation and Storage" }
];

function SolarProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Solar Based Projects</h1>
                    <br /><br />
                    <ol>
                        {solarProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default SolarProjects;
