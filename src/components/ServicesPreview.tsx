import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, Smartphone, Palette, Zap } from "lucide-react";
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
    },
    {
      icon: Smartphone,
      title: t.mobile.title[language],
      description: t.mobile.description[language],
    },
    {
      icon: Palette,
      title: t.brand.title[language],
      description: t.brand.description[language],
    },
    {
      icon: Zap,
      title: t.performance.title[language],
      description: t.performance.description[language],
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-6 px-4 py-2 border border-primary/30 bg-primary/8 rounded-lg">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{t.title[language]}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {t.title[language]}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group relative border-2 border-border bg-background rounded-lg p-8 hover:border-primary/60 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-lg border-2 border-primary/30 bg-primary/10 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-primary/40 group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
