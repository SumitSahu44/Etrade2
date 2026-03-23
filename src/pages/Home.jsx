import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // Path check kar lena
import {
  ArrowRight, ShieldCheck, Gavel, BarChart3, ChevronRight,
  Target, Award, TrendingUp, Globe, Box
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">

      {/* --- 1. HERO SECTION: CINEMATIC INDUSTRIAL Banjo --- */}
      <Hero />

      {/* --- 2. TRUST METRICS & GLOBAL REACH --- */}
      <section className="bg-[#020617] border-y border-white/5 py-12 md:py-16">
        <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { label: "ANNUAL VOLUME", val: "₹500Cr+", icon: <TrendingUp className="text-blue-500" /> },
            { label: "VERIFIED PARTNERS", val: "6,200+", icon: <ShieldCheck className="text-blue-500" /> },
            { label: "INDUSTRIAL ASSETS", val: "15,000+", icon: <Box className="text-blue-500" /> },
            { label: "STATE NETWORK", val: "22+", icon: <Globe className="text-blue-500" /> }
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-blue-500/30 pl-6 flex items-center gap-4">
              <div>
                <p className="text-slate-500 text-xs font-black tracking-widest uppercase mb-1">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CORE TRADE CAPABILITIES --- */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Core Capabilities</h2>
              <p className="text-slate-500 leading-relaxed max-w-lg mx-auto md:mx-0">Facilitating governance and efficiency for manufacturers, exporters, and industrial contractors.</p>
            </div>
            <Link to="/about" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition">View Corporate Overview</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <TradeCard
              icon={<Gavel className="text-blue-600" size={32} />}
              title="Industrial e-Auction"
              desc="High-liquidity bidding environment for surplus inventory and heavy textile machinery."
              image="https://images.unsplash.com/photo-1569909115134-a0426936c879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGUtVFJBREUlMjB0ZXh0aWxlJTIwaW5kdXN0cnl8ZW58MHx8MHx8fDA%3D" // Replace with Auction Image
            />
            <TradeCard
              icon={<Award className="text-blue-600" size={32} />}
              title="Verified Procurement"
              desc="Direct access to GST-accredited manufacturers for raw cotton, yarn, and finished fabrics."
              image="https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=" // Replace with Procurement Image
            />
            <TradeCard
              icon={<BarChart3 className="text-blue-600" size={32} />}
              title="Market Intelligence"
              desc="Real-time e-Quotation systems and tender tracking for large-scale contracts."
              image="https://images.unsplash.com/photo-1687089119655-93feea2f02c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlyZWN0JTIwYWNjZXNzJTIwdG8lMjBHU1QtYWNjcmVkaXRlZCUyMG1hbnVmYWN0dXJlcnMlMjBmb3IlMjByYXclMjBjb3R0b24lMkMlMjB5YXJuJTJDJTIwYW5kJTIwZmluaXNoZWQlMjBmYWJyaWNzLnxlbnwwfHwwfHx8MA%3D%3D" // Replace with intelligence/Process Image
            />
          </div>
        </div>
      </section>

      {/* --- 4. CORPORATE HUB: PAN-INDIA INTEGRATION --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1723629607945-65885e021e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGxheWVyJTIwcmVxdWlyZWQlMjBmb3IlMjBzZWFtbGVzcyUyMGNyb3NzLXN0YXRlJTIwdGV4dGlsZSUyMHRyYWRlLnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full grayscale hover:grayscale-0 transition duration-1000 shadow-2xl rounded-sm"
              alt="Textile Fabric Close-up"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-12 hidden md:block rounded-sm">
              <p className="text-white text-5xl font-black">28+</p>
              <p className="text-blue-100 text-[11px] font-bold uppercase tracking-widest mt-1">Years of Integrity</p>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Target className="text-blue-600 mb-2" size={40} />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase leading-none tracking-tighter">
              Integrated <br className="hidden md:block" /> Associate Network
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Headquartered in Hyderabad, Parekh e-Trade operates a Pan-India network of 500+ associate offices. We provide the governance and digital layer required for seamless cross-state textile trade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6 text-sm text-slate-700">
              {[
                { title: "Technical Governance", bio: "24/7 Monitoring of settlements and trade enquiries." },
                { title: "Compliance Management", bio: "ISO-standard security and strict document verification." },
                { title: "Logistics Optimization", bio: "Leveraging associate network for faster movement." },
                { title: "Market Advisory", bio: "Providing trends to help members trade efficiently." },
              ].map((feat, i) => (
                <div key={i} className="flex gap-3 items-start text-left">
                  <ShieldCheck className="text-blue-600 mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-slate-900">{feat.title}</p>
                    <p className="text-slate-500">{feat.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start pt-8">
              <button className="bg-slate-900 text-white px-8 py-4 font-bold hover:bg-slate-800 transition text-xs uppercase tracking-widest flex items-center gap-2">
                EXPLORE INDIA MAP <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. LATEST TEXTILE Circulars SECTION --- */}
      <section className="py-24 bg-slate-100/50">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Stay Updated</p>
            <h3 className="text-4xl font-black uppercase text-slate-900 tracking-tighter">Latest Circulars</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: "15 March 2026", title: "New FY Trade Guidelines Released" },
              { date: "10 March 2026", title: "Upcoming Raw Cotton e-Auction (5000 MT)" },
              { date: "05 March 2026", title: "GST Compliance Update for Sellers" },
            ].map((circ, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200 hover:border-blue-500 transition shadow-sm group">
                <p className="text-xs text-slate-400 font-bold uppercase mb-2">{circ.date}</p>
                <h4 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition">{circ.title}</h4>
                <Link to="/circular" className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Notice <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/circular" className="bg-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition">View All Announcements</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

// Refined TradeCard Component with Images
const TradeCard = ({ icon, title, desc, image }) => (
  <div className="bg-white group overflow-hidden">
    {/* Card Image */}
    <div className="relative h-60 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-blue-600/10 transition"></div>
    </div>
    {/* Card Content */}
    <div className="p-10 md:p-12 space-y-4">
      <div className="mb-8">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-600 transition">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="w-10 h-[2px] bg-slate-300 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
    </div>
  </div>
);

export default Home;