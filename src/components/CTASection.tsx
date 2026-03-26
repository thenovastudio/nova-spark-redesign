import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations.cta;

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-secondary/95 border-2 border-primary/30 p-12 md:p-20 shadow-2xl">
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-background leading-[0.95]">
              {t.title[language]}
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-background/85 font-medium leading-relaxed max-w-2xl">
              {t.subtitle[language]}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/85 text-primary-foreground font-bold px-10 shadow-xl hover:shadow-2xl text-base"
              >
                <Link to="/contact" className="inline-flex items-center gap-3">
                  {t.button[language]}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
