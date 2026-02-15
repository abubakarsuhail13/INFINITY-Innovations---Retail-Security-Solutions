
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Stats } from './components/Stats';
import { Industries } from './components/Industries';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecentNews } from './components/RecentNews';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-slate-50/30">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-infinity-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <Stats />

        <Products />

        <About />

        <Industries />

        {/* Parallax Digital CTA */}
        <section className="py-40 relative overflow-hidden parallax-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1600")' }}>
          <div className="absolute inset-0 bg-infinity-navy/90 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-tight tracking-tighter">
              Ready for Smarter <br /><span className="text-infinity-blue">Protection?</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-16 text-xl font-medium">
              Join the most advanced retailers in the UAE. Deploy INFINITY security today.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-white text-infinity-navy px-16 py-7 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-infinity-blue hover:text-white transition-all"
            >
              Consult an Expert
            </motion.a>
          </div>
        </section>

        <RecentNews />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
