
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white tech-grid-bg">
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-infinity-blue soft-glow rounded-full"></div>
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-infinity-red soft-glow rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-infinity-blue/10 border border-infinity-blue/20 px-4 py-2 rounded-full mb-8 shadow-sm w-fit">
              <Sparkles className="w-3 h-3 text-infinity-blue" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-infinity-blue">Future-Proof Retail Intelligence</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-[72px] font-black text-infinity-navy mb-8 leading-[1.05] tracking-tighter">
              Seamless <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-infinity-blue to-infinity-azure">Security.</span> <br />
              Enterprise Trust.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-500 max-w-lg mb-12 text-lg leading-relaxed font-medium">
              Transforming the Middle Eastern retail landscape with advanced EAS protection and interactive display security solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-infinity-navy text-white px-10 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3"
              >
                Request Quote
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,1)' }}
                href="#solutions"
                className="bg-white/60 backdrop-blur-md border border-slate-200 text-infinity-navy px-10 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center hover:shadow-lg"
              >
                View Solutions
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 p-4 bg-white rounded-[48px] shadow-2xl border border-slate-100 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[36px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={HERO_SLIDES[current].image}
                      alt="Security Application"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Context Aware Badge */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={current}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-50 z-20 hidden md:block"
                  >
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                           {HERO_SLIDES[current].icon}
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-infinity-navy">
                          {HERO_SLIDES[current].tag}
                        </span>
                     </div>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">
                       {HERO_SLIDES[current].caption}
                     </p>
                  </motion.div>
                </AnimatePresence>

                {/* Dots Navigation */}
                <div className="absolute top-8 right-8 flex gap-2 z-30">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        current === idx ? 'w-8 bg-infinity-blue' : 'w-1.5 bg-white/50 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="absolute inset-y-0 left-6 right-6 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-30">
                   <button 
                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-infinity-blue hover:text-white transition-all transform hover:scale-105"
                   >
                     <ChevronLeft size={18} />
                   </button>
                   <button 
                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-infinity-blue hover:text-white transition-all transform hover:scale-105"
                   >
                     <ChevronRight size={18} />
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
