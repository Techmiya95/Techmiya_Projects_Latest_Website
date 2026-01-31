import { useState } from 'react';
import '../styles/contact.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendWhatsApp = (e) => {
        e.preventDefault();
        const phonenumber = "+916363760275";
        const url = `https://wa.me/${phonenumber}?text=` +
            `*Name:* ${formData.name}%0a` +
            `*Email:* ${formData.email}%0a` +
            `*Subject:* ${formData.subject}%0a` +
            `*Message:* ${formData.message}%0a%0a`;

        window.open(url, '_blank');
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>

            <form onSubmit={sendWhatsApp}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="subject">Subject Area:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <input type="submit" value="Submit via WhatsApp" />
            </form>

            <div className="contact-info">
                <div className="contact-details">
                    <h1>Contact Details</h1>
                    <p><strong>Phone:</strong> +91 6363760275</p>
                    <h2>Address</h2>
                    <p>#1400, 2nd Floor</p>
                    <p>28th main S & C Cross Rd</p>
                    <p>Jayanagar 9th Block, Bengaluru - 560069</p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7641139370116!2d77.5482270749186!3d12.986933587329856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d721715ea3d%3A0xf49700e44d994dc0!2sTechmiya%20Solutions!5e0!3m2!1sen!2sin!4v1707639104484!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
