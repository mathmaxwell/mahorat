import './App.css';
import { ParticlesBg } from './components/ui/ParticlesBg';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { AboutSection } from './components/sections/AboutSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { WhyMahoratSection } from './components/sections/WhyMahoratSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="app">
      <ParticlesBg />
      <Header />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <BenefitsSection />
      <WhyMahoratSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
