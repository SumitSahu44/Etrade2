import React from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const SellerPlatform = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Panel: Info */}
          <div className="md:w-1/3 bg-blue-900 p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Join our Seller Network</h2>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3"><CheckCircle size={18} /> 0% Listing Fee</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} /> Pan-India Visibility</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} /> Verified Lead Generation</li>
            </ul>
          </div>

          {/* Right Panel: Form */}
          <div className="md:w-2/3 p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Seller Registration</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Authorized Official Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="text" placeholder="Seller Business Name" className="p-3 border rounded-lg" />
              <input type="email" placeholder="Business Email" className="p-3 border rounded-lg" />
              <input type="tel" placeholder="Mobile Number" className="p-3 border rounded-lg" />
              
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Nature of Business</label>
                <div className="flex gap-4">
                  {['Retailer', 'Wholesaler', 'Manufacturer'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="nature" className="accent-blue-600" /> {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 text-center">
                <Upload className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm font-medium">Upload GST / MSME / Trade License</p>
                <input type="file" className="mt-2 text-xs" />
              </div>

              <button className="md:col-span-2 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-1">
                Submit Seller Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPlatform;