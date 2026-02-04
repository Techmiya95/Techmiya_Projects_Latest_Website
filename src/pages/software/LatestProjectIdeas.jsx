import React from 'react';
import Sidebar from '../../components/Sidebar';
import { latestProjectsData } from '../../data/latestProjectsData';
import '../../styles/projects.css';

function LatestProjectIdeas() {
    return (
        <div className="latest-projects-wrapper">
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <div className="latest-header">
                        <h1>Latest Project Ideas 2025</h1>
                        <p className="subtitle">Explore 100+ cutting-edge project topics for final year and research.</p>
                    </div>

                    {latestProjectsData.map((section, idx) => (
                        <div key={idx} className="project-category-section">
                            <h2 className="category-title">{section.category}</h2>
                            <div className="projects-grid">
                                {section.projects.map((project, pIdx) => (
                                    <div key={pIdx} className="latest-project-card">
                                        <div className="card-number">{(pIdx + 1).toString().padStart(2, '0')}</div>
                                        <div className="card-content">
                                            <h3>{project}</h3>
                                            <div className="card-footer">
                                                <span className="tag">2025 Edition</span>
                                                <span className="tech-tag">{section.category.split(' ')[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Sidebar />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .latest-projects-wrapper {
                    background: #f8fafc;
                }
                .latest-header {
                    text-align: center;
                    margin-bottom: 50px;
                }
                .subtitle {
                    color: #64748b;
                    font-size: 1.1rem;
                    margin-top: -20px;
                }
                .project-category-section {
                    margin-bottom: 60px;
                }
                .category-title {
                    font-size: 1.8rem;
                    color: #112c66;
                    margin-bottom: 30px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #00d4ff;
                    display: inline-block;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 25px;
                }
                .latest-project-card {
                    background: #fff;
                    border-radius: 15px;
                    padding: 25px;
                    position: relative;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .latest-project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
                    border-color: #00d4ff;
                }
                .card-number {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    font-size: 2rem;
                    font-weight: 800;
                    color: rgba(0, 212, 255, 0.1);
                    line-height: 1;
                }
                .card-content h3 {
                    font-size: 1.1rem;
                    color: #1e293b;
                    line-height: 1.5;
                    margin-bottom: 20px;
                    font-weight: 600;
                }
                .card-footer {
                    display: flex;
                    gap: 10px;
                    margin-top: auto;
                }
                .tag {
                    font-size: 0.75rem;
                    background: #f1f5f9;
                    color: #64748b;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-weight: 500;
                }
                .tech-tag {
                    font-size: 0.75rem;
                    background: #e0f2fe;
                    color: #0369a1;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-weight: 600;
                }
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}} />
        </div>
    );
}

export default LatestProjectIdeas;
