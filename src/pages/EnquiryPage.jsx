import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Building2, MessageSquare, CheckCircle2 } from 'lucide-react';

const EnquiryPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your logic here
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-['Poppins',_sans-serif] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Business <span className="text-blue-500 italic">Enquiry</span>
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Partner with India's authorized textile hub. Fill out the form below and our industrial experts will reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Contact Info & Trust Signals */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <Building2 className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Corporate Office</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Parekh e-Trade Tower, Textile Cluster,<br /> Hyderabad, Telangana - 500001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-slate-400 text-sm">support@parekhetrade.com</p>
                  <p className="text-slate-400 text-sm">sales@parekhetrade.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Direct Line</h3>
                  <p className="text-slate-400 text-sm">+91 (040) 2345-6789</p>
                  <p className="text-slate-400 text-sm">Mon-Sat | 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">GST Verified Network</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Join 6,200+ manufacturers in a transparent, ISO-grade digital supply chain.
              </p>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm backdrop-blur-xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10"></div>
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-4">
                    <Send className="text-blue-500" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase">Message Sent Successfully!</h2>
                  <p className="text-slate-400">Our team will review your enquiry and contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-500 font-bold text-xs uppercase tracking-widest border-b border-blue-500 pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter name"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="GST registered name"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Enquiry Type</label>
                    <select className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                      <option className="bg-slate-950">Bulk Procurement</option>
                      <option className="bg-slate-950">Machinery Auction</option>
                      <option className="bg-slate-950">Seller Onboarding</option>
                      <option className="bg-slate-950">Other Queries</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Message Details</label>
                    <textarea 
                      rows="4" 
                      placeholder="Describe your requirement..."
                      className="w-full bg-slate-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      className="group w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3"
                    >
                      Submit Enquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal reusable Icon for the button
const ArrowRight = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
);

export default EnquiryPage;