import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { STATS, CHECKLIST_ITEMS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/images/pattern-waves.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* Left Side - Truck Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[500px] lg:min-h-[600px]"
          >
            <img
              src="/images/truck-logistics.png"
              alt="Truck Logistics Wei Import"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase leading-tight mb-4 tracking-tight">
              A CONFIANÇA DE <br />
              <span className="text-wei-light-gold">QUEM SABE O QUE FAZ</span>
            </h2>

            <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed border-l-4 border-wei-light-gold pl-4">
              Nossa experiência é a sua garantia de sucesso.
              A Wei Import não é apenas uma intermediária; somos parceiros
              logísticos que entendem a urgência do seu negócio.
            </p>

            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-black text-wei-light-gold mb-1 tracking-tighter">
                {STATS.containers}
              </h3>
              <p className="text-base md:text-lg font-medium tracking-wide uppercase text-white/90">
                {STATS.label}
              </p>
            </div>

            <div className="space-y-3">
              {CHECKLIST_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-wei-light-gold/20 p-1.5 rounded-full flex-shrink-0">
                    <CheckCircle className="text-wei-light-gold w-5 h-5" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
