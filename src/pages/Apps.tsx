import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart3, Share2, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";

interface App {
  name: string;
  slogan: string;
  description: string;
  fullDescription: string;
  url: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
}

const Apps = () => {
  const { language } = useLanguage();
  const t = translations.apps;

  const apps: App[] = [
    {
      name: "Monitra",
      slogan:
        language === "nl"
          ? "Inzicht in je website analytics"
          : language === "en"
          ? "Understand Your Website Performance"
          : "Comprendre Vos Performances",
      description:
        language === "nl"
          ? "Realtime monitoring en analytics voor je websiteperformance"
          : language === "en"
          ? "Real-time monitoring and analytics for your website"
          : "Surveillance et analyse en temps réel de votre site",
      fullDescription:
        language === "nl"
          ? "Bekijk bezoekersbehavior, conversies en performance metrics. Maak datagestuurde beslissingen met gedetailleerde rapporten en inzichten."
          : language === "en"
          ? "Track visitor behavior, conversions, and performance metrics. Make data-driven decisions with detailed reports and insights."
          : "Suivez le comportement des visiteurs, les conversions et les métriques de performance. Prenez des décisions basées sur les données.",
      url: "https://monitra.thenovastudio.be/",
      gradient: "from-blue-500 to-cyan-500",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-500",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" className="fill-current opacity-10" />
          <path
            d="M16 40V24M32 40V16M48 40V28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="16" cy="24" r="2.5" fill="currentColor" />
          <circle cx="32" cy="16" r="2.5" fill="currentColor" />
          <circle cx="48" cy="28" r="2.5" fill="currentColor" />
        </svg>
      ),
      features: [
        language === "nl" ? "Realtime analytics" : language === "en" ? "Real-time analytics" : "Analyse en temps réel",
        language === "nl" ? "Conversie tracking" : language === "en" ? "Conversion tracking" : "Suivi des conversions",
        language === "nl" ? "Gedetailleerde rapporten" : language === "en" ? "Detailed reports" : "Rapports détaillés",
        language === "nl" ? "Doelgroep inzichten" : language === "en" ? "Audience insights" : "Informations sur l'audience",
      ],
      ctaText: t.visitApp[language],
    },
    {
      name: "Social",
      slogan:
        language === "nl"
          ? "Beheer je social media moeiteloos"
          : language === "en"
          ? "Manage Your Social Media Effortlessly"
          : "Gérez Votre Réseaux Sociaux",
      description:
        language === "nl"
          ? "Plannen, publiceren en analyseren van al je social media kanalen op één plek"
          : language === "en"
          ? "Schedule, publish, and analyze all your social media channels in one place"
          : "Planifiez, publiez et analysez tous vos canaux de médias sociaux",
      fullDescription:
        language === "nl"
          ? "Spaar tijd door berichten vooruit in te plannen. Volg engagement op al je platformen. Optimaliseer je social media strategie met analytics."
          : language === "en"
          ? "Save time by scheduling posts in advance. Track engagement across all platforms. Optimize your social strategy with analytics."
          : "Gagnez du temps en programmant vos messages. Suivez l'engagement sur toutes les plateformes.",
      url: "https://social.thenovastudio.be/",
      gradient: "from-purple-500 to-pink-500",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-500",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" className="fill-current opacity-10" />
          <circle cx="20" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="44" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="44" r="6" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="28" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="24" x2="42" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="36" x2="36" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="42" x2="24" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      features: [
        language === "nl" ? "Post scheduling" : language === "en" ? "Post scheduling" : "Planification des messages",
        language === "nl" ? "Multi-channel management" : language === "en" ? "Multi-channel management" : "Gestion multi-canaux",
        language === "nl" ? "Engagement analytics" : language === "en" ? "Engagement analytics" : "Analyse d'engagement",
        language === "nl" ? "Content calendar" : language === "en" ? "Content calendar" : "Calendrier de contenu",
      ],
      ctaText: t.visitApp[language],
    },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead page="apps" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="container max-w-5xl">
          <div className="space-y-6 border-l-4 border-primary pl-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              {language === "nl" ? "Onze Platform Suite" : language === "en" ? "Our Platform Suite" : "Notre Suite Platforme"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-secondary">
              {t.title[language]}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {t.subtitle[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="pb-24 border-b border-border">
        <div className="container max-w-6xl">
          <div className="space-y-24">
            {apps.map((app, index) => (
              <div key={app.name} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Logo and Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    {/* Logo */}
                    <div className={`w-20 h-20 rounded-md border border-primary/20 bg-primary/5 p-3 text-primary`}>
                      {app.icon}
                    </div>

                    {/* Title and Slogan */}
                    <div className="space-y-3">
                      <h2 className="text-4xl md:text-5xl font-bold text-secondary">{app.name}</h2>
                      <p className="text-xl font-semibold text-primary">
                        {app.slogan}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {app.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                      {app.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {app.ctaText}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Visual showcase */}
                  <div className={`relative h-96 rounded-md overflow-hidden border border-border bg-background ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-6xl mb-6 text-primary/20 group-hover:text-primary/30 transition-colors">
                        {app.icon}
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {language === "nl" ? "Schakelaar naar live app →" : language === "en" ? "Switch to live app →" : "Basculer vers l'app en direct →"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-16 border-b border-primary/20 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {language === "nl" ? "Waarom onze platforms?" : language === "en" ? "Why Our Platforms?" : "Pourquoi nos plateformes?"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-secondary">
                {language === "nl" ? "Ultrasnél" : language === "en" ? "Lightning Fast" : "Ultra Rapide"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "nl" ? "Gebuild voor snelheid en performance" : language === "en" ? "Built for speed and performance" : "Construit pour la vitesse"}
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-secondary">
                {language === "nl" ? "Data-gestuurde Inzichten" : language === "en" ? "Data-Driven Insights" : "Informations Basées sur les Données"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "nl" ? "Real-time analytics en rapportage" : language === "en" ? "Real-time analytics and reporting" : "Analyse et rapports en temps réel"}
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-secondary">
                {language === "nl" ? "Bespaar Tijd" : language === "en" ? "Save Time" : "Gagnez du Temps"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "nl" ? "Automatisering en scheduling tools" : language === "en" ? "Automation and scheduling tools" : "Outils d'automatisation et de programmation"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Apps;
