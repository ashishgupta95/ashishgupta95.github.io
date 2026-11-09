"use client";

import React, { useState } from "react";
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles } from "lucide-react";

export default function ResumeSkills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const SKILL_GROUPS = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      skills: ["C#", "TypeScript", "Rust", "JavaScript", "SQL", "Java", "HTML5 / CSS3 / SASS"],
    },
    {
      id: "backend",
      title: "Backend & Distributed Systems",
      icon: Cpu,
      skills: [
        ".NET 8 / .NET Core",
        "Web API & REST APIs",
        "Azure Service Bus (Pub/Sub)",
        "SignalR (WebSockets)",
        "gRPC",
        "Microservices Architecture",
        "OpenTelemetry (Distributed Tracing)",
      ],
    },
    {
      id: "ai",
      title: "AI & Emerging Protocols",
      icon: Sparkles,
      skills: [
        "Model Context Protocols (MCP)",
        "LLM Agent Tooling",
        "Natural Language-to-SQL",
        "Automated Schema Discovery",
        "Claude & Cursor AI Workflows",
        "GitHub Copilot",
      ],
    },
    {
      id: "frontend",
      title: "Frontend & Micro-Frontends",
      icon: Terminal,
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Monaco Editor Integration",
        "Material UI (MUI)",
        "AG Grid",
        "Electron",
        "Nx Monorepo & PNPM",
        "Vite",
      ],
    },
    {
      id: "data",
      title: "Databases & Storage Formats",
      icon: Database,
      skills: [
        "SQL Server (T-SQL)",
        "Apache Parquet",
        "MongoDB",
        "SQLite",
        "Apache Hive",
        "Apache Avro",
        "Azure Blob Storage",
      ],
    },
    {
      id: "devops",
      title: "Cloud, DevOps & Testing",
      icon: Cloud,
      skills: [
        "Kubernetes",
        "Helm Charts",
        "Docker",
        "GitHub Actions CI/CD",
        "Azure DevOps & Pipelines",
        "NUKE (IaC)",
        "xUnit / Unit & Integration Testing",
        "Jest & Vite Testing",
        "Snyk Security",
        "Azure Key Vault",
      ],
    },
  ];

  const filterTabs = [
    { label: "All", id: "All" },
    { label: "Languages", id: "languages" },
    { label: "Backend", id: "backend" },
    { label: "AI & MCP", id: "ai" },
    { label: "Frontend", id: "frontend" },
    { label: "Data", id: "data" },
    { label: "DevOps", id: "devops" },
  ];

  const visibleGroups =
    activeFilter === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === activeFilter);

  return (
    <section id="skills" className="py-10 border-b border-white/10 resume-border page-break-avoid">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-semibold">
            02 // TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#fdfbf7] mt-1">
            Skills & Technologies
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#0e1a2f] rounded-xl border border-white/5 no-print">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#ff6b6b] text-white shadow-sm shadow-[#ff6b6b]/25 font-bold"
                    : "text-[#c4beaf] hover:text-[#fdfbf7] hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className="p-5 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#12213d] border border-white/5 hover:border-[#ff6b6b]/30 transition-all duration-200 resume-badge"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="p-1.5 rounded-lg bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#fdfbf7] tracking-tight">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#09111e] text-[#fdfbf7] border border-white/5 hover:border-[#ff6b6b]/40 hover:text-[#ff8787] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
