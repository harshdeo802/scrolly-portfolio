import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Deo | C++ Software Engineer",
  description:
    "Portfolio of Harsh Deo — performance-focused C++ Software Engineer with 2.5+ years of experience in multithreading, optimization, and system-level development.",
  keywords: [
    "C++ Developer",
    "Software Engineer",
    "Multithreading",
    "Performance Optimization",
    "Linux",
    "Portfolio",
  ],
  openGraph: {
    title: "Harsh Deo | C++ Software Engineer",
    description:
      "Performance-focused C++ Software Engineer building high-performance, production-grade systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
