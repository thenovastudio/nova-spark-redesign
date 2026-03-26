import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ProcessSection } from "@/components/ProcessSection";
import { Globe, Smartphone, Palette, Zap, Search, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";

const Services = () => {
  const { language } = useLanguage();
  const t = translations.services;

  const services = [
    { icon: Globe, title: t.webDesign.title[language], description: t.webDesign.description[language], features: t.webDesign.features[language] },
    { icon: Smartphone, title: t.mobile.title[language], description: t.mobile.description[language], features: t.mobile.features[language] },
    { icon: Palette, title: t.brand.title[language], description: t.brand.description[language], features: t.brand.features[language] },
    { icon: Zap, title: t.performance.title[language], description: t.performance.description[language], features: t.performance.features[language] },
    { icon: Search, title: t.seo.title[language], description: t.seo.description[language], features: t.seo.features[language] },
    { icon: BarChart3, title: t.analytics.title[language], description: t.analytics.description[language], features: t.analytics.features[language] },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead page="services" />
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl border-l-4 border-primary pl-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.title[language]}</h1>
            <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
          </div>
        </div>
      </section>
      <section className="pb-24 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="border border-border bg-background rounded-md p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-md border border-primary/20 bg-primary/5 w-fit"><service.icon className="h-6 w-6 text-primary" /></div>
                <h2 className="mt-6 text-2xl font-bold text-secondary">{service.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span>{feature}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">{t.pricing.title[language]}</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t.pricing.description[language]}</p>
            <Button asChild variant="default" size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/contact">{t.pricing.button[language]}<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
