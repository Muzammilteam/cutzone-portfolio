'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}