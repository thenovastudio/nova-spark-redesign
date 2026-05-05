import { Link } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-[90vh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40 overflow-hidden">
      {/* Ambient glow — right side */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-[12%] w-[250px] h-[250px] bg-primary/[0.12] rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-primary tracking-wide mb-6 uppercase">
            {language === "nl" ? "Webdesign Studio — België" : language === "fr" ? "Studio Web — Belgique" : "Web Design Studio — Belgium"}
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] mb-8 text-secondary">
            {t.title1[language]}{" "}
            <span className="text-primary">{t.titleHighlight[language]}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            {t.subtitle[language]}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <FlowHoverButton
              asChild
              icon={<ArrowRight className="h-5 w-5" />}
              className="px-8"
            >
              <Link to="/contact">{t.cta[language]}</Link>
            </FlowHoverButton>
            <FlowHoverButton
              asChild
              variant="outline"
              className="px-8"
            >
              <Link to="/work">{t.ctaSecondary[language]}</Link>
            </FlowHoverButton>
          </div>

          {/* Proof line */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {t.available[language]}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="hidden sm:inline">
              {language === "nl" ? "Oplevering in 2–4 weken" : language === "fr" ? "Livraison en 2–4 semaines" : "Delivery in 2–4 weeks"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
