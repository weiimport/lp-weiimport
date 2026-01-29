import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import Button from './ui/Button';
import { useWhatsApp } from '../src/hooks/useWhatsApp';
import { analytics } from '../src/utils/analytics';

const Hero: React.FC = () => {
  const { whatsappLink, whatsappNumber, isLoading } = useWhatsApp();

  const handleClick = () => {
    analytics.heroClick(whatsappNumber);
  };

  return (
    <section className="relative w-full min-h-screen bg-wei-dark-blue overflow-hidden flex flex-col items-center">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Wei Import Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-wei-dark-blue/40 mix-blend-multiply"></div>
      </div>

      {/* Grid Lines Overlay Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-12 flex flex-col items-center text-center h-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Logo className="h-24 w-auto" />
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Os mais vendidos da <br />
            China, <span className="text-wei-light-gold">já estão no Brasil</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-medium drop-shadow-md">
            Importação simplificada, retirada imediata no Brasil.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-disabled={isLoading}
          >
            <Button
              variant="white"
              className="font-bold text-wei-dark-blue shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              disabled={isLoading}
            >
              QUERO VER PRODUTOS DISPONÍVEIS AGORA
            </Button>
          </a>
        </motion.div>

        {/* Hero Image (Container) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="w-full max-w-5xl relative mt-auto z-20"
        >
          {/* Container Image */}
          <div className="relative w-full flex justify-center">
            <img
              src="/images/hero-container.png"
              alt="Container Wei Import"
              className="w-full md:w-4/5 object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;