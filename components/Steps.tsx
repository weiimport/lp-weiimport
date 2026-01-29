import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock } from 'lucide-react';
import { STEPS } from '../constants';
import { StepItem } from '../types';

const Steps: React.FC = () => {
  return (
    <section className="bg-wei-light-gold py-12 md:py-16 relative overflow-hidden">
        {/* Decorative thin lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-black/5"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-black/5"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-black/5"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-wei-dark-blue uppercase tracking-tight">
            Importar nunca foi tão simples
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard: React.FC<{ step: StepItem; index: number }> = ({ step, index }) => {
  const Icon = () => {
    switch (step.icon) {
      case 'box': return <Package size={40} className="text-wei-dark-blue" />;
      case 'truck': return <Truck size={40} className="text-wei-dark-blue" />;
      case 'clock': return <Clock size={40} className="text-wei-dark-blue" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative bg-transparent border-2 border-wei-dark-gold p-8 rounded-lg hover:bg-white/10 transition-colors group"
    >
      {/* Number Badge */}
      <div className="absolute -top-5 left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-wei-dark-blue shadow-md">
        {step.id}
      </div>

      <div className="mt-4 mb-4">
        <Icon />
      </div>

      <h3 className="text-xl font-bold text-wei-dark-blue mb-3">
        {step.title}
      </h3>
      <p className="text-wei-dark-blue/80 text-sm leading-relaxed font-medium">
        {step.description}
      </p>
    </motion.div>
  );
};

export default Steps;