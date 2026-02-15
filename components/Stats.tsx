
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-infinity-navy mb-2 tracking-tighter">
                {stat.value}<span className="text-infinity-blue">{stat.suffix}</span>
              </div>
              <p className="text-slate-400 font-black text-[9px] tracking-[0.2em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
