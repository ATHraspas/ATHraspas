'use client';
const KEY = 'acpos-progress-v1';
export type Progress = { assignments: Record<string, boolean> };
export const readProgress = (): Progress => {
  if (typeof window === 'undefined') return { assignments: {} };
  try { return JSON.parse(localStorage.getItem(KEY) || '{"assignments":{}}'); } catch { return { assignments: {} }; }
};
export const writeProgress = (p: Progress) => localStorage.setItem(KEY, JSON.stringify(p));
