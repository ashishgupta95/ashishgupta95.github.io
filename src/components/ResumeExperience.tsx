"use client";

import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolio-data";

export default function ResumeExperience() {
  return (
    <section id="experience" className="py-12 border-b border-white/10 resume-border">
      {/* Section Folio Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-widest uppercase font-semibold">
            § 02.0 {"//"} RECORD OF SERVICE & CHRONICLES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#fdfbf7] mt-1">
            Enterprise Dispatches & Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#dcd4c3] mt-1 font-serif italic">
            Chronological accounts of microservices re-engineering, cloud architectures, and developer velocity.
          </p>
        </div>

        <div className="text-xs font-mono text-[#a3b1cc] sm:text-right shrink-0">
          <span className="px-2.5 py-1 rounded bg-[#0e1a2f] border border-white/5 inline-block">
            2016 — PRESENT • 9+ YEARS TENURE
          </span>
        </div>
      </div>

      {/* Dispatches List */}
      <div className="space-y-10">
        {WORK_EXPERIENCE.map((exp, index) => {
          const isCurrent = exp.period.includes("Present");
          const dispatchNumber = String(index + 1).padStart(2, "0");

          return (
            <article
              key={`${exp.company}-${index}`}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#11203b] border border-white/10 hover:border-[#ff6b6b]/40 transition-all duration-300 shadow-lg shadow-black/20 group page-break-avoid"
            >
              {/* Dispatch Running Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/5 text-[11px] font-mono text-[#a3b1cc]">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff6b6b] font-bold">DISPATCH 02.{dispatchNumber}</span>
                  <span>{"//"}</span>
                  <span className="uppercase text-[#fdfbf7] font-semibold">{exp.company}</span>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded text-[10px] font-mono bg-[#ff6b6b]/15 text-[#ff6b6b] border border-[#ff6b6b]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse"></span>
                      ACTIVE TENURE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#fdfbf7]">
                    <Calendar className="w-3 h-3 text-[#ff6b6b]" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-[#a3b1cc]">
                    <MapPin className="w-3 h-3 text-[#a3b1cc]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Title in Serif */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fdfbf7] tracking-tight">
                  {exp.role}
                </h3>
              </div>

              {/* Promotion Badge if applicable */}
              {exp.promotion && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{exp.promotion}</span>
                </div>
              )}

              {/* Bullet Dispatches */}
              <ul className="mt-5 space-y-3 text-sm text-[#e8decb]">
                {exp.description.map((bullet, bIndex) => {
                  const parts = bullet.split(":");
                  const hasLabel = parts.length > 1 && parts[0].length < 65;

                  return (
                    <li key={bIndex} className="flex items-start gap-3 leading-relaxed">
                      <span className="text-[#ff6b6b] font-mono text-xs mt-1 shrink-0 font-bold">
                        —
                      </span>
                      <span>
                        {hasLabel ? (
                          <>
                            <strong className="text-[#fdfbf7] font-semibold tracking-tight">
                              {parts[0]}:
                            </strong>
                            <span className="text-[#dcd4c3]">
                              {parts.slice(1).join(":")}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#dcd4c3]">{bullet}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Technologies Tag Inventory */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#a3b1cc] mr-2">
                    TECHNOLOGIES DEPLOYED:
                  </span>
                  {exp.skills.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#09111e] text-[#fdfbf7]/90 border border-white/10 group-hover:border-[#ff6b6b]/30 transition-colors"
                    >
                      {tech}
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
