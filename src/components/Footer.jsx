import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold">PAREKH <span className="normal-case">e-Trade</span></h2>
          <p className="text-sm leading-relaxed">
            Leading textile <span className="normal-case">e-Trade</span> market providing a digital platform for buyers and sellers across India. Specializing in raw materials, machineries, and finished products.
          </p>
          <div className="flex gap-4 pt-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" size={20} />
            <Twitter className="hover:text-blue-400 cursor-pointer" size={20} />
            <Linkedin className="hover:text-blue-700 cursor-pointer" size={20} />
            <Instagram className="hover:text-pink-500 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm st">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/products" className="hover:text-white">Product & Services</a></li>
            <li><a href="/career" className="hover:text-white">Career Page</a></li>
            <li><a href="/blog" className="hover:text-white">Our Blog</a></li>
            <li><a href="/terms" className="hover:text-white">e-Trade T&C</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm st">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>HYDERABAD, TG, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+91-XXXXXXXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>e-Trade@parekhtrade.com</span>
            </li>
          </ul>
        </div>

        {/* Google Map Integration Placeholder */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm st">Our Location</h3>
          <div className="h-40 w-full rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-500">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795909280145!3d17.412299801648057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78322b79b0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase st">
        © 2026 PAREKH <span className="normal-case">e-Trade</span> MARKET (TEXTILE). All Browser Support | SEO Friendly
      </div>
    </footer>
  );
};

export default Footer;