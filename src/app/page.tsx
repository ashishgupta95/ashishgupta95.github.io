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
    <main className="min-h-screen bg-[#06070a] text-neutral-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
      {/* Minimal Top Navigation */}
      <ResumeNavbar />

      {/* Main Resume Canvas */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 resume-paper">
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
