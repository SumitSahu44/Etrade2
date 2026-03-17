import React from 'react';

const Gallery = () => {
  const media = [
    { title: "Spinning Unit", url: "https://images.unsplash.com/photo-1558444479-c84851727d21?q=80", tag: "Machinery" },
    { title: "Raw Cotton Stock", url: "https://images.unsplash.com/photo-1524292332606-231283251a2c?q=80", tag: "Raw Material" },
    { title: "Finished Fabric", url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", tag: "Products" },
    { title: "Industrial Loom", url: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80", tag: "Machinery" },
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Media <span className="text-blue-600">Gallery</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {media.map((item, i) => (
            <div key={i} className="group relative overflow-hidden bg-slate-100 aspect-square border border-slate-200">
              <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{item.tag}</span>
                <h4 className="text-white font-bold uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;