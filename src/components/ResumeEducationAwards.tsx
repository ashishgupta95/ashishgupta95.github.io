"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from "lucide-react";
import { EDUCATION, AWARDS } from "@/data/portfolio-data";

export default function ResumeEducationAwards() {
  return (
    <section id="education" className="py-10 border-b border-white/10 resume-border page-break-avoid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase font-semibold">
              03 // ACADEMIC FOUNDATION
            </span>
            <div className="flex items-center gap-2 mt-1">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <h2 className="text-xl font-bold tracking-tight text-white">
                Education
              </h2>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/5 hover:border-white/10 transition-all duration-200 resume-badge">
            <h3 className="text-base font-bold text-white tracking-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm font-medium text-sky-400 mt-1">
              {EDUCATION.institution}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-3 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                {EDUCATION.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                {EDUCATION.location}
              </span>
            </div>
          </div>
        </div>

        {/* Awards & Accelerated Promotions Column */}
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-mono text-amber-400 tracking-wider uppercase font-semibold">
              04 // FAST-TRACK PROMOTIONS
            </span>
            <div className="flex items-center gap-2 mt-1">
              <Award className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold tracking-tight text-white">
                Honors & Recognition
              </h2>
            </div>
          </div>

          <div className="space-y-3.5">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/5 hover:border-amber-500/20 transition-all duration-200 resume-badge"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">
                    {award.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-medium text-neutral-400 mt-1">
                  {award.organization}
                </p>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
