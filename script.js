/* RSMultiXIndia content configuration and interactions.
   Edit SERVICES, COURSES, PORTFOLIO_PROJECTS and SOCIAL_LINKS below. */
"use strict";

const BUSINESS = {
  name: "RSMultiXIndia",
  phone: "+91 7004270485",
  whatsapp: "917004270485",
  email: "rsmultixindia@gmail.com",
  website: "https://rsmultixindia.com/",
  location: "Ratu, Ranchi, Jharkhand, India"
};

/* Leave unknown profiles as an empty string. Empty links are not shown. */
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61595114542242",
  instagram: "https://www.instagram.com/rsmultixindia/",
  pinterest: "https://in.pinterest.com/rsmultixindia/",
  youtube: "https://www.youtube.com/@RSMultiXIndia",
  telegram: "https://t.me/rsmultixindia",
  whatsapp: "https://wa.me/917004270485",
  x: "https://x.com/RSMultixIndia",
  linkedin: "", // Add the verified LinkedIn profile URL when available.
  github: "https://github.com/rsmultixindia"
};

const SOCIAL_META = {
  facebook: { label: "Facebook", mark: "f", handle: "Follow updates" },
  instagram: { label: "Instagram", mark: "◎", handle: "Photos & updates" },
  pinterest: { label: "Pinterest", mark: "p", handle: "Ideas & inspiration" },
  youtube: { label: "YouTube", mark: "▶", handle: "Videos & tutorials" },
  telegram: { label: "Telegram", mark: "➤", handle: "Join the channel" },
  whatsapp: { label: "WhatsApp", mark: "◉", handle: "Chat with us" },
  x: { label: "X", mark: "𝕏", handle: "Social updates" },
  linkedin: { label: "LinkedIn", mark: "in", handle: "Professional network" },
  github: { label: "GitHub", mark: "⌘", handle: "Code & repositories" }
};

const SERVICES = [
  { icon:"⌘", title:"Website Development", description:"Business websites, ecommerce stores, portfolios, landing pages and custom web experiences tailored to your goals.", benefit:"Responsive • Fast • Search-friendly", message:"Hello RSMultiXIndia, I am interested in website development. Please discuss my requirements." },
  { icon:"▣", title:"Mobile App Development", description:"Android and iOS application development, React Native apps and API integration for connected experiences.", benefit:"Mobile-first • Practical • Scalable", message:"Hello RSMultiXIndia, I am interested in mobile app development. Please contact me to discuss the project." },
  { icon:"↗", title:"Digital Marketing & SEO", description:"Search optimization, Google Ads, Meta Ads, social media marketing, content strategy and analytics support.", benefit:"Visibility • Strategy • Measurement", message:"Hello RSMultiXIndia, I need help with digital marketing and SEO. Please share the available services." },
  { icon:"▤", title:"Software Solutions", description:"Custom software, billing and inventory systems, CRM workflows, database solutions and business automation.", benefit:"Workflow-focused • Requirement-led", message:"Hello RSMultiXIndia, I would like to enquire about custom software solutions." },
  { icon:"⚙", title:"Software Installation", description:"Operating systems, drivers, productivity software, developer tools and device configuration using properly licensed software.", benefit:"Configured responsibly", message:"Hello RSMultiXIndia, I need software installation or configuration support." },
  { icon:"▦", title:"Computer Setup & IT Infrastructure", description:"Desktop and laptop setup, computer labs, printers, scanners, Wi-Fi, LAN, routers, servers and backup solutions.", benefit:"Devices • Networks • Labs", message:"Hello RSMultiXIndia, I need computer setup or IT infrastructure support. Please discuss my requirements." },
  { icon:"▱", title:"Signage & Branding", description:"Name plates, office signs, institutional signage, wayfinding, safety signs, acrylic and LED signs, and branding materials.", benefit:"Clear communication • Consistent identity", message:"Hello RSMultiXIndia, I am interested in signage or branding solutions." },
  { icon:"⌁", title:"Technical Support & Maintenance", description:"Troubleshooting, configuration, maintenance and technical support, subject to service availability and agreed scope.", benefit:"Practical help • Clear next steps", message:"Hello RSMultiXIndia, I need technical support or maintenance. Please let me know the available options." },
  { icon:"▧", title:"ID Cards & Printing", description:"Student and employee ID cards, PVC cards, lanyards, visiting cards and institutional printing requirements.", benefit:"For teams & institutions", message:"Hello RSMultiXIndia, I would like to enquire about ID cards and printing." },
  { icon:"⌘", title:"Professional IT Training", description:"Programming and digital skills training with structured topics and practical learning options depending on the course.", benefit:"Skills • Practice • Progress", message:"Hello RSMultiXIndia, I am interested in your IT training courses. Please share course details." }
];

