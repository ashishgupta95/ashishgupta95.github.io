"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { EDUCATION, AWARDS } from "@/data/portfolio-data";

export default function ResumeEducationAwards() {
  return (
    <section id="education" className="py-10 border-b border-white/10 resume-border page-break-avoid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-semibold">
              03 // ACADEMIC FOUNDATION
            </span>
            <div className="flex items-center gap-2 mt-1">
              <GraduationCap className="w-5 h-5 text-[#ff6b6b]" />
              <h2 className="text-xl font-bold tracking-tight text-[#fdfbf7]">
                Education
              </h2>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#12213d] border border-white/5 hover:border-[#ff6b6b]/30 transition-all duration-200 resume-badge">
            <h3 className="text-base font-bold text-[#fdfbf7] tracking-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm font-medium text-[#ff8787] mt-1">
              {EDUCATION.institution}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#a3b1cc] mt-3 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-[#fdfbf7]">
                <Calendar className="w-3.5 h-3.5 text-[#a3b1cc]" />
                {EDUCATION.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#a3b1cc]">
                <MapPin className="w-3.5 h-3.5 text-[#a3b1cc]" />
                {EDUCATION.location}
              </span>
            </div>
          </div>
        </div>

        {/* Awards & Accelerated Promotions Column */}
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-mono text-[#ff6b6b] tracking-wider uppercase font-semibold">
              04 // FAST-TRACK PROMOTIONS
            </span>
            <div className="flex items-center gap-2 mt-1">
              <Award className="w-5 h-5 text-[#ff6b6b]" />
              <h2 className="text-xl font-bold tracking-tight text-[#fdfbf7]">
                Honors & Recognition
              </h2>
            </div>
          </div>

          <div className="space-y-3.5">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#0e1a2f]/80 hover:bg-[#12213d] border border-white/5 hover:border-[#ff6b6b]/30 transition-all duration-200 resume-badge"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#fdfbf7]">
                    {award.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/30 shrink-0 font-semibold">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-medium text-[#a3b1cc] mt-1">
                  {award.organization}
                </p>
                <p className="text-xs text-[#e8decb] mt-2 leading-relaxed">
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
