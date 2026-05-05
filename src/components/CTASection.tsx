import { Link } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations.cta;

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-background mb-6 leading-tight">
            {t.title[language]}
          </h2>
          <p className="text-lg text-background/70 mb-10 leading-relaxed">
            {t.subtitle[language]}
          </p>

          <FlowHoverButton
            asChild
            variant="outline"
            icon={<ArrowRight className="h-5 w-5" />}
            className="border-background/30 text-background hover:text-secondary"
          >
            <Link to="/contact">{t.button[language]}</Link>
          </FlowHoverButton>
        </div>
      </div>
    </section>
  );
}
