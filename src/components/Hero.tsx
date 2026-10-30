"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Copy,
  Check,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";
import InteractivePortrait from "./InteractivePortrait";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface HeroProps {
  onOpenCaseStudies: () => void;
}

export default function Hero({ onOpenCaseStudies }: HeroProps) {
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
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const KEY_METRICS = [
    { value: "9+ Years", label: "Production Engineering", note: "Europe & India" },
    { value: "100+ GB", label: "Zero-Copy Data Verification", note: "Rust & .NET 8" },
    { value: "19 Teams", label: "Scaled on Test Health CI", note: "Nightly Platform" },
    { value: "99.99%", label: "Safeguards Platform Uptime", note: "IAEA Inspector System" },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Subtle ambient depth lighting (quiet, not overpowering) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/8 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-indigo-500/8 blur-[160px] pointer-events-none rounded-full" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center mb-16">
          {/* Left Column (Content): 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Senior Software Engineer @ Tricentis</span>
              <span className="text-neutral-500">•</span>
              <span>Vienna, AT {mounted && viennaTime ? `(${viennaTime} CET)` : ""}</span>
            </div>

            {/* Clear, commanding headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building reliable software for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-sky-400">
                high-throughput systems
              </span>{" "}
              and enterprise AI.
            </h1>

            {/* Quiet, confident elevator pitch */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              I&apos;m <strong className="text-white font-semibold">Ashish Gupta</strong>. For 9+ years,
              I&apos;ve engineered mission-critical distributed platforms across enterprise cloud,
              nuclear energy safeguards, and supply chain logistics—specializing in{" "}
              <span className="text-neutral-100 font-mono text-sm">.NET 8</span>,{" "}
              <span className="text-neutral-100 font-mono text-sm">Rust</span>, and{" "}
              <span className="text-neutral-100 font-mono text-sm">Model Context Protocols (MCPs)</span>.
            </p>

            {/* 2 Focused Actions + Clean Email Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCaseStudies}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-md shadow-white/10 cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/AshishGupta_CV.pdf"
                download="AshishGupta_Senior_Software_Engineer_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-700 font-medium text-xs sm:text-sm transition-all"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-mono transition-all cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>gupta.s.ashish95@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Subtle verification pill */}
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Promoted to Senior Software Engineer in 19 mo at Tricentis & 12 mo at GEP</span>
            </div>
          </div>

          {/* Right Column: Clean Executive Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractivePortrait />
          </div>
        </div>

        {/* 4 Focused Key Metrics Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/8">
          {KEY_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-neutral-300 font-medium mt-1 leading-snug">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                {metric.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
