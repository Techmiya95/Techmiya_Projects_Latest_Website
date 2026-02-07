import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const rpiProjects = [
    { id: "rpi-1", title: "RPI - 1: Smart Home Hub with Raspberry Pi" },
    { id: "rpi-2", title: "RPI - 2: Network Attached Storage (NAS) using Raspberry Pi" },
    { id: "rpi-3", title: "RPI - 3: Weather Station with Data Logging using Raspberry Pi" },
    { id: "rpi-4", title: "RPI - 4: Security Camera System with Motion Detection" },
    { id: "rpi-5", title: "RPI - 5: Voice Controlled Home Automation using Raspberry Pi" },
    { id: "rpi-6", title: "RPI - 6: Web Server and Database hosting on Raspberry Pi" },
    { id: "rpi-7", title: "RPI - 7: Media Center with Kodi on Raspberry Pi" },
    { id: "rpi-8", title: "RPI - 8: Pi-Hole Network-wide Ad Block System" },
    { id: "rpi-9", title: "RPI - 9: FM Radio Station using Raspberry Pi" },
    { id: "rpi-10", title: "RPI - 10: Retro Gaming Console (RetroPie) using Raspberry Pi" }
];

import SEO from '../../components/common/SEO';

function RaspberryPiProjects() {
    return (
        <>
            <SEO
                title="Raspberry Pi Projects for Engineering Students | IoT & Embedded"
                description="Discover innovative Raspberry Pi projects including Smart Home Hubs, NAS, Weather Stations, and AI-based applications for final year students."
                keywords="Raspberry Pi projects, IoT projects, embedded systems, smart home, automation"
            />
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Raspberry Pi Projects</h1>
                    <br /><br />
                    <ol>
                        {rpiProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default RaspberryPiProjects;
