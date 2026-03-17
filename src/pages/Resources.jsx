import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const Resources = () => {
  const circulars = ["New GST Rules for Textile - 2026", "Safety Protocols for Loom Workers", "Trade Fair Invitation"];
  
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Circulars */}
          <section>
            <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-blue-600 inline-block">Circulars</h2>
            <div className="space-y-3">
              {circulars.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer">
                  <span className="flex items-center gap-2 text-sm font-medium"><FileText size={16}/> {c}</span>
                  <button className="text-blue-600 text-xs font-bold uppercase">Download</button>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Feed */}
          <section>
            <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-blue-600 inline-block">Industry Blog</h2>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="h-40 bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img src="https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFicmljfGVufDB8fDB8fHww" className="w-full h-full object-cover group-hover:scale-105 transition" alt="Blog" />
                </div>
                <h4 className="font-bold group-hover:text-blue-600 transition">Future of Sustainable Fabrics in 2026</h4>
                <p className="text-sm text-gray-500 mt-1 flex items-center">Read More <ChevronRight size={14}/></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;