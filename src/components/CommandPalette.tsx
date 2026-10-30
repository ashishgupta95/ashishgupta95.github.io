"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import {
  Command,
  Search,
  X,
  FileText,
  Sparkles,
  Layers,
  Briefcase,
  Cpu,
  Mail,
  Phone,
  Download,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenTerminal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAction = (action: () => void) => {
    action();
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    confetti({ particleCount: 40, spread: 40 });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    confetti({ particleCount: 40, spread: 40 });
  };

  const actions = [
    {
      label: "Jump to Live MCP Simulator",
      icon: Sparkles,
      category: "Navigation",
      action: () => {
        window.location.hash = "#mcp-demo";
      },
    },
    {
      label: "View Featured Case Studies",
      icon: FileText,
      category: "Navigation",
      action: () => {
        window.location.hash = "#case-studies";
      },
    },
    {
      label: "Inspect Distributed Architecture",
      icon: Layers,
      category: "Navigation",
      action: () => {
        window.location.hash = "#architecture";
      },
    },
    {
      label: "Review Work Experience & Promotions",
      icon: Briefcase,
      category: "Navigation",
      action: () => {
        window.location.hash = "#experience";
      },
    },
    {
      label: "Browse Skills & Production Radar",
      icon: Cpu,
      category: "Navigation",
      action: () => {
        window.location.hash = "#skills";
      },
    },
    {
      label: "Launch Interactive Terminal (~)",
      icon: Terminal,
      category: "Tools",
      action: () => {
        onOpenTerminal();
      },
    },
    {
      label: "Download Resume (PDF)",
      icon: Download,
      category: "Actions",
      action: () => {
        window.open("/AshishGupta_CV.pdf", "_blank");
        confetti({ particleCount: 70, spread: 70 });
      },
    },
    {
      label: "Visit GitHub (@ashishgupta95)",
      icon: GithubIcon,
      category: "Socials",
      action: () => {
        window.open(PERSONAL_INFO.github, "_blank");
      },
    },
    {
      label: "Visit LinkedIn Profile",
      icon: LinkedinIcon,
      category: "Socials",
      action: () => {
        window.open(PERSONAL_INFO.linkedin, "_blank");
      },
    },
    {
      label: `Copy Email: ${PERSONAL_INFO.email}`,
      icon: Mail,
      category: "Contact",
      action: copyEmail,
    },
    {
      label: `Copy Phone: ${PERSONAL_INFO.phone}`,
      icon: Phone,
      category: "Contact",
      action: copyPhone,
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-2xl glass-panel-glow border border-sky-500/40 shadow-2xl overflow-hidden bg-[#090b14]/95">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
          <Search className="w-4 h-4 text-sky-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-400">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-neutral-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleAction(item.action)}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-sky-500/10 hover:border-sky-500/30 border border-transparent flex items-center justify-between text-xs transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-white/5 text-neutral-400 group-hover:text-sky-400 group-hover:bg-sky-500/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-neutral-200 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400 uppercase">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-white/5 bg-[#06070c] flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Navigation Quick Menu</span>
          <span>Press ↑↓ to navigate, ↵ to select</span>
        </div>
      </div>
    </div>
  );
}
