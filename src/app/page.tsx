"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterRoleMatch from "@/components/RecruiterRoleMatch";
import SystemsLab from "@/components/SystemsLab";
import CaseStudies from "@/components/CaseStudies";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsRadar from "@/components/SkillsRadar";
import CommandPalette from "@/components/CommandPalette";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Toggle Command Palette with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Toggle Interactive Terminal with backtick ` or ~
      if (e.key === "`" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#06070a] text-neutral-100 relative">
      {/* Navbar with status pill & quick shortcuts */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Hero Section */}
      <Hero
        onOpenCaseStudies={() => {
          const el = document.getElementById("case-studies");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Recruiter Quick-Match & Role Explorer */}
      <RecruiterRoleMatch />

      {/* Selected Case Studies */}
      <CaseStudies />

      {/* Unified Interactive Systems Lab (MCP Simulator + Architecture Visualizer in one tabbed component) */}
      <SystemsLab />

      {/* Career Experience & Accelerated Promotions */}
      <ExperienceTimeline />

      {/* Skills & Production Engineering Radar */}
      <SkillsRadar />

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Collapsible Interactive Developer Terminal (~) */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
