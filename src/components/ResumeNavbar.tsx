"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResumeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print">
      {/* Newspaper Broadsheet Ear & Dateline Bar */}
      <div className="bg-[#ece7db] border-b border-[#d6cebe] py-1 px-4 text-[10px] font-mono tracking-widest text-[#52525b] hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>VOL. MMXXVI • NO. IX</span>
          <span className="text-[#c92a2a] font-bold tracking-wider">
            THE ASHISH GUPTA BROADSHEET • VIENNA, AUSTRIA
          </span>
          <span className="text-[#121316] font-medium">CIRCULATION: ENTERPRISE & TECH LEADERSHIP</span>
        </div>
      </div>

      {/* Main Newspaper Nameplate & Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f4ee]/95 backdrop-blur-md border-b-2 border-[#121316] shadow-md shadow-black/10 py-2"
            : "bg-[#f6f4ee]/90 backdrop-blur-sm border-b-2 border-[#121316] py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Masthead Identity */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <div className="w-9 h-9 rounded bg-[#ede8dc] border border-[#c92a2a]/50 flex items-center justify-center font-serif font-black text-sm text-[#121316] group-hover:border-[#c92a2a] group-hover:shadow-[0_0_12px_rgba(201,42,42,0.25)] transition-all">
              <span className="text-[#121316]">A</span>
              <span className="text-[#c92a2a]">G</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-[#121316] uppercase group-hover:text-[#c92a2a] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded border border-[#c92a2a]/30 bg-[#c92a2a]/10 text-[#c92a2a] font-bold tracking-wider">
                  SENIOR SE @ TRICENTIS
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#52525b] hidden sm:block">
                The Engineering Broadsheet • Dispatches & CV
              </p>
            </div>
          </a>

          {/* Newspaper Page Directory Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-mono tracking-wider text-[#374151]">
            <a
              href="#lead-story"
              className="px-2.5 py-1.5 rounded hover:text-[#121316] hover:bg-[#121316]/5 transition-colors"
            >
              <span className="text-[#c92a2a] font-bold mr-1">P.1</span>LEAD STORY
            </a>
            <a
              href="#experience"
              className="px-2.5 py-1.5 rounded hover:text-[#121316] hover:bg-[#121316]/5 transition-colors"
            >
              <span className="text-[#c92a2a] font-bold mr-1">P.2</span>DISPATCHES
            </a>
            <a
              href="#skills"
              className="px-2.5 py-1.5 rounded hover:text-[#121316] hover:bg-[#121316]/5 transition-colors"
            >
              <span className="text-[#c92a2a] font-bold mr-1">P.3</span>TECH INDEX
            </a>
            <a
              href="#education"
              className="px-2.5 py-1.5 rounded hover:text-[#121316] hover:bg-[#121316]/5 transition-colors"
            >
              <span className="text-[#c92a2a] font-bold mr-1">P.4</span>HONORS
            </a>
          </nav>

          {/* Action: Single Authoritative Download Button in Newspaper Scarlet */}
          <div className="flex items-center gap-2.5">
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#c92a2a] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] rounded shadow-md shadow-[#c92a2a]/20 border border-[#b91c1c] transition-all duration-200 hover:scale-[1.03]"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download PDF</span>
            </a>

            {/* Social Wires */}
            <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-[#d6cebe]">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Wire"
                className="p-1.5 text-[#52525b] hover:text-[#121316] hover:bg-[#121316]/5 rounded transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Wire"
                className="p-1.5 text-[#52525b] hover:text-[#121316] hover:bg-[#121316]/5 rounded transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#52525b] hover:text-[#121316] rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#121316]" /> : <Menu className="w-5 h-5 text-[#121316]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f6f4ee] border-b-2 border-[#121316] px-4 py-4 space-y-2 text-xs font-mono tracking-wider shadow-lg">
          <a
            href="#lead-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-[#121316]/5 text-[#121316] font-bold"
          >
            <span className="text-[#c92a2a] mr-1.5">PAGE 1</span>LEAD STORY & SUMMARY
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-[#121316]/5 text-[#121316] font-bold"
          >
            <span className="text-[#c92a2a] mr-1.5">PAGE 2</span>ENTERPRISE DISPATCHES
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-[#121316]/5 text-[#121316] font-bold"
          >
            <span className="text-[#c92a2a] mr-1.5">PAGE 3</span>TECHNOLOGY MARKET INDEX
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-[#121316]/5 text-[#121316] font-bold"
          >
            <span className="text-[#c92a2a] mr-1.5">PAGE 4</span>ACADEMIC RECORD & HONORS
          </a>
          <div className="pt-2 border-t border-[#d6cebe]">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#c92a2a] hover:bg-[#b91c1c] rounded"
            >
              <span>Send Direct Wire</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
