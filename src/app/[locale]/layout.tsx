import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing, type Locale} from '../../i18n/routing';
import {notFound} from 'next/navigation';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Parcel Express",
  description: "Your reliable package delivery service",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.variable}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}