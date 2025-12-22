import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      color: "bg-primary/10",
    },
    {
      id: "powerplan-app",
      title: t.projects.powerPlan.title[language],
      category: t.projects.powerPlan.category[language],
      description: t.projects.powerPlan.description[language],
      image: "/powerplan.svg",
      color: "bg-emerald-500/10",
    },
    {
      id: "sleepreset-app",
      title: t.projects.sleepReset.title[language],
      category: t.projects.sleepReset.category[language],
      description: t.projects.sleepReset.description[language],
      image: "/sleepreset.svg",
      color: "bg-amber-500/10",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t.title[language]}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.subtitle[language]}
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/work">
              {t.viewAll[language]}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work#${project.id}`}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* IMAGE */}
              <div
                className={`aspect-[4/3] ${project.color} flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mt-2 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
