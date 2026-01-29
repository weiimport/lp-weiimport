// Analytics utility for Google Tag Manager integration
// Sends events to GTM dataLayer which then triggers GA4 and Meta Pixel events

// Tipagem para parâmetros de eventos
interface EventParams {
  [key: string]: string | number | boolean;
}

// Função para enviar eventos para o GTM dataLayer
const pushToDataLayer = (event: string, params?: EventParams) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      ...params
    });
  }
};

// Eventos predefinidos para rastreamento
export const analytics = {
  // WhatsApp Click - Botão flutuante
  whatsappClick: (phoneNumber?: string) => {
    pushToDataLayer('whatsapp_click', {
      method: 'floating_button',
      button_location: 'bottom_right',
      phone_number: phoneNumber || 'unknown'
    });
  },

  // Catalog Request - Botão "Solicitar Catálogo" na seção Contact
  catalogClick: (phoneNumber?: string) => {
    pushToDataLayer('catalog_request', {
      method: 'contact_section',
      cta_name: 'Solicitar Catálogo',
      phone_number: phoneNumber || 'unknown'
    });
  },

  // Hero CTA Click - Botão principal do Hero
  heroClick: (phoneNumber?: string) => {
    pushToDataLayer('hero_cta_click', {
      method: 'hero_section',
      cta_name: 'QUERO VER PRODUTOS DISPONÍVEIS AGORA',
      button_location: 'hero_banner',
      phone_number: phoneNumber || 'unknown'
    });
  },

  // Form Submit - Para formulários futuros
  formSubmit: (formName: string) => {
    pushToDataLayer('form_submit', {
      form_name: formName
    });
  },

  // CTA Click genérico - Para outros botões de CTA
  ctaClick: (ctaName: string, location?: string) => {
    pushToDataLayer('cta_click', {
      cta_name: ctaName,
      cta_location: location || 'unknown'
    });
  }
};
