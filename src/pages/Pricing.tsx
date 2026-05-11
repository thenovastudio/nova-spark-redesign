import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight, Check, Star, Zap, Rocket, Crown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

const pricingData = {
  title: {
    nl: "Wat kost een website?",
    en: "What does a website cost?",
    fr: "Combien coûte un site web ?",
  },
  subtitle: {
    nl: "Transparante prijzen, geen verborgen kosten. Kies het pakket dat bij uw bedrijf past.",
    en: "Transparent pricing, no hidden fees. Choose the package that fits your business.",
    fr: "Prix transparents, sans frais cachés. Choisissez le forfait adapté à votre entreprise.",
  },
  popular: { nl: "Populairste", en: "Most popular", fr: "Le plus populaire" },
  perProject: { nl: "per project", en: "per project", fr: "par projet" },
  getStarted: { nl: "Aan de slag", en: "Get started", fr: "Commencer" },
  contactUs: { nl: "Neem contact op", en: "Contact us", fr: "Contactez-nous" },
  packs: [
    {
      icon: Zap,
      name: { nl: "Starter", en: "Starter", fr: "Starter" },
      price: "€199",
      description: {
        nl: "Perfect voor freelancers en starters die snel online willen.",
        en: "Perfect for freelancers and startups who want to go online quickly.",
        fr: "Parfait pour les freelances et startups qui veulent être en ligne rapidement.",
      },
      features: {
        nl: [
          "One-page website",
          "Responsive design (mobiel-vriendelijk)",
          "Contactformulier",
          "Basis SEO-optimalisatie",
          "1 revisieronde",
          "Oplevering in 5 werkdagen",
        ],
        en: [
          "One-page website",
          "Responsive design (mobile-friendly)",
          "Contact form",
          "Basic SEO optimization",
          "1 revision round",
          "Delivery in 5 business days",
        ],
        fr: [
          "Site one-page",
          "Design responsive (mobile-friendly)",
          "Formulaire de contact",
          "Optimisation SEO de base",
          "1 tour de révision",
          "Livraison en 5 jours ouvrables",
        ],
      },
      highlight: false,
    },
    {
      icon: Rocket,
      name: { nl: "Professional", en: "Professional", fr: "Professionnel" },
      price: "€399",
      description: {
        nl: "Voor bedrijven die een professionele online aanwezigheid willen.",
        en: "For businesses that want a professional online presence.",
        fr: "Pour les entreprises qui veulent une présence en ligne professionnelle.",
      },
      features: {
        nl: [
          "Multi-page website (tot 5 pagina's)",
          "Custom design op maat",
          "Responsive + snelle laadtijden",
          "Contactformulier + Google Maps",
          "Geavanceerde SEO-setup",
          "2 revisierondes",
          "Oplevering in 10 werkdagen",
          "30 dagen gratis support",
        ],
        en: [
          "Multi-page website (up to 5 pages)",
          "Custom tailored design",
          "Responsive + fast loading",
          "Contact form + Google Maps",
          "Advanced SEO setup",
          "2 revision rounds",
          "Delivery in 10 business days",
          "30 days free support",
        ],
        fr: [
          "Site multi-pages (jusqu'à 5 pages)",
          "Design personnalisé",
          "Responsive + chargement rapide",
          "Formulaire de contact + Google Maps",
          "Configuration SEO avancée",
          "2 tours de révision",
          "Livraison en 10 jours ouvrables",
          "30 jours de support gratuit",
        ],
      },
      highlight: true,
    },
    {
      icon: Star,
      name: { nl: "Business", en: "Business", fr: "Business" },
      price: "€799",
      description: {
        nl: "Een complete oplossing voor bedrijven die willen groeien.",
        en: "A complete solution for businesses ready to grow.",
        fr: "Une solution complète pour les entreprises prêtes à grandir.",
      },
      features: {
        nl: [
          "Uitgebreide website (tot 10 pagina's)",
          "Premium custom design",
          "Animaties & micro-interacties",
          "Blog/nieuwssectie",
          "Volledige SEO + analytics integratie",
          "Meertalig (NL/EN/FR)",
          "3 revisierondes",
          "Oplevering in 2-3 weken",
          "60 dagen gratis support",
          "Hosting inbegrepen (1 jaar)",
        ],
        en: [
          "Extended website (up to 10 pages)",
          "Premium custom design",
          "Animations & micro-interactions",
          "Blog/news section",
          "Full SEO + analytics integration",
          "Multilingual (NL/EN/FR)",
          "3 revision rounds",
          "Delivery in 2-3 weeks",
          "60 days free support",
          "Hosting included (1 year)",
        ],
        fr: [
          "Site étendu (jusqu'à 10 pages)",
          "Design premium personnalisé",
          "Animations & micro-interactions",
          "Section blog/actualités",
          "SEO complet + intégration analytics",
          "Multilingue (NL/EN/FR)",
          "3 tours de révision",
          "Livraison en 2-3 semaines",
          "60 jours de support gratuit",
          "Hébergement inclus (1 an)",
        ],
      },
      highlight: false,
    },
    {
      icon: Crown,
      name: { nl: "Op Maat", en: "Custom", fr: "Sur Mesure" },
      price: null,
      description: {
        nl: "Een volledig op maat gemaakte oplossing voor unieke projecten.",
        en: "A fully custom-built solution for unique projects.",
        fr: "Une solution entièrement sur mesure pour des projets uniques.",
      },
      features: {
        nl: [
          "Onbeperkt aantal pagina's",
          "Volledig op maat ontworpen",
          "Webapplicaties & dashboards",
          "E-commerce integratie",
          "API-koppelingen & automatisering",
          "CMS op maat",
          "Onbeperkte revisies",
          "Dedicated projectmanager",
          "Doorlopende support & onderhoud",
          "Alles uit het Business pakket",
        ],
        en: [
          "Unlimited pages",
          "Fully custom designed",
          "Web applications & dashboards",
          "E-commerce integration",
          "API integrations & automation",
          "Custom CMS",
          "Unlimited revisions",
          "Dedicated project manager",
          "Ongoing support & maintenance",
          "Everything from the Business package",
        ],
        fr: [
          "Pages illimitées",
          "Design entièrement personnalisé",
          "Applications web & tableaux de bord",
          "Intégration e-commerce",
          "Intégrations API & automatisation",
          "CMS sur mesure",
          "Révisions illimitées",
          "Chef de projet dédié",
          "Support & maintenance continus",
          "Tout du forfait Business",
        ],
      },
      highlight: false,
    },
  ],
};

