"use client";

import React from "react";
import ResumeNavbar from "@/components/ResumeNavbar";
import ResumeHeader from "@/components/ResumeHeader";
import ResumeExperience from "@/components/ResumeExperience";
import ResumeSkills from "@/components/ResumeSkills";
import ResumeEducationAwards from "@/components/ResumeEducationAwards";
import ResumeFooter from "@/components/ResumeFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09111e] text-[#fdfbf7] antialiased selection:bg-[#ff6b6b]/30 selection:text-[#fdfbf7] relative overflow-x-hidden">
      {/* Subtle top ambient radial lighting in Warm Coral */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,107,0.09),transparent_70%)] pointer-events-none no-print" />

      {/* Minimal Top Navigation */}
      <ResumeNavbar />

      {/* Main Broadsheet Canvas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 resume-paper relative z-10">
        {/* Small Intro / Header & Professional Summary */}
        <ResumeHeader />

        {/* Curriculum: Work Experience */}
        <ResumeExperience />

        {/* Curriculum: Technical Skills & Competencies */}
        <ResumeSkills />

        {/* Curriculum: Education & Honors */}
        <ResumeEducationAwards />

        {/* Resume Footer */}
        <ResumeFooter />
      </div>
    </main>
  );
}
