"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Database,
  Cpu,
  Network,
  Radio,
  FileCode,
  Zap,
  Code2,
} from "lucide-react";

// MCP Tools Definition
interface McpTool {
  name: string;
  category: string;
  description: string;
  sampleInput: string;
  mockOutput: {
    jsonRpc: {
      jsonrpc: string;
      id: string;
      result: {
        toolName: string;
        status: string;
        executionMs: number;
        output: unknown;
      };
    };
    logs: string[];
  };
}

const MCP_TOOLS: McpTool[] = [
  {
    name: "discover_schema",
    category: "Metadata Discovery",
    description: "Inspects multi-tenant hybrid data sources across SQL Server, Apache Hive, and Azure Blob Parquet.",
    sampleInput: '{\n  "target": "EnterpriseDW.Sales",\n  "includeForeignKeys": true,\n  "detectParquetPartitions": true\n}',
    mockOutput: {
      jsonRpc: {
        jsonrpc: "2.0",
        id: "call-9982-schema",
        result: {
          toolName: "discover_schema",
          status: "success",
          executionMs: 38,
          output: {
            tablesFound: 4,
            tables: [
              { name: "DimCustomers", columns: 18, rowEstimate: 1420500 },
              { name: "FactTransactions", columns: 34, rowEstimate: 89400000, partitionedBy: "Year/Month" },
              { name: "ParquetBlobStore", format: "Apache Parquet (Snappy)", totalPartitions: 128 },
              { name: "HiveAuditLog", engine: "Apache Hive", columns: 9 },
            ],
            telemetry: { "openTelemetryTraceId": "00-4bf92f3577b34da6a3ce929d0e0e4736" },
          },
        },
      },
      logs: [
        "[00:00.002] [MCP Server] Validated JSON-RPC authentication token (RBAC: TestAutomationEngineer)",
        "[00:00.012] [Connector] Probed hybrid VPC gateway -> SQL Server & Azure Blob storage",
        "[00:00.024] [Catalog] Discovered 4 schemas & mapped columnar Parquet partition layout",
        "[00:00.038] [SignalR] Broadcasted schema_discovered event to web clients (24ms latency)",
      ],
    },
  },
  {
    name: "synthesize_nl_to_sql",
    category: "LLM / Synthesis",
    description: "Transforms natural language business requirements into strict, verified SQL with syntax guardrails.",
    sampleInput: '{\n  "prompt": "Find top 10 reconciliation mismatches where transaction currency != invoice currency and delta > 100 EUR in Q3 2026",\n  "dialect": "T-SQL / HiveQL"\n}',
    mockOutput: {
      jsonRpc: {
        jsonrpc: "2.0",
        id: "call-9983-sql",
        result: {
          toolName: "synthesize_nl_to_sql",
          status: "success",
          executionMs: 52,
          output: {
            synthesizedQuery:
              "SELECT TOP 10 t.TransactionId, t.Currency AS TxCurr, i.Currency AS InvCurr, ABS(t.Amount - i.Amount) AS DeltaEUR\nFROM FactTransactions t\nINNER JOIN FactInvoices i ON t.InvoiceId = i.InvoiceId\nWHERE t.Currency <> i.Currency\n  AND ABS(t.Amount - i.Amount) > 100.0\n  AND t.TransactionDate >= '2026-07-01' AND t.TransactionDate < '2026-10-01'\nORDER BY DeltaEUR DESC;",
            astValidation: "PASSED (Safe Read-Only SELECT)",
            schemaBound: true,
          },
        },
      },
      logs: [
        "[00:00.004] [Guardrail] Enforced Read-Only policy (Blocked DDL/DML mutation keywords)",
        "[00:00.019] [NL-to-SQL] Synthesized query using discovered EnterpriseDW foreign key relations",
        "[00:00.035] [AST Validator] Verified deterministic AST syntax without table scan hazards",
        "[00:00.052] [Service Bus] Published query_synthesized event to Azure Service Bus topic",
      ],
    },
  },
  {
    name: "run_row_by_row_reconcile",
    category: "100+ GB Verification",
    description: "Invokes the Rust + .NET 8 high-throughput streaming reconciliation engine across two multi-gigabyte sources.",
    sampleInput: '{\n  "sourceA": "azure-blob://warehouse/snapshots/2026-q3.parquet",\n  "sourceB": "sql-server://enterprise-db/FactSales_Reconcile",\n  "keys": ["TransactionGuid", "Timestamp"],\n  "chunkSizeBytes": 67108864\n}',
    mockOutput: {
      jsonRpc: {
        jsonrpc: "2.0",
        id: "call-9984-reconcile",
        result: {
          toolName: "run_row_by_row_reconcile",
          status: "completed",
          executionMs: 142,
          output: {
            rowsCompared: 14850020,
            matchedRows: 14849880,
            discrepanciesFound: 140,
            processingRate: "104.5 MB/sec",
            memoryPeakMb: 42.6,
            zeroCopyEngine: "Active (Rust memory-bounded SIMD)",
          },
        },
      },
      logs: [
        "[00:00.008] [Engine Init] Initialized memory-bounded streaming ring buffer (64MB chunks)",
        "[00:00.041] [Rust Worker] Streamed & unpacked Apache Parquet (Snappy) without intermediate disk writes",
        "[00:00.098] [Diff Pipeline] Reconciled 14.8M rows using vectorized 128-bit hash comparison",
        "[00:00.142] [SignalR Hub] Pushed delta stream to Monaco Editor Micro-Frontend (<12ms latency)",
      ],
    },
  },
];

