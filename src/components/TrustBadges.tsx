import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TrustBadges() {
  const { language } = useLanguage();

  const items = [
    { nl: "Custom Code", en: "Custom Code", fr: "Code Sur Mesure" },
    { nl: "SEO Ingebouwd", en: "SEO Built-in", fr: "SEO Intégré" },
    { nl: "Hosting Inbegrepen", en: "Hosting Included", fr: "Hébergement Inclus" },
    { nl: "Vaste Prijs", en: "Fixed Pricing", fr: "Prix Fixe" },
    { nl: "2–4 Weken", en: "2–4 Weeks", fr: "2–4 Semaines" },
  ];

  return (
    <section className="py-8 border-b border-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {item[language]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
