"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react";

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
          status: "synthesized_and_verified",
          executionMs: 112,
          output: {
            generatedSql: `SELECT TOP 10 
    t.TransactionId,
    t.AccountId,
    t.Amount AS TxnAmount,
    t.Currency AS TxnCurrency,
    i.Amount AS InvoiceAmount,
    i.Currency AS InvoiceCurrency,
    ABS(t.Amount - i.Amount) AS Discrepancy
FROM FactTransactions t
INNER JOIN FactInvoices i ON t.TransactionId = i.TransactionId
WHERE t.Currency <> i.Currency
  AND ABS(t.Amount - i.Amount) > 100
  AND t.TransactionDate >= '2026-07-01' 
  AND t.TransactionDate < '2026-10-01'
ORDER BY Discrepancy DESC;`,
            safetyChecks: {
              sqlInjectionRisk: "0.00%",
              astValidation: "PASSED",
              monacoIntelliSenseReady: true,
            },
          },
        },
      },
      logs: [
        "[00:00.005] [MCP Server] Ingested natural language prompt & retrieved table schema context",
        "[00:00.045] [LLM Pipeline] Synthesized deterministic ANSI/T-SQL query",
        "[00:00.089] [AST Validator] Verified query semantics against Monaco parser; zero unsafe AST mutations",
        "[00:00.112] [Tool Output] Delivered executable query buffer to interactive Monaco editor",
      ],
    },
  },
  {
    name: "run_row_by_row_reconcile",
    category: "100+ GB Verification",
    description: "Invokes the Rust + .NET 8 high-throughput streaming reconciliation engine across two multi-gigabyte sources.",
    sampleInput: '{\n  "sourceA": "azure-blob://dw-lake/q3_actuals.parquet",\n  "sourceB": "sql-server://enterprise-prod/FactLedger",\n  "keyColumns": ["TransactionId", "Timestamp"],\n  "chunkSize": 65536\n}',
    mockOutput: {
      jsonRpc: {
        jsonrpc: "2.0",
        id: "call-9984-reconcile",
        result: {
          toolName: "run_row_by_row_reconcile",
          status: "completed",
          executionMs: 420,
          output: {
            rowsCompared: 142500000,
            discrepanciesFound: 3,
            memoryAllocatedMb: 64.2,
            engineType: "Rust Streaming Zero-Copy Diff (Benchmark Verified)",
            mismatches: [
              { id: "TXN-88301", diff: "SourceA: 1045.20 EUR | SourceB: 1045.00 EUR (Delta: 0.20)" },
              { id: "TXN-91244", diff: "SourceA: Status 'SETTLED' | SourceB: Status 'PENDING'" },
              { id: "TXN-99014", diff: "SourceA: Present | SourceB: Missing in Target" },
            ],
          },
        },
      },
      logs: [
        "[00:00.010] [Azure Service Bus] Published JobScheduledEvent to high-priority reconciliation topic",
        "[00:00.045] [Rust Worker] Initialized zero-copy streaming buffers (bounded at 64MB memory footprint)",
        "[00:00.280] [Streaming Diff] Streamed and reconciled 142.5M records across Parquet vs SQL",
        "[00:00.410] [SignalR] Emitted JobCompletedEvent with 3 pinpointed discrepancies to web dashboard",
      ],
    },
  },
];

