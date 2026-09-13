import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { SpeedDial } from '@/components/SpeedDial';

export const metadata: Metadata = {
  title: 'UNCO School — Xususiy maktab | 5–11 sinflar | Farg\'ona, Buvayda',
  description: 'UNCO School — Farg\'ona viloyati Buvayda tumani Ibrat shaharchasida joylashgan tabiiy va aniq fanlarga chuqurlashtirilgan xususiy maktab.',
  icons: {
    icon: '/assets/brand/favicon-32.png',
    apple: '/assets/brand/favicon-180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <LanguageProvider>
          <Preloader />
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
          <SpeedDial />
        </LanguageProvider>
      </body>
    </html>
  );
}

