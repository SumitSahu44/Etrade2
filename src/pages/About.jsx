// src/pages/About.jsx ki top line ko replace karein
import React from 'react';
import {
  Target,
  Award,
  ShieldCheck,
  History,
  Users2,
  Building2,
  ChevronRight,
  Globe,   // <-- Ye missing tha, isko add kar diya
  Link
} from 'lucide-react';
const About = () => {
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-50">

      {/* --- 1. CORPORATE HEADER (HERO) --- */}
      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <p className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 animate-pulse">
            Established 1998 • Hyderabad
          </p>
          <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            The Digital Fabric of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ">Textile Excellence</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-600 leading-relaxed font-light px-4">
            Parekh e-Trade Market is India's leading B2B ecosystem, bridging the gap between traditional textile manufacturing and modern digital trade efficiency.
          </p>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
      </section>

      {/* --- 2. THE VISIONARY SPLIT SECTION --- */}
      <section className="py-20 md:py-32 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100/50 rounded-sm -z-10 group-hover:inset-0 transition-all duration-700"></div>
          <img
            src="https://images.unsplash.com/photo-1615806528302-05c722d51e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGV4dGlsZSUyMGNsb3RofGVufDB8fDB8fHww"
            className="w-full grayscale hover:grayscale-0 transition duration-1000 shadow-2xl rounded-sm border border-slate-200"
            alt="Textile Quality Control"
          />
          <div className="absolute -bottom-10 -right-6 md:-right-10 bg-blue-600 p-8 md:p-12 text-white shadow-2xl rounded-sm hidden sm:block">
            <Award size={48} className="mb-4" />
            <p className="text-2xl font-black leading-tight tracking-tighter uppercase">ISO 9001:2026 <br /> Certified</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Strategic <br /> Objectives</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto lg:mx-0"></div>
          </div>

          <div className="space-y-8">
            <ObjectiveItem
              icon={<Target className="text-blue-600" size={32} />}
              title="Global Market Accessibility"
              desc="Empowering local manufacturers in Hyderabad and Pan-India hubs to access global procurement requests through our secure e-platform."
            />
            <ObjectiveItem
              icon={<ShieldCheck className="text-blue-600" size={32} />}
              title="Trade Governance"
              desc="Maintaining the highest standards of document verification (GST, MSME, CIN) to ensure every transaction is legally compliant and secure."
            />
            <ObjectiveItem
              icon={<Building2 className="text-blue-600" size={32} />}
              title="Industrial Optimization"
              desc="Reducing supply chain friction for textile raw materials and machineries through automated e-Quotation systems."
            />
          </div>
        </div>
      </section>

      {/* --- 3. CORPORATE PILLARS (DARK SECTION) --- */}
      <section className="py-24 md:py-32 bg-[#020617] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">The Pillars of Integrity</h2>
            <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.3em]">Built on Decades of Trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <AboutCard
              icon={<History size={36} />}
              title="28 Years Heritage"
              desc="Evolving from a traditional textile trading house in 1998 to India's most advanced e-trade market hub."
            />
            <AboutCard
              icon={<Users2 size={36} />}
              title="Expert Leadership"
              desc="Managed by industry veterans with deep expertise in yarn logistics, fabric engineering, and global export-import."
            />
            <AboutCard
              icon={<Globe size={36} />}
              title="Associate Network"
              desc="Operating through 500+ associate offices across 22 states, providing localized support for national trade."
            />
          </div>
        </div>
      </section>

      {/* --- 4. DATA-DRIVEN EXCELLENCE (COUNTERS) --- */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "State Hubs", val: "22+" },
            { label: "Annual Volume", val: "₹500Cr+" },
            { label: "Trade Compliance", val: "100%" },
            { label: "Verified Members", val: "6,200+" }
          ].map((item, i) => (
            <div key={i} className="group">
              <p className="text-4xl md:text-6xl font-black text-blue-600 tracking-tighter group-hover:scale-110 transition-transform duration-500">{item.val}</p>
              <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 mt-4 tracking-[0.2em]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="pb-24 container mx-auto px-6">
        <div className="bg-blue-600 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 rounded-sm shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">Ready to Trade with Precision?</h3>
            <p className="text-blue-100 mt-2 font-medium">Join our verified network of textile professionals today.</p>
          </div>
          <Link to="/buyer" className="bg-white text-blue-600 px-10 py-4 font-bold uppercase text-xs st hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2">
            Get Started <ChevronRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

// Sub-component for Objectives
const ObjectiveItem = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="shrink-0 w-14 h-14 bg-slate-50 flex items-center justify-center text-blue-600 rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed max-w-md">{desc}</p>
    </div>
  </div>
);

// Sub-component for Core Pillars
const AboutCard = ({ icon, title, desc }) => (
  <div className="p-12 md:p-16 space-y-6 hover:bg-white/5 transition-colors group">
    <div className="text-blue-500 group-hover:translate-x-2 transition-transform duration-500">{icon}</div>
    <h4 className="text-xl font-bold uppercase tracking-tight">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;