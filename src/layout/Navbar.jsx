import React, { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xl font-extrabold text-slate-800 tracking-tighter">
              PAREKH <span className="text-blue-600 normal-case">e-Trade</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase st">Market (Textile)</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {['Home', 'About Us', 'Services', 'e-Auction', 'Tenders', 'Career'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition">
                {item}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700">
              <PhoneCall size={16} /> Trade Enquiry
            </button>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;