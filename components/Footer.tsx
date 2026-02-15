
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-12 bg-infinity-navy rounded-xl flex items-center justify-center shadow-lg border border-slate-700/50">
                   <svg viewBox="0 0 100 100" className="w-7 h-7">
                     <path d="M50 15 C20 15 20 50 50 50 C80 50 80 85 50 85" stroke="#E11D48" strokeWidth="12" fill="none" />
                     <circle cx="50" cy="50" r="10" fill="white" />
                   </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tighter text-infinity-navy leading-none uppercase">INFINITY</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-infinity-red">Innovations</span>
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4">
              © 2024, INFINITY Innovations General Trading LLC. <br />All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-infinity-navy uppercase tracking-[0.4em] mb-10">Headquarters</h4>
            <div className="space-y-6">
               <p className="text-slate-500 text-sm leading-relaxed font-semibold uppercase tracking-wider">
                  Office 105, A.S.B Tower<br />
                  Opposite Silicon Central Mall<br />
                  Silicon Oasis, Dubai, UAE
               </p>
               <div className="space-y-2">
                 <p className="text-infinity-blue font-black text-sm tracking-wide group cursor-default">
                   Tel: <span className="hover:text-infinity-red transition-colors">+971 4 392 2994</span>
                 </p>
                 <p className="text-infinity-blue font-black text-sm tracking-wide group cursor-default">
                   Mob: <span className="hover:text-infinity-red transition-colors">+971 50 520 4614</span>
                 </p>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-infinity-navy uppercase tracking-[0.4em] mb-10">Ecosystem</h4>
            <ul className="grid grid-cols-1 gap-5">
              {['Smart Solutions', 'Technical Support', 'Trading Hub', 'Partnerships'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-infinity-blue text-xs font-black uppercase tracking-[0.2em] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-infinity-navy uppercase tracking-[0.4em] mb-10">Stay Connected</h4>
            <p className="text-slate-400 text-xs font-medium mb-8 leading-relaxed max-w-[200px]">
              Subscribe for the latest trends in Middle Eastern retail security.
            </p>
            <div className="flex gap-5">
               <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:border-infinity-blue hover:text-infinity-blue transition-all cursor-pointer font-black text-[10px]">FB</a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:border-infinity-blue hover:text-infinity-blue transition-all cursor-pointer font-black text-[10px]">LN</a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:border-infinity-blue hover:text-infinity-blue transition-all cursor-pointer font-black text-[10px]">IG</a>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-10">
               {['Privacy Policy', 'Terms of Service', 'UAE Compliance'].map(item => (
                 <a key={item} href="#" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-infinity-navy transition-colors">{item}</a>
               ))}
            </div>
            
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
               Powered by <a href="https://www.nexaforgetech.com" target="_blank" rel="noopener noreferrer" className="text-infinity-blue hover:underline underline-offset-4 transition-all">Nexaforge Technologies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
