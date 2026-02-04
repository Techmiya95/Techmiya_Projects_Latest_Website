import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const deepLearningProjects = [
    { id: "dl-1", title: "DL - 1: Image Segmentation using U-Net Architecture" },
    { id: "dl-2", title: "DL - 2: Object Detection and Tracking with Faster R-CNN" },
    { id: "dl-3", title: "DL - 3: Neural Machine Translation using Seq2Seq Models" },
    { id: "dl-4", title: "DL - 4: Generative Adversarial Networks (GANs) for Image Synthesis" },
    { id: "dl-5", title: "DL - 5: Autonomous Driving System with Path Planning" },
    { id: "dl-6", title: "DL - 6: Advanced Medical Image Analysis using deep CNNs" },
    { id: "dl-7", title: "DL - 7: Video Classification and Human Action Recognition" },
    { id: "dl-8", title: "DL - 8: Text-to-Speech Synthesis System using Deep Learning" },
    { id: "dl-9", title: "DL - 9: Facial Emotion and Expression Recognition System" },
    { id: "dl-10", title: "DL - 10: Super Resolution Image Reconstruction using DL" }
];

function DeepLearningProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Deep Learning Projects</h1>
                    <br /><br />
                    <ol>
                        {deepLearningProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default DeepLearningProjects;
