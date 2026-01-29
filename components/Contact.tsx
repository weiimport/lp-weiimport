import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { FINAL_BENEFITS } from '../constants';
import { useWhatsApp } from '../src/hooks/useWhatsApp';
import { analytics } from '../src/utils/analytics';

const Contact: React.FC = () => {
  const { whatsappLink, whatsappNumber, isLoading } = useWhatsApp();

  const handleClick = () => {
    analytics.catalogClick(whatsappNumber);
  };

  return (
    <section className="bg-wei-light-gray py-12 md:py-16 relative overflow-hidden">
        {/* Background texture subtle */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 md:p-10 text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-wei-dark-blue mb-3">
            Receba o Catálogo <br />
            Exclusivo da Wei Import
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Sem perder tempo e dinheiro com importações arriscadas.
            A Wei trabalha com um estoque de alta rotatividade e lucratividade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-8">
            {FINAL_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-wei-light-gray/60 rounded-lg">
                <div className="bg-wei-dark-blue rounded-full p-1">
                    <Check size={12} className="text-white" />
                </div>
                <span className="text-wei-dark-blue text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-disabled={isLoading}
          >
            <Button
              variant="primary"
              className="mx-auto w-full md:w-auto min-w-[300px] text-lg"
              disabled={isLoading}
            >
              SOLICITAR CATÁLOGO
            </Button>
          </a>
          
          <p className="text-xs text-gray-500 mt-4">
            Receba nosso catálogo completo em sua caixa de entrada ou WhatsApp
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;