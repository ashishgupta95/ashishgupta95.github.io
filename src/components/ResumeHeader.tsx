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
    <section id="lead-story" className="pt-26 pb-10 border-b-2 border-[#121316] resume-border">
      {/* Newspaper Front Page Dateline Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 text-[11px] font-mono tracking-widest uppercase text-[#52525b] border-b border-[#d6cebe]">
        <div className="flex items-center gap-2">
          <span className="text-[#c92a2a] font-bold">PAGE 1 // THE LEAD STORY</span>
          <span>•</span>
          <span className="text-[#121316] font-semibold">SYSTEMS ARCHITECTURE & DISTRIBUTED PLATFORMS</span>
        </div>
        <div className="text-[#52525b]">
          EDITION 2026 • VIENNA, AUSTRIA • LATE CITY REPORT
        </div>
      </div>

      {/* Massive Broadsheet Banner Headline */}
      <div className="mt-4">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#121316] leading-[1.12]">
          9 Years at the Systems Frontier: Senior Engineer Scales Real-Time & Cloud Platforms
        </h1>

        {/* Newspaper Subhead Deck */}
        <p className="mt-3 font-serif italic text-base sm:text-lg text-[#374151] leading-snug">
          Vienna, Austria — Active at Tricentis, Ashish Gupta architects resilient .NET 8, Rust, and microservices topologies while pioneering enterprise Model Context Protocols (MCPs) and automated pipelines.
        </p>

        {/* Newspaper Byline Strip */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#52525b] tracking-wide border-t-2 border-b border-[#121316] py-1.5">
          <span className="font-bold text-[#121316] uppercase">
            REPORT BY: <span className="text-[#c92a2a]">{PERSONAL_INFO.name.toUpperCase()}</span>
          </span>
          <span>•</span>
          <span className="text-[#121316] font-bold">SENIOR SOFTWARE ENGINEER @ TRICENTIS</span>
          <span>•</span>
          <span>9+ YEARS PRODUCTION RECORD</span>
          <span>•</span>
          <span className="text-[#c92a2a] font-bold">VIENNA, AUSTRIA</span>
        </div>
      </div>

      {/* Newspaper Multi-Column Broadsheet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-6 items-start">
        {/* Left Column: Lead Investigative Story (7 of 12 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Dateline and Opening Paragraph */}
          <p className="text-sm sm:text-base text-[#27272a] leading-relaxed font-sans">
            <strong className="font-serif font-black text-[#121316] uppercase tracking-wider text-base sm:text-lg mr-1.5">
              VIENNA, Austria —
            </strong>
            Results-driven <strong className="text-[#121316] font-bold">Senior Software Engineer</strong> with <strong className="text-[#121316] font-bold">9+ years of production experience</strong> architecting and delivering scalable, high-performance web applications and distributed microservices across BFSI, Supply Chain, and Energy sectors. Currently based in Vienna and actively engineering distributed test data pipelines at <strong className="text-[#121316] font-bold">Tricentis</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
            Demonstrated mastery in full-stack engineering utilizing <span className="text-[#b91c1c] font-semibold">C#, TypeScript, JavaScript, and SQL</span>, with production exposure to <span className="text-[#b91c1c] font-semibold">Rust and Java</span>. Proven track record applying event-driven microservices patterns, distributed systems principles, and robust test automation to ship resilient, low-latency platforms for mission-critical operations.
          </p>

          <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
            Recognized for accelerating product velocity by engineering enterprise AI integrations, including <strong className="text-[#121316] font-bold">Model Context Protocols (MCPs)</strong>, automated schema discovery, and human-in-the-loop LLM workflows.
          </p>

          {/* Boxed Broadsheet Dispatch: Key Architectural Metrics */}
          <div className="newspaper-box p-4 rounded-xl border border-[#d6cebe] space-y-2 mt-4 bg-[#fcfbf8]">
            <div className="text-[10px] font-mono text-[#c92a2a] tracking-wider uppercase font-bold">
              ★ DISPATCH BRIEF: KEY ARCHITECTURAL METRICS ★
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
              <div className="p-2.5 rounded bg-[#ede8dc] border border-[#d6cebe]">
                <div className="font-serif text-xl font-black text-[#c92a2a]">9+ Yrs</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525b] mt-0.5">Production Tenure</div>
              </div>
              <div className="p-2.5 rounded bg-[#ede8dc] border border-[#d6cebe]">
                <div className="font-serif text-xl font-black text-[#121316]">100+ GB</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525b] mt-0.5">Data Reconciled</div>
              </div>
              <div className="p-2.5 rounded bg-[#ede8dc] border border-[#d6cebe]">
                <div className="font-serif text-xl font-black text-[#121316]">Active</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525b] mt-0.5">@ Tricentis</div>
              </div>
              <div className="p-2.5 rounded bg-[#ede8dc] border border-[#d6cebe]">
                <div className="font-serif text-xl font-black text-[#b91c1c]">EU / AT</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#52525b] mt-0.5">Citizen Rights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Broadsheet Notice & Wire Desk (5 of 12 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fcfbf8] border-2 border-[#121316] shadow-lg shadow-black/5">
            {/* Boxed Header: Contributor Photo & Caption */}
            <div className="flex items-center gap-4 pb-4 border-b border-[#d6cebe]">
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-[#c92a2a] shadow-md bg-[#ede8dc]">
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c92a2a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c92a2a] border-2 border-[#f6f4ee]"></span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c92a2a] font-bold">
                  OFFICIAL DISPATCH DESK
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-black text-[#121316] tracking-tight">
                  Ashish Gupta
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#52525b] mt-0.5 font-mono">
                  <MapPin className="w-3 h-3 text-[#c92a2a]" />
                  <span>Vienna, Austria</span>
                </div>
              </div>
            </div>

            {/* Broadsheet Classifieds Vitals */}
            <div className="py-3.5 space-y-2 text-xs font-mono border-b border-[#d6cebe]">
              <div className="flex justify-between items-baseline">
                <span className="text-[#52525b] uppercase">Current Post:</span>
                <span className="text-[#121316] font-bold text-right">Senior Software Engineer @ Tricentis</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#52525b] uppercase">Primary Systems:</span>
                <span className="text-[#c92a2a] font-bold text-right">.NET 8 • Rust • AI / MCP</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#52525b] uppercase">Availability:</span>
                <span className="text-[#121316] font-medium text-right">Senior / Lead (Hybrid / Onsite)</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#52525b] uppercase">Working Rights:</span>
                <span className="text-[#121316] font-medium text-right">EU / Austria Citizen Rights</span>
              </div>
            </div>

            {/* Direct Communication Wires */}
            <div className="pt-4 space-y-2.5 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-wider text-[#52525b] font-bold mb-1">
                COMMUNICATION WIRES
              </div>

              {/* Email wire */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#ede8dc] border border-[#d6cebe] hover:border-[#c92a2a] transition-colors">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-[#121316] hover:text-[#c92a2a] truncate font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c92a2a] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 text-[#52525b] hover:text-[#121316] no-print transition-colors shrink-0"
                  title={copied ? "Copied!" : "Copy email address"}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#c92a2a]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Telephone wire */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#ede8dc] border border-[#d6cebe] hover:border-[#c92a2a] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#c92a2a] shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-[#121316] hover:text-[#c92a2a] truncate font-medium"
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
                  className="flex items-center justify-between p-2 rounded-lg bg-[#ede8dc] border border-[#d6cebe] hover:border-[#c92a2a] text-[#121316] hover:text-[#c92a2a] transition-colors font-medium"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <LinkedinIcon className="w-3 h-3 text-[#0a66c2]" />
                    <span className="truncate">LinkedIn</span>
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#52525b]" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#ede8dc] border border-[#d6cebe] hover:border-[#c92a2a] text-[#121316] hover:text-[#c92a2a] transition-colors font-medium"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <GithubIcon className="w-3 h-3 text-[#121316]" />
                    <span className="truncate">GitHub</span>
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#52525b]" />
                </a>
              </div>

              {/* Action Button: Send Wire CTA */}
              <div className="pt-2 no-print">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#c92a2a] hover:bg-[#b91c1c] rounded-lg shadow-sm shadow-[#c92a2a]/20 border border-[#b91c1c] transition-all hover:scale-[1.02]"
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
