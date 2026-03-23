import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 md:px-40 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 max-w-md">
                We’d love to hear from you. Reach out for inquiries, partnerships, or appointments.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Headquarters</p>
                  <p className="text-slate-600 text-sm">Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Call Us</p>
                  <p className="text-slate-600 text-sm">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Support Email</p>
                  <p className="text-slate-600 text-sm">e-trade@parekhtrade.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Calendar className="text-blue-600" />
              Visit with Appointment
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  className="p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Purpose of Visit"
                className="w-full p-3 border border-slate-200 rounded-lg h-24 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 uppercase r shadow-md hover:shadow-lg">
                Book Appointment
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;