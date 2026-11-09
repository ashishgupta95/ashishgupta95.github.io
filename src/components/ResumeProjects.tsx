"use client";

import React, { useState } from "react";
import { Layers, ChevronDown, ChevronUp, Cpu, Database, ShieldCheck, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "@/data/portfolio-data";

export default function ResumeProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Take the 3 top featured case studies
  const featured = CASE_STUDIES.slice(0, 3);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-8 border-b border-white/10 resume-border page-break-avoid">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Selected System Architectures
            </h2>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              High-impact engineering deep-dives & production platforms
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((study) => {
          const isExpanded = expandedId === study.id;
          return (
            <div
              key={study.id}
              className="flex flex-col justify-between p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors resume-badge"
            >
              <div>
                {/* Tag & Company */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                  <span className="text-sky-400">{study.company}</span>
                  <span>{study.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                  {study.title}
                </h3>

                {/* Metrics */}
                <div className="flex flex-wrap gap-1.5 my-2.5">
                  {study.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/60 text-sky-300 border border-sky-800/40"
                    >
                      <strong>{m.value}</strong>
                      <span className="text-neutral-400">{m.label}</span>
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {study.overview}
                </p>

                {/* Expandable Architecture Details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2 text-xs text-neutral-300">
                    <div>
                      <div className="font-semibold text-white mb-1">Architecture Highlights:</div>
                      <ul className="list-disc list-inside space-y-1 text-neutral-300 pl-1">
                        {study.architecture.map((arch, aIdx) => (
                          <li key={aIdx} className="leading-snug">{arch}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-1">
                      <div className="font-semibold text-white mb-1">Impact:</div>
                      <ul className="list-disc list-inside space-y-1 text-emerald-300 pl-1">
                        {study.impact.map((imp, iIdx) => (
                          <li key={iIdx} className="leading-snug">{imp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {study.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(study.id)}
                  className="no-print inline-flex items-center gap-1 text-[11px] font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <span>Less</span>
                      <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      <span>Details</span>
                      <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
