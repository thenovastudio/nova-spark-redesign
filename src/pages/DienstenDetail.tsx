import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Monitor, Tag, PenTool, 
  ShoppingCart, BarChart, ShieldAlert, Search, Zap, Server, 
  Users, Mail
} from "lucide-react";

// Content for all 11 services
const servicesData: Record<string, any> = {
  "website-laten-maken": {
    icon: Monitor,
    title: { nl: "Website Laten Maken", en: "Have a Website Built", fr: "Faire Créer un Site Web" },
    subtitle: { nl: "Professionele websites die converteren en indruk maken op uw klanten.", en: "Professional websites that convert and impress your customers.", fr: "Des sites professionnels qui convertissent et impressionnent." },
    description: {
      nl: "Een sterke online aanwezigheid begint met een op maat gemaakte website. Wij bouwen razendsnelle, SEO-geoptimaliseerde websites die perfect aansluiten bij uw merkidentiteit.",
      en: "A strong online presence starts with a custom-built website. We build blazing fast, SEO-optimized websites that perfectly match your brand identity.",
      fr: "Une forte présence en ligne commence par un site sur mesure. Nous créons des sites ultra-rapides et optimisés SEO."
    },
    benefits: {
      nl: ["Custom design dat past bij uw huisstijl", "Geoptimaliseerd voor mobiel en tablet", "Bliksemsnelle laadtijden", "Ingebouwde SEO best practices"],
      en: ["Custom design matching your brand", "Optimized for mobile and tablet", "Lightning fast loading times", "Built-in SEO best practices"],
      fr: ["Design sur mesure adapté à votre marque", "Optimisé pour mobile et tablette", "Temps de chargement ultra-rapides", "Bonnes pratiques SEO intégrées"]
    }
  },
  "betaalbare-website": {
    icon: Tag,
    title: { nl: "Betaalbare Website", en: "Affordable Website", fr: "Site Web Abordable" },
    subtitle: { nl: "Professioneel online zonder de hoofdprijs te betalen.", en: "Professional online presence without breaking the bank.", fr: "Présence professionnelle en ligne sans se ruiner." },
    description: {
      nl: "Speciaal voor starters en kleine ondernemingen bieden wij betaalbare website pakketten. Geen hoge opstartkosten, maar een vast bedrag per jaar inclusief alles wat u nodig heeft.",
      en: "Especially for startups and small businesses, we offer affordable website packages. No high startup costs, just a fixed yearly fee including everything you need.",
      fr: "Spécialement pour les startups et petites entreprises, nous proposons des forfaits abordables."
    },
    benefits: {
      nl: ["Vanaf slechts €299 per jaar", "Inclusief hosting en domeinnaam", "Professioneel sjabloon", "Jaarlijks opzegbaar"],
      en: ["From only €299 per year", "Includes hosting and domain name", "Professional template", "Cancelable yearly"],
      fr: ["À partir de 299€ par an", "Hébergement et nom de domaine inclus", "Modèle professionnel", "Annulable annuellement"]
    }
  },
  "website-compleet": {
    icon: PenTool,
    title: { nl: "Website Compleet", en: "Complete Website", fr: "Site Web Complet" },
    subtitle: { nl: "Website, branding, copywriting en juridische documenten in één pakket.", en: "Website, branding, copywriting and legal documents in one package.", fr: "Site, branding, copywriting et documents juridiques en un seul forfait." },
    description: {
      nl: "Wilt u alles in één keer goed regelen? Met het 'Website Compleet' pakket nemen we al uw zorgen uit handen. Van logo tot algemene voorwaarden, alles wordt voor u geregeld.",
      en: "Want to get everything right at once? With the 'Complete Website' package we take all your worries away. From logo to terms and conditions.",
      fr: "Vous voulez tout bien faire d'un coup ? Avec le forfait 'Site Web Complet', nous gérons tout pour vous."
    },
    benefits: {
      nl: ["Inclusief logo en huisstijl ontwerp", "Professionele copywriting voor alle pagina's", "Privacy policy en algemene voorwaarden", "Volledige ontzorging"],
      en: ["Includes logo and brand identity design", "Professional copywriting for all pages", "Privacy policy and terms of service", "Complete peace of mind"],
      fr: ["Inclut la création de logo et d'identité visuelle", "Copywriting professionnel", "Politique de confidentialité", "Tranquillité d'esprit totale"]
    }
  },
  "webshop": {
    icon: ShoppingCart,
    title: { nl: "Webshop Laten Maken", en: "Have a Webshop Built", fr: "Création de Boutique en Ligne" },
    subtitle: { nl: "Verkoop uw producten 24/7 met een conversiegerichte webshop.", en: "Sell your products 24/7 with a conversion-focused webshop.", fr: "Vendez vos produits 24/7 avec une boutique axée sur la conversion." },
    description: {
      nl: "Een succesvolle webshop draait om gebruiksgemak en vertrouwen. Wij bouwen veilige, snelle e-commerce platformen waar klanten graag terugkomen.",
      en: "A successful webshop is all about ease of use and trust. We build secure, fast e-commerce platforms where customers love to return.",
      fr: "Une boutique en ligne réussie repose sur la facilité d'utilisation. Nous construisons des plateformes e-commerce sécurisées et rapides."
    },
    benefits: {
      nl: ["Veilige betalingsintegraties (Mollie, Stripe)", "Eenvoudig voorraadbeheer", "Geoptimaliseerde checkout flow", "Koppelingen met boekhouding mogelijk"],
      en: ["Secure payment integrations (Mollie, Stripe)", "Easy inventory management", "Optimized checkout flow", "Accounting integrations available"],
      fr: ["Intégrations de paiement sécurisées", "Gestion facile des stocks", "Flux de paiement optimisé", "Intégrations comptables possibles"]
    }
  },
  "analyse": {
    icon: BarChart,
    title: { nl: "Website Analyse", en: "Website Analysis", fr: "Analyse de Site Web" },
    subtitle: { nl: "Ontdek waarom bezoekers wel of niet converteren.", en: "Discover why visitors do or don't convert.", fr: "Découvrez pourquoi vos visiteurs convertissent ou non." },
    description: {
      nl: "Haalt u niet genoeg aanvragen uit uw huidige website? Wij voeren een diepgaande analyse uit van uw website, identificeren knelpunten en geven concreet advies.",
      en: "Not getting enough leads from your current website? We perform an in-depth analysis of your website, identify bottlenecks and provide concrete advice.",
      fr: "Vous n'obtenez pas assez de demandes de votre site actuel? Nous effectuons une analyse approfondie."
    },
    benefits: {
      nl: ["Technische SEO audit", "Conversie-optimalisatie (CRO) advies", "Snelheids- en performance check", "Uitgebreid actieplan"],
      en: ["Technical SEO audit", "Conversion optimization (CRO) advice", "Speed and performance check", "Comprehensive action plan"],
      fr: ["Audit technique SEO", "Conseils en optimisation de conversion", "Vérification de la vitesse", "Plan d'action complet"]
    }
  },
  "herstel": {
    icon: ShieldAlert,
    title: { nl: "Website Herstel", en: "Website Recovery", fr: "Récupération de Site Web" },
    subtitle: { nl: "Is uw website gehackt of kapot? Wij lossen het snel op.", en: "Is your website hacked or broken? We fix it fast.", fr: "Votre site est piraté ou cassé? Nous le réparons rapidement." },
    description: {
      nl: "Een kapotte of gehackte website kost u klanten en reputatieschade. Ons noodteam herstelt uw website, verwijdert malware en beveiligt alles tegen toekomstige aanvallen.",
      en: "A broken or hacked website costs you customers and reputation. Our emergency team restores your website, removes malware and secures it.",
      fr: "Un site cassé ou piraté vous coûte des clients. Notre équipe d'urgence restaure votre site et supprime les malwares."
    },
    benefits: {
      nl: ["Snelle noodhulp beschikbaar", "Volledige malware verwijdering", "Beveiligingsupdates uitvoeren", "Back-up herstel"],
      en: ["Fast emergency help available", "Complete malware removal", "Applying security updates", "Backup restoration"],
      fr: ["Aide d'urgence rapide", "Suppression complète des malwares", "Mises à jour de sécurité", "Restauration de sauvegarde"]
    }
  },
  "seo": {
    icon: Search,
    title: { nl: "SEO Diensten", en: "SEO Services", fr: "Services SEO" },
    subtitle: { nl: "Word beter gevonden in Google door uw ideale klanten.", en: "Get found better in Google by your ideal customers.", fr: "Soyez mieux trouvé sur Google par vos clients idéaux." },
    description: {
      nl: "Meer organisch verkeer betekent meer gratis leads. Wij optimaliseren uw website op technisch vlak, creëren relevante content en bouwen autoriteit op.",
      en: "More organic traffic means more free leads. We optimize your website technically, create relevant content and build authority.",
      fr: "Plus de trafic organique signifie plus de prospects gratuits. Nous optimisons votre site techniquement."
    },
    benefits: {
      nl: ["Uitgebreid zoekwoordonderzoek", "On-page & technische optimalisatie", "Lokale SEO (Google Bedrijfsprofiel)", "Maandelijkse rapportage"],
      en: ["Comprehensive keyword research", "On-page & technical optimization", "Local SEO (Google Business Profile)", "Monthly reporting"],
      fr: ["Recherche approfondie de mots-clés", "Optimisation on-page et technique", "SEO local", "Rapport mensuel"]
    }
  },
  "google-ads": {
    icon: Zap,
    title: { nl: "Google Ads", en: "Google Ads", fr: "Google Ads" },
    subtitle: { nl: "Direct zichtbaar bovenaan in Google.", en: "Directly visible at the top of Google.", fr: "Directement visible en haut de Google." },
    description: {
      nl: "Wilt u direct resultaat? Met doelgerichte Google Ads campagnes plaatsen wij uw bedrijf bovenaan de zoekresultaten voor de zoekwoorden die ertoe doen.",
      en: "Want instant results? With targeted Google Ads campaigns we place your business at the top of the search results for keywords that matter.",
      fr: "Vous voulez des résultats immédiats? Avec des campagnes Google Ads ciblées, nous plaçons votre entreprise en haut des résultats."
    },
    benefits: {
      nl: ["Direct meer websitebezoekers", "Campagne opzet & doorlopende optimalisatie", "A/B testen van advertenties", "Maximale ROI focus"],
      en: ["Instantly more website visitors", "Campaign setup & continuous optimization", "A/B testing of ads", "Maximum ROI focus"],
      fr: ["Plus de visiteurs immédiatement", "Configuration et optimisation continue", "Test A/B des annonces", "Focus maximal sur le ROI"]
    }
  },
  "hosting": {
    icon: Server,
    title: { nl: "Webhosting & Onderhoud", en: "Web Hosting & Maintenance", fr: "Hébergement & Maintenance" },
    subtitle: { nl: "Veilig, snel en altijd online zonder dat u er omkijken naar heeft.", en: "Secure, fast and always online without you having to worry.", fr: "Sécurisé, rapide et toujours en ligne sans que vous ayez à vous en soucier." },
    description: {
      nl: "Een snelle website vereist premium hosting. Met onze onderhoudspakketten zorgen we voor regelmatige updates, dagelijkse back-ups en ijzersterke beveiliging.",
      en: "A fast website requires premium hosting. With our maintenance packages we ensure regular updates, daily backups and ironclad security.",
      fr: "Un site rapide nécessite un hébergement premium. Nous assurons des mises à jour régulières et des sauvegardes."
    },
    benefits: {
      nl: ["Razendsnelle premium cloud hosting", "Dagelijkse externe back-ups", "Proactieve updates (plugins, CMS)", "Uptime monitoring (99.9% garantie)"],
      en: ["Blazing fast premium cloud hosting", "Daily external backups", "Proactive updates (plugins, CMS)", "Uptime monitoring (99.9% guarantee)"],
      fr: ["Hébergement cloud premium ultra-rapide", "Sauvegardes externes quotidiennes", "Mises à jour proactives", "Surveillance de disponibilité"]
    }
  },
  "statistieken": {
    icon: Users,
    title: { nl: "Bezoekersstatistieken", en: "Visitor Statistics", fr: "Statistiques des Visiteurs" },
    subtitle: { nl: "Weet exact wat er op uw website gebeurt.", en: "Know exactly what happens on your website.", fr: "Sachez exactement ce qui se passe sur votre site." },
    description: {
      nl: "Meten is weten. Wij installeren privacy-vriendelijke statistieken en heatmaps zodat u kunt zien hoe gebruikers navigeren en waar ze afhaken.",
      en: "To measure is to know. We install privacy-friendly statistics and heatmaps so you can see how users navigate.",
      fr: "Mesurer, c'est savoir. Nous installons des statistiques et des heatmaps respectueuses de la vie privée."
    },
    benefits: {
      nl: ["Privacy-vriendelijk (GDPR proof)", "Heatmaps en sessie-opnames", "Custom dashboard met KPI's", "Doelmeting (conversies bijhouden)"],
      en: ["Privacy-friendly (GDPR proof)", "Heatmaps and session recordings", "Custom dashboard with KPIs", "Goal tracking (conversions)"],
      fr: ["Respectueux de la vie privée (RGPD)", "Heatmaps et enregistrements", "Tableau de bord personnalisé", "Suivi des objectifs"]
    }
  },
  "microsoft365": {
    icon: Mail,
    title: { nl: "Mail met Microsoft 365", en: "Mail with Microsoft 365", fr: "Mail avec Microsoft 365" },
    subtitle: { nl: "Professioneel mailen met uw eigen domeinnaam.", en: "Professional mailing with your own domain name.", fr: "E-mails professionnels avec votre propre nom de domaine." },
    description: {
      nl: "Stap af van @gmail of @hotmail adressen. Wij verzorgen de complete migratie en setup van Microsoft 365 voor u en uw team, inclusief Teams, Word en Excel.",
      en: "Step away from @gmail or @hotmail addresses. We handle the complete migration and setup of Microsoft 365 for you and your team.",
      fr: "Oubliez les adresses @gmail ou @hotmail. Nous gérons la migration complète vers Microsoft 365 pour votre équipe."
    },
    benefits: {
      nl: ["Professioneel e-mailadres (info@uwbedrijf.be)", "Agenda en contacten synchronisatie", "1TB cloudopslag (OneDrive)", "Inclusief Office applicaties"],
      en: ["Professional email address (info@yourcompany.be)", "Calendar and contacts synchronization", "1TB cloud storage (OneDrive)", "Office applications included"],
      fr: ["Adresse e-mail professionnelle", "Synchronisation du calendrier", "1To de stockage cloud", "Applications Office incluses"]
    }
  }
};

