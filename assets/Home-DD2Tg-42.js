import{j as e}from"./index-X4Xuv0F6.js";import{b as n}from"./vendor-BqpI3quz.js";const h=[{name:"Vajra",review:"I have tried many tools, but this one stands out.",rating:4,image:"/images/user1.jpeg"},{name:"Hamsa Lekha R",review:"The software provided by Techmiya Solutions has been a game-changer for us.",rating:5,image:"/images/user2.jpeg"},{name:"Tejaswini",review:"Working with Techmiya Solutions was a breeze!",rating:4.5,image:"/images/user3.jpeg"},{name:"Varsha HD",review:"Techmiya Solutions revolutionized the way we handle our business processes.",rating:5,image:"/images/user4.jpeg"},{name:"Trupthi",review:"The customer support from Techmiya Solutions is exceptional.",rating:4,image:"/images/user5.jpeg"},{name:"Sanjay",review:"We've been using Techmiya Solutions for over a year, and it's been a game-changer.",rating:4,image:"/images/user6.jpeg"},{name:"Prasad",review:"I was impressed by how quickly Techmiya Solutions understood our business needs and delivered a solution that exceeded our expectations.",rating:4.5,image:"/images/user7.jpeg"},{name:"Tameem",review:"The ease of use and customization options are fantastic.",rating:5,image:"/images/user8.jpeg"},{name:"Mohan",review:"Techmiya Solutions' software is exactly what we needed. It's fast, reliable, and incredibly easy to navigate.",rating:4.5,image:"/images/user9.jpeg"},{name:"Adil",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user10.jpeg"},{name:"Mudashir",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user11.jpeg"}];function j({rating:r}){const c=Math.floor(r),t=r%1!==0,a=5-c-(t?1:0);return e.jsxs(e.Fragment,{children:[[...Array(c)].map((s,i)=>e.jsx("i",{className:"fa fa-star"},`full-${i}`)),t&&e.jsx("i",{className:"fa fa-star-half-o"}),[...Array(a)].map((s,i)=>e.jsx("i",{className:"fa fa-star-o"},`empty-${i}`))]})}function u(){const r=[...h,...h],[c,t]=n.useState(!1),a=n.useRef(null);return n.useEffect(()=>{let s;const i=new IntersectionObserver(m=>{m.forEach(d=>{d.isIntersecting&&!c&&(s=setTimeout(()=>{t(!0)},800))})},{threshold:.1});return a.current&&i.observe(a.current),()=>{a.current&&i.unobserve(a.current),s&&clearTimeout(s)}},[c]),e.jsx("section",{className:"testimonials",ref:a,children:e.jsxs("div",{className:"testimonial-container",children:[e.jsx("h2",{children:"Hear From Our Customers"}),e.jsx("div",{className:`testimonial-slider ${c?"animate":""}`,children:r.map((s,i)=>e.jsxs("div",{className:"testimonial-col",children:[e.jsx("img",{loading:"lazy",src:s.image,alt:"Techmiya review"}),e.jsxs("div",{children:[e.jsx("p",{children:s.review}),e.jsx("h3",{children:s.name}),e.jsx(j,{rating:s.rating})]})]},i))})]})})}const p=[{id:"1",videoId:"0Fe2Lpk91R0"},{id:"2",videoId:"UgF29StIDt4"},{id:"3",videoId:"0Fe2Lpk91R0"},{id:"4",videoId:"UgF29StIDt4"},{id:"5",videoId:"0Fe2Lpk91R0"},{id:"6",videoId:"UgF29StIDt4"}];function f(){const[r,c]=n.useState(p),[t,a]=n.useState(!1),s=n.useRef(null);n.useEffect(()=>{},[void 0,"UC_x5XG1OV2P6uYZ5ujfWXBw"]);const d=[...r,...r];return n.useEffect(()=>{let o;const l=new IntersectionObserver(g=>{g.forEach(x=>{x.isIntersecting&&!t&&(o=setTimeout(()=>{a(!0)},800))})},{threshold:.1});return s.current&&l.observe(s.current),()=>{s.current&&l.unobserve(s.current),o&&clearTimeout(o)}},[t,r]),e.jsx("section",{className:"shorts",ref:s,children:e.jsxs("div",{className:"shorts-container",children:[e.jsx("h2",{children:"Our Projects"}),e.jsx("div",{className:`shorts-slider ${t?"animate":""}`,children:d.map((o,l)=>e.jsx("div",{className:"shorts-col",children:e.jsx("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${o.videoId}?autoplay=0&hl=en&cc_lang_pref=en&cc_load_policy=1&mute=1&loop=1`,title:"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,loading:"lazy"})},l))})]})})}function y(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"page1",style:{backgroundImage:"url('/images/collage.png')"},children:[e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"text-box",children:[e.jsx("p",{className:"hero-keywords",children:e.jsx("strong",{children:"Expert Guidance for Final Year Projects, IEEE Projects, and Project for Students."})}),e.jsx("h1",{children:"Techmiya Projects"}),e.jsx("p",{children:"Empowering the next generation of innovators where boundless creativity converges with cutting-edge technology."})]})]}),e.jsxs("section",{className:"final",children:[e.jsx("h2",{children:"Final Year Project"}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"final-year",id:"final-year",children:[e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/softwareprojects.png",alt:"Software Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/electronicsprojects.png",alt:"Electronics Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/IT.png",alt:"IT Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/collage.png",alt:"College Projects"})})]})})]}),e.jsx("section",{className:"latest-cta",children:e.jsx("div",{className:"cta-container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("span",{className:"badge",children:"New for 2026"}),e.jsx("h2",{children:"100+ Latest Project Ideas"}),e.jsx("p",{children:"Stay ahead with our curated list of 2026's most innovative project topics in AI, LLM, RAG, Blockchain, and Edge AI."}),e.jsxs("div",{className:"cta-features",children:[e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Categorized by Tech"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Industry Relevant"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Research Oriented"]})]}),e.jsxs("a",{href:"/software-projects/latest-ideas-2026",className:"cta-main-btn",children:["View All Project Ideas ",e.jsx("i",{className:"fa fa-arrow-right"})]})]})})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .latest-cta {
                    padding: 80px 20px;
                    background: linear-gradient(135deg, #112c66 0%, #061129 100%);
                    color: white;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                }
                .cta-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                .latest-cta::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                }
                .badge {
                    background: #00d4ff;
                    color: #112c66;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    display: inline-block;
                    margin-bottom: 20px;
                }
                .cta-content h2 {
                    font-size: clamp(2rem, 5vw, 3.5rem) !important;
                    margin-bottom: 20px;
                    color: white !important;
                }
                .cta-content p {
                    font-size: 1.2rem;
                    color: rgba(255,255,255,0.8);
                    max-width: 700px;
                    margin: 0 auto 40px;
                }
                .cta-features {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                }
                .feat {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 500;
                    color: #00d4ff;
                }
                .cta-main-btn {
                    display: inline-block;
                    padding: 18px 40px;
                    background: white;
                    color: #112c66 !important;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                .cta-main-btn:hover {
                    background: #00d4ff;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.3);
                }
            `}}),e.jsx(u,{}),e.jsx(f,{}),e.jsxs("section",{className:"faq",children:[e.jsx("h2",{children:"Frequently Asked Questions"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do you provide final year project guidance?"}),e.jsx("p",{children:"Yes, we provide full project development, documentation, and demo support."}),e.jsx("h3",{children:"Can students register online for projects?"}),e.jsx("p",{children:"Yes, students can register for project expo, games, and final year projects online."}),e.jsx("h3",{children:"Do you offer IEEE and real-world projects?"}),e.jsx("p",{children:"Yes, we provide IEEE + real-world industry projects for all branches."})]})]}),e.jsxs("section",{id:"feature",children:[e.jsxs("div",{className:"welcome",children:[e.jsx("p",{children:"WELCOME TO TECHMIYA"}),e.jsx("h2",{children:"Why Should You Join Us!!!"})]}),e.jsxs("div",{className:"service-box",children:[e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/cutt.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Cutting Edge Technologies"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/real.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Real World Projects"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/collab.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Collaborative Learning"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/mentor.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Industrial Mentorship"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/creativity.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Innovation and Creativity"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/Certification.png",alt:"Techmiya review"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Certification and Recognition"}),e.jsx("hr",{})]})]})]})]}),e.jsxs("div",{className:"internship-feedback",children:[e.jsx("h2",{children:"Project Feedback"}),e.jsx("p",{children:"Your feedback helps us improve our project program."}),e.jsx("img",{src:"/qr.png",alt:"Internship Feedback QR Code",className:"feedback-qr"}),e.jsx("a",{href:"https://forms.gle/miP4aAFBNfFcHdF18",target:"_blank",rel:"noopener noreferrer",className:"feedback-btn",children:"Click Here to Give Project Feedback"})]})]})}export{y as default};
