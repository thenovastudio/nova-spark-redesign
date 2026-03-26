import { MessageSquare, Paintbrush, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations.process;

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: t.discover.title[language],
      description: t.discover.description[language],
    },
    {
      icon: Paintbrush,
      number: "02",
      title: t.design.title[language],
      description: t.design.description[language],
    },
    {
      icon: Code2,
      number: "03",
      title: t.build.title[language],
      description: t.build.description[language],
    },
    {
      icon: Rocket,
      number: "04",
      title: t.launch.title[language],
      description: t.launch.description[language],
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 border-b border-primary/20 pb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              <div className="flex lg:flex-col items-start gap-4 lg:gap-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-md border border-primary/20 bg-primary/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
