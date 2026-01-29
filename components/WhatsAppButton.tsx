import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../src/hooks/useWhatsApp';
import { analytics } from '../src/utils/analytics';

const WhatsAppButton: React.FC = () => {
  const { whatsappLink, whatsappNumber, isLoading } = useWhatsApp();

  const handleClick = () => {
    analytics.whatsappClick(whatsappNumber);
  };

  if (isLoading) {
    return null;
  }

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      <span className="font-bold hidden md:inline">Falar no WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;