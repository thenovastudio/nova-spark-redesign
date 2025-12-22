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
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
              className="relative text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
