import { WHATSAPP_NUMBERS, WHATSAPP_DEFAULT_MESSAGE } from '../../constants';

const SESSION_NUMBER_KEY = 'wei_whatsapp_session_number';

/**
 * Obtém o número WhatsApp para esta sessão (fixo durante a visita)
 */
export const getSessionWhatsAppNumber = (): string => {
  // Verificar se já tem número desta sessão
  const sessionNumber = localStorage.getItem(SESSION_NUMBER_KEY);

  if (sessionNumber && WHATSAPP_NUMBERS.includes(sessionNumber)) {
    return sessionNumber;
  }

  // Primeira visita: selecionar próximo número da rotação
  const currentIndex = getAndIncrementRotationIndex();
  const selectedNumber = WHATSAPP_NUMBERS[currentIndex];

  // Guardar para esta sessão
  localStorage.setItem(SESSION_NUMBER_KEY, selectedNumber);

  return selectedNumber;
};

/**
 * Seleciona índice aleatório para novo visitante
 * Usa seleção aleatória pois não há backend para compartilhar rotação entre usuários
 */
const getAndIncrementRotationIndex = (): number => {
  // Gerar índice aleatório entre 0 e WHATSAPP_NUMBERS.length - 1
  const randomIndex = Math.floor(Math.random() * WHATSAPP_NUMBERS.length);

  return randomIndex;
};

/**
 * Gera link WhatsApp com encoding correto
 */
export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string = WHATSAPP_DEFAULT_MESSAGE
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Obtém link completo para a sessão atual
 */
export const getSessionWhatsAppLink = (customMessage?: string): string => {
  const phoneNumber = getSessionWhatsAppNumber();
  return generateWhatsAppLink(phoneNumber, customMessage);
};

/**
 * Limpar dados de sessão (útil para testes)
 */
export const clearWhatsAppSession = (): void => {
  localStorage.removeItem(SESSION_NUMBER_KEY);
};
