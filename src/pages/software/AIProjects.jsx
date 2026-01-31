import Sidebar from '../../components/Sidebar';
import '../../styles/projects.css';

const aiProjects = [
    "AI - 1: Leaf Detection System using OpenCV Python",
    "AI - 2: Chronic Obstructive Pulmonary Disease Prediction System",
    "AI - 3: College Placement System Using Python",
    "AI - 4: Face Recognition Attendance System for Employees using Python",
    "AI - 5: Liver Cirrhosis Prediction System using Random Forest",
    "AI - 6: Multiple Disease Prediction System using Machine Learning",
    "AI - 7: Secure Persona Prediction and Data Leakage Prevention System using Python",
    "AI - 8: Stroke Prediction System using Linear Regression",
    "AI - 9: Toxic Comment Classification System using Deep Learning",
    "AI - 10: Skin Disease Detection System Using CNN",
    "AI - 11: Signature Verification System Using CNN",
    "AI - 12: Heart Failure Prediction System",
    "AI - 13: Python Doctor Appointment Booking System",
    "AI - 14: Yoga Poses Detection using Open Pose",
    "AI - 15: Credit Card Fraud Detection System Python",
    "AI - 16: Automatic Pronunciation Mistake Detector",
    "AI - 17: Learning Disability Detector and Classifier System",
    "AI - 18: AI Mental Health Therapist Chatbot",
    "AI - 19: Ecommerce Fake Product Reviews Monitor and Deletion System",
    "AI - 20: Smart Time Table Generation Flutter App Using Genetic Algorithm",
    "AI - 21: Chatbot Assistant System using Python",
    "AI - 22: Dental Caries Detection System using Python",
    "AI - 23: Movie Success Prediction System using Python",
    "AI - 24: Speech Emotion Detection System using Python",
    "AI - 25: Student Feedback Review System using Python",
    "AI - 26: Use of Pose Estimation in Elderly People using Python",
    "AI - 27: Intelligent Video Surveillance Using Deep Learning System",
    "AI - 28: AI healthcare bot",
    "AI - 29: Music Genres Classification using KNN System",
    "AI - 30: Traffic Sign Recognition System using CNN",
    "AI - 31: Auto capture Selfie by Detecting Smile Python",
    "AI - 32: Face Recognition Attendance System using Python",
    "AI - 33: Human Detector and Counter using Python",
    "AI - 34: Pneumonia Detection using Chest X-Ray",
    "AI - 35: Music Recommendation System by Facial Emotion",
    "AI - 36: Parkinson's Detector System using Python",
    "AI - 37: Cryptocurrency price prediction using Machine Learning Python",
    "AI - 38: Depression Detection System using Python",
    "AI - 39: Car Lane Detection Using NumPy OpenCV Python",
    "AI - 40: Sign Language Recognition Using Python",
    "AI - 41: Signature verification System using Python",
    "AI - 42: Driver Drowsiness Detection System Using Python",
    "AI - 43: Predicting House Price Using Decision Tree",
    "AI - 44: Blockchain Based Antiques Verification System",
    "AI - 45: Facial Emotion Detection using Neural Networks",
    "AI - 46: Cancer Prediction using Naive Bayes",
    "AI - 47: Voice based Intelligent Virtual Assistance for Windows",
    "AI - 48: Online Logistic Chatbot System",
    "AI - 49: Transformer Conversational Chatbot in Python using TensorFlow 2.0",
    "AI - 50: Lane-Line Detection System in Python using OpenCV",
    "AI - 51: Facial Emotion Recognition and Detection in Python using Deep Learning",
    "AI - 52: Artificial Intelligence HealthCare Chatbot System",
    "AI - 53: Online Assignment Plagiarism Checker Project using Data Mining",
    "AI - 54: Teachers Automatic Time-Table Software Generation System using PHP",
    "AI - 55: Read Me My Book App",
    "AI - 56: Customer Targeted E-Commerce",
    "AI - 57: Android General Knowledge Chatbot",
    "AI - 58: Customer Focused Ecommerce Site with AI Bot",
    "AI - 59: Your Personal Nutritionist Using Fat Secret API",
    "AI - 60: Price Negotiator Ecommerce Chatbot System",
    "AI - 61: Personality Prediction System Through CV Analysis",
    "AI - 62: TV Show Popularity Analysis Using Data Mining",
    "AI - 63: Twitter Trend Analysis Using Latent Dirichlet Allocation",
    "AI - 64: Online Book Recommendation Using Collaborative Filtering",
    "AI - 65: Movie Success Prediction Using Data Mining Php",
    "AI - 66: Fake Product Review Monitoring & Removal For Genuine Ratings Php",
    "AI - 67: A Commodity Search System For Online Shopping Using Web Mining",
    "AI - 68: College Enquiry Chat Bot",
    "AI - 69: Stream Analysis For Career Choice Aptitude Tests",
    "AI - 70: Product Review Analysis For Genuine Rating",
    "AI - 71: Android Smart City Traveler",
    "AI - 72: Artificial Intelligence Dietician",
    "AI - 73: Heart Disease Prediction Project",
    "AI - 74: Smart Health Consulting Project",
    "AI - 75: Banking Bot Project",
    "AI - 76: Sentiment Based Movie Rating System",
    "AI - 77: Online AI Shopping With M-Wallet System",
    "AI - 78: Question paper generator system",
    "AI - 79: Student Information Chatbot Project",
    "AI - 80: Website Evaluation Using Opinion Mining",
    "AI - 81: Android Attendance System",
    "AI - 82: Intelligent Tourist System Project",
    "AI - 83: AI Desktop Partner",
    "AI - 84: Intelligent Chat Bot",
    "AI - 85: Stock Market Analysis and Prediction",
    "AI - 86: Automatic Answer Checker"
];

function AIProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Artificial Intelligence Projects</h1>
                    <br /><br />
                    <ol>
                        {aiProjects.map((project, index) => (
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

export default AIProjects;
