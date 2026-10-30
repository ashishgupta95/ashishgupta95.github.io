import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Gupta — Senior Software Engineer | Distributed Systems & Enterprise MCPs",
  description:
    "Senior Software Engineer in Vienna, Austria. Specializing in high-throughput distributed architectures (.NET 8, C#, Rust, TypeScript), 100+ GB data reconciliation engines, and enterprise Model Context Protocols (MCPs).",
  keywords: [
    "Ashish Gupta",
    "Senior Software Engineer",
    "Vienna Software Engineer",
    "Model Context Protocol",
    "MCP",
    "Distributed Systems",
    "Rust",
    ".NET 8",
    "C#",
    "SignalR",
    "Azure Service Bus",
    "Full-Stack",
    "Tricentis",
  ],
  authors: [{ name: "Ashish Gupta", url: "https://github.com/ashishgupta95" }],
  openGraph: {
    title: "Ashish Gupta — Senior Software Engineer",
    description:
      "Architecting high-throughput distributed systems, low-latency engines, and enterprise AI & Model Context Protocols (MCPs).",
    url: "https://github.com/ashishgupta95",
    siteName: "Ashish Gupta Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#06070a] text-neutral-100 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
