import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const projects = [
  { id: "nova-studio", year: "2024", color: "bg-primary/10", image: "website-building.svg" },
  { id: "powerplan-app", year: "2025", color: "bg-emerald-500/10", image: "/powerplan.svg" },
  { id: "sleepreset-app", year: "2023", color: "bg-amber-500/10", image: "/sleepreset.svg" },
  { id: "advanced-notes", year: "2023", color: "bg-slate-500/10", image: "/advanced-notes.svg" },
];

const Work = () => {
  const { language } = useLanguage();
  const t = translations.work;
  const p = translations.portfolio.projects;

  const projectData = [
    { ...projects[0], title: p.novaStudio.title[language], category: t.projects.novaStudio ? "Web Design & Development" : "Web Design & Development", problem: t.projects.novaStudio.problem[language], solution: t.projects.novaStudio.solution[language], value: t.projects.novaStudio.value[language] },
    { ...projects[1], title: p.powerPlan.title[language], category: p.powerPlan.category[language], problem: t.projects.powerPlan.problem[language], solution: t.projects.powerPlan.solution[language], value: t.projects.powerPlan.value[language] },
    { ...projects[2], title: p.sleepReset.title[language], category: p.sleepReset.category[language], problem: t.projects.sleepReset.problem[language], solution: t.projects.sleepReset.solution[language], value: t.projects.sleepReset.value[language] },
    { ...projects[3], title: t.projects.advancedNotes.title[language], category: t.projects.advancedNotes.category[language], problem: t.projects.advancedNotes.problem[language], solution: t.projects.advancedNotes.solution[language], value: t.projects.advancedNotes.value[language] },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.title[language]}</h1>
            <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container">
          <div className="space-y-24">
            {projectData.map((project, index) => (
              <article key={project.id} id={project.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className={`aspect-[4/3] ${project.color} rounded-2xl flex items-center justify-center overflow-hidden`}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8" />
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{project.category}</span><span>•</span><span>{project.year}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                    <div className="mt-8 space-y-6">
                      <div><h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t.problem[language]}</h3><p className="text-foreground">{project.problem}</p></div>
                      <div><h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t.solution[language]}</h3><p className="text-foreground">{project.solution}</p></div>
                      <div><h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t.value[language]}</h3><p className="text-foreground">{project.value}</p></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Work;
