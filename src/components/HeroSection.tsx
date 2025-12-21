import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(231 100% 62% / 0.15), transparent)" }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Digital Studio • Belgium
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            We build websites that{" "}
            <span className="text-gradient">actually work</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Your online presence should generate leads, not just look pretty. 
            We craft high-converting websites for businesses ready to grow.
          </p>

          <div className="opacity-0 animate-fade-in-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>

          <div className="opacity-0 animate-fade-in-up mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Currently available</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <span className="hidden sm:inline">Trusted by 50+ businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
