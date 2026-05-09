import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Creative Production OS',
  description: 'Reklamcılık, AI üretim, post production ve sosyal medya teslim süreçlerini gerçek iş senaryoları üzerinden öğreten interaktif production rehberi.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr"><body>{children}</body></html>;
}
