"use client";

import React from "react";
import { Download, Printer, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResumeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 text-neutral-400 text-xs no-print">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="text-center sm:text-left">
          <div className="font-semibold text-neutral-200 text-sm">
            {PERSONAL_INFO.name} — Senior Software Engineer
          </div>
          <div className="text-neutral-500 font-mono text-xs mt-1">
            Vienna, Austria • Ready for production engineering impact
          </div>
        </div>

        {/* Center: Clean secondary PDF reference (no loud repeated button) */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="/AshishGupta_CV.pdf"
            download="AshishGupta_CV.pdf"
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-sky-400 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>AshishGupta_CV.pdf (286 KB)</span>
          </a>
        </div>

        {/* Right: Quick Social & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-neutral-400 transition-colors"
              title="Email Ashish"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-neutral-400 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-neutral-400 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
