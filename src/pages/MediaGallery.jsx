import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Layers3, 
  Search, 
  ChevronRight,
  Maximize2,
  CalendarDays
} from 'lucide-react';

const MediaGallery = () => {
  const tabs = [
    { id: "all", name: "All Media", icon: <Layers3 size={18} /> },
    { id: "photos", name: "Photos", icon: <ImageIcon size={18} /> },
    { id: "videos", name: "Videos", icon: <Video size={18} /> }
  ];

  const mediaItems = [
    { type: "photos", title: "Global Textile Summit 2025", date: "Oct 15, 2025", img: "https://img.freepik.com/free-vector/vintage-red-floral-pattern-background_53876-99323.jpg" },
    { type: "photos", title: "Automation Unit - Surat", date: "Oct 10, 2025", img: "https://img.freepik.com/free-photo/vibrant-fashion-textile-pattern-collection-display-generative-ai_188544-9090.jpg" },
    { type: "photos", title: "New Silk Batch QA", date: "Oct 05, 2025", img: "https://www.conforna.com/Conforna_files/1(1).webp" },
    { type: "photos", title: "Warehouse Logistics - Hyderabad", date: "Sep 28, 2025", img: "https://img.freepik.com/premium-photo/row-colorful-fabric-rolls-each-with-different-pattern-color_1353625-3787.jpg?w=360" },
    { type: "photos", title: "Sustainable Dyeing Process", date: "Sep 20, 2025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Nc8fAKgfL60XYnqQ4gxOZRqDQzBmHo6uVw&s" },
    { type: "photos", title: "E-Trade Portal Launch", date: "Sep 15, 2025", img: "https://img.freepik.com/premium-photo/samples-textiles-upholstery-closeup-details-multicolor-fabric-texture-samples-samples-d_418821-1605.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] py-24 px-6 text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* EDITORIAL HEADER - Management Style Consistency */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[4px] bg-blue-700"></span>
              <span className="text-blue-700 font-black tracking-[0.4em] text-xs uppercase text-opacity-100">Visual Insights</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tighter text-slate-950">
              Media <br />
              <span className="font-extrabold text-slate-950">Gallery.</span>
            </h1>
          </div>
          
          {/* SEARCH BAR (Tagda Contrast) */}
         
        </div>

        {/* SECTION 2: CATEGORY TABS (Pills) */}
        <div className="flex flex-wrap gap-4 mb-16 border-b-2 border-slate-100 pb-10">
          {tabs.map((tab, i) => (
            <button key={tab.id} className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 active:scale-95 ${i === 0 ? 'bg-slate-950 text-white hover:bg-blue-700 shadow-lg shadow-slate-900/10' : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-950 hover:bg-slate-50'}`}>
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* SECTION 3: MEDIA GRID with TAGDA HOVER EFFECT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {mediaItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              
              {/* IMAGE WRAPPER with HOVER EFFECTS */}
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden mb-6 border-2 border-slate-100 shadow-sm transition-all duration-500 hover:border-blue-700 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 group-hover:blur-[2px]"
                  alt={item.title}
                />
                
                {/* BLUE OVERLAY on HOVER */}
                <div className="absolute inset-0 bg-blue-700/0 group-hover:bg-blue-900/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/20 p-5 rounded-full backdrop-blur-sm border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={32} className="text-white" />
                  </div>
                </div>

                {/* TYPE TAG (Top Left) */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-200 shadow-inner flex items-center gap-2 text-slate-950">
                    <ImageIcon size={14} className="text-blue-700" /> Photo
                  </span>
                </div>
              </div>

              {/* MEDIA DETAILS (Solid Black Text) */}
              <div className="px-3 space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <CalendarDays size={16} className="text-blue-700" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 4: LOAD MORE / ARCHIVE (Glassmorphism Touch) */}
        <div className="mt-20 text-center border-t-2 border-slate-100 pt-20 pb-10">
          <button className="px-12 py-5 bg-white border-4 border-slate-950 text-slate-950 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 hover:bg-slate-950 hover:text-white mx-auto shadow-sm">
            Load More Media <ChevronRight size={20} className="text-blue-700 group-hover:text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MediaGallery;