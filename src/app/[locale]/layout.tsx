import type { Metadata } from 'next';
import { Inter, Noto_Sans_Georgian } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { routing, type Locale } from '../../i18n/routing';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: '--font-noto-sans-georgian',
  subsets: ['georgian'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Parcel Express',
  description:
    'Fast, reliable international shipping and package delivery service. Track packages, schedule deliveries, and ship worldwide with competitive rates.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const fontFamily =
    locale === 'ka'
      ? 'var(--font-noto-sans-georgian), sans-serif'
      : 'var(--font-inter), sans-serif';

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${notoSansGeorgian.variable}`} style={{ fontFamily }}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
