import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "nova-studio",
    title: "Nova Studio Website",
    category: "Web Design & Development",
    year: "2024",
    color: "bg-primary/10",
    problem: "We needed our own digital presence that would effectively showcase our capabilities and convert visitors into clients.",
    solution: "A clean, conversion-focused website with strong visual hierarchy, smooth animations, and clear calls-to-action throughout.",
    value: "A professional home base that represents our brand and generates consistent project inquiries.",
    image: "/placeholder.svg",
  },
  {
    id: "finance-app",
    title: "Power Plan",
    category: "iOS App Concept",
    year: "2025",
    color: "bg-emerald-500/10",
    problem: "Managing daily energy usage and power-related routines is often unclear and fragmented, making it hard for users to stay efficient and consistent.",
    solution: "Power Plan introduces a clean, structured interface that helps users plan, track, and understand their energy usage through simple overviews and focused functionality.",
    value: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
    image: "/powerplan.svg",
  },
  {
    id: "artisan-ecommerce",
    title: "Artisan E-commerce",
    category: "Web Design",
    year: "2023",
    color: "bg-amber-500/10",
    problem: "A local Belgian artisan was losing sales because their products were only available at weekend markets.",
    solution: "An elegant e-commerce platform that reflects the handcrafted quality of their products with seamless checkout.",
    value: "40% increase in monthly revenue through online sales, reaching customers across Belgium.",
    image: "/placeholder.svg",
  },
  {
    id: "law-firm",
    title: "Modern Law Firm",
    category: "Web Design",
    year: "2023",
    color: "bg-slate-500/10",
    problem: "An established law firm had an outdated website that didn't inspire confidence or generate new client inquiries.",
    solution: "A professional, trustworthy design with clear practice areas, team bios, and easy contact options.",
    value: "3x increase in website inquiries within the first two months after launch.",
    image: "/placeholder.svg",
  },
];

const Work = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Work
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Real projects with real results. Every project tells a story of 
              a problem solved and value delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                            <div className={`aspect-[4/3] ${project.color} rounded-2xl flex items-center justify-center overflow-hidden`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-8"
                                />
                            </div>

                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                    
                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          The Problem
                        </h3>
                        <p className="text-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Our Solution
                        </h3>
                        <p className="text-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          The Value
                        </h3>
                        <p className="text-foreground">{project.value}</p>
                      </div>
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
