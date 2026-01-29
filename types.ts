export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: 'box' | 'truck' | 'clock';
}

export interface BenefitItem {
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
}