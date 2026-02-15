
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
    <div className="relative min-h-screen bg-white">
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

        {/* Professional Parallax CTA Section */}
        <section className="py-28 relative overflow-hidden parallax-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1600")' }}>
          <div className="absolute inset-0 bg-infinity-navy/90 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Secure Your Retail <br /><span className="text-infinity-blue">Future Today.</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-12 text-lg font-medium">
              Join leading Middle Eastern retailers who trust INFINITY Innovations for advanced security and display solutions.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-white text-infinity-navy px-12 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-infinity-blue hover:text-white transition-all"
            >
              Consult Our Experts
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
