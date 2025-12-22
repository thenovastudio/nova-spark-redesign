import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function TrustBadges() {
  const { language } = useLanguage();
  const t = translations.badges;

  const badges = [
    t.fast[language],
    t.fixed[language],
    t.support[language],
    t.seo[language],
  ];

  return (
    <section className="py-12 border-y border-border bg-secondary/20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
