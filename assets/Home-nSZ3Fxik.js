import{j as e,S as x}from"./index-BIZe9V2T.js";import{b as r}from"./vendor-3PyanEma.js";const h=[{name:"Vajra",review:"I have tried many tools, but this one stands out.",rating:4,image:"/images/user1.webp"},{name:"Hamsa Lekha R",review:"The software provided by Techmiya Solutions has been a game-changer for us.",rating:5,image:"/images/user2.webp"},{name:"Tejaswini",review:"Working with Techmiya Solutions was a breeze!",rating:4.5,image:"/images/user3.webp"},{name:"Varsha HD",review:"Techmiya Solutions revolutionized the way we handle our business processes.",rating:5,image:"/images/user4.webp"},{name:"Trupthi",review:"The customer support from Techmiya Solutions is exceptional.",rating:4,image:"/images/user5.webp"},{name:"Sanjay",review:"We've been using Techmiya Solutions for over a year, and it's been a game-changer.",rating:4,image:"/images/user6.webp"},{name:"Prasad",review:"I was impressed by how quickly Techmiya Solutions understood our business needs and delivered a solution that exceeded our expectations.",rating:4.5,image:"/images/user7.webp"},{name:"Tameem",review:"The ease of use and customization options are fantastic.",rating:5,image:"/images/user8.webp"},{name:"Mohan",review:"Techmiya Solutions' software is exactly what we needed. It's fast, reliable, and incredibly easy to navigate.",rating:4.5,image:"/images/user9.webp"},{name:"Adil",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user10.webp"},{name:"Mudashir",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user11.webp"}];function j({rating:t}){const o=Math.floor(t),n=t%1!==0,a=5-o-(n?1:0);return e.jsxs(e.Fragment,{children:[[...Array(o)].map((s,i)=>e.jsx("i",{className:"fa fa-star"},`full-${i}`)),n&&e.jsx("i",{className:"fa fa-star-half-o"}),[...Array(a)].map((s,i)=>e.jsx("i",{className:"fa fa-star-o"},`empty-${i}`))]})}function v(){const t=[...h,...h],[o,n]=r.useState(!1),a=r.useRef(null);return r.useEffect(()=>{let s;const i=new IntersectionObserver(c=>{c.forEach(m=>{m.isIntersecting&&!o&&(s=setTimeout(()=>{n(!0)},800))})},{threshold:.1});return a.current&&i.observe(a.current),()=>{a.current&&i.unobserve(a.current),s&&clearTimeout(s)}},[o]),e.jsx("section",{className:"testimonials",ref:a,children:e.jsxs("div",{className:"testimonial-container",children:[e.jsx("h2",{children:"Hear From Our Customers"}),e.jsx("div",{className:`testimonial-slider ${o?"animate":""}`,children:t.map((s,i)=>e.jsxs("div",{className:"testimonial-col",children:[e.jsx("img",{loading:"lazy",src:s.image,alt:"Techmiya review"}),e.jsxs("div",{children:[e.jsx("p",{children:s.review}),e.jsx("h3",{children:s.name}),e.jsx(j,{rating:s.rating})]})]},i))})]})})}const f=[{id:"1",videoId:"0Fe2Lpk91R0"},{id:"2",videoId:"UgF29StIDt4"},{id:"3",videoId:"0Fe2Lpk91R0"},{id:"4",videoId:"UgF29StIDt4"},{id:"5",videoId:"0Fe2Lpk91R0"},{id:"6",videoId:"UgF29StIDt4"}];function b(){const[t,o]=r.useState(f),[n,a]=r.useState(!1),[s,i]=r.useState(null),c=r.useRef(null);r.useEffect(()=>{},[void 0,"UC_x5XG1OV2P6uYZ5ujfWXBw"]);const g=[...t,...t];return r.useEffect(()=>{let l;const d=new IntersectionObserver(p=>{p.forEach(u=>{u.isIntersecting&&!n&&(l=setTimeout(()=>{a(!0)},800))})},{threshold:.1});return c.current&&d.observe(c.current),()=>{c.current&&d.unobserve(c.current),l&&clearTimeout(l)}},[n,t]),e.jsxs("section",{className:"shorts",ref:c,children:[e.jsxs("div",{className:"shorts-container",children:[e.jsx("h2",{children:"Our Projects"}),e.jsx("div",{className:`shorts-slider ${n&&!s?"animate":""}`,children:g.map((l,d)=>e.jsx("div",{className:"shorts-col",children:s===d?e.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${l.videoId}?autoplay=1&mute=0`,title:"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):e.jsxs("div",{className:"video-placeholder",onClick:()=>{i(d),a(!1)},children:[e.jsx("img",{src:`https://img.youtube.com/vi/${l.videoId}/hqdefault.jpg`,alt:"Video Thumbnail",loading:"lazy"}),e.jsx("div",{className:"play-overlay",children:e.jsx("i",{className:"fa fa-play-circle"})})]})},d))})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .video-placeholder {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    overflow: hidden;
                    background: #000;
                    border-radius: 15px;
                }
                .video-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                .video-placeholder:hover img {
                    transform: scale(1.1);
                }
                .play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0,0,0,0.2);
                    transition: background 0.3s ease;
                }
                .play-overlay i {
                    font-size: 4rem;
                    color: white;
                    opacity: 0.8;
                    transition: all 0.3s ease;
                }
                .video-placeholder:hover .play-overlay {
                    background: rgba(0,0,0,0.4);
                }
                .video-placeholder:hover .play-overlay i {
                    transform: scale(1.2);
                    opacity: 1;
                }
                .shorts-col iframe {
                    border-radius: 15px;
                    width: 100%;
                    height: 100%;
                }
            `}})]})}function I(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Best Final Year Projects Center Bangalore | IEEE, AI, ML, IoT",description:"Techmiya Projects is Bangalore's leading project center for IEEE, AI, ML, IoT, and Engineering projects. Get expert guidance, documentation, and source code.",keywords:"final year projects, IEEE projects bangalore, best project center, AI projects, ML projects, IoT projects, Techmiya"}),e.jsxs("section",{className:"page1",style:{backgroundImage:"url('/images/collage.webp')"},children:[e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"text-box",children:[e.jsx("p",{className:"hero-keywords",children:e.jsx("strong",{children:"Expert Guidance for Final Year Projects, IEEE Projects, and Project for Students."})}),e.jsx("h1",{children:"Techmiya Projects"}),e.jsx("p",{children:"Empowering the next generation of innovators where boundless creativity converges with cutting-edge technology."})]})]}),e.jsxs("section",{className:"final",children:[e.jsx("h2",{children:"Final Year Project"}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"final-year",id:"final-year",children:[e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/softwareprojects.webp",alt:"Software Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/electronicsprojects.webp",alt:"Electronics Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/IT.webp",alt:"IT Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/collage.webp",alt:"College Projects"})})]})})]}),e.jsx("section",{className:"latest-cta",children:e.jsx("div",{className:"cta-container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("span",{className:"badge",children:"New for 2026"}),e.jsx("h2",{children:"100+ Latest Project Ideas"}),e.jsx("p",{children:"Stay ahead with our curated list of 2026's most innovative project topics in AI, LLM, RAG, Blockchain, and Edge AI."}),e.jsxs("div",{className:"cta-features",children:[e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Categorized by Tech"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Industry Relevant"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Research Oriented"]})]}),e.jsxs("a",{href:"/software-projects/latest-ideas-2026",className:"cta-main-btn",children:["View All Project Ideas ",e.jsx("i",{className:"fa fa-arrow-right"})]})]})})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}}),e.jsx(v,{}),e.jsx(b,{}),e.jsxs("section",{className:"faq",children:[e.jsx("h2",{children:"Frequently Asked Questions"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do you provide final year project guidance?"}),e.jsx("p",{children:"Yes, we provide full project development, documentation, and demo support."}),e.jsx("h3",{children:"Can students register online for projects?"}),e.jsx("p",{children:"Yes, students can register for project expo, games, and final year projects online."}),e.jsx("h3",{children:"Do you offer IEEE and real-world projects?"}),e.jsx("p",{children:"Yes, we provide IEEE + real-world industry projects for all branches."})]})]}),e.jsxs("section",{id:"feature",children:[e.jsxs("div",{className:"welcome",children:[e.jsx("p",{children:"WELCOME TO TECHMIYA"}),e.jsx("h2",{children:"Why Should You Join Us!!!"})]}),e.jsxs("div",{className:"service-box",children:[e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/cutt.webp",alt:"Cutting Edge Technologies at Techmiya"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Cutting Edge Technologies"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/real.webp",alt:"Real World Projects Experience"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Real World Projects"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/collab.webp",alt:"Collaborative Learning Environment"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Collaborative Learning"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/mentor.webp",alt:"Industrial Mentorship for Students"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Industrial Mentorship"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/creativity.webp",alt:"Innovation and Creativity focus"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Innovation and Creativity"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/Certification.webp",alt:"Project Certification and Recognition"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Certification and Recognition"}),e.jsx("hr",{})]})]})]})]}),e.jsxs("div",{className:"internship-feedback",children:[e.jsx("h2",{children:"Project Feedback"}),e.jsx("p",{children:"Your feedback helps us improve our project program."}),e.jsx("img",{src:"/qr.webp",alt:"Internship Feedback QR Code",className:"feedback-qr"}),e.jsx("a",{href:"https://forms.gle/miP4aAFBNfFcHdF18",target:"_blank",rel:"noopener noreferrer",className:"feedback-btn",children:"Click Here to Give Project Feedback"})]})]})}export{I as default};
