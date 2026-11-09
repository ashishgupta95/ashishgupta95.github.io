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
    <main className="min-h-screen bg-[#f6f4ee] text-[#121316] antialiased selection:bg-[#c92a2a]/20 selection:text-[#121316] relative overflow-x-hidden">
      {/* Newspaper Masthead Navigation */}
      <ResumeNavbar />

      {/* Main Broadsheet Newspaper Canvas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 resume-paper relative z-10 pt-4 pb-12">
        {/* Page 1: Lead Story & Executive Overview */}
        <ResumeHeader />

        {/* Page 2: Field Dispatches & Professional Record */}
        <ResumeExperience />

        {/* Page 3: Technology Market Index */}
        <ResumeSkills />

        {/* Page 4: Academic Records & Honors */}
        <ResumeEducationAwards />

        {/* Broadsheet Colophon Footer */}
        <ResumeFooter />
      </div>
    </main>
  );
}
