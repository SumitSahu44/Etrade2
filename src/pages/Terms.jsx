import React from 'react';
import { ShieldAlert, Scale, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4">Official Documentation</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">e-Trade <span className="text-blue-500 italic">T&C</span></h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-medium">Please read these terms carefully before participating in the Parekh e-Trade Market.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 -mt-10">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl border border-slate-100 p-8 md:p-16">

          <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-slate-900">
            <Scale className="text-blue-600" size={32} />
            <h2 className="text-2xl font-black uppercase tracking-tight">Legal Framework & Trade Guidelines</h2>
          </div>

          <div className="space-y-12">

            {/* Clause 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-sm tracking-widest">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm text-[10px]">01</span>
                User Accreditation & KYC
              </div>
              <p className="text-slate-600 leading-relaxed">
                Access to the Buyer and Seller platforms is strictly reserved for verified business entities. All users must upload valid **GST, MSME, Trade License, and CIN** documents. Parekh e-Trade Market (Textile) reserves the right to suspend any account if documentation is found to be fraudulent or expired.
              </p>
            </section>

            {/* Clause 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-sm tracking-widest">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm text-[10px]">02</span>
                e-Auction & Bidding Integrity
              </div>
              <p className="text-slate-600 leading-relaxed">
                Bids placed in the **e-Auction** portal are legally binding contracts. Withdrawal of a bid after the auction has closed is not permitted. Successful bidders must initiate the payment process within 48 hours of auction completion to maintain their credit rating on the platform.
              </p>
            </section>

            {/* Clause 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-sm tracking-widest">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm text-[10px]">03</span>
                Quality & Inspection (Textile Goods)
              </div>
              <p className="text-slate-600 leading-relaxed">
                Parekh e-Trade acts as a digital facilitator. While we verify the credentials of sellers, the **physical quality, count, and grade** of textile raw materials or machineries must be inspected by the buyer upon delivery. We recommend using our authorized associate network for third-party inspection services.
              </p>
            </section>

            {/* Clause 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase text-sm tracking-widest">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm text-[10px]">04</span>
                Transaction Fees & e-Quotation
              </div>
              <p className="text-slate-600 leading-relaxed">
                A nominal service fee of **2%** is applicable on trades successfully closed through the e-Quotation system. This fee covers the cost of digital infrastructure, lead generation, and trade governance provided by the Hyderabad hub.
              </p>
            </section>

            {/* Critical Alert Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 flex gap-4">
              <AlertTriangle className="text-amber-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-amber-900 uppercase text-xs tracking-widest mb-1">Important Disclaimer</h4>
                <p className="text-amber-800 text-sm">
                  Parekh e-Trade Market (Textile) is not liable for indirect or consequential losses resulting from market price fluctuations or logistics delays. Users trade at their own professional discretion.
                </p>
              </div>
            </div>

            {/* Final Acceptance */}
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-xs font-bold text-slate-500 uppercase">Updated: March 2026</span>
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition flex items-center gap-2">
                <FileText size={16} /> Download Full PDF
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;