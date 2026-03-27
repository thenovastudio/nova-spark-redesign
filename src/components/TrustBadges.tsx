import { Zap, Lock, Clock, Search, Cloud } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function TrustBadges() {
  const { language } = useLanguage();
  const t = translations.badges;

  const badges = [
    { icon: Zap, label: t.fast[language] },
    { icon: Lock, label: "Custom Code" },
    { icon: Clock, label: "Quick Turnaround" },
    { icon: Search, label: "SEO Ready" },
    { icon: Cloud, label: t.hosting[language] },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-border bg-background/40">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{badge.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
