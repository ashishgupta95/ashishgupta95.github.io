"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { EDUCATION, AWARDS } from "@/data/portfolio-data";

export default function ResumeEducationAwards() {
  return (
    <section id="education" className="py-12 border-b-2 border-white/15 resume-border page-break-avoid">
      {/* Newspaper Page 4 Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono text-[#ff6b6b] tracking-widest uppercase font-bold">
            PAGE 4 // UNIVERSITY RECORD & OFFICIAL COMMENDATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#fdfbf7] mt-1">
            Academic Credentials & Career Honors
          </h2>
          <p className="text-xs sm:text-sm text-[#dcd4c3] mt-1 font-serif italic">
            Formal university engineering degree conferred, fast-track promotions, and organizational excellence awards.
          </p>
        </div>

        <div className="text-xs font-mono text-[#a3b1cc] sm:text-right shrink-0">
          <span className="px-2.5 py-1 rounded bg-[#0a1322] border border-white/10 inline-block font-bold">
            ACCREDITATIONS RECORD
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#ff6b6b] uppercase tracking-wider font-bold">
            <GraduationCap className="w-4 h-4 text-[#ff6b6b]" />
            <span>OFFICIAL UNIVERSITY RECORD</span>
          </div>

          <div className="p-6 rounded-xl bg-[#0a1322] border border-white/15 hover:border-[#ff6b6b]/40 transition-all duration-300 shadow-md shadow-black/20 resume-badge">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff8787] font-bold block mb-1">
              DEGREE CONFERRED
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-black text-[#fdfbf7] tracking-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm font-serif italic text-[#dcd4c3] mt-1">
              {EDUCATION.institution}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#a3b1cc] mt-4 pt-3 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-[#fdfbf7]">
                <Calendar className="w-3.5 h-3.5 text-[#ff6b6b]" />
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

        {/* Awards & Citations Column */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#ff6b6b] uppercase tracking-wider font-bold">
            <Award className="w-4 h-4 text-[#ff6b6b]" />
            <span>ORGANIZATIONAL CITATIONS & STAR AWARDS</span>
          </div>

          <div className="space-y-4">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#0a1322] border border-white/15 hover:border-[#ff6b6b]/40 transition-all duration-300 shadow-md shadow-black/20 resume-badge"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#fdfbf7]">
                    {award.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff6b6b]/15 text-[#ff6b6b] border border-[#ff6b6b]/30 shrink-0 font-bold">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#ff8787] mt-1">
                  {award.organization}
                </p>
                <p className="text-xs text-[#dcd4c3] mt-2 leading-relaxed">
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
