import Sidebar from '../../components/Sidebar';
import ProjectItem from '../../components/ProjectItem';
import SEO from '../../components/common/SEO';
import '../../styles/projects.css';

const vlsiProjects = [
    { id: "vlsi-1", title: "VLSI - 1: 8-bit ALU Design using Verilog HDL" },
    { id: "vlsi-2", title: "VLSI - 2: UART Serial Communication Controller using VHDL" },
    { id: "vlsi-3", title: "VLSI - 3: Low Power D Flip-Flop Design using CMOS Technology" },
    { id: "vlsi-4", title: "VLSI - 4: 4-bit Ripple Carry Adder using Verilog" },
    { id: "vlsi-5", title: "VLSI - 5: RISC Processor Core Design using Verilog HDL" },
    { id: "vlsi-6", title: "VLSI - 6: Digital Clock Design using FPGA and Verilog" },
    { id: "vlsi-7", title: "VLSI - 7: AES Encryption Engine on FPGA" },
    { id: "vlsi-8", title: "VLSI - 8: Traffic Light Controller using Finite State Machine" },
    { id: "vlsi-9", title: "VLSI - 9: FIR Filter Design using Verilog for Signal Processing" },
    { id: "vlsi-10", title: "VLSI - 10: Memory Controller Design using VHDL" },
];

function VLSIProjects() {
    return (
        <>
            <SEO
                title="VLSI Projects for Final Year Engineering Students | Techmiya"
                description="Explore top VLSI & FPGA projects for final year ECE students. We provide Verilog, VHDL, and CMOS design projects with full documentation, simulation, and source code."
                keywords="vlsi projects, fpga projects, verilog projects, vhdl projects, cmos design, ece final year projects, digital design projects, semiconductor projects"
            />
            <div className="container">
                <div className="main-content">
                    <h1>VLSI & FPGA Design Projects</h1>
                    <ol>
                        {vlsiProjects.map((project, index) => (
                            <ProjectItem key={index} id={project.id} title={project.title} />
                        ))}
                    </ol>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default VLSIProjects;
