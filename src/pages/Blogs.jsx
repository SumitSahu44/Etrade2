import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Search, 
  Tag, 
  ChevronRight,
  TrendingUp,
  BookOpen
} from 'lucide-react';

const Blogs = () => {
  const categories = ["Market Trends", "Technology", "Logistics", "Sustainability", "Raw Materials"];
  
  const posts = [
    {
      title: "The Future of Silk Production in 2026: Automation & AI",
      excerpt: "How automated reeling and AI-driven quality checks are redefining the global textile supply chain...",
      date: "Oct 24, 2025",
      readTime: "6 min read",
      category: "Technology",
      img: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Global Supply Chain Challenges in the Post-Pandemic Era",
      excerpt: "Understanding the shift from traditional logistics to tech-enabled e-trade market solutions...",
      date: "Oct 18, 2025",
      readTime: "8 min read",
      category: "Logistics",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sustainable Dyeing: Reducing the Carbon Footprint",
      excerpt: "Innovations in organic dyes and water-saving techniques that are setting new industry standards...",
      date: "Oct 12, 2025",
      readTime: "5 min read",
      category: "Sustainability",
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] py-24 px-6  text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: EDITORIAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[4px] bg-blue-700"></span>
              <span className="text-blue-700 font-black tracking-[0.4em] text-xs uppercase">Insights & News</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tighter text-slate-950">
              The Textile <br />
              <span className="font-extrabold text-slate-950">Journal.</span>
            </h1>
          </div>
          
          {/* SEARCH BAR (High Contrast) */}
          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              className="w-full bg-white border-b-4 border-slate-950 p-4 font-bold text-slate-950 outline-none focus:border-blue-700 transition-all placeholder:text-slate-300"
              placeholder="Search articles..."
            />
            <Search className="absolute right-4 top-5 text-slate-950 group-hover:text-blue-700 transition-colors" size={24} />
          </div>
        </div>

        {/* SECTION 2: CATEGORY PILLS */}
        <div className="flex flex-wrap gap-4 mb-16 border-b-2 border-slate-100 pb-10">
          <button className="px-8 py-3 bg-slate-950 text-white rounded-full font-bold text-xs uppercase st hover:bg-blue-700 transition-all shadow-lg">
            All Posts
          </button>
          {categories.map((cat, i) => (
            <button key={i} className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-bold text-xs uppercase st hover:border-slate-950 transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* SECTION 3: FEATURED POST (Management Style Card) */}
        <div className="group relative bg-white border-2 border-slate-200 rounded-[3.5rem] p-6 mb-20 transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] hover:border-blue-700">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 h-96 overflow-hidden rounded-[2.5rem] relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Featured"
              />
              <div className="absolute top-6 left-6 bg-blue-700 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase st flex items-center gap-2">
                <TrendingUp size={14} /> Featured Story
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6 pr-10">
              <div className="flex items-center gap-6 text-[11px] font-black text-slate-600 uppercase st">
                <span className="flex items-center gap-2 text-blue-700"><Calendar size={16} /> Oct 28, 2025</span>
                <span className="flex items-center gap-2"><Clock size={16} /> 12 min read</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight group-hover:text-blue-700 transition-colors">
                Redefining the Quality Benchmarks for Export Grade Textile.
              </h2>
              <p className="text-slate-800 text-lg font-medium leading-relaxed opacity-80">
                A deep dive into how international quality standards are shifting towards sustainable and ethically sourced raw materials.
              </p>
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-950 group-hover:gap-5 transition-all">
                Read Full Insight <ArrowUpRight size={20} className="text-blue-700" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 4: BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-700 transition-all shadow-sm">
                <img 
                  src={post.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={post.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[9px] font-black uppercase st border border-slate-200">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="px-2 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase st">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 leading-snug group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-700 text-sm font-bold leading-relaxed opacity-70 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 5: NEWSLETTER (Tagda Contrast) */}
        <div className="mt-32 bg-slate-950 rounded-[4rem] p-16 text-white relative overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <BookOpen size={48} className="mx-auto text-blue-500" />
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Stay ahead of the curve.</h3>
            <p className="text-slate-400 font-bold text-lg">Weekly market analysis and industry shifts, delivered to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="flex-1 bg-white/10 border-2 border-white/20 rounded-2xl p-5 font-bold text-white outline-none focus:border-blue-500 focus:bg-white/15"
              />
              <button className="bg-blue-700 hover:bg-blue-600 px-10 py-5 rounded-2xl font-black text-xs uppercase st transition-all">
                Subscribe
              </button>
            </form>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200" className="w-full h-full object-cover" alt="bg" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;