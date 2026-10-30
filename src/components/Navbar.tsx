"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Terminal, Download, Command, Menu, X, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

export default function Navbar({
  onOpenCommandPalette,
  onToggleTerminal,
  isTerminalOpen,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.1, x: 0.8 },
      colors: ["#38bdf8", "#818cf8", "#34d399"],
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#06070a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-500/30 group-hover:border-sky-400 transition-colors shadow-inner">
              <span className="font-mono text-sm font-bold text-sky-400 group-hover:scale-110 transition-transform">
                AG
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40">
                  Senior SE
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono hidden md:block">
                Tricentis • Vienna, AT
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel border border-white/10">
            <a
              href="#case-studies"
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#mcp-demo"
              className="text-xs font-medium text-sky-400 hover:text-sky-300 px-3 py-1.5 rounded-full hover:bg-sky-500/10 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              Live MCP Lab
            </a>
            <a
              href="#architecture"
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Architecture
            </a>
            <a
              href="#experience"
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-xs font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Skills
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-400 hover:text-white hover:border-neutral-700 transition-all cursor-pointer shadow-sm"
              title="Open Command Palette (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Terminal Toggle Button */}
            <button
              onClick={onToggleTerminal}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                isTerminalOpen
                  ? "bg-sky-500/20 border-sky-500 text-sky-300 shadow-sm shadow-sky-500/20"
                  : "bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
              }`}
              title="Toggle Interactive Terminal (~)"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline text-[11px]">terminal</span>
            </button>

            {/* Social Icons */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-sky-400 hover:border-neutral-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Download Resume Button */}
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_Senior_Software_Engineer_CV.pdf"
              onClick={handleDownloadCV}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-xs hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c14]/95 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-white/5"
            >
              Case Studies
            </a>
            <a
              href="#mcp-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-sky-400 hover:bg-sky-500/10 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Live MCP Lab
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-white/5"
            >
              Distributed Architecture
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-white/5"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-white/5"
            >
              Skills & Radar
            </a>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_Senior_Software_Engineer_CV.pdf"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-white font-medium text-xs shadow-md"
            >
              <Download className="w-4 h-4" /> Download CV (PDF)
            </a>
            <span className="text-xs text-neutral-400 font-mono">Vienna, Austria</span>
          </div>
        </div>
      )}
    </header>
  );
}
