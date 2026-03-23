import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  MapPin,
  Building,
  Phone
} from 'lucide-react';

const VisitAppointment = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-24 px-6  text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: EDITORIAL HEADER - Management Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[4px] bg-blue-700"></span>
              <span className="text-blue-700 font-black  text-xs uppercase">Official Protocol</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light  ">
              Visit <br />
              <span className="font-extrabold text-slate-950">Appointment.</span>
            </h1>
          </div>
          <div className="max-w-xs border-l-4 border-blue-600 pl-8 py-2">
            <p className="text-slate-900 font-bold text-lg  ">
              "We value your time. Prior booking ensures personalized trade consultation."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: THE APPOINTMENT FORM (High Contrast) */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-[3.5rem] p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-12 border-b-2 border-slate-100 pb-6">
              <Calendar size={28} className="text-blue-700" />
              <h3 className="text-2xl font-black text-slate-950 uppercase ">Booking Details</h3>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 uppercase ">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-slate-400" size={20} />
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 pl-12 font-bold text-slate-950 outline-none focus:border-blue-700 focus:bg-white transition-all" placeholder="Enter Name" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 uppercase ">Official Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-slate-400" size={20} />
                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 pl-12 font-bold text-slate-950 outline-none focus:border-blue-700 focus:bg-white transition-all" placeholder="name@company.com" />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 uppercase ">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 text-slate-400" size={20} />
                    <input type="date" className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 pl-12 font-bold text-slate-950 outline-none focus:border-blue-700 focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-slate-900 uppercase ">Available Slot</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-4 text-slate-400" size={20} />
                    <select className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 pl-12 font-bold text-slate-950 outline-none appearance-none cursor-pointer focus:border-blue-700 focus:bg-white transition-all">
                      <option>10:00 AM - 12:00 PM</option>
                      <option>02:00 PM - 04:00 PM</option>
                      <option>04:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[12px] font-black text-slate-900 uppercase ">Purpose of Visit</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                  <textarea className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 pl-12 font-bold text-slate-950 h-32 outline-none focus:border-blue-700 focus:bg-white transition-all" placeholder="Briefly describe your requirements..."></textarea>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-700 hover:bg-slate-950 text-white py-6 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/10 active:scale-95">
                Confirm Appointment <Send size={20} />
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO & GUIDELINES (Dark Theme) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 text-blue-400">Visit Protocol</h3>
                <ul className="space-y-8">
                  {[
                    { icon: <ShieldCheck className="text-blue-500" />, text: "Verified Identity Required" },
                    { icon: <ShieldCheck className="text-blue-500" />, text: "24-Hour Prior Confirmation" },
                    { icon: <ShieldCheck className="text-blue-500" />, text: "Digital Gate-Pass Issuance" },
                    { icon: <ShieldCheck className="text-blue-500" />, text: "Executive Escort Service" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-base font-bold text-slate-300">
                      <div className="mt-1">{item.icon}</div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <Building size={200} className="absolute -bottom-20 -right-20 text-white/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* QUICK CONTACT CARD */}
            <div className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-10 space-y-6 shadow-sm">
              <div className="flex items-start gap-5">
                <MapPin className="text-blue-700 shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-xs uppercase  text-slate-400 mb-2">Location</h4>
                  <p className="text-slate-950 font-bold text-sm ">
                    Parekh Trade Center, Textile Hub, <br />
                    Hyderabad, India - 500081
                  </p>
                </div>
              </div>
              
              <div className="h-[2px] bg-slate-100 w-full"></div>

              <div className="flex items-start gap-5">
                <Phone className="text-blue-700 shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-xs uppercase  text-slate-400 mb-2">Direct Line</h4>
                  <p className="text-slate-950 font-black text-lg">+91 (40) 2345 6789</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisitAppointment;