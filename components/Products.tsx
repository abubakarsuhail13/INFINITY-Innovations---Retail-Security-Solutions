
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../constants';
import { Plus, CheckCircle2, ShoppingBag } from 'lucide-react';

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRODUCT_CATEGORIES[0].id);

  const currentCategory = PRODUCT_CATEGORIES.find(c => c.id === activeTab) || PRODUCT_CATEGORIES[0];

  return (
    <section id="solutions" className="py-28 bg-slate-50/30 tech-grid-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 mb-6 shadow-sm">
            <ShoppingBag size={12} className="text-infinity-blue" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Security Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-infinity-navy mb-6 leading-tight tracking-tight">
            Integrated <span className="text-infinity-blue">Retail Solutions.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed opacity-80">
            A comprehensive range of high-performance security hardware designed for modern B2B retail environments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white max-w-fit mx-auto shadow-sm">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all ${
                activeTab === cat.id 
                ? 'bg-infinity-navy text-white shadow-md' 
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl border-[8px] border-white">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.title} 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-infinity-navy/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-infinity-blue text-white w-24 h-24 rounded-full flex items-center justify-center font-black text-[9px] uppercase tracking-widest border-4 border-white shadow-xl">
                Premium
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[48px] shadow-lg border border-slate-100">
              <h3 className="text-3xl font-black text-infinity-navy mb-6 leading-tight tracking-tight">{currentCategory.title}</h3>
              <p className="text-slate-500 text-md mb-10 font-medium leading-relaxed">
                {currentCategory.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-10">
                {currentCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-xl border border-transparent hover:border-infinity-blue/10 hover:bg-white transition-all group">
                    <CheckCircle2 size={16} className="text-infinity-blue flex-shrink-0" />
                    <span className="font-bold text-slate-700 text-xs tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="w-full bg-infinity-navy text-white px-8 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-infinity-blue transition-all shadow-lg flex items-center justify-center gap-3">
                Request Specifications <Plus size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
