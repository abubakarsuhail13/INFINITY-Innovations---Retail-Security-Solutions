
import React from 'react';
import { motion } from 'framer-motion';
import { NEWS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const RecentNews: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-infinity-blue/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[13px] uppercase font-black tracking-[0.4em] text-infinity-blue mb-8 block">KNOWLEDGE HUB</span>
            <h2 className="text-6xl md:text-8xl font-black text-infinity-navy tracking-tighter leading-tight">
              Industry <span className="text-infinity-blue">Insights.</span>
            </h2>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="flex items-center gap-4 text-infinity-navy font-black text-[12px] uppercase tracking-[0.3em] group"
          >
            Explore All Updates
            <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-infinity-navy group-hover:text-white transition-all shadow-sm">
              <ArrowRight size={22} />
            </div>
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {NEWS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[520px] rounded-[64px] overflow-hidden mb-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border-[14px] border-white bg-white transition-all duration-700 group-hover:shadow-[0_50px_100px_-20px_rgba(59,130,246,0.18)]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
                />
                
                {/* Fixed Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <div className="inline-block bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full mb-8">
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">{item.date}</span>
                   </div>
                   <h3 className="text-3xl font-black leading-[1.1] text-infinity-azure group-hover:text-white transition-colors duration-500">
                     {item.title}
                   </h3>
                </div>
              </div>
              
              <div className="px-8">
                <p className="text-slate-500 font-medium leading-relaxed text-xl line-clamp-3 group-hover:text-slate-700 transition-colors">
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
