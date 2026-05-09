export type GlossaryTerm = {
  term: string;
  category: 'After Effects'|'Photoshop'|'Premiere Pro'|'Kurgu'|'AI Görsel'|'AI Video'|'Kamera'|'Reklamcılık'|'Export'|'Post Production';
  tr: string;
  why: string;
  adExample: string;
  relatedModule: string;
};
export type Mistake = { problem: string; reason: string; solution: string };
export type Resource = { title: string; platform: string; language: string; duration: string; level: string; learn: string; practice: string; url?: string };
export type AssignmentLevel = 'Kolay' | 'Orta' | 'Zor' | 'Müşteri Simülasyonu';
export type Assignment = { id: string; title: string; level: AssignmentLevel; shortGoal:string; goal: string; adMatch: string; programs: string[]; scene: string; steps: string[]; deliverable: string; success: string; commonError: string; checklist: string[] };

export type ModuleContent = {
  id: string;
  category: string;
  title: string;
  hero: string;
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
  comingSoon?: boolean;
};
export type NavGroup = { group: string; items: { title: string; moduleId: string }[] };
