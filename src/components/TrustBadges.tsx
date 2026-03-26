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
    t.hosting[language],
  ];

  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-3 text-sm font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