const COURSES = [
  { icon:"☕", title:"Full Stack Java", level:"Full stack", description:"Build a foundation across frontend, Java backend development and database-backed applications.", tags:["HTML/CSS","JavaScript","Java","Spring Boot","MySQL","REST APIs"], message:"Hello RSMultiXIndia, please share the syllabus and details for the Full Stack Java course." },
  { icon:"{ }", title:"Full Stack PHP", level:"Full stack", description:"Learn to create dynamic web applications with PHP, modern frontend basics and a PHP framework.", tags:["HTML/CSS","JavaScript","PHP","Laravel","MySQL"], message:"Hello RSMultiXIndia, please share the syllabus and details for the Full Stack PHP course." },
  { icon:"◈", title:"Frontend Development", level:"Web development", description:"Develop responsive interfaces and learn the tools used in modern frontend workflows.", tags:["HTML","CSS","JavaScript","React.js","Bootstrap","Git"], message:"Hello RSMultiXIndia, please share the syllabus and details for Frontend Development." },
  { icon:"▣", title:"Mobile App Development", level:"App development", description:"Explore cross-platform mobile development and connecting apps to web APIs.", tags:["React Native","JavaScript","Expo","Android","REST APIs"], message:"Hello RSMultiXIndia, please share the syllabus and details for Mobile App Development." },
  { icon:"↗", title:"Digital Marketing", level:"Digital skills", description:"Understand online visibility, paid campaigns, content planning and performance measurement.", tags:["SEO","Google Ads","Meta Ads","Analytics","Social Media","WordPress"], message:"Hello RSMultiXIndia, please share the syllabus and details for Digital Marketing training." },
  { icon:"C+", title:"C / C++ Programming", level:"Programming", description:"Study programming fundamentals, object-oriented concepts and core data structures.", tags:["C","C++","OOP","STL","Data Structures"], message:"Hello RSMultiXIndia, please share the syllabus and details for C/C++ training." },
  { icon:"☕", title:"Java Programming", level:"Programming", description:"Build programming foundations in Java and work with common language and database concepts.", tags:["Core Java","OOP","Collections","JDBC","SQL"], message:"Hello RSMultiXIndia, please share the syllabus and details for Java training." },
  { icon:"Py", title:"Python Programming", level:"Programming", description:"Learn Python fundamentals and explore data access, APIs and practical automation tasks.", tags:["Python","OOP","SQL","APIs","Automation"], message:"Hello RSMultiXIndia, please share the syllabus and details for Python training." },
  { icon:"php", title:"PHP Development", level:"Web development", description:"Learn server-side development with PHP and build database-backed web features.", tags:["PHP","MySQL","Laravel","REST APIs"], message:"Hello RSMultiXIndia, please share the syllabus and details for PHP training." }
];

/* Replace these illustrative demos with real projects only when you have permission to publish them. */
const PORTFOLIO_PROJECTS = [
  { id:"web-demo", category:"Website Development", icon:"⌘", title:"Business Website Concept", description:"A responsive business website concept with clear service pages and contact calls to action.", demo:true },
  { id:"app-demo", category:"Mobile Applications", icon:"▣", title:"Mobile App UI Concept", description:"An illustrative mobile app interface concept for a simple, user-focused digital experience.", demo:true },
  { id:"marketing-demo", category:"Digital Marketing & SEO", icon:"↗", title:"SEO Campaign Dashboard Concept", description:"A sample dashboard layout for organizing search visibility and campaign performance data.", demo:true },
  { id:"software-demo", category:"Software Solutions", icon:"▤", title:"Business Management Concept", description:"A sample workflow concept for organizing inventory, records and routine business tasks.", demo:true },
  { id:"infrastructure-demo", category:"Computer Setup & IT Infrastructure", icon:"▦", title:"Computer Lab Layout Concept", description:"An illustrative planning concept for workstations, connectivity and shared IT equipment.", demo:true },
  { id:"signage-demo", category:"Signage & Branding", icon:"▱", title:"Institutional Signage Concept", description:"A sample signage system concept for clear navigation and consistent visual identity.", demo:true },
  { id:"printing-demo", category:"ID Cards & Printing", icon:"▧", title:"ID Card Design Concept", description:"An illustrative ID card layout concept for institutional identity and information hierarchy.", demo:true },
  { id:"training-demo", category:"IT Training Projects", icon:"{ }", title:"Learner Project Showcase", description:"A sample training-project showcase concept for presenting practice work and learning outcomes.", demo:true }
];

const $ = (selector, parent=document) => parent.querySelector(selector);
const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];

