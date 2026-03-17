import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';

const SocialWidget = () => {
  return (
    <>
      {/* --- LEFT SIDE: SOCIAL ICONS (Desktop Only) --- */}
      {/* Isko left side rakha hai taaki right side overlap na ho */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col bg-[#020617]/90 backdrop-blur-md p-3 gap-5 rounded-r-2xl border border-white/10 shadow-2xl animate-in slide-in-from-left-5">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-125">
          <Facebook size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-all hover:scale-125">
          <Linkedin size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-all hover:scale-125">
          <Instagram size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-300 transition-all hover:scale-125">
          <Twitter size={20} />
        </a>
      </div>

      {/* --- RIGHT SIDE: WHATSAPP (Bottom Most) --- */}
      {/* Isko bottom-6 rakha hai, Chatbot bottom-24 par hai */}
      <div className="fixed bottom-6 right-6 z-[2000]">
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank"
          rel="noreferrer"
          className="group relative bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center border-b-4 border-green-700"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            className="w-6 h-6 invert" 
            alt="WhatsApp" 
          />
          
          {/* Hover Label */}
          <span className="absolute right-16 bg-white text-[#020617] text-[10px] font-black px-3 py-2 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-slate-100 pointer-events-none uppercase tracking-widest">
            Direct Trade Support
          </span>

          {/* Online Pulse Indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </>
  );
};

export default SocialWidget;