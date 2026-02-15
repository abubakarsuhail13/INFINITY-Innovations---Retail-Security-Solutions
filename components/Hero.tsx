
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-44 pb-24 overflow-hidden bg-white tech-grid-bg">
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-infinity-blue soft-glow rounded-full"></div>
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-infinity-red soft-glow rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 bg-infinity-blue/10 border border-infinity-blue/20 px-6 py-3 rounded-full mb-12 shadow-sm">
              <Sparkles className="w-4 h-4 text-infinity-blue" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-infinity-blue">The Future of Retail Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-[88px] font-black text-infinity-navy mb-12 leading-[0.9] tracking-tighter">
              Seamless <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-infinity-blue to-infinity-azure">Security.</span> <br />
              Digital Trust.
            </h1>
            
            <p className="text-slate-500 max-w-lg mb-16 text-2xl leading-relaxed font-medium opacity-90">
              Transforming the Middle Eastern retail landscape with invisible EAS protection and high-end interactive display solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <motion.a
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-infinity-navy text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] flex items-center justify-center gap-4"
              >
                Inquire Solutions
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,1)' }}
                href="#solutions"
                className="bg-white/60 backdrop-blur-md border border-slate-200 text-infinity-navy px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all flex items-center justify-center hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]"
              >
                Explore Catalog
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
            className="relative"
          >
            <div className="relative z-10 p-6 bg-white rounded-[72px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] border border-white/60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600673881647-1558866ad131?auto=format&fit=crop&q=80&w=1200" 
                alt="High-End Retail Display" 
                className="w-full h-auto rounded-[52px] transition-transform duration-1000 hover:scale-[1.03]"
              />
              
              {/* Reliability Tag - Precise UI from screenshot */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white p-12 rounded-[48px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-slate-50 max-w-[340px] z-20"
              >
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                       <ShieldCheck className="text-infinity-red" size={28} />
                    </div>
                    <span className="text-[13px] font-black uppercase tracking-[0.4em] text-infinity-navy">RELIABILITY</span>
                 </div>
                 <p className="text-[17px] text-slate-500 font-semibold leading-relaxed">
                   Providing 24/7 technical oversight across major UAE shopping hubs.
                 </p>
              </motion.div>
            </div>
            
            {/* Soft Ambient Visual Ornament */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-infinity-blue/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
