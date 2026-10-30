"use client";

import React from "react";
import { WORK_EXPERIENCE, EDUCATION, AWARDS } from "@/data/portfolio-data";
import { Briefcase, Award, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#06070a]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-sky-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Velocity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work Experience & Rapid Advancement
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Over 8 years of progressive engineering leadership across Europe and India, repeatedly
            recognized with accelerated formal promotions for technical impact in enterprise
            systems and distributed architectures.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 mb-20 ml-2 sm:ml-4">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#06070a] border-2 border-sky-500 group-hover:border-sky-400 group-hover:scale-125 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </div>

              {/* Card Container */}
              <div className="p-4 sm:p-8 rounded-2xl glass-panel group-hover:glass-panel-glow border border-white/10 group-hover:border-sky-500/30 transition-all duration-300">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold text-sky-400 font-mono">
                        @ {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" /> {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Promotion Ribbon */}
                  {exp.promotion && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{exp.promotion}</span>
                    </div>
                  )}
                </div>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 my-6">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <span className="text-sky-400 font-mono shrink-0 mt-0.5">➜</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-neutral-500 mr-2">Core Tech:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Distinctions
                </span>
                <h3 className="text-xl font-bold text-white">Honors & Fast-Track Promotions</h3>
              </div>
            </div>

            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{award.title}</h4>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {award.date}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-neutral-400">
                    {award.organization}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                    Academic Foundation
                  </span>
                  <h3 className="text-xl font-bold text-white">Education & Principles</h3>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{EDUCATION.degree}</h4>
                  <span className="text-xs font-mono text-neutral-400">{EDUCATION.period}</span>
                </div>
                <div className="text-xs font-mono text-sky-400">{EDUCATION.institution}</div>
                <div className="text-xs text-neutral-400">{EDUCATION.location}</div>
                <p className="text-xs text-neutral-300 leading-relaxed pt-3 border-t border-white/5">
                  Core coursework: Data Structures & Algorithms, Distributed Systems, Operating Systems,
                  Cryptography & Network Security, Database Management Systems.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Continuous Engineering Growth</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> 8+ Years in Production
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
