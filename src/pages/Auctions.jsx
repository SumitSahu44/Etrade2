import React from 'react';
import { Gavel, Clock, FileText } from 'lucide-react';

const Auctions = () => {
  const auctions = [
    { id: "AUC-2026-001", item: "Raw Cotton Bulk (500 Tons)", price: "₹45,000 / Ton", end: "2 Days left" },
    { id: "TEN-2026-042", item: "Supply of Industrial Spindles", price: "Contract Based", end: "5 Days left" }
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 uppercase ">Active e-Auctions & Tenders</h2>
          <div className="flex gap-2">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse uppercase">Live Now</span>
          </div>
        </div>

        <div className="space-y-4">
          {auctions.map((auc, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-center hover:border-blue-500 transition">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 rounded-full text-blue-600"><Gavel /></div>
                <div>
                  <h3 className="font-black text-lg text-slate-800">{auc.item}</h3>
                  <p className="text-sm text-gray-500 font-mono tracking-tighter uppercase">Ref ID: {auc.id}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-10">
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase font-bold">Base Price / Value</p>
                  <p className="text-xl font-black text-blue-700">{auc.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-400 uppercase font-bold flex items-center justify-end gap-1"><Clock size={12} /> Ending In</p>
                  <p className="font-bold text-slate-700">{auc.end}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-600 transition">BID NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auctions;