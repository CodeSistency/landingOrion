import Hero from '@/components/Hero';
import ImpactMetrics from '@/components/ImpactMetrics';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black pt-20">
      <Hero />
      <ImpactMetrics />
      <Features />
      <ProductShowcase />
      <Services />
      <HowItWorks />
      <Benefits />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