// Architecture Nodes Definition
interface NodeDetail {
  id: string;
  name: string;
  tag: string;
  icon: typeof Cpu;
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
    specs: [
      { label: "Render Mode", value: "Micro-Frontend (Nx / Vite)" },
      { label: "Editor Engine", value: "Monaco Editor (IntelliSense)" },
      { label: "UI Framework", value: "React + Material UI (MUI)" },
    ],
    description:
      "Interactive web SQL playground micro-frontend using the Monaco Editor. Allows users to write, format, and execute live queries with syntax validation, IntelliSense, and low-latency result rendering.",
    keyDesignDecisions: [
      "Debounced auto-formatting and AST query validation preventing spurious server queries.",
      "Isolated micro-frontend sandbox preventing memory leaks in long-running enterprise sessions.",
      "Optimistic UI updates with instant syntax error highlighting.",
    ],
    techStack: ["React", "Monaco Editor", "Nx Monorepo", "TypeScript", "MUI"],
  },
  {
    id: "signalr",
    name: "SignalR WebSocket Pipeline",
    tag: "Real-Time Sync",
    icon: Radio,
    specs: [
      { label: "Protocol", value: "WebSockets + Long Polling Fallback" },
      { label: "Broadcast Latency", value: "<15ms across active sessions" },
      { label: "State Strategy", value: "Debounced client re-fetch" },
    ],
    description:
      "Dedicated Notification Service bridging backend event-driven states to connected enterprise clients. Propagates schema discoveries, reconciliation deltas, and automated MCP tool events.",
    keyDesignDecisions: [
      "Debounced UI refresh triggers to avoid thundering-herd effect when regression runs finish.",
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
    specs: [
      { label: "Topology", value: "Topics & Subscriptions (Pub/Sub)" },
      { label: "Delivery Guarantee", value: "At-Least-Once with Dead-Lettering" },
      { label: "Throughput", value: "High-scale partitioned queues" },
    ],
    description:
      "The asynchronous backbone decoupling user requests from long-running reconciliation jobs and MCP tool executions. Buffers heavy workloads during peak regression sweeps.",
    keyDesignDecisions: [
      "Dead-letter queues (DLQ) with automated alert triggers for unparseable payloads.",
      "Partitioned topics providing high-throughput ingestion without head-of-line blocking.",
      "Message correlation IDs passed through to OpenTelemetry for end-to-end distributed tracing.",
    ],
    techStack: ["Azure Service Bus", "Cloud Events", "AMQP", "Helm"],
  },
  {
    id: "backend",
    name: ".NET 8 Microservices",
    tag: "Core Backend & Observability",
    icon: Cpu,
    specs: [
      { label: "Runtime", value: ".NET 8 LTS (High Availability)" },
      { label: "Telemetry", value: "OpenTelemetry + Azure Distributed Tracing" },
      { label: "APIs", value: "gRPC & High-Throughput REST" },
    ],
    description:
      "High-availability microservices orchestrating connection management, test execution pipelines, and security authorization across enterprise data sources.",
    keyDesignDecisions: [
      "OpenTelemetry distributed tracing integrated into all outbound database and bus calls.",
      "MongoDB connection management service reliably querying heterogeneous enterprise configs.",
      "Containerized microservices managed via Helm charts on Kubernetes.",
    ],
    techStack: [".NET 8", "C#", "OpenTelemetry", "MongoDB", "Kubernetes", "Docker"],
  },
  {
    id: "rust-engine",
    name: "Rust 100+ GB Reconciliation Engine",
    tag: "High-Throughput Processing",
    icon: Zap,
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
      "Custom connector adapters unifying disparate binary schemas into normalized streaming tuples.",
    ],
    techStack: ["Rust", "Zero-Copy Streaming", "Apache Parquet", "Apache Hive", "Avro"],
  },
  {
    id: "mcp-server",
    name: "Model Context Protocol (MCP) Server",
    tag: "Enterprise AI Protocol",
    icon: Sparkles,
    specs: [
      { label: "Protocol Standard", value: "JSON-RPC 2.0 (Model Context Protocol)" },
      { label: "Security Boundary", value: "Strict Tool-Execution Sandbox (RBAC)" },
      { label: "Integration", value: "Cursor, Claude, Copilot & Autonomous Agents" },
    ],
    description:
      "A custom Model Context Protocol server exposing strictly-typed tools for LLM agent integration. Allows autonomous agents to safely inspect enterprise schemas and execute natural-language queries without risk of arbitrary data mutations.",
    keyDesignDecisions: [
      "Fine-grained tool authorization matrix preventing unauthorized DDL/DML mutations.",
      "Detailed token telemetry and prompt caching reducing model latency by 45%.",
      "Seamless integration with Azure Service Bus event stream for audit trails.",
    ],
    techStack: ["MCP Protocol", "JSON-RPC", "LLM Workflows", ".NET 8", "TypeScript"],
  },
];

