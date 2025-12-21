import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <ServicesPreview />
      <ProcessSection />
      <PortfolioPreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