export default function McpSimulator() {
  const [selectedToolIndex, setSelectedToolIndex] = useState(0);
  const [inputVal, setInputVal] = useState(MCP_TOOLS[0].sampleInput);
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<typeof MCP_TOOLS[0]["mockOutput"] | null>(
    MCP_TOOLS[0].mockOutput
  );

  const selectedTool = MCP_TOOLS[selectedToolIndex];

  const handleSelectTool = (idx: number) => {
    setSelectedToolIndex(idx);
    setInputVal(MCP_TOOLS[idx].sampleInput);
    setExecutionResult(MCP_TOOLS[idx].mockOutput);
  };

  const handleExecute = () => {
    setIsRunning(true);
    setExecutionResult(null);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionResult(selectedTool.mockOutput);
    }, 650);
  };

  return (
    <section id="mcp-demo" className="py-24 relative overflow-hidden bg-[#07090f]/90 border-t border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Production Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Enterprise Model Context Protocol (MCP) Simulator
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            In my engineering practice, I architect custom enterprise Model Context Protocols (MCPs)
            that allow autonomous LLM agents to safely interact with hybrid-cloud test environments.
            Interact with the simulated runtime below to see tool calls, JSON-RPC payloads, and
            event-driven execution in real time.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl glass-panel-glow border border-sky-500/30 overflow-hidden shadow-2xl">
          {/* Top Bar */}
          <div className="bg-[#0b0e18] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline">
                mcp-enterprise-runtime v2.4 // JSON-RPC 2.0 // Transport: Azure Service Bus + WebSockets
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                Protocol: Active
              </span>
            </div>
          </div>

          {/* Tool Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#090b12]">
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
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500" />
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    {tool.name}()
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-snug">
                  {tool.description}
                </p>
              </button>
            ))}
          </div>

          {/* Body: 2 Columns (Input & Output) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-[#06080e]">
            {/* Left: Input Payload & Actions */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    JSON-RPC Tool Arguments
                  </span>
                  <button
                    onClick={() => setInputVal(selectedTool.sampleInput)}
                    className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#090b12]">
                  <textarea
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    rows={8}
                    className="w-full p-3 font-mono text-xs text-sky-200 bg-transparent focus:outline-none resize-none leading-relaxed"
                    spellCheck={false}
                  />
                </div>
              </div>

              {/* Execution Trigger */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-[11px] text-neutral-400 font-mono">
                  Target: <span className="text-sky-300">Enterprise Cloud Gateway</span>
                </div>
                <button
                  onClick={handleExecute}
                  disabled={isRunning}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs font-mono shadow-lg transition-all cursor-pointer ${
                    isRunning
                      ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20 hover:scale-[1.02]"
                  }`}
                >
                  {isRunning ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                      <span>Executing Tool Call...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Call Tool via MCP</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Real-Time Output & Telemetry */}
            <div className="p-5 flex flex-col justify-between bg-[#080a10]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Protocol Response & Telemetry
                  </span>
                  {executionResult && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ⚡ {executionResult.jsonRpc.result.executionMs}ms
                    </span>
                  )}
                </div>

                {isRunning ? (
                  <div className="h-64 rounded-xl border border-white/10 bg-[#090b12] p-4 flex flex-col items-center justify-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                    <p className="text-xs font-mono text-neutral-400 animate-pulse">
                      Synthesizing payload across Azure Service Bus & MCP router...
                    </p>
                  </div>
                ) : executionResult ? (
                  <div className="space-y-3">
                    {/* JSON Output */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#090b12] p-3 max-h-52 overflow-y-auto font-mono text-[11px] text-emerald-300 leading-relaxed">
                      <pre>{JSON.stringify(executionResult.jsonRpc.result.output, null, 2)}</pre>
                    </div>

                    {/* Streaming Log Trail */}
                    <div className="rounded-xl border border-white/5 bg-[#05060a] p-3 space-y-1 font-mono text-[10px]">
                      <div className="text-neutral-500 font-bold mb-1">
                        LIVE EVENT BUS & SIGNALR LOGS:
                      </div>
                      {executionResult.logs.map((log, i) => (
                        <div key={i} className="text-neutral-400 flex items-start gap-1">
                          <span className="text-sky-400 shrink-0">➜</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-64 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-xs font-mono text-neutral-500">
                    Press &quot;Call Tool via MCP&quot; to invoke
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Decoupled Pub/Sub Architecture</span>
                <span className="text-sky-400">SignalR WebSockets ✦ Zero-Copy Rust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
