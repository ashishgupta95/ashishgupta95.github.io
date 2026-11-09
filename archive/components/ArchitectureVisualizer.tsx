"use client";

import React, { useState } from "react";
import {
  Layers,
  Network,
  Cpu,
  Database,
  Radio,
  FileCode,
  ShieldAlert,
  ArrowRight,
  Zap,
} from "lucide-react";

interface NodeDetail {
  id: string;
  name: string;
  tag: string;
  icon: typeof Cpu;
  color: string;
  borderColor: string;
  specs: { label: string; value: string }[];
  description: string;
  keyDesignDecisions: string[];
  techStack: string[];
}

const NODES: NodeDetail[] = [
  {
    id: "frontend",
    name: "Micro-Frontend & Monaco Editor",
    tag: "Presentation Layer",
    icon: FileCode,
    color: "from-sky-500/20 to-blue-500/10",
    borderColor: "border-sky-500/40",
    specs: [
      { label: "Render Mode", value: "Micro-Frontend (Nx / Vite)" },
      { label: "Editor Engine", value: "Monaco Editor (IntelliSense)" },
      { label: "UI Framework", value: "React + Material UI (MUI)" },
    ],
    description:
      "Engineered an interactive web-based SQL playground micro-frontend using the Monaco Editor. Allows users to write, format, and execute live queries with syntax validation, IntelliSense, and low-latency result rendering.",
    keyDesignDecisions: [
      "Debounced auto-formatting and AST query validation preventing spurious server queries.",
      "Isolated micro-frontend sandbox preventing memory leaks in long-running enterprise sessions.",
      "Optimistic UI updates with instant syntax error highlighting.",
    ],
    techStack: ["React", "Monaco Editor", "Nx Monorepo", "TypeScript", "Vite", "MUI"],
  },
  {
    id: "signalr",
    name: "SignalR WebSocket Pipeline",
    tag: "Real-Time Sync",
    icon: Radio,
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/40",
    specs: [
      { label: "Protocol", value: "WebSockets + Long Polling Fallback" },
      { label: "Broadcast Latency", value: "<15ms across active sessions" },
      { label: "State Strategy", value: "Debounced client re-fetch" },
    ],
    description:
      "A dedicated Notification Service that bridges backend event-driven states to all connected enterprise clients. Propagates connection state changes, schema updates, and automated MCP tool completion events.",
    keyDesignDecisions: [
      "Debounced UI refresh triggers to avoid thundering-herd effect when hundreds of tests finish simultaneously.",
      "Automatic reconnection with exponential backoff and message deduplication.",
      "Multi-tenant hub grouping ensuring strict cross-organization tenant isolation.",
    ],
    techStack: ["SignalR", ".NET 8", "WebSockets", "Azure SignalR Service"],
  },
  {
    id: "servicebus",
    name: "Azure Service Bus Pub/Sub",
    tag: "Decoupled Broker",
    icon: Network,
    color: "from-indigo-500/20 to-purple-500/10",
    borderColor: "border-indigo-500/40",
    specs: [
      { label: "Topology", value: "Topics & Subscriptions (Pub/Sub)" },
      { label: "Delivery Guarantee", value: "At-Least-Once with Dead-Lettering" },
      { label: "Throughput", value: "High-scale enterprise partitioned" },
    ],
    description:
      "The central asynchronous backbone decoupling frontend requests from long-running reconciliation jobs and MCP tool executions. Buffers heavy workloads during peak test-suite regression sweeps.",
    keyDesignDecisions: [
      "Dead-letter queues (DLQ) with automated alert triggers for unparseable payloads.",
      "Partitioned topics providing high-throughput message ingestion without head-of-line blocking.",
      "Message correlation IDs passed through to OpenTelemetry for end-to-end distributed tracing.",
    ],
    techStack: ["Azure Service Bus", "Cloud Events", "AMQP", "IaC / Helm"],
  },
  {
    id: "backend",
    name: ".NET 8 Microservices",
    tag: "Core Backend & Observability",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/10",
    borderColor: "border-purple-500/40",
    specs: [
      { label: "Runtime", value: ".NET 8 LTS (High Availability)" },
      { label: "Telemetry", value: "OpenTelemetry + Azure Distributed Tracing" },
      { label: "APIs", value: "gRPC & High-Throughput REST" },
    ],
    description:
      "High-availability microservices orchestrating connection management, test execution pipelines, and security authorization across enterprise data sources.",
    keyDesignDecisions: [
      "Full OpenTelemetry distributed tracing integrated into all outbound database and service bus calls.",
      "MongoDB connection management service reliably querying heterogeneous enterprise configs.",
      "Containerized microservices managed via Helm charts on Kubernetes.",
    ],
    techStack: [".NET 8", "C#", "OpenTelemetry", "MongoDB", "Kubernetes", "Docker", "NUKE"],
  },
  {
    id: "rust-engine",
    name: "Rust 100+ GB Reconciliation Engine",
    tag: "High-Throughput Processing",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/40",
    specs: [
      { label: "Dataset Capacity", value: "100+ GB per run" },
      { label: "Memory Model", value: "Zero-copy bounded chunk streaming" },
      { label: "Precision", value: "Deterministic byte-exact row comparison" },
    ],
    description:
      "High-throughput data verification engine engineered for memory-safe, ultra-low latency row-by-row comparisons across SQL tables, Hive, and binary Parquet/Avro datasets without memory explosion.",
    keyDesignDecisions: [
      "Streaming hash-diffing avoiding loading full datasets into memory.",
      "Native SIMD vectorized operations for fast columnar chunk evaluation.",
      "Electron desktop bridge for air-gapped or on-premise execution environments.",
    ],
    techStack: ["Rust", "Zero-Copy Buffers", "Parquet", "Apache Hive", "Avro", "Electron"],
  },
  {
    id: "storage",
    name: "Heterogeneous Enterprise Data Stores",
    tag: "Persistence & Lakehouse",
    icon: Database,
    color: "from-cyan-500/20 to-blue-500/10",
    borderColor: "border-cyan-500/40",
    specs: [
      { label: "Relational", value: "SQL Server (T-SQL)" },
      { label: "Big Data / Lake", value: "Apache Hive, Parquet (Snappy), Avro" },
      { label: "Config & Cache", value: "MongoDB, Azure Blob, SQLite" },
    ],
    description:
      "Unified access across multi-tenant enterprise data lakes, transactional banking databases, and binary columnar files with strict schema validation.",
    keyDesignDecisions: [
      "Custom connector adapters mapping heterogeneous types into unified internal tuples.",
      "Column projection pushing filtering to storage layers before diffing.",
      "Encrypted connection strings stored safely via Azure Key Vault.",
    ],
    techStack: ["SQL Server", "Apache Hive", "Parquet", "MongoDB", "Azure Blob", "Azure Key Vault"],
  },
];

