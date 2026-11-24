import type {Metadata} from 'next';
import {Playfair_Display, Work_Sans} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bar Zero Grau — Tatuapé | Cardápio Digital Oficial',
  description:
    'Cardápio digital oficial do Bar Zero Grau Tatuapé. Chopp trincando a zero grau, cortes nobres na chapa e o autêntico boteco paulistano.',
  keywords: [
    'Bar Zero Grau',
    'Tatuapé',
    'Cardápio Digital',
    'Chopp Gelado',
    'Picanha no Rechaud',
    'Boteco SP',
    'Gastronomia de Boteco',
  ],
  openGraph: {
    title: 'Bar Zero Grau — Tatuapé | Cardápio Digital Oficial',
    description:
      'Chopp trincando, porções tradicionais e carnes nobres no rechaud no coração do Tatuapé.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Bar Zero Grau Tatuapé',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Zero Grau — Tatuapé | Cardápio Digital',
    description:
      'Cardápio digital oficial para consulta. Tradição, chopp gelado e gastronomia de boteco no Tatuapé.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`dark ${playfair.variable} ${workSans.variable}`}>
      <body
        className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 w-full pt-16 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileNavigation />
      </body>
    </html>
  );
}
