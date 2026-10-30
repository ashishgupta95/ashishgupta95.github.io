export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  architecture: string[];
  impact: string[];
  technologies: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  promotion?: string;
  description: string[];
  highlights: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Ashish Gupta",
  role: "Senior Software Engineer",
  tagline: "Architecting high-throughput distributed systems, low-latency engines, and enterprise AI & Model Context Protocols (MCPs).",
  bio: "Results-driven Senior Software Engineer with 9+ years of production experience scaling mission-critical platforms across enterprise software, distributed systems, and cloud architectures. Expert in .NET 8, C#, Rust, and TypeScript with deep production expertise in event-driven pub/sub architectures, distributed tracing, and LLM orchestration.",
  location: "Vienna, Austria",
  phone: "(+43) 6608285746",
  email: "gupta.s.ashish95@gmail.com",
  github: "https://github.com/ashishgupta95",
  linkedin: "https://www.linkedin.com/in/ashish-gupta-6aa499117/",
  stats: [
    { label: "Production Experience", value: "9+ Years" },
    { label: "Data Reconciled Per Run", value: "100+ GB" },
    { label: "Engineering Teams Impacted", value: "Enterprise Scale" },
    { label: "Automated Regression Runs", value: "High-Volume CI" },
    { label: "Data Errors Reduced", value: "25% Cut" },
    { label: "Global Compliance Standards", value: "15+ Jurisdictions" },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "enterprise-mcp",
    tag: "AI & Model Context Protocols",
    title: "Enterprise MCP & LLM Agentic Pipeline",
    subtitle: "Bridging Enterprise Hybrid-Cloud Environments with LLMs via Model Context Protocols",
    company: "Enterprise Test Automation",
    period: "2024 - Present",
    metrics: [
      { label: "Test Authoring Friction", value: "-70%" },
      { label: "Schema Discovery", value: "Instant" },
      { label: "Client Event Sync", value: "<50ms" },
    ],
    overview:
      "Engineered custom enterprise Model Context Protocols (MCPs) allowing autonomous LLM agents to safely interact with hybrid-cloud and on-premise environments. The system provides real-time schema discovery, automated Natural Language-to-SQL translation, and test case generation.",
    challenge:
      "Enterprise test environments are heavily segregated across VPCs and on-premise networks with diverse heterogeneous data formats. Standard LLMs cannot safely inspect schema metadata or trigger automated runs without strict protocol boundaries, token telemetry, and low-latency state synchronization.",
    architecture: [
      "Custom Model Context Protocol (MCP) server exposing strictly-typed JSON-RPC tools for schema exploration and test generation.",
      "Decoupled event-driven pub/sub messaging via Azure Service Bus propagating live tool-call lifecycles.",
      "Dedicated Notification Service broadcasting state changes to browser frontends via SignalR (WebSockets) with debounced re-fetch.",
      "Granular role-based tool execution boundaries preventing arbitrary code execution while allowing safe NL-to-SQL synthesis.",
    ],
    impact: [
      "Slashed manual query friction and test authoring time by over 70% for enterprise users.",
      "Enabled non-technical QA testers to generate complex regression test suites from plain natural language.",
      "Delivered real-time UI synchronization across multi-tenant clients during autonomous tool runs.",
    ],
    technologies: ["MCP", ".NET 8", "Azure Service Bus", "SignalR", "TypeScript", "LLM Workflows", "Vector/NL-to-SQL"],
    featured: true,
  },
  {
    id: "data-reconciliation-engine",
    tag: "High-Throughput Systems",
    title: "100+ GB Row-by-Row Data Reconciliation Engine",
    subtitle: "High-Throughput Verification Engine Reconciling Massive Heterogeneous Datasets with Precision",
    company: "Enterprise Data Quality",
    period: "2024 - Present",
    metrics: [
      { label: "Dataset Processing", value: "100+ GB" },
      { label: "Engine Precision", value: "100% Exact" },
      { label: "Memory Footprint", value: "Ultra-low" },
    ],
    overview:
      "Maintained, modernized, and stabilized an industry-grade Row-by-Row comparison engine capable of reconciling 100+ GB datasets across SQL databases, Apache Hive, and complex binary/columnar file formats like Parquet, Avro, Excel, and CSV.",
    challenge:
      "Reconciling hundreds of gigabytes of streaming data across disparate formats causes memory explosion and throughput bottlenecks when naive in-memory hash maps or single-threaded comparison algorithms are applied.",
    architecture: [
      "Hybrid engine architecture combining .NET 8 high-availability services with Rust processing modules for low-latency, zero-copy streaming.",
      "Chunked streaming data diffing algorithm with memory-bounded buffers, comparing billions of records without OOM crashes.",
      "Heterogeneous connector adapters parsing Parquet, Avro, Hive tables, and SQL relational rows into unified streaming tuples.",
      "Distributed OpenTelemetry instrumentation enabling real-time bottleneck profiling during multi-gigabyte reconciliations.",
    ],
    impact: [
      "Maintained high reliability as the benchmark verification platform in automated enterprise data integrity testing.",
      "Resolved complex production edge-case anomalies for major global enterprise clients.",
      "Delivered deterministic row-by-row discrepancy reporting with byte-exact precision.",
    ],
    technologies: ["Rust", ".NET 8", "Parquet", "Apache Hive", "SQL Server", "Avro", "OpenTelemetry", "Electron"],
    featured: true,
  },
  {
    id: "iaea-safire",
    tag: "Mission-Critical Government & Compliance",
    title: "International Nuclear Safeguards Inspector Platform",
    subtitle: "High-Security Reporting & Quality Control Platform for Nuclear Inspectors",
    company: "International Atomic Energy Agency (via e-Zest)",
    period: "2023 - 2024",
    metrics: [
      { label: "Data Validation Errors", value: "-25%" },
      { label: "Features Shipped", value: "10+ Core" },
      { label: "System Availability", value: "99.99%" },
    ],
    overview:
      "Architected and delivered core enhancements for the mission-critical reporting application utilized by international nuclear inspectors across global verification missions.",
    challenge:
      "Nuclear safeguards inspection requires uncompromising data integrity, air-gapped security considerations, and zero tolerance for data corruption or validation ambiguities across multinational inspection teams.",
    architecture: [
      "Resilient .NET Core backend with strict transactional boundaries and cryptographically verifiable audit trails.",
      "Responsive Angular enterprise client designed for intuitive field data entry under high-pressure inspection protocols.",
      "Comprehensive quality control validation rules reducing human entry discrepancy at point of capture.",
    ],
    impact: [
      "Led end-to-end delivery of 10+ core features directly praised by inspection operations leadership.",
      "Decreased international inspection data validation errors by 25%.",
      "Guaranteed uninterrupted 99.99% operational availability for global inspection missions.",
    ],
    technologies: [".NET Core", "Angular", "SQL Server", "Enterprise Quality Control", "High-Security Auditing"],
    featured: true,
  },
  {
    id: "supply-chain-control-tower",
    tag: "Cloud & IoT Visualization",
    title: "Real-Time Global Logistics Control Tower",
    subtitle: "Azure Maps Geo-Tracking & Predictive Demand Planning Platform",
    company: "GEP Worldwide",
    period: "2019 - 2021",
    metrics: [
      { label: "Shipment Support Queries", value: "-25%" },
      { label: "Promotion Velocity", value: "Within 12 Mo" },
      { label: "Fleet Visibility", value: "Real-Time" },
    ],
    overview:
      "Engineered real-time shipment visualization and predictive demand analytics by integrating Azure Maps with an enterprise Control Tower UI.",
    challenge:
      "Global supply chain clients suffered from opaque transit states, generating thousands of manual shipment queries and delayed responses to supply chain disruptions.",
    architecture: [
      "Interactive Azure Maps geospatial visualization layer rendering high-density multi-modal shipping routes with live ETA adjustments.",
      "High-throughput NoSQL data ingestion layer streaming real-time IoT carrier telemetry and warehouse inventory state.",
      "Reusable UI component framework powering both the Control Tower and Demand Planning executive dashboards.",
    ],
    impact: [
      "Reduced client shipment status inquiries by 25% through proactive real-time tracking.",
      "Accelerated internal promotion from Software Engineer to Senior Software Engineer within 12 months.",
      "Standardized UI dashboard architectures across multiple core product suites.",
    ],
    technologies: ["Azure Maps", "React / Angular", "NoSQL", "REST APIs", "High-Frequency Analytics"],
    featured: false,
  },
  {
    id: "deloitte-compliance",
    tag: "Enterprise Legal Tech",
    title: "Remote Worker Compliance & Labor Assessment Platform",
    subtitle: "Multi-Jurisdiction Legal & Tax Assessment Engine for Corporate Workforces",
    company: "LTIMindtree",
    period: "2021 - 2023",
    metrics: [
      { label: "Labor Laws Complied", value: "15+ Laws" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Architecture", value: "Decoupled" },
    ],
    overview:
      "Module Lead architecting a comprehensive Remote Worker Assessment platform, evaluating dynamic cross-border labor, tax, and visa regulations for corporate remote workforces.",
    challenge:
      "Navigating the explosive growth of remote work while adhering to constantly shifting legal and tax compliance statutes across 15+ international jurisdictions.",
    architecture: [
      "Rule engine microservices built on .NET that evaluate risk scoring based on employee location and days spent in jurisdiction.",
      "Modern Angular frontend offering enterprise HR directors clear decision matrices and compliance certificates.",
      "Decoupled microservice topology with enterprise RBAC and audit logging.",
    ],
    impact: [
      "Guaranteed 100% regulatory compliance across 15+ international labor jurisdictions.",
      "Prevented millions of dollars in cross-border tax penalties for enterprise clients.",
    ],
    technologies: [".NET", "Angular", "Microservices", "Rule Engines", "Enterprise Security"],
    featured: false,
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Tricentis",
    role: "Senior Software Engineer",
    location: "Vienna, Austria",
    period: "June 2024 — Present",
    type: "Full-Time",
    promotion: "Formally promoted to Senior Software Engineer in January 2026 (recognized in 19 months)",
    description: [
      "Architect and deliver custom Model Context Protocols (MCPs) bridging LLMs with hybrid-cloud and on-premise test environments, slashing test authoring time through schema discovery and NL-to-SQL synthesis.",
      "Engineered decoupled pub/sub messaging and notification pipeline using Azure Service Bus, dedicated Notification Service, and SignalR WebSockets for live UI refresh.",
      "Maintain, optimize, and resolve production bugs for high-throughput 100+ GB Row-by-Row data reconciliation engines across SQL, Hive, Parquet, and Avro.",
      "Architected automated CI/CD reporting pipelines and interactive dashboards for high-volume nightly regression test runs, scaling adoption across engineering teams.",
      "Developed web-based interactive SQL playground micro-frontend using Monaco Editor with live IntelliSense and low-latency result rendering.",
      "Maintained low-latency, memory-safe desktop reporting tooling utilizing Rust with an Electron frontend.",
    ],
    highlights: [
      "Custom Enterprise MCPs (Model Context Protocols)",
      "100+ GB Row-by-Row Data Verification Engine",
      "Event-Driven Azure Service Bus + SignalR Pub/Sub",
      "Nightly Standup Dashboard adopted across teams",
      "Monaco Editor SQL Playground Micro-Frontend",
    ],
    skills: ["C#", ".NET 8", "Rust", "TypeScript", "MCPs", "SignalR", "Azure Service Bus", "Monaco Editor", "Parquet", "Kubernetes", "Helm", "OpenTelemetry"],
  },
  {
    company: "International Atomic Energy Agency (via e-Zest)",
    role: "Senior Software Engineer",
    location: "Vienna, Austria",
    period: "April 2023 — May 2024",
    type: "Contract",
    description: [
      "Enhanced and maintained mission-critical reporting applications using .NET Core, Angular, and SQL Server for international nuclear inspectors.",
      "Led end-to-end delivery of 10+ core features, strengthening quality control frameworks and decreasing data validation errors by 25%.",
      "Guaranteed strict adherence to international security protocols and nuclear safeguards verification standards.",
    ],
    highlights: [
      "Mission-critical nuclear inspector reporting platform",
      "Decreased data validation errors by 25%",
      "Led delivery of 10+ core system features",
    ],
    skills: [".NET Core", "Angular", "SQL Server", "System Quality Control", "Security Auditing"],
  },
  {
    company: "LTIMindtree",
    role: "Module Lead",
    location: "Mumbai, India",
    period: "April 2021 — April 2023",
    type: "Full-Time",
    description: [
      "Engineered full-stack Remote Worker Assessment web application for enterprise clients using .NET and Angular, guaranteeing 100% regulatory compliance across 15+ international labour laws.",
      "Drove full-stack feature development focusing on application security, performance optimization, and microservice decoupling.",
    ],
    highlights: [
      "Remote Worker Assessment enterprise web app",
      "100% compliance across 15+ international labor laws",
      "Microservice decoupling & performance tuning",
    ],
    skills: [".NET", "Angular", "Microservices", "Application Security", "SQL Server"],
  },
  {
    company: "GEP Worldwide",
    role: "Senior Software Engineer",
    location: "Mumbai, India",
    period: "September 2019 — April 2021",
    type: "Full-Time",
    promotion: "Accelerated promotion from Software Engineer to Senior Software Engineer within 12 months (Q4 2020)",
    description: [
      "Integrated Azure Maps with the Control Tower UI, providing real-time logistics tracking that reduced client shipment queries by 25%.",
      "Created reusable UI frameworks for core Control Tower and Demand Planning projects, designing interactive analytics dashboards.",
      "Designed high-performing data visualization and ingestion mechanisms using NoSQL database architectures.",
    ],
    highlights: [
      "Promoted to Senior SE within 12 months",
      "Azure Maps real-time logistics tracking",
      "25% reduction in client shipment queries",
    ],
    skills: ["Azure Maps", "React", "Angular", "NoSQL", "REST APIs", "Analytics Dashboards"],
  },
  {
    company: "TSS Consultancy",
    role: "Junior Software Engineer",
    location: "Mumbai, India",
    period: "April 2018 — September 2019",
    type: "Full-Time",
    description: [
      "Architected banking security modules using Digital Certificates and Public/Private key cryptography, bridging cryptographic algorithms across Java and .NET environments.",
      "Built a consolidated CRM application unifying fragmented customer datasets into a single, high-integrity transactional database.",
    ],
    highlights: [
      "Cross-platform PKI Cryptography bridging Java and .NET",
      "Eliminated data-in-transit security vulnerabilities",
      "High-integrity consolidated banking CRM",
    ],
    skills: ["Java", ".NET", "Cryptography", "PKI / Digital Certificates", "SQL"],
  },
  {
    company: "AUM Insurance Brokers",
    role: "Software Engineer",
    location: "Mumbai, India",
    period: "June 2017 — April 2018",
    type: "Full-Time",
    description: [
      "Designed and developed a public-facing insurance portal integrating vendor REST APIs for real-time policy comparison and automated transactions.",
    ],
    highlights: [
      "Public-facing insurance comparison portal",
      "Multi-vendor REST API aggregation",
    ],
    skills: ["C#", "ASP.NET", "REST APIs", "JavaScript", "SQL"],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages & Core Runtimes",
    skills: [
      { name: "C# / .NET 8", level: "Expert", years: "8+ yrs", badge: "Primary" },
      { name: "TypeScript", level: "Expert", years: "6+ yrs", badge: "Primary" },
      { name: "Rust", level: "Advanced", years: "2+ yrs", badge: "Low Latency" },
      { name: "JavaScript", level: "Expert", years: "8+ yrs" },
      { name: "SQL (T-SQL / Postgres)", level: "Expert", years: "8+ yrs" },
      { name: "Java", level: "Proficient", years: "3+ yrs" },
    ],
  },
  {
    name: "AI & Model Context Protocols (MCP)",
    skills: [
      { name: "Model Context Protocols (MCP)", level: "Production", years: "2024-Present", badge: "Cutting Edge" },
      { name: "LLM Agent Tooling", level: "Production", years: "2024-Present" },
      { name: "NL-to-SQL Synthesis", level: "Production", years: "2024-Present" },
      { name: "Automated Schema Discovery", level: "Production", years: "2024-Present" },
      { name: "Claude / Cursor / Copilot", level: "Daily Workflow", years: "Active" },
    ],
  },
  {
    name: "Distributed Systems & Backend",
    skills: [
      { name: "Event-Driven Architecture", level: "Expert", years: "6+ yrs", badge: "Core Strength" },
      { name: "Azure Service Bus (Pub/Sub)", level: "Expert", years: "4+ yrs" },
      { name: "SignalR (WebSockets)", level: "Expert", years: "5+ yrs" },
      { name: "gRPC & High-Throughput APIs", level: "Advanced", years: "3+ yrs" },
      { name: "Microservices & Multi-Tenancy", level: "Expert", years: "6+ yrs" },
      { name: "OpenTelemetry (Tracing)", level: "Advanced", years: "2+ yrs" },
    ],
  },
  {
    name: "Frontend & Micro-Frontends",
    skills: [
      { name: "React & Next.js", level: "Expert", years: "6+ yrs", badge: "Primary" },
      { name: "Angular", level: "Advanced", years: "5+ yrs" },
      { name: "Monaco Editor Integration", level: "Production", years: "2+ yrs", badge: "Specialty" },
      { name: "MUI & AG Grid", level: "Advanced", years: "4+ yrs" },
      { name: "Electron Desktop", level: "Advanced", years: "3+ yrs" },
      { name: "Nx Monorepo & PNPM", level: "Advanced", years: "3+ yrs" },
    ],
  },
  {
    name: "Data Stores & Storage Formats",
    skills: [
      { name: "SQL Server", level: "Expert", years: "8+ yrs" },
      { name: "Apache Parquet & Avro", level: "Advanced", years: "2+ yrs", badge: "Big Data" },
      { name: "MongoDB & NoSQL", level: "Advanced", years: "4+ yrs" },
      { name: "Apache Hive", level: "Proficient", years: "2+ yrs" },
      { name: "SQLite & Azure Blob", level: "Advanced", years: "5+ yrs" },
    ],
  },
  {
    name: "Cloud, DevOps & Test Automation",
    skills: [
      { name: "Kubernetes & Helm", level: "Advanced", years: "3+ yrs" },
      { name: "Docker", level: "Expert", years: "5+ yrs" },
      { name: "GitHub Actions CI/CD", level: "Expert", years: "4+ yrs" },
      { name: "Azure DevOps & IaC (NUKE)", level: "Advanced", years: "3+ yrs" },
      { name: "xUnit / Jest / E2E", level: "Expert", years: "8+ yrs" },
      { name: "Snyk & Security Scanning", level: "Advanced", years: "3+ yrs" },
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Science",
  institution: "University of Mumbai",
  period: "2012 — 2016",
  location: "Mumbai, India",
};

export const AWARDS = [
  {
    title: "Rapid Advancement to Senior Software Engineer",
    organization: "Tricentis",
    date: "January 2026",
    description:
      "Promoted to Senior Software Engineer recognizing cross-cutting engineering impacts across enterprise cloud, low-latency desktop, and generative AI initiatives within 19 months.",
  },
  {
    title: "Accelerated Promotion to Senior Software Engineer",
    organization: "GEP Worldwide",
    date: "Q4 2020",
    description:
      "Promoted within 12 months of joining in recognition of leading the real-time logistics tracking engine and reusable analytics framework.",
  },
];
