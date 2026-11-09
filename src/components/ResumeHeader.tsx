"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Copy, Check, Printer, ExternalLink, Sparkles } from "lucide-react";
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
          {/* Avatar with subtle glow */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-sky-500/40 shadow-lg shadow-sky-950/40 bg-neutral-900 group">
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#06070a]"></span>
            </span>
          </div>

          {/* Name & Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Senior SE
              </span>
            </div>

            <p className="text-base sm:text-lg font-medium text-sky-400 mt-1">
              Senior Software Engineer <span className="text-neutral-400 font-normal">| 9+ Years Production Experience</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="text-neutral-300">Open to Remote & Hybrid Roles</span>
              <span>•</span>
              <span className="text-neutral-300">EU Working Rights</span>
            </div>
          </div>
        </div>

        {/* Executive Actions (Single CTA context - no duplicate download button) */}
        <div className="flex sm:flex-row md:flex-col gap-2 shrink-0 no-print">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm shadow-sky-950/40 border border-sky-400/30 transition-all duration-200 hover:shadow-sky-500/20 hover:scale-[1.02]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </a>
          <button
            onClick={() => window.print()}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/10 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-neutral-400" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Contact Pills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 py-3 my-2 bg-neutral-900/40 rounded-xl border border-white/5 p-3 text-xs">
        {/* Email */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-neutral-200 hover:text-sky-400 truncate"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{PERSONAL_INFO.email}</span>
          </a>
          <button
            onClick={copyEmail}
            className="p-1 text-neutral-400 hover:text-white no-print transition-colors"
            title={copied ? "Copied!" : "Copy email address"}
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
          <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="text-neutral-200 hover:text-sky-400 truncate"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-200 hover:text-sky-400 truncate"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5] shrink-0" />
            <span className="truncate">linkedin.com/in/ashish-gupta</span>
          </a>
          <ExternalLink className="w-3 h-3 text-neutral-500 no-print" />
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-200 hover:text-sky-400 truncate"
          >
            <GithubIcon className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
            <span className="truncate">github.com/ashishgupta95</span>
          </a>
          <ExternalLink className="w-3 h-3 text-neutral-500 no-print" />
        </div>
      </div>

      {/* Small Intro / Professional Summary */}
      <div className="mt-5 pt-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase font-semibold">
            00 // EXECUTIVE SUMMARY
          </span>
        </div>
        <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
          Results-driven <strong className="text-white font-semibold">Senior Software Engineer</strong> with <strong className="text-white font-semibold">9+ years of experience</strong> architecting and delivering scalable, high-performance web applications and microservices across BFSI, Supply Chain, and Energy sectors. Expert in full-stack development using <span className="text-sky-300 font-medium">C#, TypeScript, JavaScript, and SQL</span>, with production exposure to <span className="text-sky-300 font-medium">Rust and Java</span>. Proven track record applying microservices patterns, distributed systems principles, and robust test automation to ship resilient, low-latency platforms for mission-critical operations. Experienced in accelerating product velocity by engineering enterprise AI integrations, including <span className="text-indigo-300 font-medium">Model Context Protocols (MCPs)</span> and LLM workflows.
        </p>
      </div>
    </section>
  );
}
