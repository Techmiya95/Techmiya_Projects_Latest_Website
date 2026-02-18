import React from 'react';
import SEO from '../../components/common/SEO';
import Sidebar from '../../components/Sidebar';

function LatestTech() {
    const blogs = [
        {
            title: "The Rise of Edge AI in 2026",
            date: "Feb 10, 2026",
            author: "Techmiya Team",
            excerpt: "Explore how Edge AI is transforming real-time data processing and making devices smarter than ever.",
            link: "#"
        },
        {
            title: "Blockchain Beyond Cryptocurrency",
            date: "Feb 05, 2026",
            author: "Admin",
            excerpt: "Discover the industrial applications of blockchain in supply chain and healthcare.",
            link: "#"
        },
        {
            title: "The Future of Quantum Computing",
            date: "Jan 28, 2026",
            author: "Tech Analyst",
            excerpt: "Everything you need to know about the upcoming quantum revolution in computing.",
            link: "#"
        }
    ];

    return (
        <div className="blog-page">
            <SEO
                title="Latest Technology Blogs | Techmiya Projects"
                description="Stay updated with the latest technology trends in AI, ML, IoT, and Blockchain. Expert insights and deep dives into the future of tech."
                keywords="latest technology, AI blogs, tech trends 2026, machine learning news, IoT breakthroughs"
            />

            <div className="container">
                <main className="main-content">
                    <header className="page-header">
                        <h1>Latest Technology Blogs</h1>
                        <p>Discover the latest breakthroughs and trends in the tech world.</p>
                    </header>

                    <div className="blog-list">
                        {blogs.map((blog, index) => (
                            <article key={index} className="blog-card">
                                <h2>{blog.title}</h2>
                                <div className="blog-meta">
                                    <span><i className="fa fa-calendar"></i> {blog.date}</span>
                                    <span><i className="fa fa-user"></i> {blog.author}</span>
                                </div>
                                <p>{blog.excerpt}</p>
                                <a href={blog.link} className="read-more">Read Full Blog <i className="fa fa-arrow-right"></i></a>
                            </article>
                        ))}
                    </div>
                </main>
                <Sidebar />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .blog-page {
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
                .blog-card {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    margin-bottom: 30px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                }
                .blog-card:hover {
                    transform: translateY(-5px);
                }
                .blog-card h2 {
                    color: #112c66;
                    margin-bottom: 15px;
                }
                .blog-meta {
                    display: flex;
                    gap: 20px;
                    color: #64748b;
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }
                .blog-card p {
                    color: #475569;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                .read-more {
                    color: #00d4ff;
                    text-decoration: none;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            `}} />
        </div>
    );
}

export default LatestTech;
