import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, MessageCircle, Send } from 'lucide-react';

const SocialWidget = () => {
  return (
    <>
      {/* --- LEFT SIDE: PREMIUM SOCIAL BAR --- */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col bg-[#0f172a]/95 backdrop-blur-md py-6 px-3 gap-6 rounded-r-2xl border-y border-r border-white/10 shadow-[20px_0_50px_rgba(0,0,0,0.3)] animate-in slide-in-from-left-5">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-all transform hover:scale-125 hover:-translate-right-1">
          <Facebook size={18} strokeWidth={2.5} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-all transform hover:scale-125">
          <Linkedin size={18} strokeWidth={2.5} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-all transform hover:scale-125">
          <Instagram size={18} strokeWidth={2.5} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-all transform hover:scale-125">
          <Twitter size={18} strokeWidth={2.5} />
        </a>
      </div>

      {/* --- RIGHT SIDE: WHATSAPP TRADE SUPPORT --- */}
      <div className="fixed bottom-6 right-6 z-[2000]">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="group relative bg-[#128c7e] text-white h-14 w-14 rounded-2xl shadow-[0_15px_30px_-5px_rgba(18,140,126,0.4)] hover:bg-[#075e54] transition-all duration-300 flex items-center justify-center border-b-4 border-[#054d44] active:border-b-0 active:translate-y-1"
        >
          {/* Professional Icon Replacement */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-7 h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.04L0 24l6.135-1.61a11.771 11.771 0 005.911 1.586h.005c6.632 0 12.028-5.396 12.032-12.032a11.758 11.758 0 00-3.53-8.506z"/>
          </svg>

          {/* Tooltip Label */}
          <div className="absolute right-20 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
            <div className="bg-[#0f172a] text-white text-[11px] font-bold px-4 py-2 rounded-xl shadow-2xl uppercase tracking-widest border border-white/10 whitespace-nowrap">
              Connect to Trade Desk
            </div>
            {/* Tooltip Arrow */}
            <div className="w-2 h-2 bg-[#0f172a] rotate-45 -ml-1 border-t border-r border-white/10"></div>
          </div>

          {/* Professional Status Dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </a>
      </div>
    </>
  );
};

export default SocialWidget;