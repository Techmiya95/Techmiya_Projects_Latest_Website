import Sidebar from '../../components/Sidebar';
import '../../styles/projects.css';

const pythonProjects = [
    "PF - 1: AI Healthcare Bot System using Python",
    "PF - 2: AI Mental Health Therapist Chatbot",
    "PF - 3: Ecommerce Fake Product Reviews Monitor and Deletion System",
    "PF - 4: File Transfer System using Elliptic Curve Cryptography",
    "PF - 5: Smart Campus Surveillance and Guidance System",
    "PF - 6: Travel and Tourism Website using Python",
    "PF - 7: Chronic Obstructive Pulmonary Disease Prediction System",
    "PF - 8: College Placement System Using Python",
    "PF - 9: Three-Level Password System Using Python",
    "PF - 10: Skin Disease Detection System Using CNN",
    "PF - 11: Signature Verification System Using CNN",
    "PF - 12: Face Recognition Attendance System for Employees using Python",
    "PF - 13: Liver Cirrhosis Prediction System using Random Forest",
    "PF - 14: Multiple Disease Prediction System using Machine Learning",
    "PF - 15: Online Auction System using Python",
    "PF - 16: Online Voting System Project Python",
    "PF - 17: Secure Persona Prediction and Data Leakage Prevention System using Python",
    "PF - 18: Stroke Prediction System using Linear Regression",
    "PF - 19: Toxic Comment Classification System using Deep Learning",
    "PF - 20: Online Election System Using Python",
    "PF - 21: Library Management System Using Python",
    "PF - 22: Heart Failure Prediction System",
    "PF - 23: Python Doctor Appointment Booking System",
    "PF - 24: Yoga Poses Detection using OpenPose",
    "PF - 25: Credit Card Fraud Detection System Python",
    "PF - 26: Automatic Pronunciation Mistake Detector",
    "PF - 27: Learning Disability Detector and Classifier System",
    "PF - 28: Online Stock Photo Ecommerce Website",
    "PF - 29: Travel Together – A Travel Buddy Finder System",
    "PF - 30: Ambulance Booking System using Python",
    "PF - 31: Chatbot Assistant System using Python",
    "PF - 32: Child Vaccination Management System using Python",
    "PF - 33: Dental Caries Detection System using Python",
    "PF - 34: Movie Success Prediction System using Python",
    "PF - 35: Online Complaint Registration & Management System using Python",
    "PF - 36: Organ Donation System using Python",
    "PF - 37: Speech Emotion Detection System using Python",
    "PF - 38: Student Feedback Review System using Python",
    "PF - 39: Use of Pose Estimation in Elderly People using Python",
    "PF - 40: Vehicle Number Plate Detection and Recognition Python",
    "PF - 41: Green Screen Background Remover using OpenCV Python",
    "PF - 42: Intelligent Video Surveillance Using Deep Learning System",
    "PF - 43: Leaf Detection System using OpenCV Python",
    "PF - 44: Music Genres Classification using KNN System",
    "PF - 45: Traffic Sign Recognition System using CNN",
    "PF - 46: Auto capture Selfie by Detecting Smile Python",
    "PF - 47: Face Recognition Attendance System using Python",
    "PF - 48: Human Detector and Counter using Python",
    "PF - 49: Pneumonia Detection using Chest X-Ray",
    "PF - 50: Music Recommendation System by Facial Emotion",
    "PF - 51: Parkinson's Detector System using Python",
    "PF - 52: Website Vulnerability Scanning System",
    "PF - 53: Bone Fracture Detection using Python",
    "PF - 54: Cryptocurrency price prediction using Machine Learning Python",
    "PF - 55: Depression Detection System using Python",
    "PF - 56: Car Lane Detection Using NumPy OpenCV Python",
    "PF - 57: Sign Language Recognition Using Python",
    "PF - 58: Signature verification System using Python",
    "PF - 59: Blockchain Tender/Contract Management System in Python",
    "PF - 60: Driver Drowsiness Detection System Using Python",
    "PF - 61: Detecting Brain Tumours and Alzheimer's Using Python",
    "PF - 62: Electronics Ecommerce Website Python",
    "PF - 63: Python Image Forgery Detection using MD5 OpenCV",
    "PF - 64: Online Nursery Plant Shopping Website Python",
    "PF - 65: Knee Osteoarthritis Detection & Severity Prediction",
    "PF - 66: Arcade Shooter Game Python",
    "PF - 67: Space Shooter Combat Game Python",
    "PF - 68: Online PDF to Text Converter & Language Translator Python",
    "PF - 69: Online Fake Logo Detection System",
    "PF - 70: Students Grievance Redressal Cell Python",
    "PF - 71: Online Fashion Stylist Website",
    "PF - 72: Facial Emotion Detection using Neural Networks",
    "PF - 73: Flight Ticket Price Predictor using Python",
    "PF - 74: Automatic Salt Segmentation with UNET in Python using Deep Learning",
    "PF - 75: Transformer Conversational Chatbot in Python using TensorFlow 2.0",
    "PF - 76: Lane-Line Detection System in Python using OpenCV",
    "PF - 77: Online Sports Turf Playground Booking System",
    "PF - 78: Price Comparison Website for Online Shopping Project",
    "PF - 79: Online College Admission Management System Project",
    "PF - 80: Web Based Blood Donation Management System Project",
    "PF - 81: Online Property Management System Project",
    "PF - 82: Online Employee Payroll Management System Project",
    "PF - 83: Online Grocery Recommender System Using Collaborative Filtering",
    "PF - 84: Online Shoes Shopping Website Project",
    "PF - 85: Online Organic Health Food Store Project",
    "PF - 86: Colour Detection Using OpenCV Python Project",
    "PF - 87: Logistics Management System Project in Python",
    "PF - 88: Web Based Place Finder Using Django and GeoDjango",
    "PF - 89: Online Transaction Fraud Detection using Python & Backlogging on E-Commerce",
    "PF - 90: Graphical Password Authentication System by Using Pass Point Scheme",
    "PF - 91: Ecommerce Food Products Sales Forecasting System",
    "PF - 92: Predicting House Prices Using Linear Regression",
    "PF - 93: Online Employee Recruitment System Project in Python",
    "PF - 94: Decision Tree Based Tourism Recommendation System"
];

function PythonProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>List of Python Projects</h1>
                    <br /><br />
                    <ol>
                        {pythonProjects.map((project, index) => (
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

export default PythonProjects;
