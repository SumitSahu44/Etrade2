import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const TextileAssociates = () => {
  const regions = [
    { city: "Surat", hub: "Silk & Synthetic Hub", partners: "45+ Units" },
    { city: "Hyderabad", hub: "Operations & Logistics", partners: "HQ Center" },
    { city: "Coimbatore", hub: "Machinery & Spares", partners: "32+ Units" },
    { city: "Panipat", hub: "Handloom & Finished", partners: "28+ Units" }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] py-24 px-6 text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION - Management Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[4px] bg-blue-700"></span>
              <span className="text-blue-700 font-black text-xs uppercase">Network Strength</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[1.1] ">
              Our India <br />
              <span className="font-extrabold text-slate-950">Network.</span>
            </h1>
          </div>
          
          {/* STATS BADGE (Dark Contrast) */}
          <div className="bg-slate-950 text-white p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-black text-blue-500">120+</p>
              <p className="text-[10px] uppercase font-black ">Associates</p>
            </div>
            <div className="w-[1px] h-12 bg-white/20"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-white">12</p>
              <p className="text-[10px] uppercase font-black ">States</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: ACTUAL MAP IMAGE */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white border-2 border-slate-200 rounded-[4rem] p-4 aspect-square flex items-center justify-center overflow-hidden shadow-inner group relative">
              
              {/* --- YOUR MAP IMAGE START --- */}
              <img 
                src="/map (2).png" 
                alt="India Textile Network Map" 
                className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              />
              {/* --- YOUR MAP IMAGE END --- */}
              
              {/* Floating Pulse Indicators to make it look "Live" */}
              <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-blue-600 rounded-full animate-ping delay-300"></div>

              {/* Text Overlay for Premium Feel */}
              <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-2xl shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase  mb-1">Interactive View</p>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-700" />
                  <span className="text-sm font-bold text-slate-950">Live Trading Hubs</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ASSOCIATE HUBS LIST */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-slate-950 mb-8 border-b-4 border-slate-950 pb-4 inline-block ">Regional Hubs</h3>
            
            <div className="space-y-4">
              {regions.map((region, i) => (
                <div key={i} className="group bg-white border-2 border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-700 hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="text-blue-700" size={20} />
                        <h4 className="text-2xl font-black text-slate-950 ">{region.city}</h4>
                      </div>
                      <p className="text-slate-700 font-bold text-sm ">{region.hub}</p>
                      <span className="text-blue-700 font-black text-[10px] uppercase  bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 block w-fit">
                        {region.partners}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-slate-950 group-hover:text-white transition-all shadow-inner">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TRUST BANNER (Blue High-Contrast) */}
            <div className="mt-12 bg-blue-700 rounded-[2.5rem] p-8 text-white flex items-center gap-6 shadow-xl shadow-blue-900/10">
               <ShieldCheck size={48} className="shrink-0 text-white" />
               <div>
                  <h4 className="font-black text-sm uppercase ">Verified Partners</h4>
                  <p className="text-blue-50 text-xs font-medium mt-1 leading-relaxed opacity-90">
                    All India associates are Parekh Quality Certified with 100% digital trade transparency.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TextileAssociates;