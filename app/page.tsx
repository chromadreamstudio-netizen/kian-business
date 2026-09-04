"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- قواميس الترجمة (Dictionaries) ---
const dict = {
  en: {
    nav: { solutions: "Solutions", about: "Architecture", contact: "Contact", lang: "العربية" },
    hero: {
      badge: "ENTERPRISE TELECOM AI",
      title1: "Stop Bleeding Margins on",
      titleHighlight: "SLA Penalties",
      desc: "We engineer custom SaaS, Data Warehouses, and AI automation for Telecom Contractors in the MENA region. Accelerate PAT/FAT invoicing and automate field dispatching.",
      cta: "Book a Technical Audit",
    },
    problems: {
      title: "The Telecom O&M Crisis",
      p1: { title: "SLA Breaches", desc: "Millions lost annually in penalties due to poor field team routing and manual dispatching." },
      p2: { title: "Acceptance Delays", desc: "Delayed PAT/FAT documents holding up your cash flow for weeks." },
      p3: { title: "Inventory Leakage", desc: "Blind spots between warehouses and sites causing massive OPEX waste." }
    },
    solutions: {
      title: "The Kian Architecture",
      s1: { title: "Cognitive Dispatcher", desc: "Predictive Next.js/Supabase dashboards that route teams based on live telemetry to ensure 99% SLA compliance." },
      s2: { title: "AI PAT/FAT Generator", desc: "n8n workflows integrated with Vision AI to automatically generate acceptance documents from field images, instantly readying invoices." },
      s3: { title: "OPEX Data Warehouse", desc: "Centralized ETL pipelines feeding real-time Power BI dashboards for instant site-by-site P&L visibility." }
    },
    footer: "© 2026 Kian Solutions. Architected for MENA Telecom Leaders."
  },
  ar: {
    nav: { solutions: "الحلول", about: "البنية التقنية", contact: "التواصل", lang: "English" },
    hero: {
      badge: "الذكاء الاصطناعي لقطاع الاتصالات المؤسسي",
      title1: "أوقف نزيف الأرباح بسبب",
      titleHighlight: "غرامات الـ SLA",
      desc: "نبني أنظمة سحابية مخصصة ومستودعات بيانات وأتمتة ذكية لمقاولي الاتصالات في الشرق الأوسط. سرّع دورة الفوترة (PAT/FAT) وقم بأتمتة توجيه الفرق الميدانية.",
      cta: "احجز استشارة تقنية",
    },
    problems: {
      title: "أزمات التشغيل والصيانة في قطاع الاتصالات",
      p1: { title: "غرامات الـ SLA", desc: "خسائر بملايين الريالات سنوياً بسبب سوء التوجيه اليدوي للفرق الميدانية." },
      p2: { title: "تأخر مستندات الاعتماد", desc: "تأخر إصدار الـ PAT/FAT مما يعطل التدفق النقدي ودورة الفوترة لأسابيع." },
      p3: { title: "هدر المخزون وقطع الغيار", desc: "انعدام التتبع اللحظي بين المخازن والمواقع يؤدي إلى خسائر تشغيلية ضخمة." }
    },
    solutions: {
      title: "البنية المعمارية لـ Kian Solutions",
      s1: { title: "الموجه الإدراكي للفرق", desc: "لوحات تحكم ذكية تتوقع وتوجه الفرق بناءً على الأعطال اللحظية لضمان تحقيق SLA بنسبة 99%." },
      s2: { title: "أتمتة مستندات الـ PAT/FAT", desc: "مسارات عمل (n8n) تحلل صور الموقع وتولد مستندات الاعتماد آلياً لتسريع الفوترة." },
      s3: { title: "مستودعات بيانات الـ OPEX", desc: "بناء مسارات بيانات مركزية تغذي لوحات Power BI لتحليل الأرباح والخسائر اللحظية لكل موقع." }
    },
    footer: "© 2026 Kian Solutions. تم هندستها لقادة قطاع الاتصالات."
  }
};

export default function KianBusiness() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const t = dict[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen bg-[#020813] text-slate-50 font-sans selection:bg-cyan-500/30 overflow-hidden ${isRtl ? 'font-arabic' : ''}`}>
      
      {/* Background Cyber-Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Glow Effects matching the Logo */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="w-full backdrop-blur-xl bg-[#020813]/60 border-b border-cyan-900/30 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Kian Solutions Logo" width={45} height={45} className="rounded" />
              <span className="text-2xl font-bold tracking-widest text-white">
                KIAN<span className="text-cyan-500 text-sm align-top ml-1">.BUSINESS</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="#problems" className="hover:text-cyan-400 transition">{t.nav.solutions}</Link>
              <Link href="#architecture" className="hover:text-cyan-400 transition">{t.nav.about}</Link>
              <a href="https://wa.me/905363191820" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">{t.nav.contact}</a>
              <button onClick={toggleLang} className="px-4 py-2 border border-cyan-800 hover:border-cyan-400 text-cyan-400 rounded-lg transition">
                {t.nav.lang}
              </button>
            </div>
            
            {/* Mobile Lang Toggle */}
            <button onClick={toggleLang} className="md:hidden px-3 py-1.5 border border-cyan-800 text-cyan-400 rounded transition text-xs">
              {t.nav.lang}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/60 text-cyan-400 text-xs md:text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
            {t.hero.desc}
          </p>
          
          <a href="https://wa.me/905363191820" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-[#020813] rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            {t.hero.cta}
          </a>
        </section>

        {/* The Telecom O&M Crisis (Problems) */}
        <section id="problems" className="container mx-auto px-6 py-20 border-t border-cyan-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">{t.problems.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[t.problems.p1, t.problems.p2, t.problems.p3].map((prob, i) => (
              <div key={i} className="bg-[#050f21] border border-red-900/30 p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition"></div>
                <div className="text-red-400 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Kian Architecture (Solutions) */}
        <section id="architecture" className="container mx-auto px-6 py-20 border-t border-cyan-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{t.solutions.title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[t.solutions.s1, t.solutions.s2, t.solutions.s3].map((sol, i) => (
              <div key={i} className="bg-[#050f21]/80 backdrop-blur-sm border border-cyan-800/40 p-8 rounded-2xl hover:border-cyan-400/60 transition duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{sol.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed relative z-10">{sol.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-cyan-950 text-cyan-300 rounded border border-cyan-800">B2B SaaS</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-cyan-950 text-cyan-300 rounded border border-cyan-800">AI Logic</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-900/30 py-8 text-center bg-[#020813]">
          <p className="text-slate-500 text-sm">{t.footer}</p>
        </footer>
      </div>
    </main>
  );
}