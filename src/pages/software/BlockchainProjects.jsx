import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import '../../styles/projects.css';

const blockchainProjects = [
    { id: "bc-1", title: "BC - 1: Cryptocurrency Wallet with Secure Key Management" },
    { id: "bc-2", title: "BC - 2: Supply Chain Management using Blockchain Technology" },
    { id: "bc-3", title: "BC - 3: Smart Contract System for Decentralized Voting" },
    { id: "bc-4", title: "BC - 4: NFT Marketplace for Digital Assets" },
    { id: "bc-5", title: "BC - 5: Blockchain-Based Land Registry System" },
    { id: "bc-6", title: "BC - 6: Secure Document Verification using Blockchain" },
    { id: "bc-7", title: "BC - 7: Decentralized Finance (DeFi) Application" },
    { id: "bc-8", title: "BC - 8: Blockchain-Based E-Voting System" },
    { id: "bc-9", title: "BC - 9: Decentralized Identity Management System" },
    { id: "bc-10", title: "BC - 10: Real Estate Asset Tokenization Platform" }
];

function BlockchainProjects() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="container">
                <div className="main-content">
                    <h1>Blockchain Projects</h1>
                    <br /><br />
                    <ol>
                        {blockchainProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default BlockchainProjects;
