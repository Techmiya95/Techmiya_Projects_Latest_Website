import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const javaProjects = [
    { id: "java-1", title: "JA - 1: Online Banking System using Java" },
    { id: "java-2", title: "JA - 2: Hospital Management System in Java" },
    { id: "java-3", title: "JA - 3: Student Information System using Java Swing" },
    { id: "java-4", title: "JA - 4: Library Management System in Java" },
    { id: "java-5", title: "JA - 5: Hotel Reservation System using Java and MySQL" },
    { id: "java-6", title: "JA - 6: Employee Payroll Management System in Java" },
    { id: "java-7", title: "JA - 7: Online Quiz System using Java" },
    { id: "java-8", title: "JA - 8: E-commerce Website in Java" },
    { id: "java-9", title: "JA - 9: Inventory Management System in Java" },
    { id: "java-10", title: "JA - 10: Social Media Application in Java" }
];

function JavaProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>List of Java Projects</h1>
                    <br /><br />
                    <ol>
                        {javaProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default JavaProjects;
