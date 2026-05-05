import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";

const About = () => {
  const { language } = useLanguage();
  const t = translations.about;

  const values = [
    { title: t.values.quality.title[language], description: t.values.quality.description[language] },
    { title: t.values.honesty.title[language], description: t.values.honesty.description[language] },
    { title: t.values.improvement.title[language], description: t.values.improvement.description[language] },
    { title: t.values.longTerm.title[language], description: t.values.longTerm.description[language] },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead page="about" />
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border"><div className="container"><div className="max-w-3xl border-l-4 border-primary pl-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary">{t.title[language]}</h1>
        <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
      </div></div></section>
      <section className="pb-24 pt-16"><div className="container"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-square bg-secondary/5 rounded-md overflow-hidden border border-border"><img src="/about.svg" alt="Codevio workspace" className="w-full h-full object-cover" /></div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-secondary">{t.storyTitle[language]}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed"><p>{t.storyP1[language]}</p><p>{t.storyP2[language]}</p><p>{t.storyP3[language]}</p></div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground">{t.basedIn[language]}</span></div>
            <div className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground">webdevelopment@codevio.be</span></div>
          </div>
        </div>
      </div></div></section>
      <section className="py-24 bg-background border-t border-border"><div className="container">
        <div className="max-w-2xl mb-16 border-b border-primary/20 pb-8"><h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">{t.valuesTitle[language]}</h2><p className="mt-4 text-lg text-muted-foreground">{t.valuesSubtitle[language]}</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{values.map((value, index) => (<div key={value.title} className="border border-border bg-background rounded-md p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"><span className="text-sm font-bold text-primary uppercase tracking-wider">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-secondary">{value.title}</h3><p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p></div>))}</div>
      </div></section>
      <section className="section-padding bg-background"><div className="container"><div className="max-w-2xl mx-auto text-center border-t border-primary/20 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">{t.workTogether[language]}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t.workTogetherDesc[language]}</p>
        <FlowHoverButton asChild variant="default" size="lg" className="mt-8">
          <Link to="/contact">{t.startConversation[language]}<ArrowRight className="ml-2 h-4 w-4" /></Link>
        </FlowHoverButton>
      </div></div></section>
      <Footer />
    </main>
  );
};

export default About;
