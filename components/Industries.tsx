
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-32 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid-bg opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black text-infinity-navy mb-8 tracking-tighter leading-tight">Industries We Serve</h2>
          <p className="text-slate-500 font-medium text-xl leading-relaxed opacity-80">
            Versatile security solutions for diverse business sectors, ensuring maximum ROI through intelligent loss prevention.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="flex flex-col items-center p-10 bg-white rounded-[40px] text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_70px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 group border border-white"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-[28px] flex items-center justify-center text-infinity-blue mb-8 group-hover:bg-infinity-blue group-hover:text-white transition-all duration-300 shadow-sm">
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {ind.icon}
                </div>
              </div>
              <span className="font-bold text-base tracking-tight text-infinity-navy group-hover:text-infinity-blue transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
