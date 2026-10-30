"use client";

import React, { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  Download,
  Mail,
  Copy,
  Check,
  ChevronRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Flame,
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
  targetCaseStudyId: string;
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
    coreTech: [".NET 8", "Rust", "Azure Service Bus", "SignalR", "Kubernetes", "OpenTelemetry", "Docker"],
    targetCaseStudyId: "data-reconciliation-engine",
  },
  {
    id: "mcp-ai",
    title: "Enterprise AI & Model Context Protocol (MCP) Engineer",
    badge: "Cutting-Edge 2026",
    matchScore: 100,
    pitch:
      "One of the rare Senior Engineers who has actually architected, hardened, and shipped custom Model Context Protocols (MCP) into enterprise production with real LLM tool-calling workflows.",
    proofPoints: [
      "Architected custom enterprise MCP servers exposing strictly-typed JSON-RPC tools for autonomous LLM agents.",
      "Engineered natural-language-to-SQL translation with schema discovery, slashing authoring friction by 70%.",
      "Secured tool-execution sandboxes with granular RBAC and real-time state synchronization.",
    ],
    coreTech: ["Model Context Protocol (MCP)", "JSON-RPC 2.0", "LLM Tooling", "SignalR", ".NET 8", "Vector / NL-to-SQL"],
    targetCaseStudyId: "enterprise-mcp",
  },
  {
    id: "dotnet-csharp",
    title: "Senior .NET 8 / C# Backend Architect",
    badge: "8+ Yrs Expert",
    matchScore: 100,
    pitch:
      "Deep 8+ years mastery across the modern .NET ecosystem from .NET Framework legacy migration to modern high-performance .NET 8 microservices, gRPC, and asynchronous concurrency.",
    proofPoints: [
      "Led full-stack and microservice delivery at Tricentis, IAEA, and LTIMindtree (Deloitte).",
      "Formally promoted to Senior Software Engineer twice in career: in 19 months at Tricentis, in 12 months at GEP.",
      "Built resilient transactional services with SQL Server, EF Core, and high-frequency messaging.",
    ],
    coreTech: ["C#", ".NET 8", "ASP.NET Core", "gRPC", "SQL Server", "xUnit", "Microservices"],
    targetCaseStudyId: "enterprise-mcp",
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
    coreTech: ["Rust", "Zero-Copy Streaming", "Apache Parquet", "Apache Hive", "Avro", "Electron", "Low Latency"],
    targetCaseStudyId: "data-reconciliation-engine",
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
    targetCaseStudyId: "supply-chain-control-tower",
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
Years of Production Experience: 8+ Years
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
---
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleScrollToCaseStudy = () => {
    const el = document.getElementById("case-studies");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="recruiter-match" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>RECRUITER & HIRING MANAGER CHEAT SHEET</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Role Fit Assessment
            </h2>
            <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
              Recruiting for a specific opening? Select the role you are sourcing to see Ashish&apos;s
              scorecard, verified production achievements, and 1-click summary for your hiring team.
            </p>
          </div>

          {/* Quick Copy Packet Button */}
          <button
            onClick={handleCopyRecruiterPacket}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 hover:from-sky-500/30 hover:to-purple-500/30 border border-sky-500/30 text-white text-xs font-mono transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg"
            title="Copy formatted candidate summary to paste into Slack or ATS"
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">
                  Copied Candidate One-Pager!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-sky-400" />
                <span>📋 Copy One-Pager for Hiring Manager</span>
              </>
            )}
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
          {ROLES.map((role) => {
            const isSelected = selectedRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-sky-500/15 border-sky-400 shadow-lg shadow-sky-500/15 scale-[1.02]"
                    : "bg-neutral-900/60 border-white/5 hover:border-white/15 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-sky-400/20 text-sky-300 font-semibold"
                        : "bg-white/5 text-neutral-400"
                    }`}
                  >
                    {role.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {role.matchScore}%
                  </span>
                </div>
                <h3
                  className={`text-xs font-bold leading-tight ${
                    isSelected ? "text-white" : "text-neutral-300"
                  }`}
                >
                  {role.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Role Executive Scorecard Card */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel-glow border border-sky-500/30 relative overflow-hidden">
          {/* Subtle background ambient spotlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Pitch & Proof Points */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedRole.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {selectedRole.matchScore}% Strong Match
                  </span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {selectedRole.pitch}
                </p>
              </div>

              {/* Verified Achievements */}
              <div>
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  Verified Production Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedRole.proofPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center text-[10px] font-mono mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Primary Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRole.coreTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Recruiter Quick Action Box */}
            <div className="p-6 rounded-xl bg-neutral-950/70 border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                  CANDIDATE LOGISTICS
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Experience:</span>
                    <span className="text-white font-bold">8+ Years Production</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Location:</span>
                    <span className="text-white font-bold">Vienna, Austria (CET)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Work Auth:</span>
                    <span className="text-emerald-400 font-bold">EU Work Authorization</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Senior Promotion:</span>
                    <span className="text-amber-400 font-bold">In 19 mo @ Tricentis</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Availability:</span>
                    <span className="text-sky-300 font-bold">Immediate / Standard Notice</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Inquiry%20-%20${encodeURIComponent(
                    selectedRole.title
                  )}&body=Hi%20Ashish,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20for%20${encodeURIComponent(
                    selectedRole.title
                  )}.%0D%0A%0D%0ABest%20regards,`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Ashish for this Role</span>
                </a>

                <a
                  href="/AshishGupta_CV.pdf"
                  download="AshishGupta_Senior_Software_Engineer_CV.pdf"
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full CV (PDF)</span>
                </a>

                <button
                  onClick={handleScrollToCaseStudy}
                  className="w-full py-2 px-3 text-[11px] font-mono text-sky-400 hover:text-sky-300 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Inspect Relevant Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
