import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const dataScienceProjects = [
    { id: "ds-1", title: "DS - 1: Data-Driven Sales Forecasting and Trend Analysis" },
    { id: "ds-2", title: "DS - 2: Customer Segmentation using K-Means Clustering" },
    { id: "ds-3", title: "DS - 3: Social Media Sentiment Analysis and Visualization" },
    { id: "ds-4", title: "DS - 4: Predictive Maintenance System for Industrial Assets" },
    { id: "ds-5", title: "DS - 5: Healthcare Analytics for Disease Outcome Prediction" },
    { id: "ds-6", title: "DS - 6: Financial Risk Assessment and Portfolio Optimization" },
    { id: "ds-7", title: "DS - 7: Retail Inventory Optimization using Data Mining" },
    { id: "ds-8", title: "DS - 8: Real-Time Traffic Pattern Analysis and Prediction" },
    { id: "ds-9", title: "DS - 9: Exploratory Data Analysis of Global Climate Change" },
    { id: "ds-10", title: "DS - 10: AI-Powered Recommendation System for E-learning" }
];

function DataScienceProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Data Science Projects</h1>
                    <br /><br />
                    <ol>
                        {dataScienceProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default DataScienceProjects;
