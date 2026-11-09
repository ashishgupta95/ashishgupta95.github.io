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
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-semibold">
            01 // CURRICULUM VITAE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#fdfbf7] mt-1">
            Work Experience
          </h2>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0e1a2f] text-[#a3b1cc] border border-white/5 hidden sm:inline-block">
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
              className="relative p-5 sm:p-6 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#12213d] border border-white/5 hover:border-[#ff6b6b]/30 transition-all duration-200 resume-badge page-break-avoid group"
            >
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#fdfbf7] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-[#ff6b6b] font-semibold text-base">
                      @ {exp.company}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse"></span>
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#a3b1cc] shrink-0">
                  <span className="flex items-center gap-1.5 text-[#fdfbf7]">
                    <Calendar className="w-3.5 h-3.5 text-[#a3b1cc]" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-[#a3b1cc]">
                    <MapPin className="w-3.5 h-3.5 text-[#a3b1cc]" />
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
              <ul className="mt-4 space-y-2 text-sm text-[#e8decb]">
                {exp.description.map((bullet, bIndex) => {
                  const parts = bullet.split(":");
                  const hasLabel = parts.length > 1 && parts[0].length < 65;

                  return (
                    <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#ff6b6b] font-mono text-xs mt-1 shrink-0">▸</span>
                      <span>
                        {hasLabel ? (
                          <>
                            <strong className="text-[#fdfbf7] font-semibold">
                              {parts[0]}:
                            </strong>
                            <span className="text-[#e8decb]">
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
                  <span className="text-[11px] font-mono text-[#a3b1cc] mr-1">
                    Stack:
                  </span>
                  {exp.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#09111e] text-[#fdfbf7] border border-white/5 hover:border-[#ff6b6b]/40 hover:text-[#ff8787] transition-colors"
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
