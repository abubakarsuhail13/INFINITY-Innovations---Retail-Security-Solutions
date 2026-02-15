
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 group">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                  alt="Quality Assurance" 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-nav rounded-2xl border border-white/10">
                    <p className="text-xl font-bold mb-2">Uncompromising Quality</p>
                    <p className="text-sm text-slate-400">Every product is tested for the rigorous demands of the UAE retail market.</p>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Differentiation</span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Why Retailers Choose <br /><span className="text-blue-500">INFINITY Innovations</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              We focus solely on delivering great user experiences in open display security. By challenging conventional methods, we provide best-in-class products supported by a 24/7 service commitment.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: 'User-Centric Design',
                  desc: 'Focusing on customer interaction while maintaining maximum security for high-value gadgets.',
                  icon: <Target className="w-6 h-6 text-blue-500" />
                },
                {
                  title: 'Strategic Partnerships',
                  desc: 'We emphasize sustainable, profitable, and long-term relationships with our clients.',
                  icon: <Users className="w-6 h-6 text-blue-400" />
                },
                {
                  title: 'Rapid Deployment',
                  desc: 'Swift installation and round-the-clock technical support for minimal business disruption.',
                  icon: <Zap className="w-6 h-6 text-blue-500" />
                },
                {
                  title: 'Enterprise Trust',
                  desc: 'Recommended by major retailers across Dubai Silicon Oasis and the wider UAE.',
                  icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
                }
              ].map((feat, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
