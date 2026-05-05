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
      <HeroSection />
      <TrustBadges />
      <ServicesPreview />
      <StatsSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
