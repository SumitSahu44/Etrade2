import React from 'react';
import { FileText, ChevronRight, Info } from 'lucide-react';

const Circular = () => {
  const notifications = [
    { title: "Revision of Trade Commissions for e-Auction (FY 2026-27)", date: "March 15, 2026", ref: "CIR/2026/05" },
    { title: "Mandatory GST Verification for New Seller Accreditation", date: "March 12, 2026", ref: "CIR/2026/04" },
    { title: "Update on Textile Export Regulations - Hyderabad Hub", date: "March 05, 2026", ref: "CIR/2026/03" },
    { title: "Safety Protocol Guidelines for Industrial Loom Units", date: "Feb 28, 2026", ref: "CIR/2026/02" }
  ];

  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 border-b-2 border-slate-900 pb-8">
          <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Official <span className="text-blue-600">Circulars</span></h2>
          <p className="text-slate-500 mt-2 font-bold uppercase text-xs tracking-[0.2em]">Parekh e-Trade Regulatory Board Notifications</p>
        </div>

        <div className="bg-slate-900 text-white p-4 flex items-center gap-3 mb-8">
          <Info size={20} className="text-blue-400" />
          <p className="text-[11px] font-bold uppercase tracking-widest">Members are advised to download and review the latest FY 2026-27 trade guidelines.</p>
        </div>

        <div className="divide-y divide-slate-100 border-b border-slate-100">
          {notifications.map((n, i) => (
            <div key={i} className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-slate-50 transition px-4">
              <div className="flex gap-6 items-center">
                <div className="text-slate-300 font-black text-2xl tracking-tighter group-hover:text-blue-600">0{i + 1}</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition leading-tight mb-1">{n.title}</h4>
                  <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Ref: {n.ref}</span>
                    <span>Date: {n.date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                View Document <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-50 border-t-4 border-slate-900 text-center">
          <h4 className="text-xl font-bold uppercase mb-4">Subscribe to Notifications</h4>
          <p className="text-sm text-slate-500 mb-6">Get all official textile circulars directly in your business email.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Business Email" className="flex-grow p-4 border border-slate-200 outline-none focus:border-blue-600" />
            <button className="bg-slate-900 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circular;