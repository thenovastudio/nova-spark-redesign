import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 md:p-20">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to stand out online?
            </h2>
            <p className="mt-4 text-lg opacity-80">
              Let's build something that actually grows your business. 
              No commitments — just a conversation about your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
