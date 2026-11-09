"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolio-data";

export default function ResumeExperience() {
  return (
    <section id="experience" className="py-10 border-b border-white/10 resume-border">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase font-semibold">
            01 // CURRICULUM VITAE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Work Experience
          </h2>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-neutral-400 border border-white/5 hidden sm:inline-block">
          2017 — 2026 (9+ Yrs)
        </span>
      </div>

      {/* Experience List */}
      <div className="space-y-7">
        {WORK_EXPERIENCE.map((exp, index) => {
          const isCurrent = exp.period.includes("Present");

          return (
            <article
              key={`${exp.company}-${index}`}
              className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/5 hover:border-white/10 transition-all duration-200 resume-badge page-break-avoid group"
            >
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sky-400 font-semibold text-base">
                      @ {exp.company}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 shrink-0">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Promotion Badge if applicable */}
              {exp.promotion && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{exp.promotion}</span>
                </div>
              )}

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {exp.description.map((bullet, bIndex) => {
                  const parts = bullet.split(":");
                  const hasLabel = parts.length > 1 && parts[0].length < 65;

                  return (
                    <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-sky-400 font-mono text-xs mt-1 shrink-0">▸</span>
                      <span>
                        {hasLabel ? (
                          <>
                            <strong className="text-neutral-100 font-semibold">
                              {parts[0]}:
                            </strong>
                            <span className="text-neutral-300">
                              {parts.slice(1).join(":")}
                            </span>
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Tech Tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono text-neutral-400 mr-1">
                    Stack:
                  </span>
                  {exp.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/40 text-neutral-300 border border-white/5 hover:border-sky-500/30 hover:text-sky-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
