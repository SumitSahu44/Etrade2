import React from 'react';
import {
  ShoppingBag,
  Upload,
  CheckCircle2,
  Layout,
  ShieldCheck,
  FileText,
  ArrowUpRight,
  Wallet,
  Globe
} from 'lucide-react';

const BuyerPlatform = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6 text-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION - Management Style Consistency */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3px] bg-blue-700"></span>
              <span className="text-blue-700 font-black text-xs uppercase">Procurement Portal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Buyer’s <span className="font-extrabold text-slate-950 italic">Platform.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right border-l-4 border-blue-600 pl-6">
            <p className="text-[11px] font-black text-slate-900 uppercase  mb-1">Official Support</p>
            <p className="text-lg font-bold text-slate-950 italic">e-Trade@parekhtrade.co</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT PANEL: BUYER BENEFITS (Dark Contrast) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-400">
                  <ShoppingBag size={28} /> Buyer Advantage
                </h3>
                <ul className="space-y-6">
                  {[
                    "Verified Direct Manufacturers",
                    "Bulk Price Negotiations",
                    "Quality Assurance Reports",
                    "Integrated Logistics Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-medium text-slate-200">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ShoppingBag size={180} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-blue-700" size={24} />
                <h4 className="font-black text-sm uppercase tracking-wider text-slate-950">Secure Sourcing</h4>
              </div>
              <p className="text-sm text-slate-800 font-bold leading-relaxed">
                "Name of our Authorized Official of our e-Trade Market" ensures every transaction is monitored for compliance.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: COMPREHENSIVE BUYER FORM */}
          <div className="lg:col-span-8">
            <form className="space-y-10">

              {/* SECTION 1: IDENTITY & DETAILS */}
              <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 shadow-sm">
                <div className="flex items-center justify-between mb-10 border-b-2 border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <Layout size={24} className="text-blue-700" />
                    <h3 className="text-xl font-extrabold text-slate-950 uppercase tracking-tight">Buyer Profile</h3>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase  bg-slate-50 px-3 py-1 rounded-lg">Step 01</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Authorized Official Code No.</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 transition-all outline-none font-bold text-slate-950" placeholder="Ex: BUY-001" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Name of the Buyer</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 transition-all font-bold text-slate-950" placeholder="Full Name" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Business Title / Company Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 font-bold text-slate-950" placeholder="Legal Company Name" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Address of Business</label>
                    <textarea className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 font-bold text-slate-950 h-24" placeholder="Full Registered Address"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Mobile No.</label>
                    <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="+91" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Email Id</label>
                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="buyer@domain.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Business Website (URL)</label>
                    <input type="url" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="www.example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Chamber of Textile Membership</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="Membership No. (If any)" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Nature of Business</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950 outline-none appearance-none cursor-pointer">
                      <option>Retailer</option>
                      <option>Wholesaler</option>
                      <option>Manufacturers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Category of Business</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950 outline-none appearance-none cursor-pointer">
                      <option>Proprietorship</option>
                      <option>Partnership</option>
                      <option>LLP</option>
                      <option>Private Limited</option>
                      <option>Ltd.</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2: ITEMS TO BUY (Roll-down Mode) */}
              <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-10 border-b-2 border-slate-100 pb-5">
                  <ShoppingBag size={24} className="text-blue-700" />
                  <h3 className="text-xl font-extrabold text-slate-950">Purchase Requirements</h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Primary Textile Category</label>
                    <select className="w-full bg-slate-950 text-white rounded-2xl p-5 font-bold outline-none cursor-pointer">
                      <option>Textile Raw Materials</option>
                      <option>Textile Finished Products</option>
                      <option>Textile Industrial Machineries</option>
                      <option>Textile other Machineries</option>
                      <option>Textile Spares</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-3 space-y-2">
                      <label className="text-[12px] font-black text-slate-900 uppercase ">Description of Items to Buy</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="Ex: 100% Cotton Yarn 40s Count" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900 uppercase ">Required Qty</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="e.g. 5000 Units" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900 uppercase ">Tentative Rate (₹)</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="Rate / Unit" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900 uppercase  font-extrabold text-blue-700 flex items-center gap-2">
                        <Wallet size={14} /> Total Budget (₹)
                      </label>
                      <input type="text" className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 font-black text-blue-900" placeholder="Max Budget" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: DOCUMENTATION */}
              <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 shadow-sm">
                <label className="text-[12px] font-black text-slate-950 uppercase  mb-6 block underline decoration-blue-500 underline-offset-4">Upload KYC Documents (GST, MSME, Trade License, Labour License, LLP, CIN)</label>
                <div className="border-4 border-dashed border-slate-300 bg-slate-50 rounded-[2.5rem] p-12 text-center group hover:border-blue-700 transition-all cursor-pointer">
                  <Upload className="mx-auto mb-4 text-slate-400 group-hover:text-blue-700 transition-colors" size={48} />
                  <p className="text-xl font-black text-slate-950">Attach Legal Documents</p>
                  <p className="text-sm text-slate-600 font-bold mt-2">PDF, JPG or PNG (Max size: 10MB)</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-6 pb-20">
                <button type="submit" className="flex-[2] bg-blue-700 hover:bg-slate-950 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95">
                  Submit Buyer Request <ArrowUpRight size={20} />
                </button>
                <button type="button" className="flex-1 bg-white border-2 border-slate-950 text-slate-950 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-2">
                  <FileText size={18} /> Preview
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerPlatform;