import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations.process;

  const steps = [
    { number: "01", title: t.discover.title[language], description: t.discover.description[language] },
    { number: "02", title: t.design.title[language], description: t.design.description[language] },
    { number: "03", title: t.build.title[language], description: t.build.description[language] },
    { number: "04", title: t.launch.title[language], description: t.launch.description[language] },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-3">
            {t.title[language]}
          </h2>
          <p className="text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-4xl font-bold text-border dark:text-muted/30 block mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
