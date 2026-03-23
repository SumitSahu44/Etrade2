import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Management = () => {
  const leaders = [
    {
      name: "Mr. S. Parekh",
      role: "Chairman & Managing Director",
      bio: "With over 30 years of expertise, Mr. Parekh has pioneered global textile supply chains, transforming traditional manufacturing into tech-driven ecosystems.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
      linkedin: "#"
    },
    {
      name: "Mrs. Anjali P.",
      role: "Director of Operations",
      bio: "A specialist in industrial automation, Anjali oversees e-trade logistics and ensures seamless operational excellence across international borders.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      linkedin: "#"
    }
  ];

  return (
    <div className="py-24 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase">Leadership</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
              The minds behind <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                our excellence.
              </span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-xs text-sm leading-relaxed border-l-2 border-slate-100 pl-6">
            Our management team brings together decades of experience to redefine the textile industry.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                {/* Image Wrapper */}
                <div className="relative w-full lg:w-56 h-72 shrink-0 overflow-hidden rounded-[2rem]">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Info Content */}
                <div className="flex-1 pr-4 py-2">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mt-1 ">
                        {leader.role}
                      </p>
                    </div>
                    <a 
                      href={leader.linkedin} 
                      className="p-2 bg-slate-50 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  <button className="flex items-center gap-2 text-xs font-bold uppercase st text-slate-400 group-hover:text-slate-900 transition-all">
                    View Portfolio <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Decorative element */}
        <div className="mt-20 text-center">
            <p className="text-slate-400 text-sm">Want to join our leadership team? <span className="text-blue-600 font-bold cursor-pointer hover:underline ml-1">View Careers</span></p>
        </div>

      </div>
    </div>
  );
};

export default Management;