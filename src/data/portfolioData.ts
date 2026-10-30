import type { Project, TechCategory, LearningItem, TimelineMilestone, SocialLink } from '../types/portfolio';

export const personalInfo = {
  name: "James Francis L. Mercado",
  preferredName: "James",
  handle: "Jamexuu",
  role: "Student Software Engineer",
  educationBadge: "BSIT · Polytechnic University of the Philippines",
  location: "Batangas, Philippines",
  timezone: "GMT+8",
  status: "Currently learning & building",
  headline: "Building backend services, relational databases, and understanding how software systems work under the hood.",
  bio: [
    "I got into programming during senior high school after writing my first lines of code. What began as simple algorithmic puzzles quickly grew into a genuine curiosity about how real-world applications handle data reliably.",
    "While many start with visual design, I found myself drawn to what happens behind the scenes: designing relational database schemas, mapping entity relationships, and engineering predictable API endpoints.",
    "I value readable code, solid data modeling, and understanding fundamentals before abstractions. Every project is an opportunity to write cleaner server-side code and deepen my engineering discipline."
  ],
  collaborationStatus: "Open for internship opportunities, technical discussions, and backend software engineering projects."
};

export const projects: Project[] = [
  {
    id: "pharmadali",
    number: "01",
    title: "PharmaDali",
    category: "Multi-Platform Pharmacy Management System",
    role: "Lead Developer",
    period: "2026 - Present",
    description: "Our undergraduate capstone project: an academic multi-platform pharmacy management system powering web and mobile applications for customers, pharmacists, and admins, featuring automated stockout risk prediction and inventory operations.",
    techStack: ["Laravel", "React", "React Native", "MySQL", "Gemini AI API", "Firebase (FCM)", "Docker", "VPS", "REST API"],
    contributions: [
      "Led overall system development and engineered the core Laravel backend service layer with unified RESTful APIs for web and mobile clients",
      "Developed both customer and pharmacist mobile applications using React Native with role-tailored workflows and inventory interfaces",
      "Integrated the Gemini AI API for intelligent features alongside Firebase Cloud Messaging (FCM) for real-time order and inventory push notifications",
      "Containerized the application stack with Docker and managed deployment on a cloud VPS for stable production operations"
    ],
    githubUrl: "https://github.com/PharmaDali/PharmaDali",
    liveUrl: "https://pharmadali.com"
  },
  {
    id: "easybuy",
    number: "02",
    title: "EasyBuy (EasyBuy-x-PackIT)",
    category: "E-Commerce & System Integration Architecture",
    role: "Fullstack Developer · Integration Architect",
    period: "2025",
    description: "Final project for our 3rd year curriculum: an academic e-commerce ordering platform built as a two-group system collaboration, engineered to interface seamlessly with the PackIT packaging and fulfillment service.",
    techStack: ["PHP", "MySQL", "JavaScript", "REST API", "Tailwind CSS", "Git"],
    contributions: [
      "Developed the fullstack EasyBuy web platform using PHP, MySQL, and JavaScript, implementing product catalogs, cart mechanics, and checkout flows",
      "Architected the relational MySQL database schema to handle order processing, inventory items, and transactional states",
      "Designed and implemented inter-system REST API integration contracts to hand off validated customer orders to PackIT",
      "Coordinated active cross-team Git repository workflows with 780+ commits to maintain status synchronization"
    ],
    githubUrl: "https://github.com/Jamexuu/EasyBuy-x-PackIT"
  },
  {
    id: "papernest",
    number: "03",
    title: "Papernest",
    category: "Python / Flask Web System",
    role: "Backend & Database Developer",
    period: "2024",
    description: "Final project for our 2nd year Object-Oriented Programming (OOP) class: an academic database-driven web application managing paper submissions, document schemas, structured forms, and centralized records.",
    techStack: ["Python", "Flask", "MySQL", "Relational Schemas", "REST Routes"],
    contributions: [
      "Developed modular Flask route controllers and relational database connection utilities",
      "Implemented schema view logic and strict server-side form validations for academic document submissions",
      "Structured the backend data architecture and managed normalized MySQL persistence for paper records"
    ],
    githubUrl: "https://github.com/abigailcbarrion/Papernest"
  }
];

export const techStackData: TechCategory[] = [
  {
    title: "BACKEND & DATABASES",
    description: "Server-side languages, frameworks, and databases I use to build business logic and data persistence.",
    technologies: [
      { name: "Laravel", note: "REST APIs, MVC, Eloquent ORM, auth middleware, migrations" },
      { name: "PHP", note: "Server-side logic, session handling, script automation" },
      { name: "MySQL", note: "Relational schema design, indexes, foreign keys, normalization" },
      { name: "Firebase", note: "Cloud Messaging (FCM), Firestore, Auth, real-time sync" },
      { name: "Python / Flask", note: "Web routes, backend utilities, data schemas, forms" },
      { name: "REST APIs", note: "Endpoint routing, HTTP status codes, JSON contracts" },
      { name: "Java", note: "Object-oriented programming, data structures, JDBC" }
    ]
  },
  {
    title: "FRONTEND & INTEGRATION",
    description: "Tools and client-side technologies I use to consume backend endpoints and build intuitive interfaces.",
    technologies: [
      { name: "TypeScript", note: "Type safety, API payload definitions, interfaces" },
      { name: "React", note: "Component hierarchy, hooks, API data fetching" },
      { name: "JavaScript (ES6+)", note: "Asynchronous async/await, fetch API, data transformations" },
      { name: "Tailwind CSS", note: "Utility-first responsive layouts, UI states" },
      { name: "React Native", note: "Mobile client interfaces consuming backend APIs" },
      { name: "Gemini AI API", note: "LLM endpoint integration, automated prompts & assistants" }
    ]
  },
  {
    title: "INFRASTRUCTURE & EXPLORING",
    description: "Tools, DevOps concepts, and system architecture topics I am actively applying and learning.",
    technologies: [
      { name: "Docker", note: "Containerizing local development stacks and services" },
      { name: "Git & GitHub", note: "Branching strategies, multi-contributor PR workflows, versioning" },
      { name: "System Integration", note: "Inter-system API contracts, data synchronization, architectures" },
      { name: "Database Indexing", note: "Query profiling, execution plans, relational normalization" }
    ]
  }
];

export const learningItems: LearningItem[] = [
  {
    topic: "Clean Backend Architecture & Design Patterns",
    context: "Studying service-repository patterns and domain separation in Laravel to decouple business logic from HTTP controllers as systems expand.",
    status: "Active Exploration"
  },
  {
    topic: "Relational Database Indexing & Query Profiling",
    context: "Analyzing MySQL execution plans (EXPLAIN), B-Tree indexing, and query optimization to keep queries performant under scale.",
    status: "Active Exploration"
  },
  {
    topic: "Strict API Contracts & Type Synchronization",
    context: "Investigating patterns to validate backend request/response payloads against TypeScript client interfaces to eliminate runtime errors.",
    status: "In Progress"
  },
  {
    topic: "Containerized Environments with Docker",
    context: "Creating reproducible multi-container setups (Nginx + PHP-FPM + MySQL + phpMyAdmin) for reliable local development workflows.",
    status: "Up Next"
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2023 - Present",
    title: "Bachelor of Science in Information Technology",
    institution: "Polytechnic University of the Philippines (PUP)",
    description: "Focused on backend software engineering, relational database management systems, web applications, and collaborative multi-group system integration.",
    badge: "Current"
  },
  {
    year: "2022 - 2023",
    title: "Senior High School (TVL-ICT Strand)",
    institution: "La Consolacion College Tanauan",
    description: "Graduated with honors in technical vocational studies; developed foundational programming logic, algorithms, and early software projects.",
    badge: "Academic"
  },
  {
    year: "2021",
    title: "First Steps into Programming",
    institution: "Independent Learning",
    description: 'Wrote first "Hello World" program in C++, igniting a persistent curiosity for computer logic, memory, and how software works.',
    badge: "Origin"
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    url: "mailto:jamesfrancislmercado@gmail.com",
    handle: "jamesfrancislmercado@gmail.com",
    type: "email"
  },
  {
    label: "GitHub",
    url: "https://github.com/Jamexuu",
    handle: "github.com/Jamexuu",
    type: "github"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/james-francis-mercado/",
    handle: "in/james-francis-mercado",
    type: "linkedin"
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/jamesfrancis.mercado22",
    handle: "jamesfrancis.mercado22",
    type: "facebook"
  }
];
