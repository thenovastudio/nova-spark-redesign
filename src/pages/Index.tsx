import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEOHead page="home" />
      <Navbar />
      <header>
        <HeroSection />
      </header>
      <TrustBadges />
      <section aria-label="Services">
        <ServicesPreview />
      </section>
      <section aria-label="Statistics">
        <StatsSection />
      </section>
      <section aria-label="Process">
        <ProcessSection />
      </section>
      <section aria-label="Portfolio">
        <PortfolioPreview />
      </section>
      <section aria-label="Testimonials">
        <TestimonialsSection />
      </section>
      <section aria-label="FAQ">
        <FAQSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
