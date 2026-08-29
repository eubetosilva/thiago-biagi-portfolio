import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thiago Biagi — Stylist',
  description: 'Portfolio de Thiago Biagi, stylist brasileiro.',
  openGraph: { title: 'Thiago Biagi — Stylist', description: 'Fashion as attitude. Image as narrative.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