export default function ArchitectureVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("rust-engine");

  const activeNode = NODES.find((n) => n.id === selectedNodeId) || NODES[4];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#06070a]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Production Systems Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive Distributed Architecture
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            A high-level view of the decoupled, event-driven architecture I engineered for
            enterprise workloads to achieve sub-millisecond UI updates, resilient pub/sub
            buffering, and 100+ GB data reconciliation. Click any node below to inspect design
            decisions and specs.
          </p>
        </div>

        {/* Visual Pipeline Flow Diagram */}
        <div className="mb-10 p-6 rounded-2xl glass-panel border border-white/10 overflow-x-auto">
          <div className="min-w-[780px] flex items-center justify-between gap-3">
            {NODES.map((node, index) => {
              const Icon = node.icon;
              const isSelected = node.id === selectedNodeId;

              return (
                <React.Fragment key={node.id}>
                  {/* Node Button */}
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`flex-1 min-w-[120px] p-3.5 rounded-xl border transition-all text-left group cursor-pointer relative ${
                      isSelected
                        ? `bg-gradient-to-b ${node.color} ${node.borderColor} shadow-lg shadow-sky-500/10 scale-105`
                        : "bg-[#090b12] border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute -top-1.5 right-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected ? "bg-white/10 text-white" : "bg-neutral-800 text-neutral-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
                        Step 0{index + 1}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-white leading-tight line-clamp-2">
                      {node.name}
                    </div>
                  </button>

                  {/* Flow Arrow */}
                  {index < NODES.length - 1 && (
                    <div className="text-neutral-600 shrink-0 flex items-center">
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Node Deep-Dive Panel */}
        <div className="rounded-2xl glass-panel-glow border border-sky-500/30 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <activeNode.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                  {activeNode.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{activeNode.name}</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeNode.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base text-neutral-300 leading-relaxed mb-8">
            {activeNode.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Engineering Decisions */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Key Architectural Decisions & Resilience
              </h4>
              <ul className="space-y-3">
                {activeNode.keyDesignDecisions.map((decision, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Technical Specs & Throughput */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Production Specifications & Benchmarks
              </h4>
              <div className="space-y-2.5">
                {activeNode.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs text-neutral-400 font-medium">{spec.label}</span>
                    <span className="text-xs font-mono text-sky-300 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
