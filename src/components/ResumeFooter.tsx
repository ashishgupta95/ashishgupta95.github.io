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
    <footer className="py-12 text-[#52525b] text-xs font-mono no-print">
      <div className="pt-6 border-t-2 border-[#121316] space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Newspaper Colophon */}
          <div className="text-center md:text-left">
            <div className="font-serif font-black text-[#121316] text-base tracking-wider uppercase">
              {PERSONAL_INFO.name} — The Engineering Broadsheet
            </div>
            <div className="text-[#52525b] text-[11px] mt-1 font-mono">
              Published from Vienna, Austria • Vol. MMXXVI // Issue IX
            </div>
            <div className="text-[10px] text-[#71717a] mt-0.5">
              Typeset in Newsreader, Geist Sans & Geist Mono • All metrics verified
            </div>
          </div>

          {/* Center: PDF Download reference */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href="/AshishGupta_CV.pdf"
              download="AshishGupta_CV.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ede8dc] border border-[#d6cebe] hover:border-[#c92a2a] text-[#121316] hover:text-[#c92a2a] transition-colors font-medium"
            >
              <Download className="w-3.5 h-3.5 text-[#c92a2a]" />
              <span>AshishGupta_CV.pdf (286 KB)</span>
            </a>
          </div>

          {/* Right: Social & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#ede8dc] hover:bg-[#e4ddce] text-[#52525b] hover:text-[#c92a2a] border border-[#d6cebe] hover:border-[#c92a2a]/40 transition-colors"
                title="Send Wire / Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#ede8dc] hover:bg-[#e4ddce] text-[#52525b] hover:text-[#c92a2a] border border-[#d6cebe] hover:border-[#c92a2a]/40 transition-colors"
                title="LinkedIn Wire"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#ede8dc] hover:bg-[#e4ddce] text-[#52525b] hover:text-[#c92a2a] border border-[#d6cebe] hover:border-[#c92a2a]/40 transition-colors"
                title="GitHub Wire"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ede8dc] hover:bg-[#e4ddce] text-[#52525b] hover:text-[#c92a2a] border border-[#d6cebe] hover:border-[#c92a2a]/40 transition-colors font-medium"
              title="Return to Nameplate"
              aria-label="Return to Nameplate"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#c92a2a]" />
              <span className="text-[11px] font-mono uppercase tracking-wider">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="text-center text-[10px] text-[#71717a] pt-4 border-t border-[#d6cebe]">
          © {new Date().getFullYear()} Ashish Gupta. The Broadsheet Edition. Prepared for engineering leadership, CTOs, and technical talent partners.
        </div>
      </div>
    </footer>
  );
}
