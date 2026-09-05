"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- قواميس الترجمة (Dictionaries) ---
const dict = {
  en: {
    nav: { solutions: "Solutions", ai: "AI Agents", founder: "Leadership", faq: "FAQ", lang: "العربية" },
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
    ai: {
      title: "Powered by Autonomous AI Agents",
      subtitle: "Beyond simple scripts. We build multi-agent AI systems that act as your virtual NOC and Field Operations Managers.",
      f1: { title: "Local Offline LLMs", desc: "Maximum security for your corporate data. We deploy models (like Ollama) that run locally on your servers—zero data leakage." },
      f2: { title: "Multi-Agent Workflows", desc: "Using frameworks like CrewAI, our systems deploy 'AI Managers' that analyze telemetry, negotiate spare parts, and issue work orders autonomously." },
      f3: { title: "Vision AI for Tower Assets", desc: "Computer vision models that analyze drone and technician footage to detect rust, tilt, and hardware degradation before failures occur." }
    },
    founder: {
      badge: "CHIEF TECHNOLOGY ARCHITECT",
      name: "Eng. Walid Taha",
      desc: "Bridging 25+ years of Telecom Infrastructure leadership (Vodafone, Telecom Egypt) with modern software engineering (Next.js, Python, n8n). Walid doesn't just write code; he engineers B2B systems that solve the exact multi-million dollar operational bottlenecks he managed in the field.",
      highlight: "Mastermind behind Kian Solutions' deep-tech architecture.",
    },
    testimonials: {
      title: "Trusted by Telecom Leaders",
      t1: { quote: "Kian's automated dispatching completely eliminated our SLA penalties in the Eastern region within 3 months.", author: "Operations Director", company: "KSA Telecom Contractor" },
      t2: { quote: "The AI PAT generator accelerated our invoicing cycle by 40%. It's the most profound OPEX tool we've invested in.", author: "Chief Financial Officer", company: "TowerCo, GCC" },
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "What is your engagement model?", a1: "We operate on a 'Build, Operate, Transfer' (BOT) consulting model, or as an ongoing B2B SaaS partner depending on your enterprise needs.",
      q2: "Do you integrate with our existing ERP?", a2: "Yes. Our systems are built API-first. We seamlessly integrate with SAP, Oracle, and legacy NOC systems without disrupting your core network.",
      q3: "How secure is our telecom data?", a3: "We implement Zero-Trust architecture. Using Supabase Row-Level Security (RLS) and isolated offline AI models, your operational data never leaves your enterprise perimeter."
    },
    footer: {
      tagline: "Architected for MENA Telecom Leaders.",
      contact: "Get in Touch",
      links: "Quick Links"
    }
  },
  ar: {
    nav: { solutions: "الحلول", ai: "وكلاء الذكاء الاصطناعي", founder: "القيادة", faq: "الأسئلة الشائعة", lang: "English" },
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
    ai: {
      title: "مدعوم بوكلاء الذكاء الاصطناعي المستقلين",
      subtitle: "نحن نتجاوز البرمجة التقليدية. نبني أنظمة ذكاء اصطناعي متعددة الوكلاء تعمل كمدراء افتراضيين لمركز العمليات (NOC) والفرق الميدانية.",
      f1: { title: "نماذج لغوية محلية (Offline LLMs)", desc: "أقصى درجات الأمان لبياناتك المؤسسية. ننشر نماذج تعمل محلياً على خوادمك لضمان عدم تسريب أي بيانات تشغيلية." },
      f2: { title: "أتمتة الوكلاء المتعددين", desc: "نستخدم بيئات مثل CrewAI لنشر 'وكلاء ذكاء اصطناعي' يحللون بيانات الأبراج ويصدرون أوامر العمل آلياً." },
      f3: { title: "الرؤية الحاسوبية للأبراج", desc: "نماذج ذكاء اصطناعي تحلل صور الفنيين لاكتشاف الصدأ، الميول، وتدهور المعدات قبل حدوث الأعطال." }
    },
    founder: {
      badge: "المعمار التقني والمدير التنفيذي",
      name: "م. وليد طه",
      desc: "يجمع بين أكثر من 25 عاماً من القيادة في البنية التحتية للاتصالات (فودافون، المصرية للاتصالات) وهندسة البرمجيات الحديثة (Next.js, Python, n8n). وليد لا يكتب الكود فحسب؛ بل يهندس أنظمة B2B تحل نفس الاختناقات التشغيلية المليونية التي أدارها لسنوات في الميدان.",
      highlight: "العقل المدبر خلف البنية المعمارية العميقة لشركة Kian Solutions.",
    },
    testimonials: {
      title: "شركاء النجاح في قطاع الاتصالات",
      t1: { quote: "نظام التوجيه الآلي من Kian قضى تماماً على غرامات الـ SLA في المنطقة الشرقية خلال 3 أشهر فقط.", author: "مدير العمليات", company: "شركة مقاولات اتصالات، السعودية" },
      t2: { quote: "نظام توليد الـ PAT بالذكاء الاصطناعي سرّع دورة الفواتير بنسبة 40%. إنه أفضل استثمار لخفض النفقات التشغيلية.", author: "المدير المالي (CFO)", company: "شركة إدارة أبراج (TowerCo)، الخليج" },
    },
    faq: {
      title: "الأسئلة الشائعة",
      q1: "ما هو نموذج التعاقد معكم؟", a1: "نعمل بنموذج الاستشارات (البناء، التشغيل، ونقل الملكية BOT) أو كشريك تقني سحابي (B2B SaaS) بناءً على حجم مؤسستك.",
      q2: "هل يمكن ربط أنظمتكم مع نظام الـ ERP الحالي لشركتنا؟", a2: "نعم. أنظمتنا مبنية بواجهات برمجة (API-first)، نربط بسلاسة مع SAP و Oracle دون تعطيل سير العمل المركزي.",
      q3: "ما مدى أمان بياناتنا التشغيلية؟", a3: "نطبق معمارية (Zero-Trust). باستخدام تشفير Supabase (RLS) ونماذج الذكاء الاصطناعي المعزولة، بياناتك لا تغادر حدود مؤسستك."
    },
    footer: {
      tagline: "تم هندستها لقادة قطاع الاتصالات في الشرق الأوسط.",
      contact: "تواصل معنا",
      links: "روابط سريعة"
    }
  }
};

