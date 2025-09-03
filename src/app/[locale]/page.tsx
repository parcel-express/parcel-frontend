'use client';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';

export default function Page() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Statistics />
      <Footer />
    </>
  );
}
