export const projectsData = {
    // AI PROJECTS
    "ai-1": {
        id: "ai-1",
        category: "Artificial Intelligence",
        title: "AI - 1: Leaf Detection System using OpenCV Python",
        intro: "An advanced agricultural solution that uses computer vision to identify plant leaf diseases in real-time. This system helps farmers take immediate action to protect their crops.",
        image: "/images/leaf_detection.jpg",
        advantages: [
            "Early disease detection reduces crop loss",
            "High accuracy using OpenCV algorithms",
            "Easy to use for non-technical users",
            "Saves time compared to manual inspection"
        ],
        conclusion: "The Leaf Detection System represents a significant step forward in automated agriculture, providing a reliable tool for crop health monitoring."
    },
    "ai-2": {
        id: "ai-2",
        category: "Artificial Intelligence",
        title: "AI - 2: Chronic Obstructive Pulmonary Disease Prediction",
        intro: "A healthcare-oriented artificial intelligence project that predicts the likelihood of COPD based on patient symptoms and medical history.",
        image: "/images/copd_prediction.jpg",
        advantages: [
            "Assists doctors in early diagnosis",
            "Portable and accessible health monitoring",
            "Reduces the burden on medical facilities",
            "Highly scalable data-driven model"
        ],
        conclusion: "By leveraging ML, this system provides a vital early warning for patients, potentially saving lives through early intervention."
    },
    "ai-4": {
        id: "ai-4",
        category: "Artificial Intelligence",
        title: "AI - 4: Face Recognition Attendance System",
        intro: "A modern automated attendance system that uses advanced facial recognition to mark employees' presence securely and efficiently.",
        image: "/images/face_attendance.png",
        advantages: [
            "Eliminates manual errors and proxy attendance",
            "Real-time tracking and reporting",
            "Touchless and hygienic attendance marking",
            "Easy integration with HR systems"
        ],
        conclusion: "This system streamlines HR operations and ensures high accuracy in personnel tracking."
    },
    "ai-10": {
        id: "ai-10",
        category: "Artificial Intelligence",
        title: "AI - 10: Skin Disease Detection System Using CNN",
        intro: "A deep learning-based application that analyzes skin lesions and detects potential dermatological conditions early.",
        image: "/images/skin_disease.png",
        advantages: [
            "Quick and preliminary diagnostic tool",
            "High precision using Convolutional Neural Networks",
            "Accessible from mobile devices",
            "Supports medical professionals in decision making"
        ],
        conclusion: "The skin disease detection system provides an efficient way to monitor skin health using AI."
    },

    // PYTHON PROJECTS
    "python-1": {
        id: "python-1",
        category: "Python",
        title: "PY - 1: AI Healthcare Bot System using Python",
        intro: "A comprehensive healthcare assistant that uses natural language processing to help patients identify symptoms and get medical guidance instantly.",
        image: "/images/healthcare_bot.png",
        advantages: [
            "24/7 medical guidance availability",
            "Privacy-preserving symptom analysis",
            "Reduces hospital waiting times",
            "Built with robust Python frameworks"
        ],
        conclusion: "The AI Healthcare Bot is an essential tool for modern digital health, bridging the gap between patients and immediate medical information."
    },
    "python-36": {
        id: "python-36",
        category: "Python",
        title: "PY - 36: Parkinson's Detector System using Python",
        intro: "A diagnostic tool that uses machine learning algorithms to detect early signs of Parkinson's disease based on vocal and movement data.",
        image: "/images/parkinsons_detector.png",
        advantages: [
            "Facilitates early medical intervention",
            "Non-invasive screening process",
            "High accuracy with trained datasets",
            "Detailed reporting for doctors"
        ],
        conclusion: "This system provides a reliable screening method for early Parkinson's detection."
    },

    // IOT PROJECTS
    "iot-1": {
        id: "iot-1",
        category: "Internet of Things",
        title: "IOT Weather Reporting System",
        intro: "A real-time environmental monitoring system that collects and transmits weather data (temperature, humidity, pressure) to a cloud server using Arduino and Raspberry Pi.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Real-time data access globally",
            "Highly accurate environmental sensors",
            "Scalable for smart city applications",
            "Low power consumption design"
        ],
        conclusion: "The IOT Weather Reporting System provides critical data for climate analysis and personal weather tracking with minimal infrastructure."
    },
    "iot-2": {
        id: "iot-2",
        category: "Internet of Things",
        title: "Smart Agriculture System using IoT",
        intro: "An automated irrigation and soil health monitoring system that optimizes water usage and crop yield using soil moisture sensors and wireless communication.",
        image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Reduces water wastage significantly",
            "Automated monitoring and control",
            "Real-time soil health alerts",
            "Increased agricultural productivity"
        ],
        conclusion: "IoT-based smart agriculture is the future of sustainable farming."
    },

    // JAVA PROJECTS
    "java-1": {
        id: "java-1",
        category: "Java",
        title: "JA - 1: Online Banking System using Java",
        intro: "A secure and robust web application designed to handle essential banking operations like fund transfers, account management, and transaction history.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Highly secure multi-tier architecture",
            "Real-time transaction processing",
            "User-friendly dashboard for account control",
            "Scalable database integration"
        ],
        conclusion: "The Online Banking System demonstrates how Java's security features and object-oriented nature make it ideal for financial applications."
    },

    // ML PROJECTS
    "ml-1": {
        id: "ml-1",
        category: "Machine Learning",
        title: "ML - 1: AI Healthcare Bot System using Python",
        intro: "An advanced machine learning implementation that provides personalized healthcare advice and symptom tracking for better patient outcomes.",
        image: "/images/healthcare_bot.png",
        advantages: [
            "Accurate predictions based on large datasets",
            "Scalable architecture for modern healthcare",
            "Improves patient-doctor communication",
            "Real-time analysis and reporting"
        ],
        conclusion: "The AI Healthcare Bot is at the forefront of the healthcare revolution, making professional medical advice more accessible."
    },
    "ml-11": {
        id: "ml-11",
        category: "Machine Learning",
        title: "ML - 11: Signature Verification System Using CNN",
        intro: "A machine learning project that uses convolutional neural networks to verify handwritten signatures against registered templates.",
        image: "/images/signature_verification.png",
        advantages: [
            "Prevents forgery in financial and legal documents",
            "High verification speed and accuracy",
            "Automated processing of signed forms",
            "Enhanced security for authentication"
        ],
        conclusion: "The Signature Verification System offers a reliable solution for automated document authentication."
    }
};

