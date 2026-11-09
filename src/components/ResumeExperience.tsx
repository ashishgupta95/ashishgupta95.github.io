"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolio-data";

export default function ResumeExperience() {
  return (
    <section id="experience" className="py-8 border-b border-white/10 resume-border">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              9+ years of progressive engineering leadership & production systems
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
          2017 — Present
        </span>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {WORK_EXPERIENCE.map((exp, index) => (
          <article
            key={`${exp.company}-${index}`}
            className="relative pl-0 sm:pl-6 sm:border-l-2 sm:border-neutral-800 resume-border page-break-avoid"
          >
            {/* Timeline bullet for desktop */}
            <span className="hidden sm:flex absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#06070a] border-2 border-sky-400 items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            </span>

            {/* Header: Role, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex flex-wrap items-center gap-2">
                  <span>{exp.role}</span>
                  <span className="text-sky-400 font-normal">@ {exp.company}</span>
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  {exp.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Promotion Badge if applicable */}
            {exp.promotion && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{exp.promotion}</span>
              </div>
            )}

            {/* Bullet Points */}
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {exp.description.map((bullet, bIndex) => {
                // Split title / summary if present or render bullet
                const parts = bullet.split(":");
                const hasLabel = parts.length > 1 && parts[0].length < 60;

                return (
                  <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-sky-400 font-mono text-xs mt-1 shrink-0">▸</span>
                    <span>
                      {hasLabel ? (
                        <>
                          <strong className="text-neutral-100 font-semibold">
                            {parts[0]}:
                          </strong>
                          {parts.slice(1).join(":")}
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
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-1">
                <span className="text-[11px] font-mono text-neutral-400 mr-1">
                  Technologies:
                </span>
                {exp.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/10 resume-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
