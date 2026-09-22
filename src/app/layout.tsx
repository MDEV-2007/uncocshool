import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { SpeedDial } from '@/components/SpeedDial';

export const metadata: Metadata = {
  metadataBase: new URL('https://uncoschool.org.uz'),
  title: 'UNCO School — Xususiy maktab | 5–11 sinflar | Farg\'ona, Buvayda',
  description: 'UNCO School — Farg\'ona viloyati Buvayda tumani Ibrat shaharchasida joylashgan tabiiy va aniq fanlarga chuqurlashtirilgan xususiy maktab.',
  keywords: [
    'UNCO School',
    'uncoschool',
    'UNCO maktab',
    'uncoschool.org.uz',
    'xususiy maktab',
    'Buvayda xususiy maktab',
    'Ibrat maktab',
    'Farg\'ona xususiy maktab',
    'aniq fanlar maktabi',
    'tabiiy fanlar maktabi',
    '5-11 sinf xususiy maktab'
  ],
  alternates: {
    canonical: 'https://uncoschool.org.uz',
  },
  openGraph: {
    title: 'UNCO School — Xususiy maktab | Farg\'ona, Buvayda',
    description: 'Tabiiy va aniq fanlarga chuqur e\'tibor qaratilgan zamonaviy xususiy maktab. 5–11-sinflar uchun sifatli ta\'lim.',
    url: 'https://uncoschool.org.uz',
    siteName: 'UNCO School',
    locale: 'uz_UZ',
    type: 'website',
    images: [
      {
        url: '/assets/brand/unco-logo.png',
        width: 800,
        height: 600,
        alt: 'UNCO School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNCO School — Xususiy maktab',
    description: 'Farg\'ona viloyati Buvayda tumani Ibrat shaharchasidagi xususiy maktab.',
    images: ['/assets/brand/unco-logo.png'],
  },
  icons: {
    icon: '/assets/brand/favicon-32.png',
    apple: '/assets/brand/favicon-180.png',
  },
  verification: {
    google: 'YLddo7lnPJOgwf4sosHqYeHlHefEgvnjbNg_ye3pdYw',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'UNCO School',
  url: 'https://uncoschool.org.uz',
  logo: 'https://uncoschool.org.uz/assets/brand/unco-logo.png',
  description: 'Farg\'ona viloyati Buvayda tumani Ibrat shaharchasida joylashgan tabiiy va aniq fanlarga chuqurlashtirilgan xususiy maktab.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Obod Yurt ko\'chasi, 870-uy',
    addressLocality: 'Ibrat shaharchasi, Buvayda tumani',
    addressRegion: 'Farg\'ona viloyati',
    addressCountry: 'UZ',
  },
  telephone: '+998931401122',
  sameAs: [
    'https://t.me/unco_school',
    'https://instagram.com/unco_school',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <meta name="google-site-verification" content="YLddo7lnPJOgwf4sosHqYeHlHefEgvnjbNg_ye3pdYw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

