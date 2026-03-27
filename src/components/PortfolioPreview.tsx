import { Link } from "react-router-dom";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
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
      bgGradient: "from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900/30",
    },
    {
      id: "powerplan-app",
      title: t.projects.powerPlan.title[language],
      category: t.projects.powerPlan.category[language],
      description: t.projects.powerPlan.description[language],
      image: "/powerplan.svg",
      bgGradient: "from-emerald-100 to-emerald-50 dark:from-emerald-950 dark:to-emerald-900/30",
    },
    {
      id: "sleepreset-app",
      title: t.projects.sleepReset.title[language],
      category: t.projects.sleepReset.category[language],
      description: t.projects.sleepReset.description[language],
      image: "/sleepreset.svg",
      bgGradient: "from-amber-100 to-amber-50 dark:from-amber-950 dark:to-amber-900/30",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.title[language]}
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl">
              {t.subtitle[language]}
            </p>
          </div>
          <FlowHoverButton asChild size="lg" variant="default">
            <Link to="/work" className="inline-flex items-center gap-2 font-bold px-8 h-auto py-3 whitespace-nowrap">
              {t.viewAll[language]}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FlowHoverButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work#${project.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Section */}
              <div className={`relative aspect-video bg-gradient-to-br ${project.bgGradient} overflow-hidden flex items-center justify-center`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                <span className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                  {language === "nl" ? "Bekijk project" : language === "fr" ? "Voir le projet" : "View project"}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
