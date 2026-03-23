import React from 'react';
import { 
  Upload, 
  CheckCircle2, 
  Layout, 
  ShieldCheck, 
  FileText, 
  Store,
  ArrowUpRight,
  Briefcase
} from 'lucide-react';

const SellerPlatform = () => {
  return (
    // Background thoda sa off-white taaki white cards standout karein
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6  text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION - Same as Management Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3px] bg-blue-700"></span>
              <span className="text-blue-700 font-black  text-xs uppercase">Seller Onboarding</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light leading-tight text-slate-950">
              Seller's <span className="font-extrabold text-slate-950">Platform.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right border-l-4 border-blue-600 pl-6">
            <p className="text-[11px] font-black text-slate-900 uppercase  mb-1">Authorized Official</p>
            <p className="text-lg font-bold text-slate-950 ">e-Trade Market Portal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT SIDE: INFO CARD (Dark Theme for Contrast) */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-6">
              <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase size={28} className="text-blue-500" /> Seller Perks
                </h3>
                <ul className="space-y-6">
                  {[
                    "Zero % Listing Fee Forever",
                    "Direct Pan-India Visibility",
                    "Verified Textile Lead Access",
                    "Escrow Protected Payments"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-base font-medium text-slate-200">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-blue-700" size={24} />
                  <h4 className="font-black text-sm uppercase r text-slate-900">Compliance</h4>
                </div>
                <p className="text-sm text-slate-800 font-medium ">
                  Submit your GST/MSME documents for instant verification. Our team reviews applications within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM (Dark Text & Solid Inputs) */}
          <div className="lg:col-span-8">
            <form className="space-y-8">
              
              {/* BOX 1: BUSINESS IDENTITY */}
              <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-10 border-b-2 border-slate-100 pb-5">
                  <Layout size={24} className="text-blue-700" />
                  <h3 className="text-xl font-extrabold text-slate-950">Business Identity</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Row 1 */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Official Code No.</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 focus:bg-white transition-all outline-none font-bold text-slate-950 placeholder:text-slate-400" placeholder="CODE-000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Seller Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 focus:bg-white transition-all outline-none font-bold text-slate-950" placeholder="Individual Name" />
                  </div>

                  {/* Row 2 */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Business Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 focus:bg-white transition-all outline-none font-bold text-slate-950" placeholder="Legal Entity / Company Name" />
                  </div>

                  {/* Row 3 */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Business Address</label>
                    <textarea className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 focus:bg-white transition-all outline-none font-bold text-slate-950 h-28" placeholder="Complete Street Address"></textarea>
                  </div>

                  {/* Row 4 */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Mobile No.</label>
                    <input type="tel" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 font-bold text-slate-950" placeholder="+91" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 focus:border-blue-700 font-bold text-slate-950" placeholder="business@mail.com" />
                  </div>

                  {/* Row 5 */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Nature of Business</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950 outline-none appearance-none cursor-pointer">
                      <option>Select Nature</option>
                      <option>Retailer</option>
                      <option>Wholesaler</option>
                      <option>Manufacturer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Category</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950 outline-none appearance-none cursor-pointer">
                      <option>Select Category</option>
                      <option>Proprietorship</option>
                      <option>Partnership</option>
                      <option>LLP</option>
                      <option>Private Ltd.</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* BOX 2: PRODUCT CATALOG (Roll-down Mode) */}
              <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-10 border-b-2 border-slate-100 pb-5">
                  <FileText size={24} className="text-blue-700" />
                  <h3 className="text-xl font-extrabold text-slate-950">Catalog Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Primary Textile Item</label>
                    <select className="w-full bg-slate-950 text-white rounded-2xl p-4 font-bold outline-none cursor-pointer">
                      <option>Textile Raw Materials</option>
                      <option>Textile Finished Products</option>
                      <option>Textile Machineries</option>
                      <option>Textile Spares</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900 uppercase ">Expected Selling Rate (₹)</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950" placeholder="Rate per unit" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 uppercase ">Description of Items</label>
                  <textarea className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 font-bold text-slate-950 h-24" placeholder="Briefly describe your products..."></textarea>
                </div>
              </div>

              {/* BOX 3: DOCUMENTATION */}
              <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
                <label className="text-[12px] font-black text-slate-950 uppercase  mb-6 block">Kyc Documentation (GST, MSME, LLP, Trade License)</label>
                <div className="border-4 border-dashed border-slate-200 bg-slate-50 rounded-[2rem] p-12 text-center group hover:border-blue-700 transition-all cursor-pointer">
                  <Upload className="mx-auto mb-4 text-slate-400 group-hover:text-blue-700 transition-colors" size={48} />
                  <p className="text-lg font-extrabold text-slate-900">Upload Documents</p>
                  <p className="text-sm text-slate-600 font-bold mt-2 tracking-tight">Click to browse or drag and drop files here</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button type="submit" className="flex-[2] bg-blue-700 hover:bg-slate-950 text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95">
                  Submit Application <ArrowUpRight size={20} />
                </button>
                <button type="button" className="flex-1 bg-white border-2 border-slate-950 text-slate-950 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-950 hover:text-white transition-all">
                  Preview
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPlatform;