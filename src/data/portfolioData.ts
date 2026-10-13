export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    android?: string;
    ios?: string;
    website?: string;
    testFlight?: string;
    github?: string;
  };
  image?: string;
  imageFit?: 'contain' | 'cover';
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  grade?: string;
}

export interface SkillGroup {
  title: string;
  short: string;
  icon: string;
  accent: string;
  description: string;
  items: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  primaryColor: string;
  accentColors: string[];
  occupation: string;
  roles: string[];
  location: string;
  availability: string;
  tagline: string;
  brandSubtitle: string;
  contact: {
    email: string;
    phone: string;
    intro: string;
    heading: string;
    subjectPlaceholder: string;
  };
  links: {
    linkedin: string;
    github?: string;
    resume?: string;
  };
  hero: {
    description: string;
    aiLinkLabel: string;
    typingPhrases: string[];
    locationLine: string;
    highlights: Array<{ value: string; label: string }>;
  };
  techItems: string[];
  about: {
    heading: string;
    paragraphs: string[];
    portrait: string;
    corePlatforms: string;
    workMode: string;
  };
  skills: SkillGroup[];
  services: ServiceItem[];
  achievements: string[];
  aiWork: {
    eyebrow: string;
    title: string;
    description: string;
    toolsLabel: string;
    tools: string[];
    toolsNote: string;
    focusLabel: string;
    focusAreas: Array<{ title: string; description: string }>;
    projectName: string;
    projectLabel: string;
    projectTitle: string;
    projectRole: string;
    projectLinkLabel: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Ahmad Maqbool",
  initials: "AM",
  primaryColor: "#f3a35f",
  accentColors: ["#E3C4A8", "#C98656"],
  occupation: "ERP Developer & AI Integration Engineer",
  roles: [
    "ERP Developer (Dynamics AX / D365)",
    "AI Automation & Integration Engineer"
  ],
  location: "Lahore, Punjab, Pakistan",
  availability: "Available for ERP Development & AI Automation roles",
  tagline: "ERP and AI developer who connects legacy ERP systems to modern APIs, LLMs and workflow automation to replace manual processes.",
  brandSubtitle: "ERP & AI Automation",
  contact: {
    email: "ahmadncbae77@gmail.com",
    phone: "+92 308 0905500",
    intro: "Tell me about your ERP integration, workflow automation, or AI agent requirements. You can email me directly or prepare a message using the form below.",
    heading: "Let’s connect.",
    subjectPlaceholder: "ERP / AI Automation Opportunity"
  },
  links: {
    linkedin: "https://www.linkedin.com/in/ahmadmaqbool",
    resume: ""
  },
  hero: {
    description: "ERP and AI developer who connects legacy ERP systems to modern APIs, LLMs and workflow automation to replace manual processes. Hands-on experience with Dynamics AX 2012 (X++), Dynamics 365 Business Central (AL), SQL Server, and multi-server MCP architectures.",
    aiLinkLabel: "Explore production AI agent",
    typingPhrases: [
      "ERP Developer (Dynamics AX / D365)",
      "AI Automation & Integration Engineer"
    ],
    locationLine: "Based in Lahore, Pakistan · available globally",
    highlights: [
      { value: "6+", label: "SSRS Reports Delivered" },
      { value: "2", label: "ERP Platforms (AX 2012, Business Central)" },
      { value: "1", label: "Production AI Agent" }
    ]
  },
  techItems: ["D365", "AX 2012", "MCP", "n8n", "SQL", ".NET"],
  about: {
    heading: "Connecting enterprise ERPs with intelligent automation.",
    paragraphs: [
      "ERP and AI developer with hands-on experience in Microsoft Dynamics AX 2012 (X++), Dynamics 365 Business Central (AL) and SQL Server. Built and deployed a production AI agent that lets business users query ERP, HR, Excel and CCTV data in natural language through a multi-server MCP architecture.",
      "Skilled at connecting legacy ERP systems to modern APIs, LLMs and workflow automation (n8n, C#, PostgreSQL) to replace manual processes.",
      "Seeking an ERP developer or AI automation role where I can build scalable, data-driven business systems."
    ],
    portrait: "/images/about-portrait.webp?v=defc997",
    corePlatforms: "AX 2012 + D365 BC",
    workMode: "Full-Time / On-site & Remote"
  },
  skills: [
    {
      title: "ERP & Business Applications",
      short: "ERP",
      icon: "smartphone",
      accent: "cyan",
      description: "Customization, development, and architecture across enterprise ERP ecosystems.",
      items: [
        "Dynamics AX 2012 R3",
        "X++",
        "AOT",
        "Form & Table Customization",
        "Dynamics 365 Business Central",
        "AL",
        "Dynamics CRM",
        "Sales Module"
      ]
    },
    {
      title: "AI & Automation",
      short: "AI & Auto",
      icon: "cloud",
      accent: "violet",
      description: "Autonomous agents, LLM integrations, and modern workflow automation pipelines.",
      items: [
        "AI Agents",
        "Google Gemini",
        "Model Context Protocol (MCP)",
        "Prompt Engineering",
        "AI Document Extraction",
        "n8n Workflow Automation",
        "Webhooks"
      ]
    },
    {
      title: "Integration & APIs",
      short: "APIs",
      icon: "code",
      accent: "blue",
      description: "Robust service layers, data bridging, and automated protocol conversion.",
      items: [
        "SOAP Web Services",
        "REST/JSON APIs",
        "ASP.NET Web API",
        "X++ Service Layer",
        "Data Contracts",
        "IMAP Email Automation"
      ]
    },
    {
      title: "Databases & Reporting",
      short: "Data",
      icon: "database",
      accent: "orange",
      description: "Relational schema design, high-performance querying, and enterprise reporting.",
      items: [
        "SQL Server",
        "T-SQL Query Optimization",
        "PostgreSQL",
        "SSRS (RDP-based)",
        "SSRS (Query-based)"
      ]
    },
    {
      title: "Programming Languages",
      short: "Code",
      icon: "layers",
      accent: "mint",
      description: "Typed application logic and enterprise languages powering business operations.",
      items: [
        "X++",
        "AL",
        "C# (.NET Framework)",
        "T-SQL",
        "HTML/CSS"
      ]
    },
    {
      title: "Tools & Infrastructure",
      short: "Tools",
      icon: "rocket",
      accent: "pink",
      description: "Enterprise tooling, version control, telemetry, and server administration.",
      items: [
        "Git",
        "Azure DevOps",
        "Visual Studio",
        "VS Code",
        "Azure Application Insights",
        "AOS & IIS Administration"
      ]
    }
  ],
  services: [
    {
      icon: "rocket",
      title: "ERP Development",
      description: "End-to-end development, table/form customization, and AL/X++ programming for Dynamics AX 2012 and D365 Business Central.",
      accent: "cyan"
    },
    {
      icon: "boxes",
      title: "AI Agents & MCP Integration",
      description: "Production conversational AI agents built on Gemini with multi-server Model Context Protocol (MCP) connecting ERP and enterprise databases.",
      accent: "violet"
    },
    {
      icon: "gauge",
      title: "Workflow Automation",
      description: "Automated business workflows via n8n, IMAP email ingestion, AI document extraction, and secure webhook approval gates.",
      accent: "blue"
    },
    {
      icon: "git-branch",
      title: "API Integration",
      description: "Lightweight C# (.NET) bridges converting legacy SOAP services to modern REST/JSON APIs, plus custom X++ service layers.",
      accent: "mint"
    },
    {
      icon: "shield",
      title: "SSRS Reporting & Administration",
      description: "Custom RDP- and query-based SSRS reports for Finance & Production, along with AOS/IIS server configuration and troubleshooting.",
      accent: "pink"
    }
  ],
  achievements: [
    "Deployed a production AI agent (MCP + Gemini) used by company staff",
    "Delivered 6+ custom SSRS reports for Finance and Production"
  ],
  aiWork: {
    eyebrow: "AI & ERP INTEGRATION",
    title: "Enterprise ERP, with an AI focus.",
    description: "Connecting legacy ERP systems to modern APIs, LLMs, and multi-server MCP architectures to replace manual workflows.",
    toolsLabel: "AI & Integration Stack",
    tools: ["Google Gemini", "Model Context Protocol (MCP)", "n8n"],
    toolsNote: "Production MCP architecture allowing staff to query SQL Server, Excel, HR docs, and CCTV in natural language.",
    focusLabel: "Where I apply AI",
    focusAreas: [
      {
        title: "Multi-Server MCP Architecture",
        description: "Connect Dynamics AX (SQL Server), Excel files, HR policy documents, and CCTV/NVR records into a unified agent context."
      },
      {
        title: "AI Document Extraction & Ingestion",
        description: "Automate vendor email processing via IMAP, extracting receipt details and generating unique per-approver links."
      },
      {
        title: "Webhook Approvals & ERP Posting",
        description: "Multi-user authentication, mandatory rejection reasons, and automated API posting to Dynamics AX with PostgreSQL audit logs."
      }
    ],
    projectName: "Khalis Group AI Agent",
    projectLabel: "PRODUCTION AI DEPLOYMENT",
    projectTitle: "Natural-language enterprise intelligence powered by Gemini and MCP.",
    projectRole: "Designed, integrated, and deployed for company staff.",
    projectLinkLabel: "View in Selected Projects"
  },
  experience: [
    {
      role: "ERP & AI Developer (Software Engineer)",
      company: "Khalis Group of Industries",
      location: "Johar Town, Lahore, Pakistan",
      duration: "12/2025 - Present",
      current: true,
      description: "Leading enterprise ERP development (Dynamics AX 2012) and engineering production AI agent & workflow automation systems.",
      technologies: ["Dynamics AX 2012", "X++", "Gemini", "MCP", "C#", "n8n", "SQL Server", "PostgreSQL", "SSRS"],
      responsibilities: [
        "AI Agent (Khalis Group AI Agent): Designed and deployed a production chatbot on Gemini giving staff natural-language access to Dynamics AX (SQL Server), Excel files, HR policy documents and CCTV/NVR records through a multi-server MCP architecture.",
        "Dynamics AX 2012 Service Layer (X++): Built a custom X++ service layer (Data Contracts, Service class, AOT Service, Service Group) exposing customer, bank and company master data as live SOAP endpoints with cross-company data access.",
        "Workflow Automation & Integration (n8n, C#, PostgreSQL): Developed C# (.NET Framework) Windows Service / ASP.NET Web API bridge converting SOAP to REST/JSON. Automated vendor receipt processing end-to-end via IMAP, AI extraction, and secure webhook approvals with live HTML audit dashboard.",
        "ERP Reporting & Administration: Designed and deployed 6+ custom SSRS reports (RDP-based and query-based) for Finance and Production. Configured and maintained AOS and IIS to ensure ERP stability and customized forms and tables across multiple AX modules."
      ]
    },
    {
      role: "Business Central Developer Intern",
      company: "Maison Consulting and Solutions",
      location: "Johar Town, Lahore, Pakistan",
      duration: "02/2025 - 12/2025",
      current: false,
      description: "Developed custom tables, pages, reports, and table/page extensions in AL for Dynamics 365 Business Central.",
      technologies: ["Dynamics 365 Business Central", "AL", "VS Code", "Git", "Azure DevOps", "Application Insights"],
      responsibilities: [
        "Developed custom tables, pages, reports, and table/page extensions in AL for Dynamics 365 Business Central.",
        "Implemented FlowFields, TableRelation, LookupPageId/DrillDownPageId and event triggers (OnInsert, OnModify, OnDelete, OnValidate) for data integrity and business logic.",
        "Managed app.json metadata, versioning and dependencies, and handled app publishing, upgrades and schema sync (ForceSync, Clean).",
        "Debugged with symbols and Azure Application Insights telemetry, and wrote technical documentation."
      ]
    },
    {
      role: "Front-End Developer (Project-Based)",
      company: "Wadware Solution",
      location: "Gujranwala, Pakistan",
      duration: "03/2024 - 09/2024",
      current: false,
      description: "Built a responsive streaming-style website with HTML, CSS, Flexbox and media queries.",
      technologies: ["HTML", "CSS", "Flexbox", "Responsive Design"],
      responsibilities: [
        "Built a responsive streaming-style website with HTML, CSS, Flexbox and media queries.",
        "Ensured seamless cross-device mobile consistency and performance."
      ]
    },
    {
      role: "CRM Sales Module Functional",
      company: "Microsoft Dynamics Solutions",
      location: "Rahim Yar Khan, Pakistan",
      duration: "2023 - 11/2023",
      current: false,
      description: "Functional consultant for Dynamics CRM Sales Module implementations.",
      technologies: ["Dynamics CRM", "Sales Module", "Data Migration", "Customization"],
      responsibilities: [
        "Completed CRM projects for diverse clients.",
        "Improved system efficiency through customization and automation.",
        "Managed data migrations and provided user training."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "National College of Business Administration & Economics (NCBAE)",
      location: "Rahim Yar Khan, Pakistan",
      period: "01/2023 - Expected 12/2026",
      description: "Undergraduate degree in Computer Science focusing on enterprise software architecture, databases, data structures, and algorithms.",
      grade: "Expected 12/2026"
    }
  ],
  projects: [
    {
      name: "Khalis Group AI Agent",
      description: "Gemini chatbot + multi-server MCP over Dynamics AX, Excel, HR docs and CCTV/NVR records, giving non-technical staff instant natural-language enterprise data access.",
      image: "/images/project1.webp",
      technologies: ["Gemini", "MCP", "SQL Server", "AX 2012"],
      links: {}
    },
    {
      name: "AX 2012 X++ Service Layer",
      description: "Custom SOAP endpoints for customer, bank, and company master data with cross-company (multi-legal-entity) filtering and query capabilities.",
      image: "/images/project2.webp",
      technologies: ["X++", "SOAP", "AOT", "Data Contracts"],
      links: {}
    },
    {
      name: "Vendor Receipt Approval Automation",
      description: "End-to-end receipt pipeline: IMAP ingestion, AI extraction, secure webhook multi-user approvals, automatic ERP posting, PostgreSQL logging, and live HTML history dashboard.",
      image: "/images/project3.webp",
      technologies: ["n8n", "C#", "PostgreSQL", "Webhooks"],
      links: {}
    },
    {
      name: "SOAP to REST Bridge",
      description: "High-performance C# (.NET Framework) Windows Service and ASP.NET Web API bridge that converts legacy SOAP endpoints into lightweight REST/JSON APIs.",
      image: "/images/project4.webp",
      technologies: ["C#", ".NET Framework", "ASP.NET Web API", "REST"],
      links: {}
    }
  ],
  languages: ["English", "Urdu"]
};