export default function KianBusiness() {
  // التغيير تم هنا: 'en' هي اللغة الافتراضية بدلاً من 'ar'
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = dict[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'} className={`min-h-screen bg-[#020813] text-slate-50 font-sans selection:bg-cyan-500/30 overflow-hidden ${isRtl ? 'font-arabic' : ''}`}>
      
      {/* Background Cyber-Grid & Tower Vectors */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        {/* Abstract Tower CSS Shape */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] border-x border-t border-cyan-900/20 [clip-path:polygon(45%_0,55%_0,100%_100%,0%_100%)] flex justify-center opacity-30">
           <div className="w-[1px] h-full bg-cyan-900/50"></div>
           <div className="absolute top-[20%] w-[40%] h-[1px] bg-cyan-900/50"></div>
           <div className="absolute top-[50%] w-[60%] h-[1px] bg-cyan-900/50"></div>
           <div className="absolute top-[80%] w-[80%] h-[1px] bg-cyan-900/50"></div>
        </div>
      </div>
      
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="w-full backdrop-blur-xl bg-[#020813]/80 border-b border-cyan-900/30 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Kian Solutions Logo" width={45} height={45} className="rounded drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              <span className="text-2xl font-bold tracking-widest text-white">
                KIAN<span className="text-cyan-500 text-sm align-top ml-1">.BUSINESS</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="#solutions" className="hover:text-cyan-400 transition">{t.nav.solutions}</Link>
              <Link href="#ai" className="hover:text-cyan-400 transition">{t.nav.ai}</Link>
              <Link href="#founder" className="hover:text-cyan-400 transition">{t.nav.founder}</Link>
              <Link href="#faq" className="hover:text-cyan-400 transition">{t.nav.faq}</Link>
              <button onClick={toggleLang} className="px-4 py-2 border border-cyan-800 hover:border-cyan-400 text-cyan-400 rounded-lg transition font-mono">
                {t.nav.lang}
              </button>
            </div>
            
            {/* Mobile Lang Toggle */}
            <button onClick={toggleLang} className="md:hidden px-3 py-1.5 border border-cyan-800 text-cyan-400 rounded transition text-xs font-mono">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
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
        <section id="problems" className="container mx-auto px-6 py-20 border-t border-cyan-900/20 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">{t.problems.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[t.problems.p1, t.problems.p2, t.problems.p3].map((prob, i) => (
              <div key={i} className="bg-[#050f21] border border-red-900/30 p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/50 transition duration-300">
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

        {/* AI & Automation Engine (Deep Tech) */}
        <section id="ai" className="border-t border-cyan-900/20 bg-[#030b18] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#030b18] to-[#030b18]"></div>
          
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{t.ai.title}</h2>
              <p className="text-cyan-400 max-w-2xl mx-auto text-lg">{t.ai.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[t.ai.f1, t.ai.f2, t.ai.f3].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#020813]/50 border border-cyan-800/50 backdrop-blur-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Kian Architecture (Solutions) */}
        <section id="solutions" className="container mx-auto px-6 py-20 border-t border-cyan-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{t.solutions.title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[t.solutions.s1, t.solutions.s2, t.solutions.s3].map((sol, i) => (
              <div key={i} className="bg-[#050f21]/80 backdrop-blur-sm border border-cyan-800/40 p-8 rounded-2xl hover:border-cyan-400/60 transition duration-300 relative group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{sol.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed relative z-10">{sol.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-cyan-950 text-cyan-300 rounded border border-cyan-800">SaaS Node</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-cyan-950 text-cyan-300 rounded border border-cyan-800">API First</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership / Founder Section */}
        <section id="founder" className="py-24 border-t border-cyan-900/20 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#050f21] border border-cyan-900/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              
              {/* Founder Image */}
              <div className="w-48 h-48 lg:w-64 lg:h-64 relative shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10"></div>
                <Image 
                  src="/Walid.png" 
                  alt="Eng. Walid Taha" 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Founder Details */}
              <div className="flex-1 text-center lg:text-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/50 text-cyan-400 text-xs font-mono font-semibold mb-4 border border-cyan-800">
                  {t.founder.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.founder.name}</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {t.founder.desc}
                </p>
                <div className="bg-[#020813] border-l-4 border-emerald-500 p-4 rounded-r-lg inline-block text-emerald-400 font-medium">
                  {t.founder.highlight}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-20 border-t border-cyan-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[t.testimonials.t1, t.testimonials.t2].map((test, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-[#050f21] to-[#020813] border border-cyan-900/30 relative">
                <svg className="absolute top-6 opacity-10 w-12 h-12 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p className="text-slate-300 text-lg italic mb-6 relative z-10 leading-relaxed">"{test.quote}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-400 font-bold">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{test.author}</h4>
                    <p className="text-cyan-500 text-xs">{test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-6 py-20 border-t border-cyan-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">{t.faq.title}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[ 
              { q: t.faq.q1, a: t.faq.a1 }, 
              { q: t.faq.q2, a: t.faq.a2 }, 
              { q: t.faq.q3, a: t.faq.a3 } 
            ].map((faq, i) => (
              <details key={i} className="group bg-[#050f21] border border-cyan-900/30 rounded-lg open:bg-cyan-950/20 transition-all">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-white">
                  {faq.q}
                  <span className="text-cyan-500 group-open:rotate-45 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-cyan-900/20 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Expanded Footer */}
        <footer className="border-t border-cyan-900/50 bg-[#01040a] pt-16 pb-8">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-cyan-900/30 pb-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Kian Solutions Logo" width={35} height={35} className="rounded" />
                <span className="text-xl font-bold tracking-widest text-white">KIAN</span>
              </div>
              <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">{t.footer.links}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="#solutions" className="hover:text-cyan-400">{t.nav.solutions}</Link></li>
                <li><Link href="#ai" className="hover:text-cyan-400">{t.nav.ai}</Link></li>
                <li><Link href="#founder" className="hover:text-cyan-400">{t.nav.founder}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="https://wa.me/905363191820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    WhatsApp: +90 536 319 1820
                  </a>
                </li>
                <li>
                  <a href="mailto:walid.taha@kian.business" className="flex items-center gap-2 hover:text-cyan-400 transition">
                    <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/walid-abbas-a140738" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-600 text-xs font-mono">
            © 2026 KIAN SOLUTIONS. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>
    </main>
  );
}