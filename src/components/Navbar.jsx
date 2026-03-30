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
        { name: 'e-Quotation', path: '/EQuotation' },
        { name: 'e-Auction', path: '/EAuction' },
        { name: 'e-Trade T&C', path: '/terms' },
        { name: 'Tender & Contracts', path: '/tenders' },
        { name: 'Management', path: '/management' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Media', path: '/media' },
        { name: 'Textile Associates', path: '/textile-associates' },
        { name: 'Appointment', path: '/VisitAppointment' },
      ]
    },
    { name: 'Products & Services', path: '/Products' },
    { name: 'Circular', path: '/circular' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
      <nav className="max-w-[98%] mx-auto px-3 md:px-6 h-18 md:h-22 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg md:text-xl shadow-lg border-2 border-blue-700">
            P
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[15px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors whitespace-nowrap tracking-tight">
              PAREKH <span className="text-blue-700">e-TRADE MARKET</span> 
              <span className="text-[13px] md:text-[15px] font-extrabold text-slate-500 ml-1">(TEXTILE)</span>
            </h1>
            <p className="text-[9px] md:text-[10px] font-black text-slate-500 mt-0.5 tracking-wider uppercase">
              Hyderabad, TG
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group py-7">
              <Link
                to={item.path}
                className="text-[11px] xl:text-[13px] font-bold uppercase text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-all duration-300 whitespace-nowrap"
              >
                {item.name} {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {item.dropdown && (
                <div className="absolute top-[90%] left-0 w-64 bg-white border border-slate-100 shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 rounded-lg">
                  <div className="max-h-[70vh] overflow-y-auto">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-[12px] font-bold uppercase text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-2 border-transparent hover:border-blue-600"
                      >
                        {sub.name.startsWith('e-') ? <span className="normal-case">{sub.name}</span> : sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/EnquiryPage"
            className="bg-slate-950 text-white px-5 xl:px-8 py-3.5 text-[11px] xl:text-[12px] font-black uppercase hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg active:scale-95 whitespace-nowrap"
          >
            Enquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-950 hover:bg-slate-50 rounded-full transition-colors" onClick={() => setIsOpen(true)}>
          <Menu size={28} strokeWidth={3} />
        </button>
      </nav>

      {/* --- MOBILE SIDEBAR --- */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">

            {/* Header in Sidebar - COLORS MATCHED TO DESKTOP */}
            <div className="flex justify-between items-center mb-8 border-b-2 border-slate-100 pb-5">
              <div className="flex flex-col overflow-hidden">
                 <span className="text-slate-950 font-black text-[18px] sm:text-[18px] whitespace-nowrap tracking-tighter">
                   PAREKH <span className="text-blue-700">e-Trade MARKET</span>
                 </span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   (TEXTILE)
                 </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="shrink-0 p-2 bg-slate-100 rounded-full text-slate-950 ml-2 shadow-sm">
                <X size={22} strokeWidth={3} />
              </button>
            </div>

            <div className="flex flex-col space-y-1 overflow-y-auto pr-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="border-b border-slate-100">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex justify-between items-center py-4 text-[17px] font-black uppercase text-slate-950"
                      >
                        {item.name} <ChevronDown size={22} strokeWidth={3} className={`transition-transform ${isDropdownOpen ? 'rotate-180 text-blue-700' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 bg-slate-50 rounded-2xl ${isDropdownOpen ? 'max-h-[500px] mb-4 py-2 shadow-inner' : 'max-h-0'}`}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex justify-between items-center px-5 py-4 text-[13px] font-extrabold uppercase text-slate-600 active:text-blue-700"
                          >
                            {sub.name.startsWith('e-') ? <span className="normal-case">{sub.name}</span> : sub.name} <ChevronRight size={16} strokeWidth={3} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-4 text-[17px] font-black uppercase text-slate-950 border-b border-slate-100 active:text-blue-700"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                to="/EnquiryPage"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-blue-700 text-white text-center py-4.5 font-black uppercase text-[13px] rounded-full shadow-xl shadow-blue-200"
              >
                Trade Enquiry
              </Link>
              <p className="text-center text-[10px] font-black text-slate-400 mt-4 tracking-widest uppercase">
                © 2026 Hyderabad, TG
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;