function makeWhatsAppUrl(message) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
function createServiceCards() {
  const grid = $("#services-grid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map((service, index) => `
    <article class="service-card">
      <div class="service-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="service-benefit">${service.benefit}</div>
      <a class="text-link" href="${makeWhatsAppUrl(service.message)}" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${service.title} on WhatsApp">Enquire on WhatsApp <span aria-hidden="true">↗</span></a>
    </article>`).join("");
}
function createCourseCards() {
  const grid = $("#courses-grid");
  if (!grid) return;
  grid.innerHTML = COURSES.map(course => `
    <article class="course-card">
      <div class="course-top"><span class="course-symbol" aria-hidden="true">${course.icon}</span><span class="course-tag">${course.level}</span></div>
      <h3>${course.title}</h3><p>${course.description}</p>
      <div class="tech-tags">${course.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <a class="text-link" href="${makeWhatsAppUrl(course.message)}" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${course.title} course on WhatsApp">Enquire about course <span aria-hidden="true">↗</span></a>
    </article>`).join("");
}
function createProjectCard(project) {
  return `<article class="project-card">
    <div class="project-art" aria-hidden="true"><span class="demo-label">SAMPLE DEMO</span><span class="project-glyph">${project.icon}</span></div>
    <div class="project-content"><span class="project-category">${project.category}</span><h3>${project.title}</h3><p>${project.description}</p></div>
  </article>`;
}
function createPortfolio() {
  const filters = $("#portfolio-filters");
  const grid = $("#portfolio-grid");
  if (!filters || !grid) return;
  const categories = ["All Work", ...new Set(PORTFOLIO_PROJECTS.map(project => project.category))];
  filters.innerHTML = categories.map((category, index) => `<button type="button" class="filter-btn" data-filter="${category}" aria-pressed="${index === 0 ? "true" : "false"}">${category}</button>`).join("");
  function render(filter) {
    const items = filter === "All Work" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(project => project.category === filter);
    grid.innerHTML = items.length ? items.map(createProjectCard).join("") : `<div class="empty-state">No projects in this category yet. Check back soon or <a class="text-link" href="#contact">contact us</a> to discuss your project.</div>`;
    $("#portfolio-count").textContent = `${items.length} ${items.length === 1 ? "demo" : "demos"}`;
  }
  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    $$(".filter-btn", filters).forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    render(button.dataset.filter);
  });
  render("All Work");
}
function renderSocialLinks() {
  const grid = $("#social-grid");
  const footer = $("#footer-socials");
  const available = Object.entries(SOCIAL_LINKS).filter(([, url]) => typeof url === "string" && /^https:\/\/(?!example\.com|your-)/i.test(url));
  if (grid) {
    grid.innerHTML = available.map(([key, url]) => {
      const meta = SOCIAL_META[key];
      return `<a class="social-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Open RSMultiXIndia on ${meta.label}"><span class="social-icon" aria-hidden="true">${meta.mark}</span><span><strong>${meta.label}</strong><small>${meta.handle}</small></span></a>`;
    }).join("") || `<p class="empty-state">Social profiles will be listed here when configured.</p>`;
  }
  if (footer) footer.innerHTML = available.map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="RSMultiXIndia on ${SOCIAL_META[key].label}" title="${SOCIAL_META[key].label}">${SOCIAL_META[key].mark}</a>`).join("");
}
function setupNavigation() {
  const toggle = $("#menu-toggle");
  const nav = $("#primary-nav");
  if (!toggle || !nav) return;
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", isOpen);
  });
  $$("a", nav).forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 760) close(); });
}
function setupEnquiryForm() {
  const form = $("#enquiry-form");
  const feedback = $("#form-feedback");
  if (!form || !feedback) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    feedback.textContent = "";
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.textContent = "Please complete the required fields before continuing.";
      return;
    }
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || !topic || message.length < 5) {
      feedback.textContent = "Please enter a valid name, choose a topic and add a little more detail.";
      return;
    }
    const enquiry = `Hello RSMultiXIndia,\n\nMy name is ${name}.\nI am interested in: ${topic}.\n\nEnquiry details:\n${message}\n\nPlease let me know the next steps.`;
    window.open(makeWhatsAppUrl(enquiry), "_blank", "noopener,noreferrer");
    feedback.textContent = "WhatsApp should open in a new tab. Review and send your message there.";
  });
}
function setupWhatsAppLinks() {
  $$(".whatsapp-link").forEach(link => {
    const message = link.dataset.message;
    if (message) link.href = makeWhatsAppUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}
function init() {
  createServiceCards();
  createCourseCards();
  createPortfolio();
  renderSocialLinks();
  setupNavigation();
  setupEnquiryForm();
  setupWhatsAppLinks();
  const year = $("#current-year");
  if (year) year.textContent = new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded", init);
