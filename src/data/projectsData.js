export const projectsData = {
    // AI PROJECTS
    "ai-1": {
        id: "ai-1",
        category: "Artificial Intelligence",
        title: "Leaf Detection System using OpenCV Python",
        intro: "An advanced agricultural solution that uses computer vision to identify plant leaf diseases in real-time. This system helps farmers take immediate action to protect their crops.",
        image: "https://images.unsplash.com/photo-1530836362031-689b93666683?auto=format&fit=crop&q=80&w=800",
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
        title: "Chronic Obstructive Pulmonary Disease Prediction System",
        intro: "A healthcare-oriented artificial intelligence project that predicts the likelihood of COPD based on patient symptoms and medical history.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Assists doctors in early diagnosis",
            "Portable and accessible health monitoring",
            "Reduces the burden on medical facilities",
            "Highly scalable data-driven model"
        ],
        conclusion: "By leveraging ML, this system provides a vital early warning for patients, potentially saving lives through early intervention."
    },
    "ai-3": {
        id: "ai-3",
        category: "Artificial Intelligence",
        title: "College Placement System Using Python",
        intro: "A career-focused AI tool that analyzes student profiles and historical data to predict placement eligibility and college performance.",
        image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Streamlines the recruitment process",
            "Identifies key skill gaps for students",
            "Data-driven placement predictions",
            "Efficient management of student records"
        ],
        conclusion: "The system empowers both students and institutions by providing clarity and direction in the recruitment lifecycle."
    },

    // PYTHON PROJECTS
    "python-1": {
        id: "python-1",
        category: "Python",
        title: "PY - 1: AI Healthcare Bot System using Python",
        intro: "A comprehensive healthcare assistant that uses natural language processing to help patients identify symptoms and get medical guidance instantly.",
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "24/7 medical guidance availability",
            "Privacy-preserving symptom analysis",
            "Reduces hospital waiting times",
            "Built with robust Python frameworks"
        ],
        conclusion: "The AI Healthcare Bot is an essential tool for modern digital health, bridging the gap between patients and immediate medical information."
    },

    // IOT PROJECTS
    "iot-1": {
        id: "iot-1",
        category: "Internet of Things",
        title: "IOT Weather Reporting System using Arduino and Ras Pi",
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

    // JAVA PROJECTS
    "java-1": {
        id: "java-1",
        category: "Java",
        title: "JA - 1: Online Banking System using Java",
        intro: "A secure and robust web application designed to handle essential banking operations like fund transfers, account management, and transaction history using Java and enterprise frameworks.",
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
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
        advantages: [
            "Accurate predictions based on large datasets",
            "Scalable architecture for modern healthcare",
            "Improves patient-doctor communication",
            "Real-time analysis and reporting"
        ],
        conclusion: "The AI Healthcare Bot is at the forefront of the healthcare revolution, making professional medical advice more accessible."
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
        'ml': 'Machine Learning'
    };

    return {
        id: id,
        category: categoryMap[catt] || catt.toUpperCase(),
        title: `${catt.toUpperCase()} Project ${num}`,
        intro: `This project focuses on advanced implementation in the field of ${categoryMap[catt] || catt}. It utilizes modern frameworks and methodologies to solve complex problems.`,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", // Default tech image
        advantages: [
            "Optimized performance and scalability",
            "Industry-standard implementation",
            "User-friendly interface",
            "Comprehensive documentation"
        ],
        conclusion: "A robust project demonstrating the practical application of core technical concepts."
    };
};
