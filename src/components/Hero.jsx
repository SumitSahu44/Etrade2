import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1610643073583-332a16a0968a?q=80&w=2000&auto=format&fit=crop",
      title: "Parekh e-Trade",
      highlight: "Market",
      subtitle: "India's Authorized Textile Hub",
      desc: "Digitizing the global supply chain with ISO-grade transparency for large-scale procurement and industrial auctions."
    },
    {
      image: "https://media.istockphoto.com/id/2263119638/photo/magenta-textiles-hanging-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=zeQJe-wnkQDr4KIJ93jazY-E1K89ZxOV_ldCfZQSDBM=",
      title: "Industrial",
      highlight: "e-Auctions",
      subtitle: "Machinery & Surplus",
      desc: "Transparent digital bidding environment for spinning machinery spares and surplus industrial inventory."
    },
    {
      image: "https://images.unsplash.com/photo-1580250569064-b2ac463aa820?q=80&w=2000&auto=format&fit=crop",
      title: "Verified",
      highlight: "Partners",
      subtitle: "Trust. Governance. Scale.",
      desc: "Connecting 6,200+ GST-accredited manufacturers across Hyderabad and Pan-India textile clusters."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden bg-slate-950 isolate font-['Poppins',_sans-serif]">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Main Background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Subtle Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent z-10"></div>

          {/* Content Wrapper */}
          <div className="relative z-20 container mx-auto h-full px-6 md:px-12 flex items-center">
            <div className="max-w-3xl space-y-6 md:space-y-8">

              {/* Minimal Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-3 py-1.5 rounded-sm backdrop-blur-md">
                <ShieldCheck size={14} className="text-blue-500" />
                <span className="text-blue-500 font-semibold uppercase tracking-[0.2em] text-[10px]">
                  {slide.subtitle}
                </span>
              </div>

              {/* Poppins Clean Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase leading-none">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-6xl font-medium text-blue-500 italic tracking-tight">
                  {slide.highlight}
                </h2>
              </div>

              {/* Soft Body Text */}
              <p className="text-slate-300 text-base md:text-lg font-normal max-w-xl leading-relaxed border-l-2 border-blue-500/40 pl-6">
                {slide.desc}
              </p>

              {/* Professional Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/buyer" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all text-center rounded-sm flex items-center justify-center gap-2">
                  Buyer Platform <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/seller" className="backdrop-blur-md bg-white/5 border border-white/20 text-white hover:bg-white/10 px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all text-center rounded-sm">
                  Seller Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 z-30">
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="p-3 bg-white/5 hover:bg-blue-600 text-white backdrop-blur-md transition-all border border-white/10 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
          className="p-3 bg-white/5 hover:bg-blue-600 text-white backdrop-blur-md transition-all border border-white/10 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </section>
  );
};

export default Hero;