import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <h3>Watch Videos</h3>
            <iframe
                src="https://www.youtube.com/embed/0Fe2Lpk91R0?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                title="Video 1"
            ></iframe>
            <iframe
                src="https://www.youtube.com/embed/UgF29StIDt4?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                title="Video 2"
            ></iframe>
            <br />
            <br />
            <h3>Latest Projects</h3>
            <a href="#">Smart Irrigation System</a>
            <a href="#">Home Automation System</a>
            <a href="#">Remote Health Monitoring</a>
            <a href="#">Vehicle Tracking System</a>
            <a href="#">AI-Powered Smart Mirror</a>
            <a href="#">IoT-Enabled Smart Dustbin</a>
            <a href="#">Edge AI for Object Recognition</a>
            <a href="#">Gesture-Controlled Smart Home</a>
            <a href="#">IoT Smart Farming Solution</a>
            <br />
            <br />
            <br />
            <h3>Domains</h3>
            <Link to="/electronic-projects/iot">Internet of Things</Link>
            <Link to="/software-projects/ai">Artificial Intelligence</Link>
            <Link to="/software-projects/machine-learning">Machine Learning</Link>
            <Link to="/domains/embedded-systems">Embedded Systems</Link>
            <Link to="/software-projects/blockchain">Blockchain</Link>
            <a href="#">Quantum Computing</a>
            <br />
            <br />
            <iframe
                src="https://www.youtube.com/embed/0Fe2Lpk91R0?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                title="Video 3"
            ></iframe>
            <iframe
                src="https://www.youtube.com/embed/UgF29StIDt4?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                title="Video 4"
            ></iframe>
            <iframe
                src="https://www.youtube.com/embed/0Fe2Lpk91R0?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                title="Video 5"
            ></iframe>
        </div>
    );
}

export default Sidebar;
