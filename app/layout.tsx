import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// تحميل خط Cairo الرائع للغة العربية
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kian Solutions | Telecom AI & Data Architecture",
  description: "Eliminating SLA Penalties via Data Warehousing & AI Automation for Telecom Contractors in MENA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // دمجنا الخطوط كلها هنا ليستخدمها النظام حسب اللغة
      className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      {/* هنا نجعل خط Cairo هو الخط الأساسي الذي يتم الرجوع إليه (Fallback) */}
      <body className={`min-h-full flex flex-col font-sans ${cairo.className}`}>{children}</body>
    </html>
  );
}