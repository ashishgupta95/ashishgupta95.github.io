"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";
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
    <section id="intro" className="pt-24 pb-8 border-b border-white/10 resume-border">
      {/* Header Top Profile Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
        <div className="flex items-start sm:items-center gap-5">
          {/* Avatar with Coral glow on Deep Navy */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#ff6b6b]/40 shadow-lg shadow-[#ff6b6b]/15 bg-[#0e1a2f] group">
              <Image
                src="/profile-pic.png"
                alt="Ashish Gupta"
                width={96}
                height={96}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            {/* Live presence indicator */}
            <span
              className="absolute -bottom-1 -right-1 flex h-4 w-4 no-print"
              title="Based in Vienna, Austria • Active"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff6b6b] border-2 border-[#09111e]"></span>
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#fdfbf7]">
                {PERSONAL_INFO.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse"></span>
                Senior SE
              </span>
            </div>

            <p className="text-base sm:text-lg font-medium text-[#ff8787] mt-1">
              Senior Software Engineer <span className="text-[#a3b1cc] font-normal">| 9+ Years Production Experience</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-[#a3b1cc]">
              <span className="flex items-center gap-1.5 text-[#fdfbf7]">
                <MapPin className="w-3.5 h-3.5 text-[#ff6b6b]" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="text-[#c4beaf]">Open to Remote & Hybrid Roles</span>
              <span>•</span>
              <span className="text-[#c4beaf]">EU Working Rights</span>
            </div>
          </div>
        </div>

        {/* Executive Action: Get In Touch CTA */}
        <div className="shrink-0 no-print">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#ff6b6b] hover:bg-[#ff8787] rounded-lg shadow-sm shadow-[#ff6b6b]/20 border border-[#ff8787]/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,107,107,0.35)] hover:scale-[1.02]"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>

      {/* Contact Pills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 py-3 my-2 bg-[#0e1a2f] rounded-xl border border-white/5 p-3 text-xs">
        {/* Email */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-[#fdfbf7] hover:text-[#ff8787] truncate"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
            <span className="truncate">{PERSONAL_INFO.email}</span>
          </a>
          <button
            onClick={copyEmail}
            className="p-1 text-[#a3b1cc] hover:text-[#fdfbf7] no-print transition-colors"
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
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors">
          <Phone className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0" />
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="text-[#fdfbf7] hover:text-[#ff8787] truncate"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#fdfbf7] hover:text-[#ff8787] truncate"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5] shrink-0" />
            <span className="truncate">linkedin.com/in/ashish-gupta</span>
          </a>
          <ExternalLink className="w-3 h-3 text-[#a3b1cc] no-print" />
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#09111e] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#fdfbf7] hover:text-[#ff8787] truncate"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#fdfbf7] shrink-0" />
            <span className="truncate">github.com/ashishgupta95</span>
          </a>
          <ExternalLink className="w-3 h-3 text-[#a3b1cc] no-print" />
        </div>
      </div>

      {/* Small Intro / Professional Summary */}
      <div className="mt-5 pt-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-semibold">
            00 // EXECUTIVE SUMMARY
          </span>
        </div>
        <p className="text-sm sm:text-base text-[#e8decb] leading-relaxed font-normal">
          Results-driven <strong className="text-[#fdfbf7] font-semibold">Senior Software Engineer</strong> with <strong className="text-[#fdfbf7] font-semibold">9+ years of experience</strong> architecting and delivering scalable, high-performance web applications and microservices across BFSI, Supply Chain, and Energy sectors. Expert in full-stack development using <span className="text-[#ff8787] font-medium">C#, TypeScript, JavaScript, and SQL</span>, with production exposure to <span className="text-[#ff8787] font-medium">Rust and Java</span>. Proven track record applying microservices patterns, distributed systems principles, and robust test automation to ship resilient, low-latency platforms for mission-critical operations. Experienced in accelerating product velocity by engineering enterprise AI integrations, including <span className="text-[#ff8787] font-medium">Model Context Protocols (MCPs)</span> and LLM workflows.
        </p>
      </div>
    </section>
  );
}
