
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl shadow-slate-900/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
           <div className="w-12 h-12 bg-infinity-navy rounded-xl flex items-center justify-center shadow-lg border border-slate-700/50">
              <svg viewBox="0 0 100 100" className="w-7 h-7">
                <path d="M50 15 C20 15 20 50 50 50 C80 50 80 85 50 85" stroke="#D91E1E" strokeWidth="12" fill="none" />
                <circle cx="50" cy="50" r="10" fill="white" />
              </svg>
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-black tracking-tighter text-infinity-navy leading-none">INFINITY</span>
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-infinity-red">Innovations</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-700 hover:text-infinity-red transition-all"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-infinity-navy text-white px-8 py-3 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] hover:bg-infinity-red transition-all shadow-lg hover:shadow-infinity-red/20"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-infinity-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-white z-[60] flex flex-col p-10 space-y-8 md:hidden">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-black text-infinity-navy">INFINITY</span>
            <button onClick={() => setIsOpen(false)}><X size={32} /></button>
          </div>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-3xl font-black uppercase tracking-tight text-infinity-navy hover:text-infinity-red" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="pt-10">
             <a href="#contact" className="block text-center bg-infinity-red text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-xl">Contact Expert</a>
          </div>
        </div>
      )}
    </nav>
  );
};
