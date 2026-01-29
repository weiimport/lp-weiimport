import { useState, useEffect } from 'react';
import { getSessionWhatsAppLink, getSessionWhatsAppNumber } from '../utils/whatsapp';

/**
 * Hook para obter link e número WhatsApp da sessão atual
 */
export const useWhatsApp = (customMessage?: string) => {
  const [whatsappLink, setWhatsappLink] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Executar apenas no cliente (localStorage disponível)
    try {
      const link = getSessionWhatsAppLink(customMessage);
      const number = getSessionWhatsAppNumber();

      setWhatsappLink(link);
      setWhatsappNumber(number);
    } catch (error) {
      console.error('Error loading WhatsApp data:', error);
      // Fallback para primeiro número
      setWhatsappLink('https://wa.me/5511959668888?text=Olá');
      setWhatsappNumber('5511959668888');
    } finally {
      setIsLoading(false);
    }
  }, [customMessage]);

  return { whatsappLink, whatsappNumber, isLoading };
};
