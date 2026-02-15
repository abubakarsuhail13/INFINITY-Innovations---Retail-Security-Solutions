
import React from 'react';
import { motion } from 'framer-motion';
import { NEWS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const RecentNews: React.FC = () => {
  return (
    <section id="news" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-infinity-blue/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[11px] uppercase font-black tracking-[0.4em] text-infinity-blue mb-4 block">Knowledge Hub</span>
            <h2 className="text-4xl md:text-5xl font-black text-infinity-navy tracking-tighter leading-tight">
              Latest <span className="text-infinity-blue">Insights.</span>
            </h2>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="flex items-center gap-3 text-infinity-navy font-black text-[10px] uppercase tracking-[0.2em] group"
          >
            Expert Consultation
            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-infinity-navy group-hover:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-[32px] overflow-hidden mb-6 shadow-lg border-4 border-white">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                   <span className="text-[9px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">{item.date}</span>
                   <h3 className="text-xl font-black leading-tight text-white group-hover:text-infinity-azure transition-colors">
                     {item.title}
                   </h3>
                </div>
              </div>
              <div className="px-2">
                <p className="text-slate-500 font-medium leading-relaxed text-sm line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