const Pricing = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen">
      <SEOHead page="pricing" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl border-l-4 border-primary pl-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary">
              {pricingData.title[language]}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {pricingData.subtitle[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pricingData.packs.map((pack) => {
              const Icon = pack.icon;
              return (
                <div
                  key={pack.name.en}
                  className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 hover:shadow-lg ${
                    pack.highlight
                      ? "border-primary bg-primary/[0.03] shadow-md scale-[1.02]"
                      : "border-border bg-background hover:border-primary/30"
                  }`}
                >
                  {/* Popular badge */}
                  {pack.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                      {pricingData.popular[language]}
                    </div>
                  )}

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      pack.highlight ? "bg-primary/15" : "bg-muted"
                    }`}>
                      <Icon className={`h-5 w-5 ${pack.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{pack.name[language]}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {pack.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-secondary tracking-tight">{pack.price}</span>
                        <span className="text-sm text-muted-foreground">/{pricingData.perProject[language]}</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-primary tracking-tight">
                        {language === "nl" ? "Prijs op aanvraag" : language === "fr" ? "Prix sur demande" : "Price on request"}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {pack.description[language]}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pack.features[language].map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${pack.highlight ? "text-primary" : "text-primary/70"}`} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <FlowHoverButton
                    asChild
                    size="lg"
                    variant={pack.highlight ? "default" : "outline"}
                    className="w-full"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link to="/contact">
                      {pack.price ? pricingData.getStarted[language] : pricingData.contactUs[language]}
                    </Link>
                  </FlowHoverButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="py-16 md:py-24 border-t border-border bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              {language === "nl" ? "Vragen over onze prijzen?" : language === "fr" ? "Questions sur nos prix ?" : "Questions about our pricing?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {language === "nl"
                ? "Elk project is uniek. Neem vrijblijvend contact op en we bespreken samen welk pakket het beste bij u past."
                : language === "fr"
                  ? "Chaque projet est unique. Contactez-nous sans engagement et nous discuterons ensemble du forfait qui vous convient le mieux."
                  : "Every project is unique. Get in touch with no obligation and we'll discuss which package suits you best."}
            </p>
            <FlowHoverButton asChild size="lg" variant="default" icon={<ArrowRight className="h-4 w-4" />}>
              <Link to="/contact">
                {language === "nl" ? "Gratis adviesgesprek" : language === "fr" ? "Consultation gratuite" : "Free consultation"}
              </Link>
            </FlowHoverButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
