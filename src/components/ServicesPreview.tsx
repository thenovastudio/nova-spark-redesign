import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ServicesPreview() {
  const { language } = useLanguage();
  const t = translations.servicesPreview;

  const services = [
    {
      icon: Globe,
      title: t.webDesign.title[language],
      description: t.webDesign.description[language],
      color: "from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Smartphone,
      title: t.mobile.title[language],
      description: t.mobile.description[language],
      color: "from-purple-100 to-purple-50 dark:from-purple-950 dark:to-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Palette,
      title: t.brand.title[language],
      description: t.brand.description[language],
      color: "from-pink-100 to-pink-50 dark:from-pink-950 dark:to-pink-900/50",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: Zap,
      title: t.performance.title[language],
      description: t.performance.description[language],
      color: "from-amber-100 to-amber-50 dark:from-amber-950 dark:to-amber-900/50",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t.title[language]}
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} border border-border/30 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <Link 
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    {language === "nl" ? "Bekijk meer" : language === "fr" ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
