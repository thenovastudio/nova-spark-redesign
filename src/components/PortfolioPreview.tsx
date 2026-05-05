import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function PortfolioPreview() {
  const { language } = useLanguage();
  const t = translations.portfolio;

  const projects = [
    {
      id: "nova-studio",
      title: t.projects.novaStudio.title[language],
      category: t.projects.novaStudio.category[language],
      description: t.projects.novaStudio.description[language],
      image: "/website-building.svg",
    },
    {
      id: "powerplan-app",
      title: t.projects.powerPlan.title[language],
      category: t.projects.powerPlan.category[language],
      description: t.projects.powerPlan.description[language],
      image: "/powerplan.svg",
    },
    {
      id: "sleepreset-app",
      title: t.projects.sleepReset.title[language],
      category: t.projects.sleepReset.category[language],
      description: t.projects.sleepReset.description[language],
      image: "/sleepreset.svg",
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
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all shrink-0"
          >
            {t.viewAll[language]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work#${project.id}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-muted/30 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-bold text-secondary mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
