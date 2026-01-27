import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface SEOHeadProps {
  page?: "home" | "work" | "services" | "why" | "about" | "contact";
}

const seoData = {
  home: {
    nl: {
      title: "Nova Studio | Professionele Websites voor Bedrijven in België",
      description: "Moderne, snelle websites die klanten aantrekken. ✓ Vaste prijs ✓ Inclusief hosting ✓ SEO geoptimaliseerd. Belgische webdesign studio voor MKB en zelfstandigen.",
      keywords: "website laten maken, webdesign België, professionele website, website voor bedrijven, webontwikkeling, website bouwen, webdesign bureau, zakelijke website",
    },
    en: {
      title: "Nova Studio | Professional Websites for Businesses in Belgium",
      description: "Modern, fast websites that attract customers. ✓ Fixed pricing ✓ Hosting included ✓ SEO optimized. Belgian web design studio for SMBs and freelancers.",
      keywords: "website design, web design Belgium, professional website, business website, web development, website builder, design agency, corporate website",
    },
    fr: {
      title: "Nova Studio | Sites Web Professionnels pour Entreprises en Belgique",
      description: "Sites web modernes et rapides qui attirent des clients. ✓ Prix fixe ✓ Hébergement inclus ✓ Optimisé SEO. Studio de design web belge pour PME et indépendants.",
      keywords: "création site web, design web Belgique, site professionnel, site entreprise, développement web, agence web, site vitrine",
    },
  },
  work: {
    nl: {
      title: "Portfolio | Onze Beste Website Projecten | Nova Studio",
      description: "Bekijk onze portfolio van succesvolle websites voor Belgische bedrijven. Van webdesign tot volledige digitale oplossingen - ontdek wat wij voor jou kunnen doen.",
      keywords: "portfolio webdesign, website voorbeelden, webdesign projecten, website referenties, bedrijfswebsites, case studies",
    },
    en: {
      title: "Portfolio | Our Best Website Projects | Nova Studio",
      description: "View our portfolio of successful websites for Belgian businesses. From web design to complete digital solutions - discover what we can do for you.",
      keywords: "web design portfolio, website examples, web projects, website references, business websites, case studies",
    },
    fr: {
      title: "Portfolio | Nos Meilleurs Projets Web | Nova Studio",
      description: "Découvrez notre portfolio de sites web réussis pour des entreprises belges. Du design au solutions digitales complètes.",
      keywords: "portfolio web, exemples sites, projets web, références, sites entreprises, études de cas",
    },
  },
  services: {
    nl: {
      title: "Diensten | Webdesign & Ontwikkeling | Nova Studio",
      description: "Professionele webdesign diensten: ✓ Custom websites ✓ Mobile-first design ✓ SEO optimalisatie ✓ Hosting & onderhoud. Vaste prijzen, geen verrassingen.",
      keywords: "webdesign diensten, website ontwikkeling, custom website, responsive design, SEO optimalisatie, website onderhoud, webdesign prijzen",
    },
    en: {
      title: "Services | Web Design & Development | Nova Studio",
      description: "Professional web design services: ✓ Custom websites ✓ Mobile-first design ✓ SEO optimization ✓ Hosting & maintenance. Fixed prices, no surprises.",
      keywords: "web design services, website development, custom website, responsive design, SEO optimization, website maintenance, web design pricing",
    },
    fr: {
      title: "Services | Design & Développement Web | Nova Studio",
      description: "Services de design web professionnels: ✓ Sites sur mesure ✓ Design mobile-first ✓ Optimisation SEO ✓ Hébergement & maintenance. Prix fixes.",
      keywords: "services web design, développement site, site sur mesure, design responsive, optimisation SEO, maintenance web",
    },
  },
  why: {
    nl: {
      title: "Waarom Nova Studio | Betrouwbare Website Partner | België",
      description: "Waarom kiezen voor Nova Studio? ✓ Persoonlijke aanpak ✓ Transparante communicatie ✓ Meetbare resultaten. Ontdek hoe wij jouw bedrijf laten groeien.",
      keywords: "waarom webdesign bureau, betrouwbaar webdesign, website partner, professionele aanpak, website expertise, Belgisch webbureau",
    },
    en: {
      title: "Why Nova Studio | Reliable Website Partner | Belgium",
      description: "Why choose Nova Studio? ✓ Personal approach ✓ Transparent communication ✓ Measurable results. Discover how we grow your business.",
      keywords: "why web design agency, reliable web design, website partner, professional approach, website expertise, Belgian web agency",
    },
    fr: {
      title: "Pourquoi Nova Studio | Partenaire Web Fiable | Belgique",
      description: "Pourquoi choisir Nova Studio? ✓ Approche personnelle ✓ Communication transparente ✓ Résultats mesurables. Découvrez comment nous développons votre entreprise.",
      keywords: "pourquoi agence web, design web fiable, partenaire site, approche professionnelle, expertise web, agence web belge",
    },
  },
  about: {
    nl: {
      title: "Over Ons | Belgische Digital Studio | Nova Studio",
      description: "Maak kennis met Nova Studio - een Belgische digital studio gepassioneerd over het maken van websites die resultaten leveren. Leer meer over onze aanpak en waarden.",
      keywords: "over nova studio, belgisch webbureau, webdesign team, digital studio België, wie zijn wij, ons verhaal",
    },
    en: {
      title: "About Us | Belgian Digital Studio | Nova Studio",
      description: "Meet Nova Studio - a Belgian digital studio passionate about creating websites that deliver results. Learn more about our approach and values.",
      keywords: "about nova studio, belgian web agency, web design team, digital studio Belgium, who we are, our story",
    },
    fr: {
      title: "À Propos | Studio Digital Belge | Nova Studio",
      description: "Découvrez Nova Studio - un studio digital belge passionné par la création de sites qui livrent des résultats. En savoir plus sur notre approche.",
      keywords: "à propos nova studio, agence web belge, équipe web design, studio digital Belgique, qui sommes-nous, notre histoire",
    },
  },
  contact: {
    nl: {
      title: "Contact | Start Jouw Website Project | Nova Studio",
      description: "Klaar om jouw website te laten maken? Neem contact op voor een vrijblijvend gesprek. ✓ Snelle reactie ✓ Gratis advies ✓ Geen verplichtingen.",
      keywords: "contact webdesign, website offerte, webdesign aanvraag, gratis advies website, contact webbureau, project starten",
    },
    en: {
      title: "Contact | Start Your Website Project | Nova Studio",
      description: "Ready to have your website built? Get in touch for a no-obligation conversation. ✓ Quick response ✓ Free advice ✓ No commitments.",
      keywords: "contact web design, website quote, web design inquiry, free website advice, contact web agency, start project",
    },
    fr: {
      title: "Contact | Démarrez Votre Projet Web | Nova Studio",
      description: "Prêt à faire créer votre site? Contactez-nous pour une conversation sans engagement. ✓ Réponse rapide ✓ Conseils gratuits ✓ Sans obligation.",
      keywords: "contact design web, devis site, demande web, conseils gratuits, contact agence web, démarrer projet",
    },
  },
};

