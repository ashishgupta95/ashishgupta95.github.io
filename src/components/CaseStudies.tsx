"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolio-data";
import {
  FolderGit2,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string>("enterprise-mcp");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="case-studies" className="py-24 relative bg-[#06070a]">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-purple-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-sky-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proven Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Production Case Studies
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            In-depth breakdowns of real architectures I engineered across test automation, nuclear
            safeguards, and distributed data systems. Focused on measurable business impact,
            technical bottlenecks solved, and concrete system designs.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <div
                key={study.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? "glass-panel-glow border-sky-500/40 shadow-2xl"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(study.id)}
                  className="p-4 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {study.tag}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {study.company} • {study.period}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Metrics Badges & Expand Arrow */}
                  <div className="flex items-center gap-2 sm:gap-4 shrink-0 justify-between md:justify-end">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-neutral-900/90 border border-white/10 text-center"
                        >
                          <div className="text-[11px] sm:text-xs font-mono font-bold text-white">
                            {metric.value}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-neutral-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6 space-y-8 bg-[#070911]/60">
                    {/* Problem vs Architecture Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                          <span>⚠️</span> The Engineering Challenge
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> System Overview
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {study.overview}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Details & Impact */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Architecture List */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-3 flex items-center gap-1.5">
                          <Layers className="w-4 h-4" /> Architectural Highlights
                        </h4>
                        <ul className="space-y-2.5">
                          {study.architecture.map((item, i) => (
                            <li
                              key={i}
                              className="text-xs text-neutral-300 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-sky-400 font-mono mt-0.5 shrink-0">➜</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Measurable Impact */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" /> Measurable Impact & Value
                        </h4>
                        <ul className="space-y-2.5">
                          {study.impact.map((item, i) => (
                            <li
                              key={i}
                              className="text-xs text-neutral-300 flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-neutral-500 mr-2">
                        Technologies:
                      </span>
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
