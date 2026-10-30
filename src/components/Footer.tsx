"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Mail, Phone, ArrowUp, Heart, Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.9 },
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040508] pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-500/30">
                <span className="font-mono text-xs font-bold text-sky-400">AG</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Senior Software Engineer based in Vienna, Austria. Specializing in high-throughput
              distributed architectures, low-latency processing in Rust and .NET 8, and enterprise
              Model Context Protocols (MCPs).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-sky-400 hover:border-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-emerald-400 hover:border-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Sections
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#mcp-demo" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400" /> Live MCP Lab
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Distributed Architecture
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience & Velocity
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills & Tech Radar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div>
                <span className="block text-[10px] uppercase font-mono text-neutral-400">Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sky-400 hover:underline font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-neutral-400">Phone</span>
                <span className="text-neutral-300 font-mono">{PERSONAL_INFO.phone}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-neutral-400">Location</span>
                <span className="text-neutral-300">Vienna, Austria</span>
              </div>
              <div className="pt-2">
                <a
                  href="/AshishGupta_CV.pdf"
                  download="AshishGupta_Senior_Software_Engineer_CV.pdf"
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-200 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Download className="w-3 h-3 text-sky-400" /> Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {year} Ashish Gupta. Designed for high performance and zero latency.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for technical consulting & high-impact engineering
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
