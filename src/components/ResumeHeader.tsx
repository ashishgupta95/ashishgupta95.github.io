"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResumeHeader() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lead-story" className="pt-26 pb-10 border-b-2 border-white/15 resume-border">
      {/* Newspaper Front Page Dateline Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 text-[11px] font-mono tracking-widest uppercase text-[#a3b1cc] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[#ff6b6b] font-bold">PAGE 1 // THE LEAD STORY</span>
          <span>•</span>
          <span className="text-[#dcd4c3]">SYSTEMS ARCHITECTURE & DISTRIBUTED PLATFORMS</span>
        </div>
        <div className="text-[#a3b1cc]">
          EDITION 2026 • VIENNA, AUSTRIA • LATE CITY REPORT
        </div>
      </div>

      {/* Massive Broadsheet Banner Headline */}
      <div className="mt-4">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#fdfbf7] leading-[1.12]">
          9 Years at the Systems Frontier: Senior Engineer Scales Real-Time & Cloud Platforms
        </h1>

        {/* Newspaper Subhead Deck */}
        <p className="mt-3 font-serif italic text-base sm:text-lg text-[#dcd4c3] leading-snug">
          Vienna, Austria — Active at Tricentis, Ashish Gupta architects resilient .NET 8, Rust, and microservices topologies while pioneering enterprise Model Context Protocols (MCPs) and automated pipelines.
        </p>

        {/* Newspaper Byline Strip */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#a3b1cc] tracking-wide border-t border-b border-white/10 py-1.5">
          <span className="font-bold text-[#fdfbf7] uppercase">
            REPORT BY: <span className="text-[#ff8787]">{PERSONAL_INFO.name.toUpperCase()}</span>
          </span>
          <span>•</span>
          <span className="text-[#fdfbf7] font-semibold">SENIOR SOFTWARE ENGINEER @ TRICENTIS</span>
          <span>•</span>
          <span>9+ YEARS PRODUCTION RECORD</span>
          <span>•</span>
          <span className="text-[#ff6b6b] font-semibold">VIENNA, AUSTRIA</span>
        </div>
      </div>

      {/* Newspaper Multi-Column Broadsheet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-6 items-start">
        {/* Left Column: Lead Investigative Story (7 of 12 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Dateline and Opening Paragraph */}
          <p className="text-sm sm:text-base text-[#e8decb] leading-relaxed font-sans">
            <strong className="font-serif font-black text-[#fdfbf7] uppercase tracking-wider text-base sm:text-lg mr-1.5">
              VIENNA, Austria —
            </strong>
            Results-driven <strong className="text-[#fdfbf7] font-semibold">Senior Software Engineer</strong> with <strong className="text-[#fdfbf7] font-semibold">9+ years of production experience</strong> architecting and delivering scalable, high-performance web applications and distributed microservices across BFSI, Supply Chain, and Energy sectors. Currently based in Vienna and actively engineering distributed test data pipelines at <strong className="text-[#fdfbf7] font-semibold">Tricentis</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#dcd4c3] leading-relaxed">
            Demonstrated mastery in full-stack engineering utilizing <span className="text-[#ff8787] font-medium">C#, TypeScript, JavaScript, and SQL</span>, with production exposure to <span className="text-[#ff8787] font-medium">Rust and Java</span>. Proven track record applying event-driven microservices patterns, distributed systems principles, and robust test automation to ship resilient, low-latency platforms for mission-critical operations.
          </p>

          <p className="text-sm sm:text-base text-[#dcd4c3] leading-relaxed">
            Recognized for accelerating product velocity by engineering enterprise AI integrations, including <strong className="text-[#fdfbf7] font-semibold">Model Context Protocols (MCPs)</strong>, automated schema discovery, and human-in-the-loop LLM workflows.
          </p>

          {/* Boxed Broadsheet Dispatch: Key Architectural Findings */}
          <div className="newspaper-box p-4 rounded-xl border border-white/10 space-y-2 mt-4">
            <div className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-bold">
              ★ DISPATCH BRIEF: KEY ARCHITECTURAL METRICS ★
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
              <div className="p-2.5 rounded bg-[#050a14] border border-white/5">
                <div className="font-serif text-xl font-black text-[#ff6b6b]">9+ Yrs</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Production Tenure</div>
              </div>
              <div className="p-2.5 rounded bg-[#050a14] border border-white/5">
                <div className="font-serif text-xl font-black text-[#fdfbf7]">100+ GB</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Data Reconciled</div>
              </div>
              <div className="p-2.5 rounded bg-[#050a14] border border-white/5">
                <div className="font-serif text-xl font-black text-[#fdfbf7]">Active</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">@ Tricentis</div>
              </div>
              <div className="p-2.5 rounded bg-[#050a14] border border-white/5">
                <div className="font-serif text-xl font-black text-[#ff8787]">EU / AT</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Citizen Rights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Broadsheet Notice & Wire Desk (5 of 12 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0a1322] border-2 border-white/15 shadow-xl shadow-black/40">
            {/* Boxed Header: Contributor Photo & Caption */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-[#ff6b6b]/40 shadow-md shadow-[#ff6b6b]/20 bg-[#050a14]">
                  <Image
                    src="/profile-pic.png"
                    alt="Ashish Gupta"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 no-print"
                  title="Stationed in Vienna, Austria"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ff6b6b] border-2 border-[#09111e]"></span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff6b6b] font-bold">
                  OFFICIAL DISPATCH DESK
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-black text-[#fdfbf7] tracking-tight">
                  Ashish Gupta
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#a3b1cc] mt-0.5 font-mono">
                  <MapPin className="w-3 h-3 text-[#ff6b6b]" />
                  <span>Vienna, Austria</span>
                </div>
              </div>
            </div>

            {/* Broadsheet Classifieds Vitals */}
            <div className="py-3.5 space-y-2 text-xs font-mono border-b border-white/10">
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Current Post:</span>
                <span className="text-[#fdfbf7] font-bold text-right">Senior Software Engineer @ Tricentis</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Primary Systems:</span>
                <span className="text-[#ff8787] font-medium text-right">.NET 8 • Rust • AI / MCP</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Availability:</span>
                <span className="text-[#fdfbf7] font-medium text-right">Senior / Lead (Hybrid / Onsite)</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Working Rights:</span>
                <span className="text-[#fdfbf7] font-medium text-right">EU / Austria Citizen Rights</span>
              </div>
            </div>

            {/* Direct Communication Wires */}
            <div className="pt-4 space-y-2.5 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-wider text-[#a3b1cc] font-bold mb-1">
                COMMUNICATION WIRES
              </div>

              {/* Email wire */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#050a14] border border-white/10 hover:border-[#ff6b6b]/40 transition-colors">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-[#fdfbf7] hover:text-[#ff8787] truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 text-[#a3b1cc] hover:text-[#fdfbf7] no-print transition-colors shrink-0"
                  title={copied ? "Copied!" : "Copy email address"}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#ff6b6b]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Telephone wire */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#050a14] border border-white/10 hover:border-[#ff6b6b]/40 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-[#fdfbf7] hover:text-[#ff8787] truncate"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Social Wires: LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#050a14] border border-white/10 hover:border-[#ff6b6b]/40 text-[#fdfbf7] hover:text-[#ff8787] transition-colors"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <LinkedinIcon className="w-3 h-3 text-[#0077b5]" />
                    <span className="truncate">LinkedIn</span>
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#a3b1cc]" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#050a14] border border-white/10 hover:border-[#ff6b6b]/40 text-[#fdfbf7] hover:text-[#ff8787] transition-colors"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <GithubIcon className="w-3 h-3 text-[#fdfbf7]" />
                    <span className="truncate">GitHub</span>
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#a3b1cc]" />
                </a>
              </div>

              {/* Action Button: Send Wire CTA */}
              <div className="pt-2 no-print">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#ff6b6b] hover:bg-[#ff8787] rounded-lg shadow-sm shadow-[#ff6b6b]/20 border border-[#ff8787]/40 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Send Direct Wire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