export default function SystemsLab() {
  const [activeTab, setActiveTab] = useState<"mcp" | "architecture">("mcp");

  // MCP Simulator State
  const [selectedToolIndex, setSelectedToolIndex] = useState(0);
  const selectedTool = MCP_TOOLS[selectedToolIndex];
  const [inputVal, setInputVal] = useState(selectedTool.sampleInput);
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<McpTool["mockOutput"] | null>(
    selectedTool.mockOutput
  );

  // Architecture State
  const [selectedNodeId, setSelectedNodeId] = useState("rust-engine");
  const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[4];

  const handleSelectTool = (index: number) => {
    setSelectedToolIndex(index);
    setInputVal(MCP_TOOLS[index].sampleInput);
    setExecutionResult(MCP_TOOLS[index].mockOutput);
  };

  const handleExecute = () => {
    setIsRunning(true);
    setExecutionResult(null);
    setTimeout(() => {
      setExecutionResult(selectedTool.mockOutput);
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="systems-lab" className="py-20 relative bg-[#06070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE SYSTEMS LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Architecture & Protocol Prototypes
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
              Explore the core architectural paradigms I specialize in: from enterprise Model Context
              Protocols (MCP) to zero-copy 100+ GB streaming diffing engines.
            </p>
          </div>

          {/* Segmented Control Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-neutral-900 border border-white/10 self-start md:self-auto shadow-sm">
            <button
              onClick={() => setActiveTab("mcp")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "mcp"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Model Context Protocol (MCP)</span>
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "architecture"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Distributed System Topology</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MODEL CONTEXT PROTOCOL (MCP) SIMULATOR */}
        {activeTab === "mcp" && (
          <div className="rounded-2xl bg-neutral-950/70 border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="bg-[#0b0e18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                </div>
                <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline">
                  mcp-enterprise-runtime // JSON-RPC 2.0 // Azure Service Bus + WebSockets
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                ● Protocol Ready
              </span>
            </div>

            {/* Tool Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#080a11]">
              {MCP_TOOLS.map((tool, idx) => (
                <button
                  key={tool.name}
                  onClick={() => handleSelectTool(idx)}
                  className={`text-left p-4 transition-all border-b md:border-b-0 md:border-r border-white/5 cursor-pointer relative ${
                    selectedToolIndex === idx
                      ? "bg-sky-500/10 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {selectedToolIndex === idx && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-400" />
                  )}
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      {tool.name}()
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1 leading-snug">
                    {tool.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Body: Input Arguments & Live Telemetry Output */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-[#06080e]">
              {/* Left Column: Arguments */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      JSON-RPC Arguments
                    </span>
                    <button
                      onClick={() => setInputVal(selectedTool.sampleInput)}
                      className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#090b12]">
                    <textarea
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      rows={7}
                      className="w-full p-3 font-mono text-xs text-sky-200 bg-transparent focus:outline-none resize-none leading-relaxed"
                      spellCheck={false}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-mono">
                    Runtime: <span className="text-sky-300">Enterprise Hybrid VPC</span>
                  </span>
                  <button
                    onClick={handleExecute}
                    disabled={isRunning}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs font-mono transition-all cursor-pointer ${
                      isRunning
                        ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                        : "bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20"
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                        <span>Calling Tool...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Execute MCP Call</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Output & Logs */}
              <div className="p-5 flex flex-col justify-between bg-[#080a10]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Response Payload & Execution Timing
                    </span>
                    {executionResult && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {executionResult.jsonRpc.result.executionMs}ms latency
                      </span>
                    )}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#04060a] p-3 font-mono text-xs overflow-x-auto min-h-[140px] text-neutral-200">
                    {isRunning ? (
                      <div className="flex items-center justify-center h-32 text-neutral-500 gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                        <span>Streaming JSON-RPC response via Azure Service Bus...</span>
                      </div>
                    ) : (
                      <pre className="text-sky-300 whitespace-pre-wrap leading-relaxed text-[11px]">
                        {JSON.stringify(executionResult?.jsonRpc, null, 2)}
                      </pre>
                    )}
                  </div>
                </div>

                {/* Event Logs */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider mb-1.5">
                    Live Event Mesh Telemetry:
                  </div>
                  <div className="space-y-1 font-mono text-[10px] text-neutral-400">
                    {executionResult?.logs.map((log, idx) => (
                      <div key={idx} className="truncate">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DISTRIBUTED SYSTEM ARCHITECTURE VISUALIZER */}
        {activeTab === "architecture" && (
          <div className="rounded-2xl bg-neutral-950/70 border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8">
            {/* Interactive Node Grid */}
            <div className="mb-6">
              <span className="text-xs font-mono text-neutral-400 block mb-3">
                SELECT A SUBSYSTEM TO INSPECT ARCHITECTURAL DECISIONS & SPECS:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-sky-500/15 border-sky-400 shadow-md shadow-sky-500/10 scale-[1.02]"
                          : "bg-neutral-900/60 border-white/5 hover:border-white/15 text-neutral-400 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? "text-sky-400" : "text-neutral-500"}`} />
                        <span className="text-[9px] font-mono px-1 rounded bg-white/5 text-neutral-400">
                          {node.tag.split(" ")[0]}
                        </span>
                      </div>
                      <div className={`text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-neutral-300"}`}>
                        {node.name.split(" ")[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Deep Dive */}
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-sky-400">{selectedNode.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{selectedNode.name}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Key Technical Tradeoffs & Decisions:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedNode.keyDesignDecisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="text-sky-400 font-mono mt-0.5">•</span>
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedNode.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Node Specs */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-white/5 flex flex-col justify-between space-y-3">
                <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                  Operational Specs:
                </span>
                <div className="space-y-2.5">
                  {selectedNode.specs.map((spec, i) => (
                    <div key={i} className="border-b border-white/5 pb-2">
                      <div className="text-[10px] text-neutral-500 font-mono">{spec.label}</div>
                      <div className="text-xs font-mono text-white font-semibold mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 pt-1">
                  Production SLA: 99.99% Guaranteed
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
