import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ServicesPreview() {
  const { language } = useLanguage();
  const t = translations.servicesPreview;

  const services = [
    {
      num: "01",
      title: t.webDesign.title[language],
      description: t.webDesign.description[language],
    },
    {
      num: "02",
      title: t.mobile.title[language],
      description: t.mobile.description[language],
    },
    {
      num: "03",
      title: t.brand.title[language],
      description: t.brand.description[language],
    },
    {
      num: "04",
      title: t.performance.title[language],
      description: t.performance.description[language],
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-3">
              {t.title[language]}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {t.subtitle[language]}
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all shrink-0"
          >
            {language === "nl" ? "Alle diensten" : language === "fr" ? "Tous les services" : "All services"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-background p-8 md:p-10 group hover:bg-muted/30 transition-colors duration-300"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                {service.num}
              </span>
              <h3 className="text-xl font-bold text-secondary mt-3 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
