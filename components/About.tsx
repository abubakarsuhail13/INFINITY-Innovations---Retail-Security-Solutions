
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Headset, Shield, Target } from 'lucide-react';
import { CORE_VALUES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-40 overflow-hidden bg-white">
      {/* Background Parallax Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none parallax-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600")' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-infinity-blue"></div>
              <span className="text-infinity-blue font-black uppercase tracking-[0.4em] text-[10px]">Trusted Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-infinity-navy mb-10 leading-tight tracking-tighter">
              Securing the <br /> <span className="text-infinity-blue">Digital Storefront.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12 opacity-80">
              INFINITY Innovations General Trading LLC is built on the philosophy that security should be invisible but impenetrable. We empower retailers to focus on sales while we handle the safety of their high-value assets.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { label: 'EAS Experts', icon: <Shield className="text-infinity-blue" />, color: 'bg-blue-50' },
                { label: 'Global Sourcing', icon: <Globe className="text-infinity-blue" />, color: 'bg-blue-50' },
                { label: 'Pro Support', icon: <Headset className="text-infinity-red" />, color: 'bg-red-50' },
                { label: 'Quality First', icon: <Award className="text-infinity-red" />, color: 'bg-red-50' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-2 transition-all">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-infinity-navy uppercase tracking-widest text-[11px]">{item.label}</span>
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
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-[10px] border-white glass-panel">
                   <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Security Device" />
                </div>
                <div className="bg-infinity-blue/10 backdrop-blur-md p-10 rounded-[48px] border border-infinity-blue/20">
                    <p className="text-3xl font-black text-infinity-blue mb-1">99%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-infinity-navy opacity-60">Accuracy Rate</p>
                </div>
              </div>
              <div className="pt-20 space-y-6">
                 <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-[10px] border-white glass-panel">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Retail Safety" />
                 </div>
                 <div className="bg-infinity-navy p-10 rounded-[48px] text-white shadow-2xl">
                    <Target className="text-infinity-blue mb-4" size={32} />
                    <p className="text-sm font-bold leading-relaxed">Dedicated to sustainable retail growth.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Improved Core Values with Softer Styling */}
        <div className="grid md:grid-cols-3 gap-12">
          {CORE_VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-12 rounded-[56px] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-infinity-blue transition-all">
                <div className="group-hover:text-white transition-all">
                   {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-infinity-navy mb-6 tracking-tight">{value.title}</h3>
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
