import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, Smartphone, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom websites built for speed, conversions, and growth. No templates, no compromises.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive experiences that look and perform beautifully on every device.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Visual identity systems that make your business instantly recognizable.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times that keep visitors engaged and improve SEO.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What we do best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Focused services designed to get you results. Nothing more, nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group glass-card rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