const getStructuredData = (page: string, language: string) => {
  const baseUrl = "https://thenovastudio.be";
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "Nova Studio",
    description: language === "nl" 
      ? "Belgische digital studio gespecialiseerd in professionele websites voor bedrijven"
      : language === "fr"
      ? "Studio digital belge spécialisé dans les sites web professionnels pour entreprises"
      : "Belgian digital studio specialized in professional websites for businesses",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    image: `${baseUrl}/og-image.png`,
    telephone: "+32 XXX XX XX XX",
    email: "contact@thenovastudio.be",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "België",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.8503",
      longitude: "4.3517",
    },
    areaServed: {
      "@type": "Country",
      name: "Belgium",
    },
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/nova-studio",
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nova Studio",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: language === "nl" ? "Webdesign & Ontwikkeling" : "Web Design & Development",
    provider: {
      "@type": "LocalBusiness",
      name: "Nova Studio",
    },
    areaServed: {
      "@type": "Country",
      name: "Belgium",
    },
    description: language === "nl"
      ? "Professionele websites voor bedrijven met vaste prijzen, hosting en SEO optimalisatie inbegrepen."
      : "Professional websites for businesses with fixed pricing, hosting and SEO optimization included.",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...(page !== "home" ? [{
        "@type": "ListItem",
        position: 2,
        name: page.charAt(0).toUpperCase() + page.slice(1),
        item: `${baseUrl}/${page}`,
      }] : []),
    ],
  };

  if (page === "home") {
    return [localBusiness, webSite, service];
  }
  
  return [localBusiness, breadcrumb];
};

export const SEOHead = ({ page = "home" }: SEOHeadProps) => {
  const { language } = useLanguage();
  const data = seoData[page][language];
  const baseUrl = "https://thenovastudio.be";
  const currentUrl = page === "home" ? baseUrl : `${baseUrl}/${page}`;
  const structuredData = getStructuredData(page, language);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language === "nl" ? "nl-BE" : language === "fr" ? "fr-BE" : "en"} />
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content="Nova Studio" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="nl-BE" href={`${baseUrl}${page === "home" ? "" : `/${page}`}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${page === "home" ? "" : `/${page}`}?lang=en`} />
      <link rel="alternate" hrefLang="fr-BE" href={`${baseUrl}${page === "home" ? "" : `/${page}`}?lang=fr`} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:locale" content={language === "nl" ? "nl_BE" : language === "fr" ? "fr_BE" : "en_US"} />
      <meta property="og:site_name" content="Nova Studio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BE" />
      <meta name="geo.placename" content="Belgium" />

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
