import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

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
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20"><div className="container"><div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.title[language]}</h1>
        <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
      </div></div></section>
      <section className="pb-24"><div className="container"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-secondary rounded-2xl overflow-hidden"><img src="/about.svg" alt="Nova Studio workspace" className="w-full h-full object-cover" /></div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{t.storyTitle[language]}</h2>
          <div className="space-y-4 text-muted-foreground"><p>{t.storyP1[language]}</p><p>{t.storyP2[language]}</p><p>{t.storyP3[language]}</p></div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /><span>{t.basedIn[language]}</span></div>
            <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-primary" /><span>contact@thenovastudio.be</span></div>
          </div>
        </div>
      </div></div></section>
      <section className="py-24 bg-secondary/30"><div className="container">
        <div className="max-w-2xl mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.valuesTitle[language]}</h2><p className="mt-4 text-lg text-muted-foreground">{t.valuesSubtitle[language]}</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{values.map((value, index) => (<div key={value.title} className="glass-card rounded-2xl p-8"><span className="text-sm font-medium text-primary">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold">{value.title}</h3><p className="mt-2 text-muted-foreground">{value.description}</p></div>))}</div>
      </div></section>
      <section className="section-padding"><div className="container"><div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{t.workTogether[language]}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t.workTogetherDesc[language]}</p>
        <Button asChild variant="default" size="lg" className="mt-8"><Link to="/contact">{t.startConversation[language]}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
      </div></div></section>
      <Footer />
    </main>
  );
};

export default About;