// Generic Generator for fallback (thousands of projects)
export const getProjectById = (id) => {
    if (projectsData[id]) return projectsData[id];

    // Fallback logic for ids like 'ai-4', 'python-10'
    const [catt, num] = id.split('-');
    const categoryMap = {
        'ai': 'Artificial Intelligence',
        'python': 'Python',
        'iot': 'Internet of Things',
        'java': 'Java',
        'ml': 'Machine Learning',
        'android': 'Android',
        'blockchain': 'Blockchain',
        'cloud': 'Cloud Computing',
        'ds': 'Data Science',
        'dl': 'Deep Learning',
        'network': 'Networking'
    };

    const imageMap = {
        'ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        'python': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        'iot': 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
        'java': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        'ml': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
        'android': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800',
        'blockchain': 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
    };

    const categoryName = categoryMap[catt] || catt.toUpperCase();
    const projectNum = num || "";

    return {
        id: id,
        category: categoryName,
        title: `${categoryName} Project ${projectNum}`,
        intro: `This project focuses on advanced implementation in the field of ${categoryName}. It utilizes modern frameworks and methodologies to solve complex industrial and research problems.`,
        image: imageMap[catt] || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Optimized performance and scalability",
            "Industry-standard implementation",
            "User-friendly interface and experience",
            "Comprehensive technical documentation"
        ],
        conclusion: `A robust project demonstrating the practical application of core technical concepts in ${categoryName}.`
    };
};
