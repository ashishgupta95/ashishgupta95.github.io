"use client";

import React, { useState, useRef, type PointerEvent } from "react";
import { MapPin, ShieldCheck, Check, Copy, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function InteractivePortrait() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates from -1 to 1 for gentle 3D tilt
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    setTilt({
      rotateX: -normY * 5,
      rotateY: normX * 5,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gupta.s.ashish95@gmail.com");
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative group select-none transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      {/* Ambient background glow ring */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Main Card Container */}
      <div className="relative rounded-2xl bg-neutral-950/85 border border-white/10 backdrop-blur-xl p-5 shadow-2xl overflow-hidden max-w-[380px] mx-auto">
        {/* Card Header Status Bar */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide">AVAILABLE FOR SENIOR/STAFF</span>
          </div>
          <span className="text-neutral-400">CET</span>
        </div>

        {/* Clean High-Resolution Portrait Photo */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-inner group/canvas">
          {/* Top Overline */}
          <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-sky-300 font-semibold tracking-wider">
            DISTRIBUTED SYSTEMS · AI / MCP
          </div>

          {/* Clean Natural Portrait Photo */}
          <img
            src="/profile-pic.png"
            alt="Ashish Gupta — Senior Software Engineer"
            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.03]"
            width={612}
            height={612}
          />

          {/* Floating Experience Badge */}
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white shadow-xl">
            <span className="font-mono text-xl font-extrabold text-sky-400">9+</span>
            <span className="text-[9px] font-mono leading-tight text-neutral-300">
              YEARS<br />PROD EXP
            </span>
          </div>
        </div>

        {/* Card Footer / Identity Information */}
        <div className="mt-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                Ashish Gupta
                <span className="text-sky-400 text-xs" title="Verified Senior Engineer">✓</span>
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Senior Software Engineer @ Tricentis
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-300">
                <MapPin className="w-3 h-3 text-sky-400" /> Vienna, AT
              </span>
              <p className="text-[10px] text-neutral-400 font-mono">EU Work Auth</p>
            </div>
          </div>

          {/* Quick Contact & Superpower Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
              .NET 8 / C#
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Rust
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              MCPs
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
              TypeScript
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Azure Service Bus
            </span>
          </div>

          {/* Quick Copy Contact Button */}
          <button
            onClick={handleCopyEmail}
            className="w-full mt-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-sky-400" />
                <span>gupta.s.ashish95@gmail.com</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
