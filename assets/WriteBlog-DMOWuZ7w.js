import{j as e,S as c}from"./index-C3umVAhF.js";import{b as a}from"./vendor-3PyanEma.js";import{S as d}from"./Sidebar-DAZ6kdNs.js";function h(){const[o,n]=a.useState({name:"",email:"",title:"",category:"AI & ML",content:""}),[s,i]=a.useState(!1),r=t=>{n({...o,[t.target.name]:t.target.value})},l=t=>{t.preventDefault(),console.log("Blog Submission:",o),i(!0)};return e.jsxs("div",{className:"write-blog-page",children:[e.jsx(c,{title:"Write a Blog | Share Your Tech Knowledge | Techmiya",description:"Contribute to the Techmiya community. Share your technical knowledge, project experiences, and latest tech insights by writing a blog.",keywords:"write a blog, tech contribution, guest post technology, share tech knowledge, engineering blog submission"}),e.jsxs("div",{className:"container",children:[e.jsxs("main",{className:"main-content",children:[e.jsxs("header",{className:"page-header",children:[e.jsx("h1",{children:"Write a Blog"}),e.jsx("p",{children:"Share your innovation and insights with the world."})]}),s?e.jsxs("div",{className:"success-message",children:[e.jsx("i",{className:"fa fa-check-circle"}),e.jsx("h2",{children:"Thank You!"}),e.jsx("p",{children:"Your blog submission has been received. Our team will review it and get back to you soon."})]}):e.jsxs("form",{className:"blog-form",onSubmit:l,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:o.name,onChange:r,placeholder:"Enter your full name",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Your Email"}),e.jsx("input",{type:"email",name:"email",value:o.email,onChange:r,placeholder:"Enter your email address",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Blog Title"}),e.jsx("input",{type:"text",name:"title",value:o.title,onChange:r,placeholder:"Catchy title for your blog",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Technology Category"}),e.jsxs("select",{name:"category",value:o.category,onChange:r,children:[e.jsx("option",{children:"AI & ML"}),e.jsx("option",{children:"IoT & Embedded"}),e.jsx("option",{children:"Blockchain"}),e.jsx("option",{children:"Cloud Computing"}),e.jsx("option",{children:"Cyber Security"}),e.jsx("option",{children:"Others"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Blog Content (Markdown or Plain Text)"}),e.jsx("textarea",{name:"content",value:o.content,onChange:r,rows:"10",placeholder:"Write your blog content here...",required:!0})]}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Blog Idea"})]})]}),e.jsx(d,{})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})}export{h as default};
