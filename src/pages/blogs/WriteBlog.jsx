import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import Sidebar from '../../components/Sidebar';

function WriteBlog() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        category: 'AI & ML',
        content: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to an API
        console.log("Blog Submission:", formData);
        setSubmitted(true);
    };

    return (
        <div className="write-blog-page">
            <SEO
                title="Write a Blog | Share Your Tech Knowledge | Techmiya"
                description="Contribute to the Techmiya community. Share your technical knowledge, project experiences, and latest tech insights by writing a blog."
                keywords="write a blog, tech contribution, guest post technology, share tech knowledge, engineering blog submission"
            />

            <div className="container">
                <main className="main-content">
                    <header className="page-header">
                        <h1>Write a Blog</h1>
                        <p>Share your innovation and insights with the world.</p>
                    </header>

                    {submitted ? (
                        <div className="success-message">
                            <i className="fa fa-check-circle"></i>
                            <h2>Thank You!</h2>
                            <p>Your blog submission has been received. Our team will review it and get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="blog-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Blog Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Catchy title for your blog"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Technology Category</label>
                                <select name="category" value={formData.category} onChange={handleChange}>
                                    <option>AI & ML</option>
                                    <option>IoT & Embedded</option>
                                    <option>Blockchain</option>
                                    <option>Cloud Computing</option>
                                    <option>Cyber Security</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Blog Content (Markdown or Plain Text)</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows="10"
                                    placeholder="Write your blog content here..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit Blog Idea</button>
                        </form>
                    )}
                </main>
                <Sidebar />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .write-blog-page {
                    background: #f8fafc;
                    padding: 50px 0;
                }
                .page-header {
                    margin-bottom: 40px;
                    border-bottom: 2px solid #00d4ff;
                    padding-bottom: 20px;
                }
                .page-header h1 {
                    color: #112c66;
                    font-size: 2.5rem;
                }
                .blog-form {
                    background: white;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                }
                .form-group {
                    margin-bottom: 25px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: #112c66;
                    font-weight: 600;
                }
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #cbd5e1;
                    border-radius: 8px;
                    transition: border-color 0.3s;
                }
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    border-color: #00d4ff;
                    outline: none;
                }
                .submit-btn {
                    background: #112c66;
                    color: white;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .submit-btn:hover {
                    background: #1e40af;
                }
                .success-message {
                    text-align: center;
                    background: white;
                    padding: 50px;
                    border-radius: 15px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                }
                .success-message i {
                    font-size: 4rem;
                    color: #10b981;
                    margin-bottom: 20px;
                }
            `}} />
        </div>
    );
}

export default WriteBlog;
