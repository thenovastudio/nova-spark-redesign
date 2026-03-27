import { Link } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Minimalist background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <ScrollReveal delay={0} direction="down">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/40 rounded-full bg-primary/5 text-xs font-bold text-primary uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t.badge[language]}
              </div>
            </div>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal delay={100} direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center leading-tight mb-8">
              {t.title1[language]}{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-accent)' }}>
                {t.titleHighlight[language]}
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={200} direction="up">
            <p className="text-lg md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              {t.subtitle[language]}
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={300} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <FlowHoverButton
                asChild
                icon={<ArrowRight className="h-5 w-5" />}
                className="px-8"
              >
                <Link to="/contact">
                  {t.cta[language]}
                </Link>
              </FlowHoverButton>
              <FlowHoverButton
                asChild
                variant="outline"
                className="px-8"
              >
                <Link to="/work">
                  {t.ctaSecondary[language]}
                </Link>
              </FlowHoverButton>
            </div>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={400} direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{t.available[language]}</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">2-4 Week Delivery</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{t.trusted[language]}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
