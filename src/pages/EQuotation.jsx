import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Send, 
  Layout, 
  ShieldCheck, 
  ChevronRight,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';

const EQuotation = () => {
  const [items, setItems] = useState([{ id: 1, name: '', qty: '', specs: '' }]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: '', qty: '', specs: '' }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase r rounded-lg">Official Portal</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Request for <span className="text-blue-600">Quotation</span>
            </h1>
            <p className="text-slate-600 mt-2 text-sm">Fill in the details below to generate a formal price estimate.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-600 uppercase st">Security Protocol</p>
              <p className="text-sm font-bold text-slate-800 flex items-center justify-end gap-2">
                256-bit SSL Active
              </p>
            </div>
            <ShieldCheck className="text-blue-600" size={28} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: FORM SECTION */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* CLIENT DETAILS */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <Layout size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold text-slate-800">Company Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    className="w-full bg-white border-2 border-slate-200 rounded-xl p-3.5 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 font-medium"
                    placeholder="e.g. Parekh Textiles Pvt Ltd"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">GST Number</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border-2 border-slate-200 rounded-xl p-3.5 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 font-medium"
                    placeholder="22AAAAA0000A1Z5"
                  />
                </div>
              </div>
            </div>

            {/* DYNAMIC ITEMS SECTION */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Product Requirements</h3>
                <button 
                  onClick={addItem}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-200"
                >
                  <Plus size={16} /> Add Product
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col md:flex-row gap-4 p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all bg-slate-50/50"
                  >
                    <div className="flex-1 space-y-2">
                      <label className="text-[11px] font-bold text-slate-600 uppercase ">Product Name</label>
                      <input type="text" placeholder="e.g. Cotton 40s" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 font-medium outline-none focus:border-blue-500" />
                    </div>

                    <div className="w-full md:w-32 space-y-2">
                      <label className="text-[11px] font-bold text-slate-600 uppercase ">Quantity</label>
                      <input type="number" placeholder="0" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 font-medium outline-none focus:border-blue-500" />
                    </div>

                    <div className="flex-[1.5] space-y-2">
                      <label className="text-[11px] font-bold text-slate-600 uppercase ">Technical Specs</label>
                      <div className="flex gap-2">
                        <input type="text" placeholder="Color, GSM, etc." className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 font-medium outline-none focus:border-blue-500" />
                        {items.length > 1 && (
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY & ACTIONS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-10 space-y-6">
              
              {/* STATUS CARD */}
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl shadow-slate-200">
                <h4 className="text-sm font-bold uppercase st text-blue-400 mb-6">Quote Summary</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm ">Items Count</span>
                    <span className="font-bold text-lg">{items.length} Units</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 text-sm ">Processing Time</span>
                    <span className="text-sm font-bold">24-48 Hours</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-blue-900/50">
                    Submit Request <Send size={18} />
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                    Download Draft <FileText size={18} />
                  </button>
                </div>
              </div>

              {/* HELP CARD */}
              <div className="bg-blue-600 rounded-[2rem] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 size={24} />
                  <h4 className="font-bold">Need Help?</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Our sales team is available 24/7 for bulk order consultations.
                </p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm">
                  Contact Support
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EQuotation;