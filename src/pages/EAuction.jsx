import React, { useState } from 'react';
import { 
  Gavel, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  History, 
  AlertCircle,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const EAuction = () => {
  const [currentBid, setCurrentBid] = useState(85000);
  const [userBid, setUserBid] = useState(85500);

  const placeBid = () => {
    if(userBid > currentBid) {
      setCurrentBid(userBid);
      setUserBid(userBid + 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] py-20 px-6  text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION - Management Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">Live Trading</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Premium <span className="font-bold">e-Auction</span> <br />
              <span className="text-slate-600">Portal.</span>
            </h1>
          </div>
          <div className="hidden md:block text-right border-l-2 border-slate-100 pl-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase st mb-1">Auction ID</p>
            <p className="text-lg font-bold text-slate-900">#TX-BATCH-992</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: VISUALS & DETAILS */}
          <div className="lg:col-span-7 space-y-10">
            {/* Main Image Card */}
            <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-video overflow-hidden rounded-[2rem]">
                <img 
                  src="data:image/jpeg;base64,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" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  alt="Auction Item" 
                />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase r text-slate-900">Live Now</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">Industrial Grade Raw Silk (500KG)</h2>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span className="text-xs font-semibold">Surat, IN</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  High-luster, Grade-A raw silk batch. Verified for industrial high-speed weaving. 
                  Sourced from certified automated reeling centers.
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-slate-50 pt-8">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Grade</p>
                    <p className="font-bold text-slate-800">A++ High Gloss</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Moisture</p>
                    <p className="font-bold text-slate-800">8.5% Certified</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Testing</p>
                    <p className="font-bold text-slate-800">Parekh QA Passed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BID HISTORY TABLE */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <History size={20} className="text-blue-600" /> Recent Activity
              </h3>
              <div className="space-y-4">
                {[
                  { user: "Global Fabrics", bid: "85,000", time: "Just now" },
                  { user: "S.V. Silk Mills", bid: "84,500", time: "4m ago" },
                  { user: "Parekh Exports", bid: "84,000", time: "12m ago" }
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-[#fcfcfc] border border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                      <span className="font-bold text-slate-800 text-sm">{log.user}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-slate-900">₹{log.bid}</span>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: BIDDING CONSOLE */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 space-y-8">
              
              {/* MAIN BID CARD */}
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                <div className="text-center mb-10">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Highest Active Bid</p>
                  <div className="flex justify-center items-baseline gap-2">
                    <span className="text-6xl font-bold text-slate-900 tracking-tighter">₹{currentBid.toLocaleString()}</span>
                    <span className="text-slate-400 font-medium">/lot</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Timer Card */}
                  <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center border border-slate-100">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-blue-600" />
                      <span className="text-xs font-bold text-slate-600 uppercase">Ends In</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900">02:14:55</span>
                  </div>

                  {/* Bid Input Section */}
                  <div className="space-y-4">
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-2 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
                      <button onClick={() => setUserBid(userBid - 500)} className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-light hover:bg-white hover:shadow-sm text-slate-400 hover:text-slate-900 transition-all">−</button>
                      <input 
                        type="number" 
                        value={userBid}
                        onChange={(e) => setUserBid(parseInt(e.target.value))}
                        className="flex-1 bg-transparent text-center font-mono font-bold text-xl text-slate-800 outline-none" 
                      />
                      <button onClick={() => setUserBid(userBid + 500)} className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-light hover:bg-white hover:shadow-sm text-slate-400 hover:text-slate-900 transition-all">+</button>
                    </div>

                    <button 
                      onClick={placeBid}
                      className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100"
                    >
                      <Gavel size={18} /> Confirm & Place Bid
                    </button>
                  </div>
                </div>
              </div>

              {/* SECURITY TRUST */}
              <div className="px-6 py-8 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck size={20} className="text-blue-400" />
                    <h4 className="text-sm font-bold uppercase st">Trade Security</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    This auction is protected by Parekh Escrow. All bids are binding under Hyderabad jurisdiction.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase st text-blue-400 hover:text-white transition-colors">
                    Terms of Trade <ArrowUpRight size={14} />
                  </button>
                </div>
                <ShieldCheck size={120} className="absolute -bottom-6 -right-6 text-white/[0.03] group-hover:scale-110 transition-transform duration-700" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EAuction;