"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { EDUCATION, AWARDS } from "@/data/portfolio-data";

export default function ResumeEducationAwards() {
  return (
    <section id="education" className="py-8 border-b border-white/10 resume-border page-break-avoid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Education
              </h2>
              <p className="text-xs text-neutral-400 font-mono">
                Academic foundation
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/5 resume-badge">
            <h3 className="text-base font-bold text-white">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm font-medium text-sky-400 mt-0.5">
              {EDUCATION.institution}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                {EDUCATION.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                {EDUCATION.location}
              </span>
            </div>
          </div>
        </div>

        {/* Awards & Accelerated Promotions Column */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Honors & Promotions
              </h2>
              <p className="text-xs text-neutral-400 font-mono">
                Recognized engineering advancement
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-neutral-900/40 border border-white/5 resume-badge"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">
                    {award.title}
                  </h3>
                  <span className="text-xs font-mono text-amber-400 shrink-0">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-medium text-neutral-400 mt-0.5">
                  {award.organization}
                </p>
                <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
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
