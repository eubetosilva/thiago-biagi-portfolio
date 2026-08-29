import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thiago Biagi — Fashion Stylist',
  description: 'Portfolio concept for Brazilian fashion stylist Thiago Biagi, working across Brazil and Europe.',
  openGraph: { title: 'Thiago Biagi — Fashion Stylist', description: 'Fashion, culture and image across Brazil and Europe.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
