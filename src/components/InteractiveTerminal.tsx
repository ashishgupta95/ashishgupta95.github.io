"use client";

import React, { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO, WORK_EXPERIENCE } from "@/data/portfolio-data";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-neutral-400 space-y-1">
          <p className="text-sky-400 font-bold">
            Ashish Gupta CLI v2.4 (x86_64-pc-windows / Vienna, AT)
          </p>
          <p>Type <span className="text-white font-bold">&apos;help&apos;</span> to inspect available engineering commands or <span className="text-emerald-400 font-bold">&apos;sudo hire&apos;</span> for an easter egg.</p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-sky-400 font-bold">whoami / bio</span> - Short engineering overview</div>
            <div><span className="text-sky-400 font-bold">skills</span> - Core languages & frameworks</div>
            <div><span className="text-sky-400 font-bold">experience</span> - Recent work history</div>
            <div><span className="text-sky-400 font-bold">mcp</span> - Model Context Protocol info</div>
            <div><span className="text-sky-400 font-bold">metrics</span> - Production benchmarks</div>
            <div><span className="text-sky-400 font-bold">contact</span> - Email, phone, socials</div>
            <div><span className="text-sky-400 font-bold">download</span> - Download PDF resume</div>
            <div><span className="text-sky-400 font-bold">clear</span> - Clear terminal window</div>
            <div><span className="text-emerald-400 font-bold">sudo hire</span> - Direct hire command</div>
          </div>
        );
        break;

      case "whoami":
      case "bio":
        response = (
          <div className="space-y-1 text-neutral-300">
            <p className="font-bold text-white">Ashish Gupta — Senior Software Engineer</p>
            <p>📍 Vienna, Austria • Tricentis (ex-IAEA, ex-GEP Worldwide, ex-LTIMindtree)</p>
            <p className="text-neutral-400">{PERSONAL_INFO.tagline}</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 text-neutral-300">
            <p><span className="text-sky-400">Languages:</span> C# (.NET 8), Rust, TypeScript, JavaScript, SQL, Java</p>
            <p><span className="text-purple-400">Distributed:</span> Azure Service Bus, SignalR WebSockets, gRPC, OpenTelemetry</p>
            <p><span className="text-emerald-400">AI & Agentic:</span> Model Context Protocols (MCP), LLM Tooling, NL-to-SQL</p>
            <p><span className="text-amber-400">Data Engines:</span> 100+ GB Diffing, Parquet, Hive, Avro, SQL Server, MongoDB</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2 text-neutral-300">
            {WORK_EXPERIENCE.slice(0, 3).map((w, idx) => (
              <div key={idx} className="border-l border-sky-500 pl-2">
                <span className="font-bold text-white">{w.role}</span> @ <span className="text-sky-400">{w.company}</span> ({w.period})
                <p className="text-xs text-neutral-400">{w.highlights[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "mcp":
        response = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-sky-400 font-bold">Enterprise Model Context Protocols (MCP):</p>
            <p>Engineered custom enterprise MCP servers to bridge LLMs with hybrid cloud environments.</p>
            <p>Capabilities: automated schema discovery, natural language-to-SQL synthesis, and test generation.</p>
          </div>
        );
        break;

      case "metrics":
        response = (
          <div className="grid grid-cols-2 gap-2 text-neutral-300">
            {PERSONAL_INFO.stats.map((s, i) => (
              <div key={i}>
                <span className="text-white font-bold">{s.value}</span>: <span className="text-neutral-400">{s.label}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-neutral-300">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <span className="text-white">{PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sky-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case "download":
        response = (
          <div className="text-emerald-400">
            Initiating download of AshishGupta_CV.pdf...
          </div>
        );
        window.open("/AshishGupta_CV.pdf", "_blank");
        confetti({ particleCount: 50, spread: 50 });
        break;

      case "clear":
        setHistory([]);
        return;

      case "sudo hire":
      case "hire":
        response = (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
            <p className="font-bold text-emerald-400">🎉 Permission granted! Offer pipeline unlocked.</p>
            <p>Ashish is ready to drive distributed systems and enterprise AI innovations.</p>
            <p>Let&apos;s talk: <a href={`mailto:${PERSONAL_INFO.email}`} className="underline text-white font-bold">{PERSONAL_INFO.email}</a></p>
          </div>
        );
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ["#38bdf8", "#818cf8", "#34d399", "#f59e0b"],
        });
        break;

      default:
        response = (
          <div className="text-rose-400">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for list of commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isMaximized
          ? "inset-4 sm:inset-10"
          : "bottom-6 right-6 w-full max-w-xl max-h-[500px]"
      } shadow-2xl rounded-2xl glass-panel-glow border border-sky-500/40 overflow-hidden flex flex-col bg-[#070912]/95`}
    >
      {/* Title Bar */}
      <div className="bg-[#0b0e1a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between cursor-move select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-neutral-200">
            ashish@vienna-devbox:~ (Interactive Terminal)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 rounded text-neutral-400 hover:text-white"
            aria-label="Toggle maximize"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white"
            aria-label="Close terminal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-sky-400">
              <span className="text-neutral-500">➜</span>
              <span className="text-emerald-400 font-bold">ashish@vienna:~$</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            <div className="pl-6">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Line */}
      <form onSubmit={handleSubmit} className="p-3 bg-[#080a12] border-t border-white/10 flex items-center gap-2 font-mono text-xs">
        <span className="text-emerald-400 font-bold">ashish@vienna:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help', 'bio', 'mcp', 'skills'..."
          className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none"
        />
        <button
          type="submit"
          className="p-1 rounded bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
