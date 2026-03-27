import { Link } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations.cta;

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal delay={0} direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-secondary border border-border/30 p-8 md:p-16 lg:p-24">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-background mb-6 leading-tight">
                {t.title[language]}
              </h2>
              <p className="text-xl md:text-2xl text-background/80 font-medium mb-12 leading-relaxed max-w-2xl">
                {t.subtitle[language]}
              </p>
              
              <FlowHoverButton 
                asChild
                variant="outline"
                icon={<ArrowRight className="h-5 w-5" />}
                className="border-background/40 text-background hover:text-secondary"
              >
                <Link to="/contact">
                  {t.button[language]}
                </Link>
              </FlowHoverButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
