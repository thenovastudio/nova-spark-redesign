import { MessageSquare, Paintbrush, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { ScrollReveal } from "./ScrollReveal";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations.process;

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: t.discover.title[language],
      description: t.discover.description[language],
      color: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: Paintbrush,
      number: "02",
      title: t.design.title[language],
      description: t.design.description[language],
      color: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      icon: Code2,
      number: "03",
      title: t.build.title[language],
      description: t.build.description[language],
      color: "bg-pink-50 dark:bg-pink-950/30",
    },
    {
      icon: Rocket,
      number: "04",
      title: t.launch.title[language],
      description: t.launch.description[language],
      color: "bg-amber-50 dark:bg-amber-950/30",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <ScrollReveal delay={0} direction="up">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.title[language]}
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl">
              {t.subtitle[language]}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 100} direction="up">
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(50%+2rem)] top-24 w-px h-12 bg-gradient-to-b from-primary/20 to-transparent" />
                  )}
                  
                  <div className={`relative ${step.color} border border-border/30 rounded-2xl p-8 h-full flex flex-col group hover:border-primary/40 transition-all duration-300`}>
                    <div className="w-14 h-14 rounded-lg bg-white dark:bg-gray-800 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    
                    <span className="text-sm font-bold text-primary/60 mb-2 uppercase tracking-wider">{t.stepLabel[language]} {step.number}</span>
                    <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
