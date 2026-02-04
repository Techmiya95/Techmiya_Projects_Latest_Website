import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const androidProjects = [
    { id: "ad-1", title: "AD - 1: Food Delivery App using Android Studio" },
    { id: "ad-2", title: "AD - 2: E-commerce Mobile Application in Android" },
    { id: "ad-3", title: "AD - 3: Fitness Tracker and Health Monitor App" },
    { id: "ad-4", title: "AD - 4: Social Media Application with Real-time Chat" },
    { id: "ad-5", title: "AD - 5: Online Quiz Application with Admin Panel" },
    { id: "ad-6", title: "AD - 6: Weather Forecasting App using API" },
    { id: "ad-7", title: "AD - 7: News Reader App with Category Selection" },
    { id: "ad-8", title: "AD - 8: Music Player Application with Playlist Management" },
    { id: "ad-9", title: "AD - 9: Personal Expense Tracker and Budget Planner" },
    { id: "ad-10", title: "AD - 10: Language Learning App with Flashcards" }
];

function AndroidProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Android Projects</h1>
                    <br /><br />
                    <ol>
                        {androidProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default AndroidProjects;
