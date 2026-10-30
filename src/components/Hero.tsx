"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  Download,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import InteractivePortrait from "./InteractivePortrait";

interface HeroProps {
  onOpenMcpDemo: () => void;
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenMcpDemo, onOpenTerminal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [viennaTime, setViennaTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Vienna",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setViennaTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#f59e0b"],
    });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Radiant ambient glow spotlights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-sky-500/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[450px] h-[320px] bg-indigo-500/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left copy, Right interactive portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column (Content): 7 cols on lg */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span>Senior Software Engineer @ Tricentis</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono">
                <span>📍 Vienna, Austria</span>
                {mounted && viennaTime && (
                  <span className="text-neutral-400">({viennaTime} CET)</span>
                )}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Ex-IAEA Nuclear Safeguards</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                Architecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                  Distributed Systems
                </span>
                , Low-Latency Engines &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">
                  Enterprise MCPs
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                Hi, I&apos;m <span className="text-white font-semibold">Ashish Gupta</span>. With 9+ years
                of production experience scaling mission-critical platforms across BFSI, Nuclear Energy, and
                Enterprise Cloud, I engineer resilient distributed backends in{" "}
                <span className="text-sky-300 font-mono font-semibold">.NET 8 / C#</span>,{" "}
                <span className="text-amber-300 font-mono font-semibold">Rust</span>, and{" "}
                <span className="text-blue-300 font-mono font-semibold">TypeScript</span>, and ship
                autonomous AI integrations via Model Context Protocols (MCPs).
              </p>
            </div>

            {/* Recruiter & Visitor Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#recruiter-match"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm hover:from-sky-400 hover:to-indigo-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky-500/20"
              >
                <span>Recruiter Fit Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenMcpDemo}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500/15 border border-sky-500/40 text-sky-300 font-semibold text-xs sm:text-sm hover:bg-sky-500/25 transition-all hover:border-sky-400 shadow-lg shadow-sky-500/10 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-sky-400 animate-spin-slow" />
                <span>Test Live MCP Simulator</span>
              </button>

              <a
                href="/AshishGupta_CV.pdf"
                download="AshishGupta_Senior_Software_Engineer_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-xs sm:text-sm hover:text-white hover:border-neutral-700 transition-all"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs sm:text-sm hover:text-white hover:border-neutral-700 transition-all cursor-pointer font-mono"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-mono text-neutral-400">
              <span className="text-neutral-300">
                ⚡ <strong className="text-white">Promoted in 19 mo</strong> @ Tricentis (Jan 2026)
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300">
                🚀 <strong className="text-white">Promoted in 12 mo</strong> @ GEP Worldwide
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300">
                🛡️ <strong className="text-white">100% Exact</strong> 100+ GB Verification
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Portrait Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractivePortrait />
          </div>
        </div>

        {/* Bento Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              onClick={handleFireConfetti}
              className="p-4 rounded-xl glass-panel hover:glass-panel-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Pillars Teaser */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/5 flex items-start gap-3 hover:border-sky-500/30 transition-colors">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Event-Driven Architecture</h2>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Azure Service Bus pub/sub, SignalR WebSockets, and debounced state propagation
                handling mission-critical load.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/5 flex items-start gap-3 hover:border-purple-500/30 transition-colors">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">100+ GB Data Reconciliation</h2>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Zero-copy memory bounded diffing engines across Parquet, Hive, Avro, and SQL Server
                with Rust and .NET 8.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/5 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Enterprise Model Context Protocols</h2>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Strict JSON-RPC MCP servers bridging LLMs directly with enterprise databases for
                automated test synthesis and schema discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
