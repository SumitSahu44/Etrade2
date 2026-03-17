import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-black uppercase italic">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex gap-4"><MapPin className="text-blue-600" /> <div><p className="font-bold">Headquarters</p><p className="text-gray-500">Hyderabad, Telangana, India</p></div></div>
            <div className="flex gap-4"><Phone className="text-blue-600" /> <div><p className="font-bold">Call Us</p><p className="text-gray-500">+91-XXXXXXXXXX</p></div></div>
            <div className="flex gap-4"><Mail className="text-blue-600" /> <div><p className="font-bold">Support Email</p><p className="text-gray-500">e-trade@parekhtrade.com</p></div></div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-blue-600" /> Visit with Appointment</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="p-3 border rounded-lg outline-none" />
              <input type="time" className="p-3 border rounded-lg outline-none" />
            </div>
            <textarea placeholder="Purpose of Visit" className="w-full p-3 border rounded-lg h-24 outline-none"></textarea>
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition uppercase tracking-widest">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;