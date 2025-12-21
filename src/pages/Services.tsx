import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ProcessSection } from "@/components/ProcessSection";
import { Globe, Smartphone, Palette, Zap, Search, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom websites built from scratch. No templates, no page builders — just clean, fast, beautiful code that's built to convert.",
    features: [
      "Custom design tailored to your brand",
      "Responsive across all devices",
      "Built for speed and performance",
      "SEO-ready from day one",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Over 60% of web traffic is mobile. We design for phones first, then scale up to tablets and desktops for a flawless experience everywhere.",
    features: [
      "Touch-optimized interfaces",
      "Fast loading on mobile networks",
      "Thumb-friendly navigation",
      "Progressive Web App ready",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "More than just a logo. We create complete visual identity systems that make your business instantly recognizable and memorable.",
    features: [
      "Logo design & variations",
      "Color palette & typography",
      "Brand guidelines document",
      "Social media assets",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Slow websites lose visitors. We optimize every aspect of your site for lightning-fast load times and smooth interactions.",
    features: [
      "Core Web Vitals optimization",
      "Image & asset optimization",
      "Code minification",
      "CDN setup & caching",
    ],
  },
  {
    icon: Search,
    title: "SEO Foundation",
    description: "Every site we build includes a solid SEO foundation so you can be found by the people searching for what you offer.",
    features: [
      "Technical SEO setup",
      "Meta tags & structured data",
      "Sitemap & robots.txt",
      "Google Search Console setup",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Understand your visitors and measure what matters. We set up proper tracking so you can make data-driven decisions.",
    features: [
      "Google Analytics 4 setup",
      "Conversion tracking",
      "Goal configuration",
      "Monthly reporting",
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Everything you need to establish a powerful online presence. 
              Focused offerings that deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground">
              Every project is unique, so we quote per project — not hourly rates that add up unpredictably. 
              You'll know exactly what you're paying before we start.
            </p>
            <Button asChild variant="default" size="lg" className="mt-8">
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
