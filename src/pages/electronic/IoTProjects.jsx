import Sidebar from '../../components/Sidebar';
import '../../styles/projects.css';

const iotProjects = [
    "IOT - 01: IOT Weather Reporting System using Arduino and Ras Pi",
    "IOT - 02: Wearable Computer with Temperature Distance Sensors",
    "IOT - 03: Weather Imaging CubeSat with Telemetry Transmission",
    "IOT - 04: IOT IV Bag Monitoring and Alert System",
    "IOT - 05: IOT Water Pollution Monitor RC Boat",
    "IOT - 06: Mountain Climber Health & GPS Tracker",
    "IOT - 07: Contactless IOT Doorbell Ringing",
    "IOT - 08: IOT Smart Parking Using RFID(Radio Frequency Identification)",
    "IOT - 09: IOT Syringe Infusion Pump",
    "IOT - 10: IOT Contactless Covid Testing Booth Automation",
    "IOT - 11: IOT Social Distancing & Monitoring Robot For Queue",
    "IOT - 12: IOT Covid Patient Health Monitor in Quarantine",
    "IOT - 13: IOT based Manhole Detection and Monitoring System",
    "IOT - 14: IOT based Smart Energy Meter Monitoring with Theft Detection",
    "IOT - 15: IOT Health Monitoring Companion Robot",
    "IOT - 16: IOT Based Weather Station Airship",
    "IOT - 17: DIY 2G Android Phone with Gesture Interface",
    "IOT - 18: IOT based Three Phase Power Failure Monitoring with SMS Alerts",
    "IOT - 19: IOT based Intelligent Gas Leakage Detector Using Arduino",
    "IOT - 20: IOT Dog Daycare Robot",
    "IOT - 21: IOT 360° Aerial Surveillance UAV With IOT Camera",
    "IOT - 22: IOT Garbage Segregator & Bin Level Indicator",
    "IOT - 23: IOT Temperature & Mask Scan Entry System",
    "IOT - 24: IOT based Smart Agriculture Monitoring System Project",
    "IOT - 25: IOT Based Automatic Vehicle Accident Detection and Rescue System",
    "IOT - 26: Gas Leakage Detection with Buzzer System using Atmega",
    "IOT - 27: Greenhouse Monitoring and Control System using IOT Project",
    "IOT - 28: IOT Based Coal Mine Safety Monitoring and Alerting System",
    "IOT - 29: IOT Based Heart Monitoring System Using ECG",
    "IOT - 30: IOT based Anti-theft Flooring System using Raspberry Pi",
    "IOT - 31: Raspberry Pi based Weather Reporting Over IOT",
    "IOT - 32: IOT Based Monitoring System for Comatose Patients",
    "IOT - 33: IOT Early Flood Detection & Avoidance",
    "IOT - 34: IOT Garbage Monitoring Using Raspberry Pi",
    "IOT - 35: IOT Based Circuit Breaker Project",
    "IOT - 36: Women Safety Night Patrolling IOT Robot",
    "IOT - 37: IOT Mining Tracking & Worker Safety Helmet",
    "IOT - 38: IOT Flood Monitoring & Alerting System",
    "IOT - 39: IOT Prison Break Monitoring & Alerting System",
    "IOT - 40: Raspberry Pi Air and Noise Pollution Monitoring System Over IOT",
    "IOT - 41: IOT Energy Meter with Current, Voltage and Cost Monitoring System",
    "IOT - 42: IOT Industry Protection System Arduino",
    "IOT - 43: IOT Colour Based Product Sorting Machine Project",
    "IOT - 44: IOT Based Smart Energy Grid",
    "IOT - 45: IOT Based Paralysis Patient Health Care Project",
    "IOT - 46: IOT Based Car Parking System",
    "IOT - 47: IOT Based Smart Dustbin with IOT Notifications",
    "IOT - 48: IOT Smart Mirror with News & Temperature",
    "IOT - 49: IOT Garbage Monitoring with Weight Sensing",
    "IOT - 50: IOT Based Asset tracking System"
];

function IoTProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>IOT Projects</h1>
                    <br /><br />
                    <ol>
                        {iotProjects.map((project, index) => (
                            <li key={index}>
                                <a href="#">{project}</a>
                            </li>
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default IoTProjects;
