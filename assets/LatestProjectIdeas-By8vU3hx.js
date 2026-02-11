import{j as e,S as n}from"./index-BIZe9V2T.js";import{S as c}from"./Sidebar-aFpomKBy.js";import{l as o}from"./latestProjectsData-q9Tugle_.js";/* empty css                 */import{L as d}from"./vendor-3PyanEma.js";function f(){return e.jsxs("div",{className:"latest-projects-wrapper",children:[e.jsx(n,{title:"100+ Latest Project Ideas 2026",description:"Discover 100+ innovative project ideas for 2026 in AI, Machine Learning, IoT, Blockchain, and more. Perfect for final year engineering students.",keywords:"project ideas 2026, final year projects, trending project topics, AI project ideas, IoT project ideas"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"latest-header",children:[e.jsx("h1",{children:"Latest Project Ideas 2026"}),e.jsxs("p",{className:"subtitle",children:["Explore ",o.reduce((t,r)=>t+r.projects.length,0),"+ cutting-edge project topics for final year and research in 2026."]})]}),o.map((t,r)=>e.jsxs("div",{className:"project-category-section",children:[e.jsx("h2",{className:"category-title",children:t.category}),e.jsx("div",{className:"projects-grid",children:t.projects.map((s,a)=>{const i=`latest-${r}-${a}`;return e.jsxs(d,{to:`/project/${i}`,className:"latest-project-card",children:[e.jsx("div",{className:"card-number",children:(a+1).toString().padStart(2,"0")}),e.jsxs("div",{className:"card-content",children:[e.jsx("h3",{children:s}),e.jsx("div",{className:"card-footer",children:e.jsx("span",{className:"tag",children:"2026 Edition"})})]})]},a)})})]},r))]}),e.jsx(c,{})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
                    text-decoration: none;
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
            `}})]})}export{f as default};
