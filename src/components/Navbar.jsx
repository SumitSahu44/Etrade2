import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Trade Solutions',
      path: '#',
      dropdown: [
        { name: 'Buyer Platform', path: '/buyer' },
        { name: 'Seller Platform', path: '/seller' },
        { name: 'e-Auction Portal', path: '/auction' },
        { name: 'Tender & Contracts', path: '/tenders' },
        { name: 'Management', path: '/management' },  
      ]
    },
    { name: 'Products & Solutions', path: '/Products' },
    { name: 'Circular', path: '/circular' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm font-['Poppins',_sans-serif]">
      <nav className="container mx-auto px-5 md:px-12 h-18 md:h-22 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex flex-col group">
          <span className="text-xl md:text-[26px] font-bold text-slate-900 tracking-tighter uppercase leading-tight">
            PAREKH <span className="text-blue-600 transition-colors duration-300">e-TRADE</span>
          </span>
          <span className="text-[9px] md:text-[11px] font-medium text-slate-400 uppercase tracking-[0.15em] mt-0.5">
            Textile Industry Hub
          </span>
        </Link>

        {/* Desktop Menu - Increased Font Size by 2px */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group py-7">
              <Link
                to={item.path}
                className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 flex items-center gap-1.5 transition-all duration-300"
              >
                {item.name} {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Mega Dropdown */}
              {item.dropdown && (
                <div className="absolute top-[100%] left-0 w-60 bg-white border border-slate-100 shadow-2xl py-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 rounded-sm">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-7 py-3.5 text-[11px] font-bold uppercase text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/enquiry"
            className="bg-[#020617] text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 rounded-sm shadow-md active:scale-95"
          >
            Enquiry
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-full transition" onClick={() => setIsOpen(true)}>
          <Menu size={30} />
        </button>
      </nav>

      {/* --- MOBILE SIDEBAR --- */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full overflow-y-auto">

            {/* Header */}
            <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-2.5 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200 transition">
                <X size={22} />
              </button>
            </div>

            {/* Menu Links - Increased Size */}
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="border-b border-slate-50">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex justify-between items-center py-4 text-[19px] font-bold uppercase tracking-tighter text-slate-900"
                      >
                        {item.name} <ChevronDown size={22} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 bg-slate-50/50 rounded-lg ${isDropdownOpen ? 'max-h-80 mb-4 py-2' : 'max-h-0'}`}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex justify-between items-center px-5 py-4 text-[13px] font-bold uppercase text-slate-600 hover:text-blue-600 transition"
                          >
                            {sub.name} <ChevronRight size={16} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-4 text-[19px] font-bold uppercase tracking-tighter text-slate-900 border-b border-slate-50 hover:text-blue-600 transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Action */}
            <div className="mt-auto pt-12">
              <Link
                to="/enquiry"
                className="block w-full bg-blue-600 text-white text-center py-5 font-bold uppercase text-[13px] tracking-widest shadow-xl shadow-blue-100 rounded-sm"
              >
                Trade Enquiry
              </Link>
              <div className="mt-8 text-center space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Official Support</p>
                <p className="text-[14px] font-semibold text-slate-800 tracking-tight italic border-b border-blue-600 inline-block">
                  e-trade@parekhtrade.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;