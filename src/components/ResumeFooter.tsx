"use client";

import React from "react";
import { Download, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResumeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 text-[#a3b1cc] text-xs font-mono no-print">
      {/* Editorial Colophon Container */}
      <div className="pt-6 border-t border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Magazine Colophon Info */}
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-[#fdfbf7] text-base tracking-wider uppercase">
              {PERSONAL_INFO.name} — Architectural Dossier
            </div>
            <div className="text-[#a3b1cc] text-[11px] mt-1 font-mono">
              Published from Vienna, Austria • Vol. 2026 // Issue IX
            </div>
            <div className="text-[10px] text-[#a3b1cc]/70 mt-0.5">
              Typeset in Playfair Display, Geist Sans & Geist Mono
            </div>
          </div>

          {/* Center: Clean PDF Download reference */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_CV.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1a2f] border border-white/10 hover:border-[#ff6b6b]/40 text-[#fdfbf7] hover:text-[#ff8787] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#ff6b6b]" />
              <span>AshishGupta_CV.pdf (286 KB)</span>
            </a>
          </div>

          {/* Right: Social & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#0e1a2f] hover:bg-white/10 hover:text-[#ff8787] text-[#a3b1cc] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors"
                title="Email Ashish"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0e1a2f] hover:bg-white/10 hover:text-[#ff8787] text-[#a3b1cc] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0e1a2f] hover:bg-white/10 hover:text-[#ff8787] text-[#a3b1cc] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0e1a2f] hover:bg-white/10 text-[#a3b1cc] hover:text-[#ff8787] border border-white/5 hover:border-[#ff6b6b]/30 transition-colors"
              title="Return to Masthead"
              aria-label="Return to Masthead"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#ff6b6b]" />
              <span className="text-[11px] font-mono uppercase tracking-wider">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="text-center text-[10px] text-[#a3b1cc]/60 pt-4 border-t border-white/5">
          © {new Date().getFullYear()} Ashish Gupta. All rights reserved. Prepared for engineering leadership, CTOs, and technical talent partners.
        </div>
      </div>
    </footer>
  );
}
