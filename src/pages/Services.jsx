import React from 'react';
import { Box, Settings, Cpu, Layers } from 'lucide-react';

const Services = () => {
  const categories = [
    { title: "Textile Raw Materials", desc: "Cotton, Yarn, Silk, and Synthetic Fibers sourced globally.", icon: <Layers size={40} /> },
    { title: "Finished Products", desc: "Premium Apparel fabrics, Home textiles, and Industrial fabrics.", icon: <Box size={40} /> },
    { title: "Industrial Machineries", desc: "High-speed Looms, Spinning frames, and Processing units.", icon: <Settings size={40} /> },
    { title: "Textile Spares", desc: "Precision parts for all types of textile machinery.", icon: <Cpu size={40} /> }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 border-l-8 border-blue-600 pl-6">Products & <span className="text-blue-600">Services</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="flex gap-6 p-10 bg-slate-50 border border-slate-100 group hover:bg-slate-900 hover:text-white transition-all duration-500">
              <div className="text-blue-600 group-hover:text-blue-400">{cat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold uppercase mb-2 tracking-tight">{cat.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;