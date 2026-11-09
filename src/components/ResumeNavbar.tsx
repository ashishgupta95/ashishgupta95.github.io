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
      <div className="bg-[#050a14] border-b border-white/10 py-1 px-4 text-[10px] font-mono tracking-widest text-[#a3b1cc] hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>VOL. MMXXVI • NO. IX</span>
          <span className="text-[#ff8787] font-semibold tracking-wider">
            THE ASHISH GUPTA BROADSHEET • VIENNA, AUSTRIA
          </span>
          <span className="text-[#fdfbf7]/80">CIRCULATION: ENTERPRISE & TECH LEADERSHIP</span>
        </div>
      </div>

      {/* Main Newspaper Nameplate & Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#09111e]/95 backdrop-blur-md border-b-2 border-white/20 shadow-xl shadow-black/70 py-2"
            : "bg-[#09111e]/90 backdrop-blur-sm border-b-2 border-white/15 py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Masthead Identity */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <div className="w-9 h-9 rounded bg-[#0a1322] border border-[#ff6b6b]/40 flex items-center justify-center font-serif font-black text-sm text-[#fdfbf7] group-hover:border-[#ff6b6b] group-hover:shadow-[0_0_12px_rgba(255,107,107,0.35)] transition-all">
              <span className="text-[#fdfbf7]">A</span>
              <span className="text-[#ff6b6b]">G</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-[#fdfbf7] uppercase group-hover:text-[#ff8787] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded border border-[#ff6b6b]/40 bg-[#ff6b6b]/10 text-[#ff6b6b] font-bold tracking-wider">
                  SENIOR SE @ TRICENTIS
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#a3b1cc] hidden sm:block">
                The Engineering Broadsheet • Dispatches & CV
              </p>
            </div>
          </a>

          {/* Newspaper Page Directory Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-mono tracking-wider text-[#dcd4c3]">
            <a
              href="#lead-story"
              className="px-2.5 py-1.5 rounded hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
            >
              <span className="text-[#ff6b6b] font-bold mr-1">P.1</span>LEAD STORY
            </a>
            <a
              href="#experience"
              className="px-2.5 py-1.5 rounded hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
            >
              <span className="text-[#ff6b6b] font-bold mr-1">P.2</span>DISPATCHES
            </a>
            <a
              href="#skills"
              className="px-2.5 py-1.5 rounded hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
            >
              <span className="text-[#ff6b6b] font-bold mr-1">P.3</span>TECH INDEX
            </a>
            <a
              href="#education"
              className="px-2.5 py-1.5 rounded hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
            >
              <span className="text-[#ff6b6b] font-bold mr-1">P.4</span>HONORS
            </a>
          </nav>

          {/* Actions: Single Primary Coral Download CTA Button + Socials */}
          <div className="flex items-center gap-2.5">
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#ff6b6b] to-[#fa5252] hover:from-[#ff8787] hover:to-[#ff6b6b] rounded shadow-md shadow-[#ff6b6b]/25 border border-[#ff8787]/50 transition-all duration-200 hover:scale-[1.03]"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download PDF</span>
            </a>

            {/* Social Wires */}
            <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-white/10">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Wire"
                className="p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-white/5 rounded transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Wire"
                className="p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-white/5 rounded transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1322] border-b border-white/10 px-4 py-4 space-y-2 text-xs font-mono tracking-wider">
          <a
            href="#lead-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-white/5 text-[#fdfbf7]"
          >
            <span className="text-[#ff6b6b] font-bold mr-1.5">PAGE 1</span>LEAD STORY & SUMMARY
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-white/5 text-[#fdfbf7]"
          >
            <span className="text-[#ff6b6b] font-bold mr-1.5">PAGE 2</span>ENTERPRISE DISPATCHES
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-white/5 text-[#fdfbf7]"
          >
            <span className="text-[#ff6b6b] font-bold mr-1.5">PAGE 3</span>TECHNOLOGY MARKET INDEX
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-white/5 text-[#fdfbf7]"
          >
            <span className="text-[#ff6b6b] font-bold mr-1.5">PAGE 4</span>ACADEMIC RECORD & HONORS
          </a>
          <div className="pt-2 border-t border-white/10">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#ff6b6b] hover:bg-[#ff8787] rounded"
            >
              <span>Send Wire / Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
