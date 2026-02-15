
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../constants';
import { Plus, CheckCircle2, ShoppingBag } from 'lucide-react';

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRODUCT_CATEGORIES[0].id);

  const currentCategory = PRODUCT_CATEGORIES.find(c => c.id === activeTab) || PRODUCT_CATEGORIES[0];

  return (
    <section id="solutions" className="py-40 bg-slate-50/30 tech-grid-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-8 shadow-sm">
            <ShoppingBag size={14} className="text-infinity-blue" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Retail Ecosystem</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-infinity-navy mb-8 leading-tight tracking-tight">
            Digital Store <span className="text-infinity-blue">Solutions.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed opacity-80">
            A curated selection of high-performance security hardware designed for the modern Middle Eastern retail environment.
          </p>
        </div>

        {/* Modern Clean Tab Nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-20 bg-white/50 backdrop-blur-md p-2 rounded-3xl border border-white max-w-fit mx-auto shadow-sm">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                activeTab === cat.id 
                ? 'bg-infinity-navy text-white shadow-lg' 
                : 'text-slate-400 hover:text-infinity-navy hover:bg-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="relative">
              <div className="relative rounded-[56px] overflow-hidden aspect-[4/3] shadow-3xl border-[12px] border-white glass-panel">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-infinity-navy/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-infinity-blue text-white w-32 h-32 rounded-full flex items-center justify-center font-black text-[10px] uppercase tracking-widest border-[8px] border-white shadow-2xl">
                Premium
              </div>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[64px] shadow-xl border border-slate-100">
              <h3 className="text-4xl font-black text-infinity-navy mb-8 leading-tight tracking-tight">{currentCategory.title}</h3>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
                {currentCategory.description}
              </p>
              
              <div className="grid sm:grid-cols-1 gap-4 mb-14">
                {currentCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-infinity-blue/20 hover:bg-white transition-all group">
                    <CheckCircle2 size={20} className="text-infinity-blue" />
                    <span className="font-bold text-slate-700 text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-infinity-navy text-white px-10 py-6 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-infinity-blue transition-all shadow-xl shadow-infinity-navy/10 flex items-center justify-center gap-4">
                Request Specifications <Plus size={20} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
