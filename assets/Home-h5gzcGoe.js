import{j as e,S as v}from"./index-BSCj6oLK.js";import{b as a}from"./vendor-BqpI3quz.js";const g=[{name:"Vajra",review:"I have tried many tools, but this one stands out.",rating:4,image:"/images/user1.webp"},{name:"Hamsa Lekha R",review:"The software provided by Techmiya Solutions has been a game-changer for us.",rating:5,image:"/images/user2.webp"},{name:"Tejaswini",review:"Working with Techmiya Solutions was a breeze!",rating:4.5,image:"/images/user3.webp"},{name:"Varsha HD",review:"Techmiya Solutions revolutionized the way we handle our business processes.",rating:5,image:"/images/user4.webp"},{name:"Trupthi",review:"The customer support from Techmiya Solutions is exceptional.",rating:4,image:"/images/user5.webp"},{name:"Sanjay",review:"We've been using Techmiya Solutions for over a year, and it's been a game-changer.",rating:4,image:"/images/user6.webp"},{name:"Prasad",review:"I was impressed by how quickly Techmiya Solutions understood our business needs and delivered a solution that exceeded our expectations.",rating:4.5,image:"/images/user7.webp"},{name:"Tameem",review:"The ease of use and customization options are fantastic.",rating:5,image:"/images/user8.webp"},{name:"Mohan",review:"Techmiya Solutions' software is exactly what we needed. It's fast, reliable, and incredibly easy to navigate.",rating:4.5,image:"/images/user9.webp"},{name:"Adil",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user10.webp"},{name:"Mudashir",review:"The best decision we made for our business was partnering with Techmiya Solutions.",rating:5,image:"/images/user11.webp"}];function f({rating:l}){const d=Math.floor(l),c=l%1!==0,t=5-d-(c?1:0);return e.jsxs(e.Fragment,{children:[[...Array(d)].map((s,n)=>e.jsx("i",{className:"fa fa-star"},`full-${n}`)),c&&e.jsx("i",{className:"fa fa-star-half-o"}),[...Array(t)].map((s,n)=>e.jsx("i",{className:"fa fa-star-o"},`empty-${n}`))]})}function j(){const l=[...g,...g],[d,c]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{let s;const n=new IntersectionObserver(r=>{r.forEach(p=>{p.isIntersecting&&!d&&(s=setTimeout(()=>{c(!0)},800))})},{threshold:.1});return t.current&&n.observe(t.current),()=>{t.current&&n.unobserve(t.current),s&&clearTimeout(s)}},[d]),e.jsx("section",{className:"testimonials",ref:t,children:e.jsxs("div",{className:"testimonial-container",children:[e.jsx("h2",{children:"Hear From Our Customers"}),e.jsx("div",{className:`testimonial-slider ${d?"animate":""}`,children:l.map((s,n)=>e.jsxs("div",{className:"testimonial-col",children:[e.jsx("img",{loading:"lazy",src:s.image,alt:"Techmiya review"}),e.jsxs("div",{children:[e.jsx("p",{children:s.review}),e.jsx("h3",{children:s.name}),e.jsx(f,{rating:s.rating})]})]},n))})]})})}const b=[{id:"1",videoId:"0Fe2Lpk91R0"},{id:"2",videoId:"UgF29StIDt4"},{id:"3",videoId:"0Fe2Lpk91R0"},{id:"4",videoId:"UgF29StIDt4"},{id:"5",videoId:"0Fe2Lpk91R0"},{id:"6",videoId:"UgF29StIDt4"}];function w(){const[l,d]=a.useState(b),[c,t]=a.useState(!1),[s,n]=a.useState(null),r=a.useRef(null);a.useEffect(()=>{},[void 0,"UC_x5XG1OV2P6uYZ5ujfWXBw"]);const h=[...l,...l];return a.useEffect(()=>{let i;const o=new IntersectionObserver(u=>{u.forEach(x=>{x.isIntersecting&&!c&&(i=setTimeout(()=>{t(!0)},800))})},{threshold:.1});return r.current&&o.observe(r.current),()=>{r.current&&o.unobserve(r.current),i&&clearTimeout(i)}},[c,l]),e.jsxs("section",{className:"shorts",ref:r,children:[e.jsxs("div",{className:"shorts-container",children:[e.jsx("h2",{children:"Our Projects"}),e.jsx("div",{className:`shorts-slider ${c&&!s?"animate":""}`,children:h.map((i,o)=>e.jsx("div",{className:"shorts-col",children:s===o?e.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${i.videoId}?autoplay=1&mute=0`,title:"YouTube Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):e.jsxs("div",{className:"video-placeholder",onClick:()=>{n(o),t(!1)},children:[e.jsx("img",{src:`https://img.youtube.com/vi/${i.videoId}/hqdefault.jpg`,alt:"Video Thumbnail",loading:"lazy"}),e.jsx("div",{className:"play-overlay",children:e.jsx("i",{className:"fa fa-play-circle"})})]})},o))})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})}const y=[{id:"v1",videoId:"ttej9TVU9WM"},{id:"v3",videoId:"S7cmcCuEH5w"}];function N(){const[l,d]=a.useState(y),[c,t]=a.useState(!1),[s,n]=a.useState(null),r=a.useRef(null);a.useEffect(()=>{},[void 0,"UC_x5XG1OV2P6uYZ5ujfWXBw"]);const h=[...l,...l];return a.useEffect(()=>{let i;const o=new IntersectionObserver(u=>{u.forEach(x=>{x.isIntersecting&&!c&&(i=setTimeout(()=>{t(!0)},800))})},{threshold:.1});return r.current&&o.observe(r.current),()=>{r.current&&o.unobserve(r.current),i&&clearTimeout(i)}},[c,l]),e.jsxs("section",{className:"video-testimonials",ref:r,children:[e.jsxs("div",{className:"video-testimonials-container",children:[e.jsx("h2",{children:"Video Reviews from Our Students"}),e.jsx("div",{className:`video-testimonials-slider ${c&&!s?"animate":""}`,children:h.map((i,o)=>e.jsx("div",{className:"video-review-col",children:s===o?e.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${i.videoId}?autoplay=1&mute=0`,title:"YouTube Review Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):e.jsxs("div",{className:"video-placeholder",onClick:()=>{n(o),t(!1)},children:[e.jsx("img",{src:`https://img.youtube.com/vi/${i.videoId}/hqdefault.jpg`,alt:"Video Review Thumbnail",loading:"lazy"}),e.jsx("div",{className:"play-overlay",children:e.jsx("i",{className:"fa fa-play-circle"})}),e.jsx("div",{className:"review-label",children:"Student Review"})]})},o))})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .video-testimonials {
                    width: 100%;
                    margin: auto;
                    padding: 80px 0;
                    background: linear-gradient(180deg, #050c18 0%, #000 100%);
                    overflow: hidden;
                    border-top: 1px solid rgba(0, 212, 255, 0.1);
                }
                .video-testimonials-container h2 {
                    text-align: center;
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    margin-bottom: 50px;
                    background: linear-gradient(135deg, #ffffff 0%, #00d4ff 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                    font-family: 'Poppins', sans-serif;
                }
                .video-testimonials-slider {
                    display: flex;
                    position: relative;
                    width: max-content;
                    animation: slide 50s linear infinite;
                    animation-play-state: paused;
                }
                .video-testimonials-slider.animate {
                    animation-play-state: running;
                }
                .video-review-col {
                    min-width: 400px;
                    height: 300px;
                    margin: 0 15px;
                    position: relative;
                }
                .video-placeholder {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    overflow: hidden;
                    background: #000;
                    border-radius: 20px;
                    border: 1px solid rgba(0, 212, 255, 0.15);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .video-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
                    background: rgba(0,0,0,0.4);
                    transition: all 0.4s ease;
                }
                .play-overlay i {
                    font-size: 4rem;
                    color: white;
                    opacity: 0.9;
                    filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.5));
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .video-placeholder:hover .play-overlay {
                    background: rgba(0,0,0,0.2);
                }
                .video-placeholder:hover .play-overlay i {
                    transform: scale(1.1);
                    color: #00d4ff;
                    opacity: 1;
                }
                .review-label {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    background: linear-gradient(135deg, rgba(0, 212, 255, 0.9) 0%, rgba(0, 184, 217, 0.9) 100%);
                    color: #0a192f;
                    padding: 5px 15px;
                    border-radius: 30px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    backdrop-filter: blur(8px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                .video-review-col iframe {
                    border-radius: 20px;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
                }

                @media (max-width: 992px) {
                    .video-review-col {
                        min-width: 350px;
                        height: 262px;
                    }
                }

                @media (max-width: 768px) {
                    .video-review-col {
                        min-width: 280px;
                        height: 210px;
                        margin: 0 10px;
                    }
                    .play-overlay i {
                        font-size: 3rem;
                    }
                    .video-testimonials-container h2 {
                        font-size: 1.5rem;
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 480px) {
                    .video-review-col {
                        min-width: 240px;
                        height: 180px;
                    }
                }
            `}})]})}function I(){const[l,d]=a.useState(!1),[c,t]=a.useState(!1),[s,n]=a.useState({name:"",contact:"",projectIdea:""});a.useEffect(()=>{const m=setTimeout(()=>{d(!0)},1e3);return()=>clearTimeout(m)},[]);const r=m=>{const{name:h,value:i}=m.target;n(o=>({...o,[h]:i}))},p=m=>{m.preventDefault();const h="917338631971",i=`Hello Techmiya,

I am interested in starting a project.

*Name:* ${s.name}
*Contact:* ${s.contact}
*Project Idea:* ${s.projectIdea||"Not specified"}`,o=`https://wa.me/${h}?text=${encodeURIComponent(i)}`;window.open(o,"_blank"),t(!1),n({name:"",contact:"",projectIdea:""})};return l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bottom-announcement-bar",children:[e.jsxs("div",{className:"announcement-content",children:[e.jsx("i",{className:"fa fa-rocket"}),e.jsx("span",{children:"Build with confidence"})]}),e.jsx("button",{className:"enroll-now-btn",onClick:()=>t(!0),children:"Enroll Now"})]}),c&&e.jsx("div",{className:"enroll-modal-overlay",onClick:()=>t(!1),children:e.jsxs("div",{className:"enroll-modal",onClick:m=>m.stopPropagation(),children:[e.jsx("i",{className:"fa fa-times close-modal",onClick:()=>t(!1)}),e.jsx("h2",{children:"Start building your project"}),e.jsxs("form",{className:"enroll-form",onSubmit:p,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Your Name"}),e.jsx("input",{type:"text",name:"name",placeholder:"Enter your full name",required:!0,value:s.name,onChange:r})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Contact Number / Email"}),e.jsx("input",{type:"text",name:"contact",placeholder:"Phone or email",required:!0,value:s.contact,onChange:r})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Project Idea (Optional)"}),e.jsx("textarea",{name:"projectIdea",placeholder:"Describe what you want to build",rows:"4",value:s.projectIdea,onChange:r})]}),e.jsx("button",{type:"submit",className:"enroll-submit-btn",children:"Submit Interest"})]})]})})]}):null}function T(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Best Final Year Projects Center Bangalore | IEEE, AI, ML, IoT",description:"Techmiya Projects is Bangalore's leading project center for IEEE, AI, ML, IoT, and Engineering projects. Get expert guidance, documentation, and source code.",keywords:"final year projects, IEEE projects bangalore, best project center, AI projects, ML projects, IoT projects, Techmiya"}),e.jsxs("section",{className:"page1",style:{backgroundImage:"url('/images/collage.webp')"},children:[e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"text-box",children:[e.jsx("p",{className:"hero-keywords",children:e.jsx("strong",{children:"Expert Guidance for Final Year Projects & IEEE Projects"})}),e.jsx("h1",{children:"Techmiya Projects"}),e.jsx("p",{className:"hero-desc",children:"Empowering the next generation of innovators where boundless creativity converges with cutting-edge technology."})]})]}),e.jsxs("section",{className:"final",children:[e.jsx("h2",{children:"Final Year Project"}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"final-year",id:"final-year",children:[e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/softwareprojects.webp",alt:"Software Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/electronicsprojects.webp",alt:"Electronics Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/IT.webp",alt:"IT Projects"})}),e.jsx("div",{className:"slide1",children:e.jsx("img",{src:"/images/collage.webp",alt:"College Projects"})})]})})]}),e.jsx("section",{className:"latest-cta",children:e.jsx("div",{className:"cta-container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("span",{className:"badge",children:"New for 2026"}),e.jsx("h2",{children:"100+ Latest Project Ideas"}),e.jsx("p",{children:"Stay ahead with our curated list of 2026's most innovative project topics in AI, LLM, RAG, Blockchain, and Edge AI."}),e.jsxs("div",{className:"cta-features",children:[e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Categorized by Tech"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Industry Relevant"]}),e.jsxs("div",{className:"feat",children:[e.jsx("i",{className:"fa fa-check-circle"})," Research Oriented"]})]}),e.jsxs("a",{href:"/software-projects/latest-ideas-2026",className:"cta-main-btn",children:["View All Project Ideas ",e.jsx("i",{className:"fa fa-arrow-right"})]})]})})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}}),e.jsx(j,{}),e.jsx(w,{}),e.jsx(N,{}),e.jsxs("section",{className:"faq",children:[e.jsx("h2",{children:"Frequently Asked Questions"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do you provide final year project guidance?"}),e.jsx("p",{children:"Yes, we provide full project development, documentation, and demo support."}),e.jsx("h3",{children:"Can students register online for projects?"}),e.jsx("p",{children:"Yes, students can register for project expo, games, and final year projects online."}),e.jsx("h3",{children:"Do you offer IEEE and real-world projects?"}),e.jsx("p",{children:"Yes, we provide IEEE + real-world industry projects for all branches."})]})]}),e.jsxs("section",{id:"feature",children:[e.jsxs("div",{className:"welcome",children:[e.jsx("p",{children:"WELCOME TO TECHMIYA"}),e.jsx("h2",{children:"Why Should You Join Us!!!"})]}),e.jsxs("div",{className:"service-box",children:[e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/cutt.webp",alt:"Cutting Edge Technologies at Techmiya"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Cutting Edge Technologies"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/real.webp",alt:"Real World Projects Experience"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Real World Projects"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/collab.webp",alt:"Collaborative Learning Environment"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Collaborative Learning"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/mentor.webp",alt:"Industrial Mentorship for Students"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Industrial Mentorship"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/creativity.webp",alt:"Innovation and Creativity focus"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Innovation and Creativity"}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"single-service",children:[e.jsx("img",{loading:"lazy",src:"/images/Certification.webp",alt:"Project Certification and Recognition"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"service-desc",children:[e.jsx("h3",{children:"Certification and Recognition"}),e.jsx("hr",{})]})]})]})]}),e.jsxs("div",{className:"internship-feedback",children:[e.jsx("h2",{children:"Project Feedback"}),e.jsx("p",{children:"Your feedback helps us improve our project program."}),e.jsx("img",{src:"/qr.webp",alt:"Internship Feedback QR Code",className:"feedback-qr"}),e.jsx("a",{href:"https://forms.gle/miP4aAFBNfFcHdF18",target:"_blank",rel:"noopener noreferrer",className:"feedback-btn",children:"Click Here to Give Project Feedback"})]}),e.jsx(I,{})]})}export{T as default};
