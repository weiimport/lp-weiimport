import { StepItem } from "./types";

// Array com os 3 números para rotação
export const WHATSAPP_NUMBERS = [
  "5511959668888", // Número 1
  "5511998636666", // Número 2
  "5511999596666"  // Número 3
];

// Mensagem padrão para todos os links WhatsApp
export const WHATSAPP_DEFAULT_MESSAGE = "Olá, vim pelo site e gostaria de ver o catálogo da Weiimport.";

// Mantido para compatibilidade temporária (será removido após migração completa)
export const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20ver%20o%20cat%C3%A1logo%20da%20Weiimport.";

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: "Escolha os produtos",
    description: "Receba o catálogo com tendências mais vendidos.",
    icon: 'box'
  },
  {
    id: 2,
    title: "A Wei cuida da Importação",
    description: "Você compra direto da Wei, com estoque nacional.",
    icon: 'truck'
  },
  {
    id: 3,
    title: "Sem esperar prazos de Importação",
    description: "Seu produto já está aqui! Você retira e começa a vender imediatamente.",
    icon: 'clock'
  }
];

export const STATS = {
  containers: "+50.000",
  label: "Contêineres importados"
};

export const CHECKLIST_ITEMS = [
  "Estoque sempre disponível",
  "Logística garantida",
  "Suporte Semanal: Segunda a Sexta, das 09h às 18h."
];

export const FINAL_BENEFITS = [
  "Estoque nacional e pronta entrega",
  "Produtos validados com alto giro de revenda",
  "Sem burocracia",
  "Entrega em prazo recorde"
];