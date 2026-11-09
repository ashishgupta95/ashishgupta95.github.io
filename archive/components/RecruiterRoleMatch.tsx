"use client";

import React, { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Download,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface RoleFit {
  id: string;
  title: string;
  badge: string;
  matchScore: number;
  pitch: string;
  proofPoints: string[];
  coreTech: string[];
}

const ROLES: RoleFit[] = [
  {
    id: "distributed-systems",
    title: "Senior / Staff Distributed Systems Engineer",
    badge: "Top Match",
    matchScore: 99,
    pitch:
      "Proven track record scaling high-throughput pub/sub event meshes, real-time WebSocket pipelines, and zero-downtime distributed services across multi-tenant hybrid cloud architectures.",
    proofPoints: [
      "Engineered decoupled pub/sub message propagation via Azure Service Bus and SignalR WebSockets (<15ms latency).",
      "Reconciles 100+ GB streaming datasets across heterogeneous nodes without memory exhaustion.",
      "Delivered 99.99% operational availability for international mission-critical IAEA inspection infrastructure.",
    ],
    coreTech: [".NET 8", "Rust", "Azure Service Bus", "SignalR", "Kubernetes", "OpenTelemetry"],
  },
  {
    id: "mcp-ai",
    title: "Enterprise AI & Model Context Protocol (MCP) Engineer",
    badge: "Cutting-Edge",
    matchScore: 100,
    pitch:
      "One of the rare Senior Engineers who has actually architected, hardened, and shipped custom Model Context Protocols (MCP) into enterprise production with real LLM tool-calling workflows.",
    proofPoints: [
      "Architected custom enterprise MCP servers exposing strictly-typed JSON-RPC tools for autonomous LLM agents.",
      "Engineered natural-language-to-SQL translation with schema discovery, slashing authoring friction by 70%.",
      "Secured tool-execution sandboxes with granular RBAC and real-time state synchronization.",
    ],
    coreTech: ["Model Context Protocol (MCP)", "JSON-RPC 2.0", "LLM Tooling", "SignalR", ".NET 8"],
  },
  {
    id: "dotnet-csharp",
    title: "Senior .NET 8 / C# Backend Architect",
    badge: "8+ Yrs Expert",
    matchScore: 100,
    pitch:
      "Deep 8+ years mastery across the modern .NET ecosystem from legacy migration to high-performance .NET 8 microservices, gRPC, and asynchronous concurrency.",
    proofPoints: [
      "Led full-stack and microservice delivery at Tricentis, IAEA, and LTIMindtree (Deloitte).",
      "Formally promoted to Senior Software Engineer twice in career: in 19 months at Tricentis, in 12 months at GEP.",
      "Built resilient transactional services with SQL Server, EF Core, and high-frequency messaging.",
    ],
    coreTech: ["C#", ".NET 8", "ASP.NET Core", "gRPC", "SQL Server", "xUnit", "Microservices"],
  },
  {
    id: "rust-performance",
    title: "Rust & Low-Latency Systems Engineer",
    badge: "High Performance",
    matchScore: 95,
    pitch:
      "Production experience leveraging Rust for memory-bounded, zero-copy high-throughput diffing and reporting engines that avoid GC pauses during massive data verifications.",
    proofPoints: [
      "Built hybrid Rust processing engine modules comparing billions of records across Parquet and Avro formats.",
      "Maintained memory-safe desktop tooling in Rust paired with an Electron presentation layer.",
      "Eliminated OOM crashes when streaming 100+ GB files through chunked streaming algorithms.",
    ],
    coreTech: ["Rust", "Zero-Copy Streaming", "Apache Parquet", "Apache Hive", "Avro", "Low Latency"],
  },
  {
    id: "fullstack-microfrontends",
    title: "Full-Stack & Micro-Frontend Specialist",
    badge: "Production Polish",
    matchScore: 98,
    pitch:
      "Bridges complex distributed backends with high-productivity enterprise web applications, Monaco Editor playgrounds, and real-time responsive analytics.",
    proofPoints: [
      "Engineered Monaco Editor interactive SQL playground micro-frontend with live IntelliSense and AST validation.",
      "Created reusable UI component libraries adopted across GEP Logistics Control Tower and Demand Planning.",
      "Expert across TypeScript, React, Next.js, and Angular in large enterprise Nx monorepos.",
    ],
    coreTech: ["TypeScript", "React", "Next.js", "Monaco Editor", "Angular", "MUI", "AG Grid"],
  },
];

export default function RecruiterRoleMatch() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("distributed-systems");
  const [copiedSummary, setCopiedSummary] = useState(false);

  const selectedRole = ROLES.find((r) => r.id === selectedRoleId) || ROLES[0];

  const handleCopyRecruiterPacket = () => {
    const summaryText = `--- CANDIDATE EXECUTIVE SUMMARY ---
Candidate: Ashish Gupta
Current Role: Senior Software Engineer @ Tricentis (Promoted in Jan 2026, recognized in 19 mo)
Location: Vienna, Austria (EU Work Authorization, CET Timezone)
Years of Production Experience: 9+ Years
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}
Portfolio: https://ashishgupta95.github.io

Target Role: ${selectedRole.title} (Match Score: ${selectedRole.matchScore}%)
Elevator Pitch: ${selectedRole.pitch}

Top Production Achievements:
${selectedRole.proofPoints.map((p) => `• ${p}`).join("\n")}

Core Stack: ${selectedRole.coreTech.join(", ")}
Prior Experience: Ex-IAEA Nuclear Safeguards (Senior SE), Ex-GEP Worldwide (Senior SE, promoted in 12 mo), Ex-LTIMindtree (Module Lead).
---`.trim();

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="recruiter-match" className="py-16 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              <span>RECRUITER QUICK-MATCH</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Evaluate Role Fit at a Glance
            </h2>
          </div>

          {/* Copy One-Pager CTA */}
          <button
            onClick={handleCopyRecruiterPacket}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 text-xs font-mono transition-all cursor-pointer self-start sm:self-auto"
            title="Copy candidate memo to paste into Slack or ATS"
          >
            {copiedSummary ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copied Candidate Summary!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-sky-400" />
                <span>📋 Copy One-Pager for Hiring Manager</span>
              </>
            )}
          </button>
        </div>

        {/* Quiet Role Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ROLES.map((role) => {
            const isSelected = selectedRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-sky-500/15 border border-sky-400 text-white font-semibold"
                    : "bg-neutral-900/60 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{role.title.split("/")[0].trim()}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-sky-400/20 text-sky-300" : "bg-white/5 text-neutral-500"
                  }`}
                >
                  {role.matchScore}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Scorecard Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-neutral-950/70 border border-white/8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white">{selectedRole.title}</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  {selectedRole.matchScore}% Match
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedRole.pitch}
              </p>

              {/* Verified Achievements */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                  Verified Production Evidence:
                </div>
                <ul className="space-y-1.5">
                  {selectedRole.proofPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-sky-400 font-mono mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedRole.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Candidate Quick Facts & Contact */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-3 text-xs font-mono">
              <div className="text-[10px] uppercase text-neutral-400 tracking-wider">
                Candidate Snapshot
              </div>
              <div className="space-y-1.5 text-neutral-300">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-neutral-500">Experience:</span>
                  <span className="text-white font-bold">9+ Years</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-neutral-500">Location:</span>
                  <span className="text-white">Vienna, Austria (CET)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-neutral-500">Authorization:</span>
                  <span className="text-emerald-400">EU Work Auth</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Promotion:</span>
                  <span className="text-amber-400">Senior in 19 mo</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Role%20Inquiry%20-%20${encodeURIComponent(
                    selectedRole.title
                  )}`}
                  className="w-full py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Ashish for this Role</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
