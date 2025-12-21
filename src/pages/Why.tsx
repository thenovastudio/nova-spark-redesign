import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, XCircle, ArrowRight, Clock, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const problems = [
  "Your website looks outdated and doesn't represent your business quality",
  "You're losing potential customers to competitors with better online presence",
  "Your site doesn't work well on phones (60%+ of traffic)",
  "You have no idea if your website is actually generating leads",
  "You've been burned by agencies that overpromise and underdeliver",
];

const solutions = [
  "Modern, professional design that builds instant trust",
  "Conversion-focused layouts that turn visitors into leads",
  "Mobile-first approach that works perfectly on every device",
  "Clear analytics and tracking so you know what's working",
  "Fixed pricing, clear timelines, and honest communication",
];

const stats = [
  { icon: Clock, value: "2-4", label: "Week delivery" },
  { icon: Target, value: "50+", label: "Happy clients" },
  { icon: TrendingUp, value: "3x", label: "Avg inquiry increase" },
  { icon: Users, value: "100%", label: "Fixed pricing" },
];

const Why = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Why This Works
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We understand the problems local businesses face online — 
              because we've solved them dozens of times.
            </p>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-8">Sound Familiar?</h2>
              <ul className="space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="glass-card rounded-2xl p-8 border-primary/20">
              <h2 className="text-2xl font-bold mb-8">What We Deliver</h2>
              <ul className="space-y-4">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Approach
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Results Over Aesthetics</h3>
                <p className="text-muted-foreground">
                  A beautiful website that doesn't generate leads is just expensive art. 
                  We design with conversion in mind — every element serves a purpose. 
                  Clear value propositions, strategic CTAs, and friction-free user experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Speed Matters</h3>
                <p className="text-muted-foreground">
                  We don't drag projects out for months. Our streamlined process delivers 
                  your website in 2-4 weeks, not 2-4 months. We respect your time because 
                  every day without a proper website is a day of missed opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">No Surprises</h3>
                <p className="text-muted-foreground">
                  Fixed pricing means you know exactly what you're paying before we start. 
                  No hourly rates that spiral, no "unexpected" costs. We scope carefully, 
                  price fairly, and deliver what we promise.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Built to Last</h3>
                <p className="text-muted-foreground">
                  We don't use page builders or bloated templates. Clean, modern code means 
                  your website loads fast, ranks better, and won't fall apart when you need 
                  to make changes. Plus, you actually own it — no vendor lock-in.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="default" size="lg">
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Why;
