import Sidebar from '../../components/Sidebar';
import '../../styles/projects.css';

const mlProjects = [
    "ML - 1: AI Healthcare Bot System using Python",
    "ML - 2: Chronic Obstructive Pulmonary Disease Prediction System",
    "ML - 3: College Placement System Using Python",
    "ML - 4: Face Recognition Attendance System for Employees using Python",
    "ML - 5: Liver Cirrhosis Prediction System using Random Forest",
    "ML - 6: Multiple Disease Prediction System using Machine Learning",
    "ML - 7: Secure Persona Prediction and Data Leakage Prevention System using Python",
    "ML - 8: Stroke Prediction System using Linear Regression",
    "ML - 9: Toxic Comment Classification System using Deep Learning",
    "ML - 10: Skin Disease Detection System Using CNN",
    "ML - 11: Signature Verification System Using CNN",
    "ML - 12: Heart Failure Prediction System",
    "ML - 13: Yoga Poses Detection using OpenPose",
    "ML - 14: Credit Card Fraud Detection System Python",
    "ML - 15: Automatic Pronunciation Mistake Detector",
    "ML - 16: Learning Disability Detector and Classifier System",
    "ML - 17: AI Mental Health Therapist Chatbot",
    "ML - 18: Ecommerce Fake Product Reviews Monitor and Deletion System",
    "ML - 19: Smart Time Table Generation Flutter App Using Genetic Algorithm",
    "ML - 20: Chatbot Assistant System using Python",
    "ML - 21: Dental Caries Detection System using Python",
    "ML - 22: Movie Success Prediction System using Python",
    "ML - 23: Speech Emotion Detection System using Python",
    "ML - 24: Student Feedback Review System using Python",
    "ML - 25: Use of Pose Estimation in Elderly People using Python",
    "ML - 26: Intelligent Video Surveillance Using Deep Learning System",
    "ML - 27: Leaf Detection System using OpenCV Python",
    "ML - 28: Music Genres Classification using KNN System",
    "ML - 29: Traffic Sign Recognition System using CNN",
    "ML - 30: Auto capture Selfie by Detecting Smile Python",
    "ML - 31: Face Recognition Attendance System using Python",
    "ML - 32: Human Detector and Counter using Python",
    "ML - 33: Pneumonia Detection using Chest X-Ray",
    "ML - 34: Music Recommendation System by Facial Emotion",
    "ML - 35: Parkinson's Detector System using Python",
    "ML - 36: Vehicle Maintenance and Mileage Tracker App",
    "ML - 37: Cryptocurrency price prediction using Machine Learning Python",
    "ML - 38: Depression Detection System using Python",
    "ML - 39: Car Lane Detection Using NumPy OpenCV Python",
    "ML - 40: Sign Language Recognition Using Python",
    "ML - 41: Signature verification System using Python",
    "ML - 42: Driver Drowsiness Detection System Using Python",
    "ML - 43: Predicting House Price Using Decision Tree",
    "ML - 44: Detecting Brain Tumours and Alzheimer's Using Python",
    "ML - 45: Text Translation App Using Google API",
    "ML - 46: AI-Based Picture Translation App",
    "ML - 47: Mental Health Check app using NLP Flutter",
    "ML - 48: Python Image Forgery Detection using MD5 OpenCV",
    "ML - 49: Knee Osteoarthritis Detection & Severity Prediction",
    "ML - 50: Arcade Shooter Game Python",
    "ML - 51: Online Fake Logo Detection System",
    "ML - 52: Doctor Appointment with disease Prediction App",
    "ML - 53: Facial Emotion Detection using Neural Networks",
    "ML - 54: Cancer Prediction using Naive Bayes",
    "ML - 55: Tour Recommender App Using Collaborative Filtering",
    "ML - 56: Driver Drowsiness Detection System for Accident Prevention",
    "ML - 57: Automatic Salt Segmentation with UNET in Python using Deep Learning",
    "ML - 58: Transformer Conversational Chatbot in Python using TensorFlow 2.0",
    "ML - 59: Lane-Line Detection System in Python using OpenCV",
    "ML - 60: Facial Emotion Recognition and Detection in Python using Deep Learning",
    "ML - 61: Diabetes Prediction Using Data Mining",
    "ML - 62: Data Mining for Sales Prediction in Tourism Industry",
    "ML - 63: Higher Education Access Prediction Software",
    "ML - 64: Hotel Recommendation System Based on Hybrid Recommendation Model",
    "ML - 65: Detecting Fraud Apps Using Sentiment Analysis",
    "ML - 66: Artificial Intelligence HealthCare Chatbot System",
    "ML - 67: Online Assignment Plagiarism Checker Project using Data Mining",
    "ML - 68: Teachers Automatic Time-Table Software Generation System using PHP",
    "ML - 69: Read Me My Book App",
    "ML - 70: Customer Targeted E-Commerce",
    "ML - 71: Android General Knowledge Chatbot",
    "ML - 72: Customer Focused Ecommerce Site with AI Bot",
    "ML - 73: Your Personal Nutritionist Using Fat Secret API",
    "ML - 74: Price Negotiator Ecommerce Chatbot System",
    "ML - 75: Personality Prediction System Through CV Analysis",
    "ML - 76: TV Show Popularity Analysis Using Data Mining",
    "ML - 77: Twitter Trend Analysis Using Latent Dirichlet Allocation",
    "ML - 78: Online Book Recommendation Using Collaborative Filtering",
    "ML - 79: Movie Success Prediction Using Data Mining Php",
    "ML - 80: Fake Product Review Monitoring & Removal for Genuine Ratings Php",
    "ML - 81: A Commodity Search System for Online Shopping Using Web Mining",
    "ML - 82: Data Mining for Automated Personality Classification",
    "ML - 83: Web Data Mining to Detect Online Spread of Terrorism"
];

function MachineLearningProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Machine Learning Projects</h1>
                    <br /><br />
                    <ol>
                        {mlProjects.map((project, index) => (
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

export default MachineLearningProjects;
