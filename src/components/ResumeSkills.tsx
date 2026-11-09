"use client";

import React, { useState } from "react";
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles } from "lucide-react";

export default function ResumeSkills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const SKILL_GROUPS = [
    {
      id: "languages",
      ticker: "SECT. 01 // LANGUAGES",
      title: "Core Languages & Runtimes",
      icon: Code2,
      description: "Systems programming, strongly-typed backend services, and application runtimes.",
      skills: ["C# (.NET 8)", "TypeScript", "Rust", "JavaScript (ESNext)", "SQL (T-SQL)", "Java", "HTML5 / SASS"],
    },
    {
      id: "backend",
      ticker: "SECT. 02 // DISTRIBUTED",
      title: "Distributed Systems & Messaging",
      icon: Cpu,
      description: "Asynchronous event streaming, low-latency microservices, and distributed tracing.",
      skills: [
        ".NET 8 / ASP.NET Core",
        "Azure Service Bus (Pub/Sub)",
        "SignalR (WebSockets)",
        "RESTful Web APIs",
        "gRPC & Protocol Buffers",
        "Microservices Architecture",
        "OpenTelemetry Tracing",
      ],
    },
    {
      id: "ai",
      ticker: "SECT. 03 // APPLIED AI",
      title: "Applied AI & Agent Protocols",
      icon: Sparkles,
      description: "Human-in-the-loop workflows, context protocol servers, and schema discovery tools.",
      skills: [
        "Model Context Protocols (MCP)",
        "LLM Agent Tooling & Bridges",
        "Natural Language-to-SQL Pipelines",
        "Automated Schema Discovery",
        "Claude & Cursor Workflows",
        "GitHub Copilot Integration",
      ],
    },
    {
      id: "frontend",
      ticker: "SECT. 04 // CLIENT UI",
      title: "Frontend Engineering & Monorepos",
      icon: Terminal,
      description: "High-performance enterprise UI, component design systems, and client tooling.",
      skills: [
        "React",
        "Next.js (App Router)",
        "Angular",
        "Monaco Code Editor",
        "Material UI (MUI)",
        "AG Grid Enterprise",
        "Electron",
        "Nx Monorepo & PNPM",
        "Vite & Tailwind CSS",
      ],
    },
    {
      id: "data",
      ticker: "SECT. 05 // DATA STORES",
      title: "Data Topologies & Storage Formats",
      icon: Database,
      description: "Relational persistence, columnar analytics storage, and distributed document caches.",
      skills: [
        "Microsoft SQL Server",
        "Apache Parquet (Columnar)",
        "MongoDB",
        "SQLite",
        "Apache Hive & Avro",
        "Azure Blob Storage",
        "Redis Distributed Caching",
      ],
    },
    {
      id: "devops",
      ticker: "SECT. 06 // CLOUD & CI",
      title: "Cloud Infrastructure & Testing",
      icon: Cloud,
      description: "Container orchestration, automated deployment pipelines, and zero-defect test harnesses.",
      skills: [
        "Kubernetes & Helm",
        "Docker Containerization",
        "GitHub Actions CI/CD",
        "Azure DevOps Pipelines",
        "NUKE (Infrastructure as Code)",
        "xUnit / Integration Test Harnesses",
        "Jest & Vitest",
        "Snyk Security & Key Vault",
      ],
    },
  ];

  const filterTabs = [
    { label: "All Sectors", id: "All" },
    { label: "Languages", id: "languages" },
    { label: "Distributed", id: "backend" },
    { label: "AI & MCP", id: "ai" },
    { label: "Frontend", id: "frontend" },
    { label: "Data Stores", id: "data" },
    { label: "DevOps", id: "devops" },
  ];

  const displayedGroups =
    activeFilter === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === activeFilter);

  return (
    <section id="skills" className="py-12 border-b-2 border-white/15 resume-border">
      {/* Newspaper Page 3 Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-widest uppercase font-bold">
            PAGE 3 // TECHNOLOGY MARKET INDEX & SYSTEM DIRECTORY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#fdfbf7] mt-1">
            The Technical Compendium & Toolchain Index
          </h2>
          <p className="text-xs sm:text-sm text-[#dcd4c3] mt-1 font-serif italic">
            An indexed taxonomy of systems languages, distributed message brokers, cloud infrastructure, and AI protocols.
          </p>
        </div>

        <div className="text-xs font-mono text-[#a3b1cc] sm:text-right shrink-0">
          <span className="px-2.5 py-1 rounded bg-[#0a1322] border border-white/10 inline-block font-bold">
            6 DOMAINS • 40+ TOOLS
          </span>
        </div>
      </div>

      {/* Filter Tabs (Newspaper Section Index) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8 no-print pb-2">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 text-xs font-mono tracking-wider rounded transition-all duration-150 ${
                isActive
                  ? "bg-[#ff6b6b] text-white font-bold shadow-sm shadow-[#ff6b6b]/30"
                  : "bg-[#0a1322] text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-[#12213d] border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Compendium Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.id}
              className="p-5 sm:p-6 rounded-xl bg-[#0a1322] border border-white/15 hover:border-[#ff6b6b]/40 transition-all duration-300 shadow-md shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Ticker and Icon */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-[#050a14] border border-white/10 flex items-center justify-center text-[#ff6b6b] group-hover:border-[#ff6b6b]/40 group-hover:text-[#ff8787] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#ff6b6b] font-bold block">
                        {group.ticker}
                      </span>
                      <h3 className="font-serif text-base font-black text-[#fdfbf7] tracking-tight">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#a3b1cc] leading-relaxed mb-4 font-mono">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#050a14] text-[#ece5d8] border border-white/10 group-hover:border-[#ff6b6b]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
