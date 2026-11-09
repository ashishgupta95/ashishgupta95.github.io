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
    <section id="intro" className="pt-28 pb-10 border-b border-white/10 resume-border">
      {/* Editorial Issue Folio / Stamp */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 text-[11px] font-mono tracking-widest uppercase text-[#a3b1cc]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6b6b]"></span>
          <span className="text-[#ff6b6b] font-semibold">COVER DOSSIER {"//"} MONOGRAPH 01</span>
          <span>•</span>
          <span className="text-[#dcd4c3]">DISTRIBUTED ARCHITECTURE & APPLIED AI</span>
        </div>
        <div className="text-[#a3b1cc]">
          EDITION 2026 • VIENNA, AUSTRIA
        </div>
      </div>

      {/* Magazine Main Headline in Stately Serif */}
      <div className="mt-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#fdfbf7] leading-[1.12]">
          Architecting Resilient Distributed Systems, Real-Time Pipelines & Human-in-the-Loop AI.
        </h1>

        {/* Editorial Byline Strip */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#dcd4c3] tracking-wide">
          <span className="font-semibold text-[#fdfbf7]">
            PROFILE & ARCHITECTURAL DOSSIER: <span className="text-[#ff8787]">{PERSONAL_INFO.name.toUpperCase()}</span>
          </span>
          <span className="text-white/20">•</span>
          <span>SENIOR SOFTWARE ENGINEER</span>
          <span className="text-white/20">•</span>
          <span>9+ YEARS PRODUCTION PRACTICE</span>
          <span className="text-white/20">•</span>
          <span className="text-[#ff6b6b]">EX-TRICENTIS, NAGARRO, INTIMETEC</span>
        </div>
      </div>

      {/* Classic Editorial Double Hairline Rule */}
      <div className="editorial-rule-double my-6" />

      {/* Two-Column Magazine Spread (Lead Article + Vitals Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: The Lead Story & Editorial Content (7 of 12 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Section Marker */}
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#ff6b6b] font-semibold">
            <span>§ 01.0 / THE ARCHITECTURAL NARRATIVE</span>
          </div>

          {/* Opening Lead Paragraph with Editorial Drop Cap */}
          <p className="drop-cap text-base sm:text-lg text-[#ece5d8] leading-relaxed font-sans">
            Results-driven <strong className="text-[#fdfbf7] font-semibold">Senior Software Engineer</strong> with <strong className="text-[#fdfbf7] font-semibold">9+ years of experience</strong> architecting and delivering scalable, high-performance web applications and distributed microservices across BFSI, Supply Chain, and Energy sectors. Expert in full-stack development using <span className="text-[#ff8787] font-medium">C#, TypeScript, JavaScript, and SQL</span>, with production exposure to <span className="text-[#ff8787] font-medium">Rust and Java</span>.
          </p>

          <p className="text-sm sm:text-base text-[#dcd4c3] leading-relaxed">
            Proven track record applying event-driven microservices patterns, distributed systems principles, and robust test automation to ship resilient, low-latency platforms for mission-critical operations. Experienced in accelerating product velocity by engineering enterprise AI integrations, including <strong className="text-[#fdfbf7] font-semibold">Model Context Protocols (MCPs)</strong> and human-in-the-loop LLM workflows.
          </p>

          {/* Magazine Pull Quote Callout */}
          <blockquote className="my-6 pl-5 border-l-4 border-[#ff6b6b] bg-[#0e1a2f]/60 py-4 pr-5 rounded-r-xl border-y border-r border-white/5">
            <p className="font-serif italic text-base sm:text-lg text-[#fdfbf7] leading-snug">
              “True systems scalability is not about multiplying microservices — it is about mastering concurrency, message queues, strict protocol boundaries, and fault-tolerant event pipelines that hold steady under peak enterprise load.”
            </p>
            <footer className="mt-2.5 text-[11px] font-mono uppercase tracking-wider text-[#a3b1cc]">
              — Ashish Gupta, Core Systems Engineering Ethos
            </footer>
          </blockquote>

          {/* Editorial Key Figures / At-A-Glance Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
            <div className="p-3 rounded-lg bg-[#0e1a2f]/70 border border-white/5">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#ff6b6b]">9+ Yrs</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Enterprise Delivery</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1a2f]/70 border border-white/5">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#fdfbf7]">100+ GB</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Pipeline Throughput</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1a2f]/70 border border-white/5">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#fdfbf7]">EU / AT</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Full Work Rights</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1a2f]/70 border border-white/5">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#ff8787]">MCP / AI</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mt-0.5">Agent Tooling</div>
            </div>
          </div>
        </div>

        {/* Right Column: Contributor Dossier & Vitals Sidebar (5 of 12 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0e1a2f] border border-white/10 shadow-xl shadow-black/40">
            {/* Contributor Header with Framed Portrait */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="relative shrink-0">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#ff6b6b]/40 shadow-md shadow-[#ff6b6b]/20 bg-[#09111e]">
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
                  title="Active in Vienna, Austria"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ff6b6b] border-2 border-[#09111e]"></span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff6b6b] font-semibold">
                  CONTRIBUTOR DOSSIER
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#fdfbf7] tracking-tight">
                  Ashish Gupta
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#a3b1cc] mt-0.5 font-mono">
                  <MapPin className="w-3 h-3 text-[#ff6b6b]" />
                  <span>Vienna, Austria</span>
                </div>
              </div>
            </div>

            {/* Dossier Vitals Table */}
            <div className="py-3.5 space-y-2 text-xs font-mono border-b border-white/10">
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Current Role:</span>
                <span className="text-[#fdfbf7] font-medium text-right">Senior Software Engineer</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Primary Focus:</span>
                <span className="text-[#ff8787] font-medium text-right">.NET 8 • Rust • AI / MCP</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Availability:</span>
                <span className="text-[#fdfbf7] font-medium text-right">Senior & Lead Roles (Hybrid / Onsite)</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[#a3b1cc] uppercase">Work Rights:</span>
                <span className="text-[#fdfbf7] font-medium text-right">EU / Austria Citizen Rights</span>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="pt-4 space-y-2.5 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-wider text-[#a3b1cc] font-semibold mb-1">
                DISPATCH CHANNELS
              </div>

              {/* Email channel with copy */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/40 transition-colors">
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

              {/* Phone */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/40 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-[#fdfbf7] hover:text-[#ff8787] truncate"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Social Channels: LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/40 text-[#fdfbf7] hover:text-[#ff8787] transition-colors"
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
                  className="flex items-center justify-between p-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/40 text-[#fdfbf7] hover:text-[#ff8787] transition-colors"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <GithubIcon className="w-3 h-3 text-[#fdfbf7]" />
                    <span className="truncate">GitHub</span>
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-[#a3b1cc]" />
                </a>
              </div>

              {/* Direct Mail Action CTA */}
              <div className="pt-2 no-print">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#ff6b6b] hover:bg-[#ff8787] rounded-lg shadow-sm shadow-[#ff6b6b]/20 border border-[#ff8787]/40 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Initiate Contact</span>
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
