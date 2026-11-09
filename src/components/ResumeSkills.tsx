"use client";

import React from "react";
import { Code2, Cpu, Database, Cloud, Terminal, Sparkles, Check } from "lucide-react";

export default function ResumeSkills() {
  const SKILL_GROUPS = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C#", "TypeScript", "Rust", "JavaScript", "SQL", "Java", "HTML5 / CSS3 / SASS"],
    },
    {
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

  return (
    <section id="skills" className="py-8 border-b border-white/10 resume-border page-break-avoid">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              Production stacks, core runtimes, and engineering tooling
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = group.icon;
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors resume-badge"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <Icon className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-1 rounded text-xs font-mono bg-black/40 text-neutral-200 border border-white/5"
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
