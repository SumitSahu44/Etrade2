import React, { useState } from 'react';
import { ShieldCheck, FileText, Package, Send, ArrowRight } from 'lucide-react';

const BuyerPlatform = () => {
  const textileItems = [
    "Textile Raw Materials",
    "Textile Finished Products",
    "Textile Industrial Machineries",
    "Textile other Machineries",
    "Textile Spares"
  ];

  const businessCategories = ["Proprietorship", "Partnership", "LLP", "Private Limited", "Ltd.", "Other"];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-blue-900 py-16 text-white text-center">
        <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">Buyer's Platform</h1>
        <p className="text-blue-200">Authorized Official Channel for Textile Procurement</p>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

          <form className="p-8 md:p-12 space-y-10">

            {/* 1. Official & Basic Info */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b pb-2">
                <ShieldCheck className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Authorized Official Info</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Name of Authorized Official</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Official Name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Code No.</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Auth Code" required />
                </div>
              </div>
            </section>

            {/* 2. Buyer Details */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b pb-2">
                <FileText className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Buyer Business Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name of the Buyer" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <input type="text" placeholder="Title of the Business" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <div className="md:col-span-2">
                  <textarea placeholder="Address of the Business" className="w-full p-3 border rounded-lg h-24 focus:border-blue-500 outline-none"></textarea>
                </div>
                <input type="tel" placeholder="Mobile No." className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <input type="email" placeholder="Email Id" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <input type="url" placeholder="URL (if any)" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />

                <select className="p-3 border rounded-lg bg-white focus:border-blue-500 outline-none">
                  <option value="">Nature of Business</option>
                  <option>Retailer</option>
                  <option>Wholesaler</option>
                  <option>Manufacturer</option>
                </select>

                <select className="p-3 border rounded-lg bg-white focus:border-blue-500 outline-none">
                  <option value="">Category of Business</option>
                  {businessCategories.map(cat => <option key={cat}>{cat}</option>)}
                </select>
              </div>

              {/* Document Upload Section */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                  Upload Documents <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase">GST, MSME, License, LLP, CIN</span>
                </h4>
                <div className="flex flex-col items-center justify-center py-4 bg-white rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition">
                  <input type="file" multiple className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer text-center">
                    <p className="text-blue-600 font-bold underline">Click to upload files</p>
                    <p className="text-xs text-gray-500">Attach all business registration documents</p>
                  </label>
                </div>
              </div>
            </section>

            {/* 3. Buying Requirements */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b pb-2">
                <Package className="text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Textile Items to Buy</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="p-3 border rounded-lg bg-white font-medium focus:border-blue-500 outline-none border-blue-200">
                  <option value="">Select Item Category (Roll-down)</option>
                  {textileItems.map(item => <option key={item}>{item}</option>)}
                </select>
                <input type="text" placeholder="Membership in Chamber (if any)" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />

                <div className="md:col-span-2">
                  <textarea placeholder="Detailed Description of items to buy" className="w-full p-3 border rounded-lg h-24 focus:border-blue-500 outline-none"></textarea>
                </div>

                <input type="text" placeholder="Required Quantity" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <input type="text" placeholder="Tentative Rate for Buying" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
                <input type="text" placeholder="Tentative Budget for Buying" className="p-3 border rounded-lg focus:border-blue-500 outline-none" />
              </div>
            </section>

            {/* Form Footer Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8">
              <div className="text-sm text-gray-500">
                Email: <span className="font-bold text-blue-600">e-trade@parekhtrade.com</span>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <button type="button" className="flex-1 md:flex-none px-8 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition">
                  PREVIEW
                </button>
                <button type="submit" className="flex-1 md:flex-none px-12 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-xl shadow-blue-200 flex items-center justify-center gap-2 transition transform hover:-translate-y-1">
                  SUBMIT ENQUIRY <Send size={18} />
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerPlatform;