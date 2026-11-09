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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-[#09111e]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/60 py-2.5"
          : "bg-[#09111e]/80 backdrop-blur-sm border-b border-white/5 py-3"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0e1a2f] border border-[#ff6b6b]/40 flex items-center justify-center font-mono font-bold text-xs group-hover:border-[#ff6b6b] group-hover:shadow-[0_0_12px_rgba(255,107,107,0.35)] transition-all">
            <span className="text-[#fdfbf7]">A</span>
            <span className="text-[#ff6b6b]">G</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-[#fdfbf7] tracking-tight group-hover:text-[#ff8787] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/30 font-semibold">
                Senior SE
              </span>
            </div>
            <p className="text-[11px] text-[#a3b1cc] font-mono hidden sm:block">
              Vienna, Austria • Resume
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-[#c4beaf]">
          <a
            href="#intro"
            className="px-3 py-1.5 rounded-md hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
          >
            Summary
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 rounded-md hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-md hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
          >
            Skills & Stack
          </a>
          <a
            href="#education"
            className="px-3 py-1.5 rounded-md hover:text-[#fdfbf7] hover:bg-white/5 transition-colors"
          >
            Education & Awards
          </a>
        </nav>

        {/* Right Actions: The authoritative single Download CV CTA in Coral */}
        <div className="flex items-center gap-2">
          {/* Primary Download PDF button */}
          <a
            href="/AshishGupta_CV.pdf"
            download="AshishGupta_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#ff6b6b] to-[#fa5252] hover:from-[#ff8787] hover:to-[#ff6b6b] rounded-lg shadow-md shadow-[#ff6b6b]/25 border border-[#ff8787]/50 transition-all duration-200 hover:scale-[1.03]"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>Download CV (PDF)</span>
          </a>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-1 pl-1 border-l border-white/10">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-white/5 rounded-md transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] hover:bg-white/5 rounded-md transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#a3b1cc] hover:text-[#fdfbf7] rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1a2f] border-b border-white/10 px-4 py-3 space-y-2 text-sm font-medium">
          <a
            href="#intro"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-[#fdfbf7]"
          >
            Summary
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-[#fdfbf7]"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-[#fdfbf7]"
          >
            Skills & Stack
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-[#fdfbf7]"
          >
            Education & Awards
          </a>
          <div className="pt-2 border-t border-white/10">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#ff6b6b] hover:bg-[#ff8787] rounded-lg border border-[#ff8787]/40"
            >
              Email Ashish
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
