import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thiago-biagi-portfolio-preview.eubetos.chatgpt.site'),
  title: 'Thiago Biagi — Stylist',
  description: 'Portfolio de Thiago Biagi, fashion editor e creative consultant brasileiro.',
  openGraph: {
    title: 'Thiago Biagi — Fashion Editor',
    description: 'Fashion as attitude. Image as narrative.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Thiago Biagi — Fashion Editor & Creative Consultant' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Biagi — Fashion Editor',
    description: 'Fashion as attitude. Image as narrative.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
