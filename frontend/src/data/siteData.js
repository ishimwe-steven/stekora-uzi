import {
  faAward,
  faBolt,
  faNetworkWired,
  faServer,
  faShieldHalved,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

export const services = [
  { icon: faLaptopCode, title: "Web & Cloud Systems", text: "Modern websites, portals, dashboards, hosting, and cloud-ready business tools." },
  { icon: faNetworkWired, title: "Networking & CCTV", text: "Network planning, CCTV installation, maintenance, and business security support." },
  { icon: faBolt, title: "Automation & IoT", text: "Smart workflows, IoT prototypes, sensors, and automation for practical operations." },
  { icon: faServer, title: "IT Support", text: "Repairs, setup, troubleshooting, data handling, and system maintenance." },
  { icon: faShieldHalved, title: "Cyber Awareness", text: "Training and basic protection practices for teams, students, and small businesses." },
  { icon: faAward, title: "Graphic Design", text: "Branding, posters, certificates, social media artwork, and visual identity support." }
];

export const courses = [
  { category: "Development", title: "Web Development", lessons: 18, text: "HTML, CSS, JavaScript, React, backend basics, and portfolio project." },
  { category: "Infrastructure", title: "Networking Essentials", lessons: 12, text: "Network fundamentals, devices, IP addressing, cabling, and troubleshooting." },
  { category: "Security", title: "Cyber Security Basics", lessons: 14, text: "Online safety, threats, passwords, phishing, and practical defense habits." },
  { category: "Design", title: "Graphic Design", lessons: 10, text: "Design principles, brand assets, layouts, posters, and client-ready exports." }
];

export const products = [
  { title: "Student Laptop Setup", price: "R450", tag: "Service", rating: "4.9" },
  { title: "CCTV Starter Kit", price: "R2,800", tag: "Security", rating: "4.8" },
  { title: "Business Website Package", price: "R3,500", tag: "Web", rating: "5.0" }
];

export const jobs = [
  "Junior web developer internship",
  "IT support field assistant",
  "Graphic design portfolio submission",
  "Student mentor for online learning"
];

export const adminAreas = [
  "Courses",
  "Modules",
  "Materials",
  "Assessments",
  "Final Exam",
  "Exam Submissions",
  "Students",
  "Products",
  "Certificates"
];
