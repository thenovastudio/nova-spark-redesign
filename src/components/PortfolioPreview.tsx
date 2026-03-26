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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-12 border-b-2 border-primary/20">
          <div className="max-w-3xl">
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
          <Button asChild variant="outline" size="lg" className="border-2 border-border hover:border-primary/60 hover:shadow-lg font-bold whitespace-nowrap">
            <Link to="/work" className="inline-flex items-center gap-3">
              {t.viewAll[language]}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work#${project.id}`}
              className="group border-2 border-border rounded-lg overflow-hidden hover:border-primary/60 hover:shadow-2xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div
                className={`aspect-[4/3] ${project.color} flex items-center justify-center overflow-hidden bg-secondary/5 relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110 relative z-5"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 border-t-2 border-border bg-background group-hover:bg-primary/2 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary/40 group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
