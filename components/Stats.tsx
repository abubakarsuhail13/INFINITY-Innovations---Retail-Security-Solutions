
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 p-16 bg-slate-50/50 rounded-[64px] border border-slate-100 shadow-inner">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-black text-infinity-navy mb-4 tracking-tighter">
                {stat.value}<span className="text-infinity-blue">{stat.suffix}</span>
              </div>
              <p className="text-slate-400 font-black text-[10px] tracking-[0.3em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
