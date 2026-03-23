import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Users, 
  Zap, 
  ShieldCheck,
  Send,
  FileText,
  Award
} from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "Senior Textile Technologist",
      location: "Surat, Gujarat",
      type: "Full-Time",
      category: "Engineering",
      salary: "Competitive"
    },
    {
      title: "Global Supply Chain Lead",
      location: "Hyderabad, Telangana",
      type: "Full-Time",
      category: "Operations",
      salary: "Industry Standard"
    },
    {
      title: "Full Stack Developer (E-Trade)",
      location: "Remote / Mumbai",
      type: "Full-Time",
      category: "Technology",
      salary: "Top Tier"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-24 px-6  text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: HERO HEADER (Management Style) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[4px] bg-blue-700"></span>
              <span className="text-blue-700 font-black tracking-[0.4em] text-xs uppercase">Career Portal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light  text-slate-950 ">
              Join the <br />
              <span className="font-extrabold">Revolution.</span>
            </h1>
          </div>
          <div className="max-w-xs border-l-4 border-slate-950 pl-8 py-2">
            <p className="text-slate-900 font-bold text-lg  ">
              "We don't just weave fabric; we weave the future of global trade."
            </p>
          </div>
        </div>

        {/* SECTION 2: MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: OPEN POSITIONS LIST */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-black text-slate-950 ">Open Positions</h3>
              <span className="bg-slate-950 text-white px-4 py-1 rounded-full text-xs font-bold uppercase ">
                {jobs.length} Active Roles
              </span>
            </div>
            
            <div className="space-y-6">
              {jobs.map((job, i) => (
                <div 
                  key={i} 
                  className="group relative bg-white border-2 border-slate-200 rounded-[3rem] p-10 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-blue-700 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <span className="text-[10px] font-black uppercase  text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                          {job.category}
                        </span>
                        <span className="text-[10px] font-black uppercase  text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                          {job.salary}
                        </span>
                      </div>
                      <h4 className="text-3xl font-extrabold text-slate-950 group-hover:text-blue-700 transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex gap-8 text-slate-900 font-bold text-sm">
                        <span className="flex items-center gap-2"><MapPin size={18} className="text-blue-700" /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={18} className="text-blue-700" /> {job.type}</span>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-[1.5rem] group-hover:bg-blue-700 group-hover:text-white transition-all shadow-inner">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: STICKY APPLICATION FORM (Tagda Contrast) */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 space-y-8">
              <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-2 text-white">Quick Apply</h3>
                  <p className="text-slate-400 font-bold text-sm mb-10 uppercase ">Don't see a fit? Drop your CV.</p>
                  
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-4 font-bold text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-white/20" placeholder="John Parekh" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-4 font-bold text-white outline-none focus:border-blue-500 transition-all placeholder:text-white/20" placeholder="john@company.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em]">Upload Resume (PDF)</label>
                      <div className="group border-2 border-dashed border-white/20 rounded-2xl p-8 bg-white/5 text-center hover:border-blue-500 hover:bg-white/10 transition-all cursor-pointer">
                        <FileText className="mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform" size={32} />
                        <span className="text-xs font-black text-white uppercase ">Select CV File</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
                      Send Application <Send size={20} />
                    </button>
                  </form>
                </div>
                <Users size={200} className="absolute -bottom-20 -right-20 text-white/[0.03] rotate-12" />
              </div>

              {/* WHY US MINI CARD */}
              <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-8 flex items-center gap-6 shadow-sm">
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <Award className="text-blue-700" size={32} />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 text-sm uppercase ">Industry Leader</h4>
                  <p className="text-slate-600 text-xs font-bold mt-1">Voted best textile tech employer 2024-25.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 3: PERKS (Horizontal Scroll/Grid) */}
        <div className="mt-32 pt-20 border-t-2 border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-blue-700" />, title: "Growth Engine", desc: "Structured mentorship from global industry leaders and textile pioneers." },
              { icon: <Users className="text-blue-700" />, title: "Inclusive Culture", desc: "A diverse workforce representing 12+ regions across the textile belt." },
              { icon: <ShieldCheck className="text-blue-700" />, title: "Secure Future", desc: "Comprehensive insurance, ESOP options, and performance-based bonuses." }
            ].map((perk, i) => (
              <div key={i} className="group p-2">
                <div className="mb-6 p-4 bg-white border-2 border-slate-100 w-fit rounded-2xl shadow-sm group-hover:bg-blue-700 group-hover:text-white transition-all duration-500">
                  {perk.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-4">{perk.title}</h4>
                <p className="text-slate-800 text-sm font-bold  opacity-80">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;