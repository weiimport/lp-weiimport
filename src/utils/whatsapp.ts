import { WHATSAPP_NUMBERS, WHATSAPP_DEFAULT_MESSAGE } from '../../constants';

const ROTATION_INDEX_KEY = 'wei_whatsapp_rotation_index';
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
 * Obtém índice atual e incrementa para próximo visitante (round-robin)
 */
const getAndIncrementRotationIndex = (): number => {
  const storedIndex = localStorage.getItem(ROTATION_INDEX_KEY);
  const currentIndex = storedIndex ? parseInt(storedIndex, 10) : 0;

  // Validar índice está dentro do array
  const validIndex = isNaN(currentIndex) || currentIndex >= WHATSAPP_NUMBERS.length
    ? 0
    : currentIndex;

  // Calcular próximo índice (round-robin: 0→1→2→0)
  const nextIndex = (validIndex + 1) % WHATSAPP_NUMBERS.length;

  // Guardar próximo índice para próxima sessão
  localStorage.setItem(ROTATION_INDEX_KEY, nextIndex.toString());

  return validIndex;
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
