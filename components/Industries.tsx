
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-28 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full tech-grid-bg opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-infinity-navy mb-6 tracking-tighter leading-tight">Industries We Serve</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed opacity-80">
            Versatile security solutions tailored for diverse sectors, ensuring intelligent loss prevention and maximum asset protection.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center p-8 bg-white rounded-[32px] text-center shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-infinity-blue mb-6 group-hover:bg-infinity-blue group-hover:text-white transition-all">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {ind.icon}
                </div>
              </div>
              <span className="font-bold text-sm tracking-tight text-infinity-navy uppercase">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
