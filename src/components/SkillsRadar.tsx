"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Cpu, Search, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export default function SkillsRadar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== "All" && cat.name !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0) return null;
    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative bg-[#06070a]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & Production Engineering Stack
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Every technology listed has been utilized in enterprise production environments to
            deliver high-throughput processing, maintain mission-critical SLAs, or orchestrate
            autonomous agentic workflows.
          </p>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack (e.g. Rust, MCP, SignalR)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-sky-500 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            return (
              <div
                key={cat.name}
                className="p-4 sm:p-6 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <h3 className="text-sm font-mono font-bold text-sky-400 tracking-wider uppercase border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-[11px] text-neutral-500 font-normal">
                    {cat.skills.length} tools
                  </span>
                </h3>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#090b12] border border-white/5 hover:border-sky-500/30 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400">
                            {skill.years}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {skill.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-semibold">
                            {skill.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
