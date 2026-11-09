"use client";

import React, { useState } from "react";
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles } from "lucide-react";

export default function ResumeSkills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const SKILL_GROUPS = [
    {
      id: "languages",
      numeral: "§ 03.1",
      title: "Core Languages & Runtimes",
      icon: Code2,
      description: "Systems programming, strongly-typed application runtimes, and scripting languages.",
      skills: ["C# (.NET 8)", "TypeScript", "Rust", "JavaScript (ESNext)", "SQL (T-SQL)", "Java", "HTML5 / SASS"],
    },
    {
      id: "backend",
      numeral: "§ 03.2",
      title: "Distributed Systems & Messaging",
      icon: Cpu,
      description: "Asynchronous event queues, low-latency microservices, and distributed observability.",
      skills: [
        ".NET 8 / ASP.NET Core",
        "Azure Service Bus (Pub/Sub)",
        "SignalR (Real-Time WebSockets)",
        "RESTful Web APIs",
        "gRPC & Protocol Buffers",
        "Microservices Architecture",
        "OpenTelemetry Distributed Tracing",
      ],
    },
    {
      id: "ai",
      numeral: "§ 03.3",
      title: "Applied AI & Agent Protocols",
      icon: Sparkles,
      description: "Human-in-the-loop workflows, context protocol servers, and schema discovery tools.",
      skills: [
        "Model Context Protocols (MCP)",
        "LLM Agent Tooling & Bridges",
        "Natural Language-to-SQL Pipelines",
        "Automated Schema Extraction",
        "Claude & Cursor Workflows",
        "GitHub Copilot Integration",
      ],
    },
    {
      id: "frontend",
      numeral: "§ 03.4",
      title: "Frontend Engineering & Micro-Frontends",
      icon: Terminal,
      description: "High-performance enterprise UI, component design systems, and rich client tooling.",
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
      numeral: "§ 03.5",
      title: "Data Topologies & Storage Formats",
      icon: Database,
      description: "Relational querying, columnar analytics storage, and distributed document caches.",
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
      numeral: "§ 03.6",
      title: "Cloud Infrastructure, DevOps & Quality",
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
        "Snyk Security & Azure Key Vault",
      ],
    },
  ];

  const filterTabs = [
    { label: "All Sectors", id: "All" },
    { label: "Languages", id: "languages" },
    { label: "Backend", id: "backend" },
    { label: "AI & MCP", id: "ai" },
    { label: "Frontend", id: "frontend" },
    { label: "Data", id: "data" },
    { label: "DevOps", id: "devops" },
  ];

  const displayedGroups =
    activeFilter === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === activeFilter);

  return (
    <section id="skills" className="py-12 border-b border-white/10 resume-border">
      {/* Section Folio Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-widest uppercase font-semibold">
            § 03.0 {"//"} THE TECHNICAL COMPENDIUM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#fdfbf7] mt-1">
            Architectural Toolchain & Capability Index
          </h2>
          <p className="text-xs sm:text-sm text-[#dcd4c3] mt-1 font-serif italic">
            An authoritative taxonomy of languages, distributed runtimes, cloud platforms, and AI protocols.
          </p>
        </div>

        <div className="text-xs font-mono text-[#a3b1cc] sm:text-right shrink-0">
          <span className="px-2.5 py-1 rounded bg-[#0e1a2f] border border-white/5 inline-block">
            6 DOMAINS • 40+ TOOLS
          </span>
        </div>
      </div>

      {/* Filter Index Tabs (Magazine Tab Style) */}
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
                  : "bg-[#0e1a2f] text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-[#12213d] border border-white/5"
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
              className="p-5 sm:p-6 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#11203b] border border-white/10 hover:border-[#ff6b6b]/40 transition-all duration-300 shadow-md shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                {/* Header with numeral and icon */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#09111e] border border-white/10 flex items-center justify-center text-[#ff6b6b] group-hover:border-[#ff6b6b]/40 group-hover:text-[#ff8787] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#ff6b6b] font-bold block">
                        {group.numeral}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#fdfbf7] tracking-tight">
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
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#09111e] text-[#ece5d8] border border-white/10 group-hover:border-[#ff6b6b]/20 transition-colors"
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
