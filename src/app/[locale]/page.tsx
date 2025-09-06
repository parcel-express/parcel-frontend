'use client';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <FAQ />
      <Footer />
    </>
  );
}
