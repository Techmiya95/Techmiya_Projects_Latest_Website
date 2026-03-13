import { useState, useEffect } from 'react';
import '../styles/bottom-announcement.css';

function BottomAnnouncement() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        projectIdea: ''
    });

    useEffect(() => {
        // Show the bar after a short delay on home page
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const phoneNumber = "917338631971";
        const message = `Hello Techmiya,\n\nI am interested in starting a project.\n\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Project Idea:* ${formData.projectIdea || 'Not specified'}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        setIsModalOpen(false);
        setFormData({ name: '', contact: '', projectIdea: '' });
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="bottom-announcement-bar">
                <div className="announcement-content">
                    <i className="fa fa-rocket"></i>
                    <span>Build with confidence</span>
                </div>
                <button className="enroll-now-btn" onClick={() => setIsModalOpen(true)}>
                    Enroll Now
                </button>
            </div>

            {isModalOpen && (
                <div className="enroll-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="enroll-modal" onClick={(e) => e.stopPropagation()}>
                        <i className="fa fa-times close-modal" onClick={() => setIsModalOpen(false)}></i>
                        <h2>Start building your project</h2>
                        <form className="enroll-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contact Number / Email</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Phone or email"
                                    required
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Project Idea (Optional)</label>
                                <textarea
                                    name="projectIdea"
                                    placeholder="Describe what you want to build"
                                    rows="4"
                                    value={formData.projectIdea}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="enroll-submit-btn">
                                Submit Interest
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default BottomAnnouncement;
