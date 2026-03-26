import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dramatic background gradient shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="container relative z-10 py-12">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-in-up mb-12" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 rounded-lg bg-primary/8 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-sm font-bold text-primary">{t.badge[language]}</span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in-up font-bold tracking-tight leading-[0.95] mb-8" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            {t.title1[language]}{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>{t.titleHighlight[language]}</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up text-xl md:text-2xl text-muted-foreground max-w-3xl mb-16 leading-relaxed font-medium" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t.subtitle[language]}
          </p>

          <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-start gap-6 mb-20" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-base shadow-xl hover:shadow-2xl btn-hover">
              <Link to="/contact" className="inline-flex items-center gap-3">
                {t.cta[language]}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-border hover:bg-primary/5 hover:border-primary/50 font-bold px-10 py-6 text-base btn-hover">
              <Link to="/work">{t.ctaSecondary[language]}</Link>
            </Button>
          </div>

          <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-start sm:items-center gap-8 text-base" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-muted-foreground font-semibold">{t.available[language]}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <span className="text-muted-foreground font-semibold">{t.trusted[language]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
