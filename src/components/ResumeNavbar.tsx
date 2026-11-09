"use client";

import React, { useState, useEffect } from "react";
import { Download, Printer, Mail, ExternalLink, Menu, X } from "lucide-react";
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print ${
        scrolled
          ? "bg-[#08090e]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5"
          : "bg-[#06070a]/70 backdrop-blur-sm border-b border-white/5 py-3"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs group-hover:border-sky-400 transition-colors">
            AG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-neutral-100 tracking-tight group-hover:text-sky-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-sky-950/80 text-sky-400 border border-sky-800/40">
                Resume
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono hidden sm:block">
              Senior Software Engineer • Vienna
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-neutral-300">
          <a
            href="#intro"
            className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
          >
            Intro
          </a>
          <a
            href="#experience"
            className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
          >
            Education & Awards
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Print button */}
          <button
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/10 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-neutral-400" />
            <span>Print CV</span>
          </button>

          {/* Download PDF button */}
          <a
            href="/AshishGupta_CV.pdf"
            download="AshishGupta_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm shadow-sky-900/40 border border-sky-400/30 transition-all hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-1 pl-1 border-l border-white/10">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c13] border-b border-white/10 px-4 py-3 space-y-2 text-sm font-medium">
          <a
            href="#intro"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-neutral-200"
          >
            Intro
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-neutral-200"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-neutral-200"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-white/5 text-neutral-200"
          >
            Education & Awards
          </a>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 bg-white/5 rounded-lg border border-white/10"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_CV.pdf"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-sky-600 rounded-lg border border-sky-400/30"
            >
              <Download className="w-3.5 h-3.5" />
              PDF CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
