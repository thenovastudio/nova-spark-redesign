import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, XCircle, ArrowRight, Clock, Target, TrendingUp, Users } from "lucide-react";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";

const Why = () => {
  const { language } = useLanguage();
  const t = translations.why;

  const stats = [
    { icon: Clock, value: "2-4", label: t.stats.delivery[language] },
    { icon: Target, value: "50+", label: t.stats.clients[language] },
    { icon: TrendingUp, value: "3x", label: t.stats.increase[language] },
    { icon: Users, value: "100%", label: t.stats.pricing[language] },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead page="why" />
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
        <div className="container"><div className="max-w-3xl border-l-4 border-primary pl-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary">{t.title[language]}</h1>
          <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
        </div></div>
      </section>
      <section className="pb-24 pt-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-border bg-background rounded-md p-8">
              <h2 className="text-2xl font-bold mb-8 text-secondary">{t.soundFamiliar[language]}</h2>
              <ul className="space-y-4">{t.problems[language].map((problem) => (<li key={problem} className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" /><span className="text-muted-foreground">{problem}</span></li>))}</ul>
            </div>
            <div className="border border-primary/30 bg-background rounded-md p-8">
              <h2 className="text-2xl font-bold mb-8 text-secondary">{t.whatWeDeliver[language]}</h2>
              <ul className="space-y-4">{t.solutions[language].map((solution) => (<li key={solution} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground">{solution}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background border-t border-border">
        <div className="container"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat) => (<div key={stat.label} className="text-center"><div className="inline-flex items-center justify-center w-12 h-12 rounded-md border border-primary/20 bg-primary/5 mb-4"><stat.icon className="h-6 w-6 text-primary" /></div><div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div><div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div></div>))}</div></div>
      </section>
      <section className="section-padding bg-background">
        <div className="container"><div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">{t.approach.title[language]}</h2>
          <div className="space-y-12 border-l-4 border-primary pl-6">
            <div><h3 className="text-xl font-bold mb-3 text-secondary">{t.approach.resultsTitle[language]}</h3><p className="text-muted-foreground leading-relaxed">{t.approach.resultsDesc[language]}</p></div>
            <div><h3 className="text-xl font-bold mb-3 text-secondary">{t.approach.speedTitle[language]}</h3><p className="text-muted-foreground leading-relaxed">{t.approach.speedDesc[language]}</p></div>
            <div><h3 className="text-xl font-bold mb-3 text-secondary">{t.approach.surprisesTitle[language]}</h3><p className="text-muted-foreground leading-relaxed">{t.approach.surprisesDesc[language]}</p></div>
            <div><h3 className="text-xl font-bold mb-3 text-secondary">{t.approach.lastingTitle[language]}</h3><p className="text-muted-foreground leading-relaxed">{t.approach.lastingDesc[language]}</p></div>
          </div>
          <div className="mt-12 text-center"><FlowHoverButton asChild variant="default" size="lg"><Link to="/contact">{t.letsTalk[language]}<ArrowRight className="ml-2 h-4 w-4" /></Link></FlowHoverButton></div>
        </div></div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Why;
