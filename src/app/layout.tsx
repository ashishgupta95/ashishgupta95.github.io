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
  title: "Ashish Gupta | Senior Software Engineer",
  description:
    "Ashish Gupta is a Senior Software Engineer in Vienna with 9+ years of experience building data-intensive products, developer tools, and distributed systems.",
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
      "Portfolio and résumé of Ashish Gupta, Senior Software Engineer in Vienna, Austria.",
    url: "https://ashishgupta95.github.io/",
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
      <body className="site-body">
        {children}
      </body>
    </html>
  );
}
