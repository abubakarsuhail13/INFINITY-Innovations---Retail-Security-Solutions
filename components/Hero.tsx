
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative pt-44 pb-24 overflow-hidden bg-white tech-grid-bg">
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-infinity-blue soft-glow rounded-full"></div>
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-infinity-red soft-glow rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-infinity-blue/10 border border-infinity-blue/20 px-6 py-3 rounded-full mb-12 shadow-sm">
              <Sparkles className="w-4 h-4 text-infinity-blue" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-infinity-blue">The Future of Retail Intelligence</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-[88px] font-black text-infinity-navy mb-12 leading-[0.9] tracking-tighter">
              Seamless <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-infinity-blue to-infinity-azure">Security.</span> <br />
              Digital Trust.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-500 max-w-lg mb-16 text-2xl leading-relaxed font-medium opacity-90">
              Transforming the Middle Eastern retail landscape with invisible EAS protection and high-end interactive display solutions.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8">
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
            </motion.div>
          </motion.div>

          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
              className="relative"
            >
              <div className="relative z-10 p-6 bg-white rounded-[72px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] border border-white/60 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[52px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={HERO_SLIDES[current].image}
                      alt="Security Scenario"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Reliability Tag - Context Aware */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={current}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="absolute -bottom-8 -left-8 bg-white p-12 rounded-[48px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-slate-50 max-w-[340px] z-20"
                  >
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center border border-red-100 shadow-sm">
                           {HERO_SLIDES[current].icon}
                        </div>
                        <span className="text-[13px] font-black uppercase tracking-[0.4em] text-infinity-navy">
                          {HERO_SLIDES[current].tag}
                        </span>
                     </div>
                     <p className="text-[17px] text-slate-500 font-semibold leading-relaxed">
                       {HERO_SLIDES[current].caption}
                     </p>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Navigation Dots */}
                <div className="absolute bottom-10 right-10 flex gap-3 z-30">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        current === idx ? 'w-12 bg-infinity-blue' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Quick Arrows (Only on hover desktop) */}
                <div className="absolute inset-y-0 left-10 right-10 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-30">
                   <button 
                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                    className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-infinity-blue hover:text-white transition-all transform hover:scale-110"
                   >
                     <ChevronLeft size={24} />
                   </button>
                   <button 
                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                    className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:bg-infinity-blue hover:text-white transition-all transform hover:scale-110"
                   >
                     <ChevronRight size={24} />
                   </button>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-80 h-80 bg-infinity-blue/10 rounded-full blur-[80px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
