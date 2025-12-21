import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "nova-studio",
    title: "Nova Studio Website",
    category: "Web Design",
    description: "Our own digital home — designed to convert visitors into clients.",
    image: "/placeholder.svg",
    color: "bg-primary/10",
  },
  {
    id: "finance-app",
    title: "Power Plan",
    category: "iOS App Concept",
    description: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
    image: "/powerplan.svg",
    color: "bg-emerald-500/10",
  },
  {
    id: "ecommerce",
    title: "Artisan E-commerce",
    category: "Web Design",
    description: "An elegant online store for a local Belgian artisan.",
    image: "/placeholder.svg",
    color: "bg-amber-500/10",
  },
];

export function PortfolioPreview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Selected work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real projects with measurable results. See how we've helped businesses grow.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/work">
              View All Projects
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
              <div className={`aspect-[4/3] ${project.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-foreground/10">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
