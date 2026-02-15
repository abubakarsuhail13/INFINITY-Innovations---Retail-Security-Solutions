
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Headset, Shield, Target } from 'lucide-react';
import { CORE_VALUES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600")' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1.5px] bg-infinity-blue"></div>
              <span className="text-infinity-blue font-black uppercase tracking-[0.4em] text-[10px]">Trusted Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-infinity-navy mb-8 leading-tight tracking-tighter">
              Securing the <br /> <span className="text-infinity-blue">Middle Eastern Retail.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              INFINITY Innovations General Trading LLC is a leading provider of retail security solutions in the UAE. We believe that security should complement the shopping experience, not hinder it.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'EAS Experts', icon: <Shield className="text-infinity-blue" size={20} /> },
                { label: 'Market Leaders', icon: <Globe className="text-infinity-blue" size={20} /> },
                { label: '24/7 Support', icon: <Headset className="text-infinity-red" size={20} /> },
                { label: 'B2B Specialists', icon: <Award className="text-infinity-red" size={20} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex-shrink-0 text-infinity-blue">{item.icon}</div>
                  <span className="font-bold text-infinity-navy uppercase tracking-widest text-[10px]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Security Device" />
                </div>
              </div>
              <div className="pt-12 space-y-6">
                 <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Retail Environment" />
                 </div>
                 <div className="bg-infinity-navy p-8 rounded-[32px] text-white shadow-xl">
                    <Target className="text-infinity-blue mb-4" size={24} />
                    <p className="text-xs font-bold leading-relaxed tracking-wide">Dedicated to high-performance retail protection.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {CORE_VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[40px] border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-infinity-blue transition-all group-hover:text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-black text-infinity-navy mb-4 tracking-tight">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
