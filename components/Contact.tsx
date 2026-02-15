
import React from 'react';
import { motion } from 'framer-motion';
// Added Shield to the list of imported icons from lucide-react
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Building, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-infinity-navy text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-infinity-red opacity-5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-infinity-accent opacity-5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-20">
            
            <div className="lg:col-span-2">
              <span className="text-infinity-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Project Inquiry</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">Secure Your <br /><span className="text-infinity-red underline decoration-infinity-red/30 underline-offset-8">Business.</span></h2>
              
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-infinity-red/50 transition-all">
                    <Building className="text-infinity-red group-hover:scale-110 transition-all" size={26} />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-[0.2em] text-[11px] mb-2 text-slate-400">Headquarters</p>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">Office 105, A.S.B. Tower, Dubai Silicon Oasis, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-infinity-red/50 transition-all">
                    <Clock className="text-infinity-red group-hover:scale-110 transition-all" size={26} />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-[0.2em] text-[11px] mb-2 text-slate-400">Working Hours</p>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">Mon - Sat: 9:00 AM - 6:00 PM (GST)</p>
                    <p className="text-infinity-red text-[10px] font-black mt-2 uppercase tracking-[0.3em] bg-infinity-red/10 px-3 py-1 rounded-full w-fit">24/7 Tech Support Line</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-infinity-red/50 transition-all">
                    <Phone className="text-infinity-red group-hover:scale-110 transition-all" size={26} />
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-[0.2em] text-[11px] mb-2 text-slate-400">Direct Contact</p>
                    <p className="text-slate-200 text-sm font-bold tracking-wide">+971 4 392 2994</p>
                    <p className="text-slate-200 text-sm font-bold tracking-wide">+971 50 520 4614</p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <a 
                  href="https://wa.me/971505204614" 
                  target="_blank" 
                  className="inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-6 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-emerald-900/40"
                >
                  <MessageCircle size={22} strokeWidth={2.5} />
                  Immediate WhatsApp Support
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white p-12 md:p-20 rounded-[64px] shadow-3xl text-infinity-navy relative">
                <form className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company Representative</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-6 py-5 focus:border-infinity-red/20 focus:bg-white focus:ring-0 transition-all font-bold placeholder:text-slate-300" placeholder="Full Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Business Email</label>
                      <input type="email" className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-6 py-5 focus:border-infinity-red/20 focus:bg-white focus:ring-0 transition-all font-bold placeholder:text-slate-300" placeholder="Work Email Address" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Service Category</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-6 py-5 focus:border-infinity-red/20 focus:bg-white focus:ring-0 transition-all font-bold appearance-none cursor-pointer">
                        <option>EAS Anti-Theft Pedestals</option>
                        <option>Interactive Display Security</option>
                        <option>Enterprise Surveillance</option>
                        <option>3D Hologram Displays</option>
                        <option>Corporate Trading Solutions</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                         <Send size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Requirements Specification</label>
                    <textarea rows={5} className="w-full bg-slate-50 border-2 border-slate-50 rounded-xl px-6 py-5 focus:border-infinity-red/20 focus:bg-white focus:ring-0 transition-all font-bold placeholder:text-slate-300 resize-none" placeholder="Provide details about your retail outlets and security needs..."></textarea>
                  </div>

                  <button className="w-full bg-infinity-red hover:bg-red-700 text-white py-6 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(217,30,30,0.3)] flex items-center justify-center gap-4">
                    Send Inquiry to Expert
                    <Send size={18} strokeWidth={2.5} />
                  </button>
                </form>
                
                {/* Visual Accent */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center opacity-50">
                   <Shield className="text-slate-200" size={40} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
