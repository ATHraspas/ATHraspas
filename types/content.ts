export type GlossaryTerm = { term: string; tr: string; desc: string; adExample: string };
export type Mistake = { problem: string; reason: string; solution: string };
export type Resource = { title: string; platform: string; language: string; duration: string; level: string; learn: string; practice: string; url?: string };
export type Assignment = {
  id: string;
  title: string;
  level: 'Kolay' | 'Orta' | 'Zor' | 'Müşteri Simülasyonu';
  goal: string;
  adMatch: string;
  programs: string[];
  scene: string;
  steps: string[];
  deliverable: string;
  success: string;
  commonError: string;
  checklist: string[];
};

export type ModuleContent = {
  id: string;
  title: string;
  category: string;
  description: string;
  why: string;
  useCases: string[];
  scenarios: string[];
  tools: string[];
  glossary: GlossaryTerm[];
  tips: string[];
  mistakes: Mistake[];
  resources: Resource[];
  assignments: Assignment[];
  checklist: string[];
  assistantPrompts: string[];
  badge: { name: string; description: string };
};

export type NavGroup = { group: string; items: { title: string; moduleId?: string }[] };
