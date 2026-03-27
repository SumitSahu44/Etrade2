import React from 'react';
import { ShieldCheck, Scale, AlertTriangle, Lock, ArrowRight } from 'lucide-react';

const TermsAndConditions = () => {
  const policies = [
    {
      id: "01",
      title: "User Eligibility & Registration",
      content: "Users must be 18 years or older and provide valid legal documentation for KYC. You are responsible for maintaining the security of your trading credentials. Any unauthorized access must be reported to the Regulatory Board immediately.",
      icon: <ShieldCheck size={24} className="text-blue-600" />
    },
    {
      id: "02",
      title: "Market Risks & Trading Disclosure",
      content: "Trading involves significant risk. e-Trade and its associates are not liable for market-induced losses. Past performance is not indicative of future results. Members are advised to trade within their financial capacity.",
      icon: <AlertTriangle size={24} className="text-blue-600" />
    },
    {
      id: "03",
      title: "Transaction & Commission Fees",
      content: "All trades are subject to GST and platform service charges as per the latest Circular (Ref: CIR/2026/05). Fees are non-refundable once a trade is executed on the e-Auction portal.",
      icon: <Scale size={24} className="text-blue-600" />
    },
    {
      id: "04",
      title: "Data Privacy & Security",
      content: "Your trade data is encrypted under the 2026 Security Protocol. We do not share member information with third-party aggregators without explicit digital consent as per Textile Export Regulations.",
      icon: <Lock size={24} className="text-blue-600" />
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-white font-sans selection:bg-blue-100">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header Section - Circular Theme Match */}
        <div className="mb-16 border-b-2 border-slate-900 pb-8">
          <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Terms <span className="text-blue-600">& Conditions</span>
          </h2>
          <p className="text-slate-600 mt-2 font-bold uppercase text-xs tracking-[0.2em]">
            Parekh <span className="normal-case">e-Trade</span> Legal & Regulatory Framework
          </p>
        </div>

        {/* Top Notice Bar */}
        <div className="bg-slate-900 text-white p-5 flex items-start md:items-center gap-4 mb-12">
          <div className="bg-blue-600 p-1">
            <ShieldCheck size={18} className="text-white" />
          </div>
          <p className="text-[11px] font-black uppercase tracking-wider leading-relaxed">
            By accessing the portal, you agree to the FY 2026-27 updated guidelines. 
            Last Revised: <span className="text-blue-400">March 27, 2026</span>
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid gap-12">
          {policies.map((policy) => (
            <div key={policy.id} className="group border-l-4 border-slate-100 hover:border-blue-600 transition-all pl-8 py-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-slate-300 font-black text-3xl tracking-tighter group-hover:text-slate-900 transition-colors">
                  {policy.id}
                </span>
                <div className="h-[2px] w-8 bg-blue-600"></div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  {policy.title}
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base max-w-3xl">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="font-black text-slate-900 uppercase text-sm mb-1">Have Legal Queries?</h4>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Contact: compliance@parekhetrade.in</p>
          </div>
          
          <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-colors group">
            Download Full PDF <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;