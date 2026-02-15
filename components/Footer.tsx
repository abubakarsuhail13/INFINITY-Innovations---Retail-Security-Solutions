
import React from 'react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-infinity-navy rounded-lg flex items-center justify-center shadow-lg border border-slate-700/50">
                   <svg viewBox="0 0 100 100" className="w-6 h-6">
                     <path d="M50 15 C20 15 20 50 50 50 C80 50 80 85 50 85" stroke="#E11D48" strokeWidth="12" fill="none" />
                     <circle cx="50" cy="50" r="10" fill="white" />
                   </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tighter text-infinity-navy leading-none uppercase">INFINITY</span>
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-infinity-red">Innovations</span>
                </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-medium mb-4">
              © 2024, INFINITY Innovations General Trading LLC. <br />Premier Retail Security Provider.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-infinity-navy uppercase tracking-[0.4em] mb-8">Headquarters</h4>
            <div className="space-y-4">
               <p className="text-slate-500 text-xs leading-relaxed font-semibold uppercase tracking-wider">
                  Innovation Tower, Floor 12<br />
                  Business Bay District<br />
                  Dubai, UAE
               </p>
               <div className="space-y-1">
                 <p className="text-infinity-blue font-black text-xs tracking-wide">
                   Tel: +971 4 000 0000
                 </p>
                 <p className="text-infinity-blue font-black text-xs tracking-wide">
                   Mob: +971 50 000 0000
                 </p>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-infinity-navy uppercase tracking-[0.4em] mb-8">Quick Navigation</h4>
            <ul className="grid grid-cols-1 gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-infinity-blue text-[10px] font-black uppercase tracking-[0.2em] transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-infinity-navy uppercase tracking-[0.4em] mb-8">Stay Connected</h4>
            <p className="text-slate-400 text-[10px] font-medium mb-6 leading-relaxed max-w-[200px]">
              Subscribe for regional trends in Middle Eastern retail security solutions.
            </p>
            <div className="flex gap-4">
               {['FB', 'LN', 'IG'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:border-infinity-blue hover:text-infinity-blue transition-all cursor-pointer font-black text-[9px]">{social}</a>
               ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
               {['Privacy Policy', 'Terms of Service', 'UAE Compliance'].map(item => (
                 <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-infinity-navy transition-colors">{item}</a>
               ))}
            </div>
            
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
               Secured by <span className="text-infinity-navy">INFINITY Tech</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
