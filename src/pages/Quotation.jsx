import React from 'react';
import { FileCheck, Download } from 'lucide-react';

const Quotation = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white border border-slate-200 p-12 shadow-2xl text-center">
        <FileCheck className="mx-auto text-blue-600 mb-6" size={60} />
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4"><span className="normal-case">e-Quotation</span> Portal</h2>
        <p className="text-slate-600 mb-8">Generated quotes for your trade enquiries will appear here after official verification. Log in to your buyer/seller dashboard to see active quotes.</p>
        <button className="bg-[#020617] text-white px-10 py-4 font-bold text-xs uppercase st hover:bg-blue-600 transition">Request New Quote</button>
      </div>
    </div>
  );
};

export default Quotation;