import Sidebar from '../../components/Sidebar';
import '../../styles/projects.css';

const javaProjects = [
    "JA - 1: Online Banking System using Java",
    "JA - 2: Hospital Management System in Java",
    "JA - 3: Student Information System using Java Swing",
    "JA - 4: Library Management System in Java",
    "JA - 5: Hotel Reservation System using Java and MySQL",
    "JA - 6: Employee Payroll Management System in Java",
    "JA - 7: Online Quiz System using Java",
    "JA - 8: E-commerce Website in Java",
    "JA - 9: Inventory Management System in Java",
    "JA - 10: Social Media Application in Java",
    "JA - 11: Attendance Management System using Java Swing",
    "JA - 12: Railway Reservation System in Java",
    "JA - 13: Airline Reservation System using Java and SQL",
    "JA - 14: Online Movie Ticket Booking System in Java",
    "JA - 15: College Management System using Java and Hibernate",
    "JA - 16: Online Exam System in Java",
    "JA - 17: Employee Leave Management System using Java",
    "JA - 18: Car Rental System in Java",
    "JA - 19: Online Course Registration System using Java Swing",
    "JA - 20: Budget Management System in Java",
    "JA - 21: Online Auction System using Java and MySQL",
    "JA - 22: Mobile Store Management System in Java",
    "JA - 23: Content Management System (CMS) in Java",
    "JA - 24: Blood Bank Management System using Java",
    "JA - 25: Payroll System in Java and MySQL",
    "JA - 26: Complaint Management System using Java Swing",
    "JA - 27: Gym Management System in Java",
    "JA - 28: Hotel Management System using Java and Hibernate",
    "JA - 29: Online Voting System in Java",
    "JA - 30: Online News Portal in Java",
    "JA - 31: Event Management System using Java and SQL",
    "JA - 32: Health Record Management System in Java",
    "JA - 33: Tour and Travel Management System using Java Swing",
    "JA - 34: Employee Task Management System in Java",
    "JA - 35: Inventory Tracking System using Java and MySQL",
    "JA - 36: Recruitment Management System in Java",
    "JA - 37: Employee Performance Management System using Java",
    "JA - 38: Online Property Management System in Java",
    "JA - 39: Online Course Evaluation System using Java",
    "JA - 40: Human Resource Management System in Java",
    "JA - 41: College Admission System using Java Swing",
    "JA - 42: Online Grocery Shopping System in Java",
    "JA - 43: Expense Tracker System using Java",
    "JA - 44: Student Result Management System in Java",
    "JA - 45: Task Scheduler System using Java Swing",
    "JA - 46: Railway Ticket Reservation System in Java",
    "JA - 47: Online Matrimonial System using Java and MySQL",
    "JA - 48: Employee Attendance System in Java",
    "JA - 49: Online Complaint Management System using Java Swing",
    "JA - 50: Movie Recommendation System in Java"
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

export default JavaProjects;