export default function DienstenDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  
  const serviceId = id || "";
  const service = servicesData[serviceId];

  // If URL parameter doesn't match any of our keys, redirect to main services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen flex flex-col">
      <SEOHead page="services" />
      <Navbar />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 flex-1">
        <div className="container">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {language === "nl" ? "Alle Diensten" : language === "fr" ? "Tous les Services" : "All Services"}
            </Link>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary">
                {service.title[language]}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium leading-relaxed">
              {service.subtitle[language]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Left Column: Description & Benefits */}
              <div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description[language]}
                </p>

                <h3 className="text-xl font-bold text-secondary mb-4">
                  {language === "nl" ? "Wat is inbegrepen?" : language === "fr" ? "Ce qui est inclus?" : "What's included?"}
                </h3>
                <ul className="space-y-4">
                  {service.benefits[language].map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: CTA Panel */}
              <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 h-fit shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">
                  {language === "nl" ? "Interesse in deze dienst?" : language === "fr" ? "Intéressé par ce service?" : "Interested in this service?"}
                </h3>
                <p className="text-muted-foreground mb-8 relative z-10">
                  {language === "nl" 
                    ? "Neem vrijblijvend contact op. We bespreken graag de mogelijkheden en maken een offerte op maat."
                    : language === "fr"
                    ? "Contactez-nous sans engagement. Nous nous ferons un plaisir de discuter des possibilités."
                    : "Contact us without obligation. We'll be happy to discuss the possibilities and create a custom quote."}
                </p>

                <div className="flex flex-col gap-4 relative z-10">
                  <FlowHoverButton asChild size="lg" variant="default" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    <Link to="/contact">
                      {language === "nl" ? "Offerte aanvragen" : language === "fr" ? "Demander un devis" : "Request a quote"}
                    </Link>
                  </FlowHoverButton>
                  
                  {id === "website-laten-maken" || id === "betaalbare-website" || id === "webshop" ? (
                    <FlowHoverButton asChild size="lg" variant="outline" className="w-full">
                      <Link to="/pricing">
                        {language === "nl" ? "Bekijk prijzen" : language === "fr" ? "Voir les prix" : "View pricing"}
                      </Link>
                    </FlowHoverButton>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
