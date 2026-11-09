"use client";

import React from "react";
import { Download, Printer, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ResumeFooter() {
  return (
    <footer className="py-8 text-neutral-400 text-xs no-print">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <div className="text-center sm:text-left">
          <div className="font-semibold text-neutral-200">
            {PERSONAL_INFO.name} — Senior Software Engineer
          </div>
          <div className="text-neutral-500 font-mono text-[11px] mt-0.5">
            Vienna, Austria • Ready for production impact
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print CV</span>
          </button>
          <a
            href="/AshishGupta_CV.pdf"
            download="AshishGupta_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-3 text-neutral-400">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
