import React from 'react';
import { FileText, Download, Calendar, Tag, Search } from 'lucide-react';

const Tenders = () => {
  const tenders = [
    {
      id: "TND/HYD/2026/012",
      title: "Procurement of High-Grade Spinning Machinery Spares",
      date: "Post Date: 10 March 2026",
      expiry: "Closing: 30 March 2026",
      category: "Industrial Machinery",
      status: "Active"
    },
    {
      id: "TND/SRT/2026/045",
      title: "Bulk Supply Contract for Organic Cotton Yarn (500 MT)",
      date: "Post Date: 12 March 2026",
      expiry: "Closing: 15 April 2026",
      category: "Raw Material",
      status: "Active"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Tenders & <span className="text-blue-600">Contracts</span>
            </h1>
            <p className="text-slate-500 mt-4 font-medium italic">
              Official bidding documents for large-scale textile procurement and infrastructure.
            </p>
          </div>
          {/* <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search Tenders..." className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-none focus:ring-2 focus:ring-blue-600 outline-none uppercase text-xs font-bold" />
          </div> */}
        </div>

        {/* Tender List */}
        <div className="space-y-6">
          {tenders.map((tender, index) => (
            <div key={index} className="group bg-white border-l-8 border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-3 flex-grow">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest">{tender.id}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div> {tender.status}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">{tender.title}</h3>
                  <div className="flex flex-wrap gap-4 text-slate-400 text-xs font-bold uppercase">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {tender.date}</span>
                    <span className="flex items-center gap-1 text-red-500"><Calendar size={14} /> {tender.expiry}</span>
                    <span className="flex items-center gap-1"><Tag size={14} /> {tender.category}</span>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-[#020617] text-white px-8 py-4 font-bold text-xs uppercase hover:bg-blue-600 transition flex items-center justify-center gap-2 tracking-widest">
                  <Download size={16} /> DOWNLOAD RFP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tenders;