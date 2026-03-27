export type Language = "nl" | "en" | "fr";

export const translations = {
    // Navbar
    nav: {
        home: { nl: "Home", en: "Home", fr: "Accueil" },
        work: { nl: "Portfolio", en: "Work", fr: "Portfolio" },
        services: { nl: "Diensten", en: "Services", fr: "Services" },
        why: { nl: "Waarom Dit Werkt", en: "Why This Works", fr: "Pourquoi Ça Marche" },
        about: { nl: "Over Ons", en: "About", fr: "À Propos" },
        apps: { nl: "Onze Apps", en: "Our Apps", fr: "Nos Applications" },
        contact: { nl: "Contact", en: "Contact", fr: "Contact" },
        startProject: { nl: "Start uw project", en: "Start a Project", fr: "Démarrer un Projet" },
    },

    // Hero Section
    hero: {
        badge: { nl: "Premium Digital Solutions • België", en: "Premium Digital Solutions • Belgium", fr: "Solutions Digitales Premium • Belgique" },
        title1: { nl: "Websites die uw bedrijf", en: "Websites that grow", fr: "Des sites web qui font" },
        titleHighlight: { nl: "echt laten groeien", en: "your business", fr: "croître" },
        subtitle: {
            nl: "Bouw een sterke digitale aanwezigheid met custom-ontwerp, blitzsnelle prestaties en bewezen conversie-strategie.",
            en: "Build a powerful digital presence with custom design, lightning-fast performance, and proven conversion strategy.",
            fr: "Construisez une présence numérique puissante avec design personnalisé, performances ultra-rapides et stratégie de conversion éprouvée.",
        },
        cta: { nl: "Start uw project", en: "Start Your Project", fr: "Démarrer Votre Projet" },
        ctaSecondary: { nl: "Bekijk Portfolio", en: "View Our Work", fr: "Voir Notre Travail" },
        available: { nl: "Beschikbaar voor nieuwe projecten", en: "Available for new projects", fr: "Disponible pour nouveaux projets" },
        trusted: { nl: "Vertrouwd door Fortune 500-partners & groeiende startups", en: "Trusted by 50+ growing companies", fr: "Approuvé par plus de 50 entreprises" },
    },

    // Trust Badges
    badges: {
        fast: { nl: "Snelle oplevering", en: "Fast turnaround", fr: "Livraison rapide" },
        fixed: { nl: "Vaste prijs", en: "Fixed pricing", fr: "Prix fixe" },
        support: { nl: "Doorlopende ondersteuning", en: "Ongoing support", fr: "Support continu" },
        seo: { nl: "SEO geoptimaliseerd", en: "SEO optimized", fr: "Optimisé SEO" },
        hosting: { nl: "Inclusief hosting & statistieken", en: "Hosting & analytics included", fr: "Hébergement & statistiques inclus" },
    },

    // Services Preview
    servicesPreview: {
        title: { nl: "Gespecialiseerde Diensten", en: "Specialized Services", fr: "Services Spécialisés" },
        subtitle: {
            nl: "Oplossingen die meetbare resultaten bieden. Van strategie tot lancering, wij beheren elk aspect.",
            en: "Solutions engineered to deliver measurable results. From strategy to launch, we manage every detail.",
            fr: "Solutions conçues pour produire des résultats mesurables. De la stratégie au lancement, nous maîtrisons chaque détail.",
        },
        webDesign: {
            title: { nl: "Web Design & Techniek", en: "Web Design & Engineering", fr: "Design & Ingénierie Web" },
            description: {
                nl: "Websites gebouwd op maat met moderne technologie, optimale prestaties en conversie-gerichtheid. Clean code, geen compromissen.",
                en: "Custom websites engineered with modern technology, optimized performance, and conversion-focused design. Clean code throughout.",
                fr: "Sites web personnalisés construits avec technologie moderne, performances optimisées et design centré sur la conversion.",
            },
        },
        mobile: {
            title: { nl: "Mobile-First Strategie", en: "Mobile-First Strategy", fr: "Stratégie Mobile-First" },
            description: {
                nl: "Meer dan 70% van het verkeer is mobiel. Wij ontwerpen eerst voor mobiel, dan schalen we op naar desktop voor een perfecte ervaring.",
                en: "Over 70% of traffic is now mobile. We design mobile-first, then scale to desktop for seamless performance on every screen.",
                fr: "Plus de 70% du trafic est mobile. Nous concevons d'abord pour mobile, puis adaptons pour desktop avec une expérience parfaite.",
            },
        },
        brand: {
            title: { nl: "Brand Identity Systemen", en: "Brand Identity Systems", fr: "Systèmes d'Identité de Marque" },
            description: {
                nl: "Volledige visuele identiteitsystemen die uw merk direct herkenbaar en memorabel maken in alle kanalen.",
                en: "Complete visual identity systems that make your brand instantly recognizable and memorable across all channels.",
                fr: "Systèmes d'identité visuelle complets qui rendent votre marque reconnue et mémorable sur tous les canaux.",
            },
        },
        performance: {
            title: { nl: "Performance Engineering", en: "Performance Engineering", fr: "Ingénierie des Performances" },
            description: {
                nl: "Razendsnelle laadtijden die bezoekers betrokken houden, conversie vergroten en SEO verbeteren.",
                en: "Lightning-fast load times that keep visitors engaged, increase conversions, and improve SEO rankings.",
                fr: "Temps de chargement ultra-rapides qui maintiennent l'engagement, augmentent les conversions et améliorent le SEO.",
            },
        },
    },

    // Process Section
    process: {
        title: { nl: "Ons Gestroomlijnde Proces", en: "Our Streamlined Process", fr: "Notre Processus Rationalisé" },
        subtitle: {
            nl: "Van ontdekking tot lancering — een duidelijke, stap-voor-stap benadering die u op de hoogte houdt en op tijd levert.",
            en: "From discovery to launch — a clear, stage-gate process that keeps you informed and delivers on schedule.",
            fr: "De la découverte au lancement — un processus clair qui vous tient informé et livre à temps.",
        },
        stepLabel: { nl: "Stap", en: "Step", fr: "Étape" },
        discover: {
            title: { nl: "Strategie", en: "Strategy", fr: "Stratégie" },
            description: {
                nl: "We analyseren uw bedrijf, doelgroep en concurrentie om een solide strategische basis te creëren voor succesvol design.",
                en: "We analyze your business, target audience, and competition to create a strategic foundation for successful design and results.",
                fr: "Nous analysons votre entreprise, audience cible et concurrence pour créer une base stratégique solide.",
            },
        },
        design: {
            title: { nl: "Design", en: "Design", fr: "Design" },
            description: {
                nl: "Creëren van mooie, conversiegerichte ontwerpen die aansluiten bij uw merkidentiteit.",
                en: "Crafting beautiful, conversion-focused designs that align with your brand identity.",
                fr: "Création de designs magnifiques axés sur la conversion et alignés avec votre identité.",
            },
        },
        build: {
            title: { nl: "Bouw", en: "Build", fr: "Construire" },
            description: {
                nl: "Uw website ontwikkelen met schone code, geoptimaliseerde prestaties en SEO best practices.",
                en: "Developing your website with clean code, optimized performance, and SEO best practices.",
                fr: "Développement de votre site avec du code propre, des performances optimisées et les meilleures pratiques SEO.",
            },
        },
        launch: {
            title: { nl: "Lanceer", en: "Launch", fr: "Lancer" },
            description: {
                nl: "Testen, verfijning en een soepele lancering met doorlopende ondersteuning voor succes.",
                en: "Testing, refinement, and a smooth launch with ongoing support to ensure success.",
                fr: "Tests, perfectionnement et lancement fluide avec un support continu pour assurer le succès.",
            },
        },
    },
    // Portfolio Preview
    portfolio: {
        title: { nl: "Geselecteerd werk", en: "Selected work", fr: "Travaux sélectionnés" },
        subtitle: {
            nl: "Echte projecten met meetbare resultaten. Zie hoe we bedrijven hebben geholpen groeien.",
            en: "Real projects with measurable results. See how we've helped businesses grow.",
            fr: "Projets réels avec résultats mesurables. Voyez comment nous avons aidé les entreprises à croître.",
        },
        viewAll: { nl: "Bekijk Alle Projecten", en: "View All Projects", fr: "Voir Tous les Projets" },
        projects: {
            novaStudio: {
                title: { nl: "Codevio Website", en: "Codevio Website", fr: "Site Codevio" },
                category: { nl: "Webdesign", en: "Web Design", fr: "Design Web" },
                description: {
                    nl: "Ons eigen digitale thuis — ontworpen om bezoekers om te zetten in klanten.",
                    en: "Our own digital home — designed to convert visitors into clients.",
                    fr: "Notre propre maison digitale — conçue pour convertir les visiteurs en clients.",
                },
            },
            powerPlan: {
                title: { nl: "Power Plan", en: "Power Plan", fr: "Power Plan" },
                category: { nl: "iOS App Concept", en: "iOS App Concept", fr: "Concept App iOS" },
                description: {
                    nl: "Gebruikers krijgen beter inzicht in hun energiegewoonten, waardoor ze slimmere beslissingen kunnen nemen met minder moeite.",
                    en: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
                    fr: "Les utilisateurs comprennent mieux leurs habitudes énergétiques, leur permettant de prendre des décisions plus intelligentes avec moins d'effort.",
                },
            },
            sleepReset: {
                title: { nl: "Sleep Reset", en: "Sleep Reset", fr: "Sleep Reset" },
                category: { nl: "iOS App Concept", en: "iOS App Concept", fr: "Concept App iOS" },
                description: {
                    nl: "Een eenvoudige slaap-app die gebruikers helpt structuur en consistentie terug te vinden in hun slaapschema.",
                    en: "A simple sleep utility that helps users regain structure and consistency in their sleep schedule.",
                    fr: "Une application de sommeil simple qui aide les utilisateurs à retrouver structure et cohérence dans leur routine.",
                },
            },
        },
    },

    // CTA Section
    cta: {
        title: { nl: "Klaar voor digitale transformatie?", en: "Ready to grow your business?", fr: "Prêt à transformer votre entreprise ?" },
        subtitle: {
            nl: "Laten we een website bouwen die echt werkt. Een korte strategie-sessie om uw doelen en mogelijkheden te bespreken.",
            en: "Let's build a website that actually drives growth. Schedule a brief strategy session to explore your opportunities.",
            fr: "Créons un site web qui génère réellement de la croissance. Programmez une séance de stratégie pour explorer vos opportunités.",
        },
        button: { nl: "Plan Uw Strategie-Sessie", en: "Schedule a Strategy Session", fr: "Planifier une Séance de Stratégie" },
    },

    // Footer
    footer: {
        description: {
            nl: "Een Belgische digital studio die mooie, hoogpresterende websites maakt die bedrijven helpen online te groeien.",
            en: "A Belgian digital studio crafting beautiful, high-performance websites that help businesses grow online.",
            fr: "Un studio digital belge créant de beaux sites performants qui aident les entreprises à se développer en ligne.",
        },
        pages: { nl: "Pagina's", en: "Pages", fr: "Pages" },
        connect: { nl: "Verbind", en: "Connect", fr: "Connexion" },
        rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved.", fr: "Tous droits réservés." },
        basedIn: { nl: "Gevestigd in België 🇧🇪", en: "Based in Belgium 🇧🇪", fr: "Basé en Belgique 🇧🇪" },
    },

    // Work Page
    work: {
        title: { nl: "Ons Werk", en: "Our Work", fr: "Notre Travail" },
        subtitle: {
            nl: "Echte projecten met echte resultaten. Elk project vertelt een verhaal van een opgelost probleem en geleverde waarde.",
            en: "Real projects with real results. Every project tells a story of a problem solved and value delivered.",
            fr: "Projets réels avec résultats réels. Chaque projet raconte l'histoire d'un problème résolu et d'une valeur apportée.",
        },
        problem: { nl: "Het Probleem", en: "The Problem", fr: "Le Problème" },
        solution: { nl: "Onze Oplossing", en: "Our Solution", fr: "Notre Solution" },
        value: { nl: "De Waarde", en: "The Value", fr: "La Valeur" },
        projects: {
            novaStudio: {
                problem: {
                    nl: "We hadden onze eigen digitale aanwezigheid nodig die onze capaciteiten effectief zou tonen en bezoekers zou omzetten in klanten.",
                    en: "We needed our own digital presence that would effectively showcase our capabilities and convert visitors into clients.",
                    fr: "Nous avions besoin de notre propre présence digitale pour montrer nos capacités et convertir les visiteurs en clients.",
                },
                solution: {
                    nl: "Een strakke, conversiegerichte website met sterke visuele hiërarchie, vloeiende animaties en duidelijke call-to-actions.",
                    en: "A clean, conversion-focused website with strong visual hierarchy, smooth animations, and clear calls-to-action throughout.",
                    fr: "Un site épuré axé sur la conversion avec hiérarchie visuelle forte, animations fluides et appels à l'action clairs.",
                },
                value: {
                    nl: "Een professionele thuisbasis die ons merk vertegenwoordigt en consistente projectaanvragen genereert.",
                    en: "A professional home base that represents our brand and generates consistent project inquiries.",
                    fr: "Une base professionnelle qui représente notre marque et génère des demandes de projets cohérentes.",
                },
            },
            powerPlan: {
                problem: {
                    nl: "Het beheren van dagelijks energieverbruik en energie-gerelateerde routines is vaak onduidelijk en gefragmenteerd, waardoor het moeilijk is voor gebruikers om efficiënt en consistent te blijven.",
                    en: "Managing daily energy usage and power-related routines is often unclear and fragmented, making it hard for users to stay efficient and consistent.",
                    fr: "La gestion de la consommation d'énergie quotidienne est souvent floue et fragmentée, rendant difficile l'efficacité et la cohérence.",
                },
                solution: {
                    nl: "Power Plan introduceert een strakke, gestructureerde interface die gebruikers helpt hun energieverbruik te plannen, volgen en begrijpen door eenvoudige overzichten en gerichte functionaliteit.",
                    en: "Power Plan introduces a clean, structured interface that helps users plan, track, and understand their energy usage through simple overviews and focused functionality.",
                    fr: "Power Plan introduit une interface épurée et structurée qui aide les utilisateurs à planifier, suivre et comprendre leur consommation énergétique.",
                },
                value: {
                    nl: "Gebruikers krijgen beter inzicht in hun energiegewoonten, waardoor ze slimmere beslissingen kunnen nemen met minder moeite en zonder onnodige complexiteit.",
                    en: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
                    fr: "Les utilisateurs comprennent mieux leurs habitudes énergétiques, leur permettant de prendre des décisions plus intelligentes sans complexité inutile.",
                },
            },
            sleepReset: {
                problem: {
                    nl: "Onregelmatige schema's, late nachten en inconsistente routines maken het moeilijk voor mensen om een gezond en voorspelbaar slaappatroon te behouden.",
                    en: "Irregular schedules, late nights, and inconsistent routines make it difficult for people to maintain a healthy and predictable sleep pattern, often leading to poor rest and low daily energy.",
                    fr: "Les horaires irréguliers, nuits tardives et routines incohérentes rendent difficile le maintien d'un rythme de sommeil sain.",
                },
                solution: {
                    nl: "Sleep Reset biedt een gestructureerde, no-nonsense benadering van slaapplanning door gebruikers te helpen hun bedtijdgewoonten te resetten en slaapschema's af te stemmen op dagelijkse routines.",
                    en: "Sleep Reset provides a structured, no-nonsense approach to sleep planning by helping users reset their bedtime habits and align sleep schedules with daily routines in a clear and manageable way.",
                    fr: "Sleep Reset offre une approche structurée de la planification du sommeil en aidant les utilisateurs à réinitialiser leurs habitudes et aligner leurs horaires.",
                },
                value: {
                    nl: "Gebruikers krijgen betere controle over hun slaapritme, verbeteren consistentie en verminderen de mentale inspanning om uit te zoeken wanneer te slapen.",
                    en: "Users gain better control over their sleep rhythm, improve consistency, and reduce the mental effort of figuring out when to sleep, leading to more reliable rest and better day-to-day focus.",
                    fr: "Les utilisateurs gagnent un meilleur contrôle de leur rythme de sommeil, améliorent la cohérence et réduisent l'effort mental.",
                },
            },
            advancedNotes: {
                title: { nl: "Advanced Notes", en: "Advanced Notes", fr: "Advanced Notes" },
                category: { nl: "Web + iOS App", en: "Web + iOS App", fr: "App Web + iOS" },
                problem: {
                    nl: "De meeste notitie-apps geven prioriteit aan eenvoud boven structuur, waardoor het moeilijk is voor gebruikers met grote hoeveelheden notities om informatie efficiënt te organiseren, op te halen en te beheren.",
                    en: "Most note-taking apps prioritize simplicity over structure, making it difficult for users with large volumes of notes to organize, retrieve, and manage information efficiently over time.",
                    fr: "La plupart des applications de notes privilégient la simplicité à la structure, rendant difficile l'organisation efficace pour les utilisateurs avec de gros volumes.",
                },
                solution: {
                    nl: "Advanced Notes introduceert een meer gestructureerde benadering van notities maken door duidelijke categorisatie, flexibele organisatie en krachtige zoekmogelijkheden binnen een strakke en gerichte interface.",
                    en: "Advanced Notes introduces a more structured approach to note-taking by offering clear categorization, flexible organization, and powerful search capabilities within a clean and focused interface.",
                    fr: "Advanced Notes introduit une approche plus structurée de la prise de notes avec catégorisation claire, organisation flexible et recherche puissante.",
                },
                value: {
                    nl: "Gebruikers kunnen complexe informatie effectiever beheren, cognitieve overbelasting verminderen en belangrijke notities sneller vinden.",
                    en: "Users can manage complex information more effectively, reduce cognitive overload, and find important notes faster, resulting in better productivity and long-term usability.",
                    fr: "Les utilisateurs peuvent gérer l'information complexe plus efficacement, réduire la surcharge cognitive et trouver les notes importantes plus rapidement.",
                },
            },
        },
    },
    // Services Page
    services: {
        title: { nl: "Diensten", en: "Services", fr: "Services" },
        subtitle: {
            nl: "Alles wat je nodig hebt om een krachtige online aanwezigheid te vestigen. Gerichte aanbiedingen die echte resultaten leveren.",
            en: "Everything you need to establish a powerful online presence. Focused offerings that deliver real results.",
            fr: "Tout ce dont vous avez besoin pour établir une présence en ligne puissante. Des offres ciblées qui apportent de vrais résultats.",
        },
        webDesign: {
            title: { nl: "Webdesign & Ontwikkeling", en: "Web Design & Development", fr: "Design & Développement Web" },
            description: {
                nl: "Custom websites vanaf nul gebouwd. Geen templates, geen page builders — gewoon schone, snelle, mooie code die converteert.",
                en: "Custom websites built from scratch. No templates, no page builders — just clean, fast, beautiful code that's built to convert.",
                fr: "Sites web personnalisés construits de zéro. Pas de templates, pas de page builders — juste du code propre, rapide et beau qui convertit.",
            },
            features: {
                nl: ["Custom design op maat van jouw merk", "Responsive op alle apparaten", "Gebouwd voor snelheid en prestaties", "SEO-klaar vanaf dag één"],
                en: ["Custom design tailored to your brand", "Responsive across all devices", "Built for speed and performance", "SEO-ready from day one"],
                fr: ["Design personnalisé adapté à votre marque", "Responsive sur tous les appareils", "Conçu pour la vitesse et les performances", "Prêt pour le SEO dès le premier jour"],
            },
        },
        mobile: {
            title: { nl: "Mobile-First Design", en: "Mobile-First Design", fr: "Design Mobile-First" },
            description: {
                nl: "Meer dan 60% van webverkeer is mobiel. Wij ontwerpen eerst voor telefoons, dan schalen we op naar tablets en desktops voor een vlekkeloze ervaring overal.",
                en: "Over 60% of web traffic is mobile. We design for phones first, then scale up to tablets and desktops for a flawless experience everywhere.",
                fr: "Plus de 60% du trafic web est mobile. Nous concevons d'abord pour les téléphones, puis adaptons pour tablettes et ordinateurs pour une expérience parfaite partout.",
            },
            features: {
                nl: ["Touch-geoptimaliseerde interfaces", "Snel laden op mobiele netwerken", "Duimvriendelijke navigatie", "Progressive Web App ready"],
                en: ["Touch-optimized interfaces", "Fast loading on mobile networks", "Thumb-friendly navigation", "Progressive Web App ready"],
                fr: ["Interfaces optimisées tactiles", "Chargement rapide sur réseaux mobiles", "Navigation adaptée au pouce", "Prêt pour Progressive Web App"],
            },
        },
        brand: {
            title: { nl: "Merkidentiteit", en: "Brand Identity", fr: "Identité de Marque" },
            description: {
                nl: "Meer dan alleen een logo. We creëren complete visuele identiteitssystemen die jouw bedrijf direct herkenbaar en memorabel maken.",
                en: "More than just a logo. We create complete visual identity systems that make your business instantly recognizable and memorable.",
                fr: "Plus qu'un simple logo. Nous créons des systèmes d'identité visuelle complets qui rendent votre entreprise reconnaissable et mémorable.",
            },
            features: {
                nl: ["Logo design & variaties", "Kleurenpalet & typografie", "Merkrichtlijnen document", "Social media assets"],
                en: ["Logo design & variations", "Color palette & typography", "Brand guidelines document", "Social media assets"],
                fr: ["Design de logo & variations", "Palette de couleurs & typographie", "Document de directives de marque", "Ressources pour réseaux sociaux"],
            },
        },
        performance: {
            title: { nl: "Performance Optimalisatie", en: "Performance Optimization", fr: "Optimisation des Performances" },
            description: {
                nl: "Trage websites verliezen bezoekers. We optimaliseren elk aspect van jouw site voor razendsnelle laadtijden en vloeiende interacties.",
                en: "Slow websites lose visitors. We optimize every aspect of your site for lightning-fast load times and smooth interactions.",
                fr: "Les sites lents perdent des visiteurs. Nous optimisons chaque aspect de votre site pour des temps de chargement ultra-rapides et des interactions fluides.",
            },
            features: {
                nl: ["Core Web Vitals optimalisatie", "Afbeelding & asset optimalisatie", "Code minificatie", "CDN setup & caching"],
                en: ["Core Web Vitals optimization", "Image & asset optimization", "Code minification", "CDN setup & caching"],
                fr: ["Optimisation Core Web Vitals", "Optimisation d'images & ressources", "Minification du code", "Configuration CDN & mise en cache"],
            },
        },
        seo: {
            title: { nl: "SEO Fundament", en: "SEO Foundation", fr: "Fondation SEO" },
            description: {
                nl: "Elke site die we bouwen bevat een solide SEO-fundament zodat je gevonden kunt worden door mensen die zoeken naar wat jij aanbiedt.",
                en: "Every site we build includes a solid SEO foundation so you can be found by the people searching for what you offer.",
                fr: "Chaque site que nous construisons inclut une base SEO solide pour que vous soyez trouvé par les personnes recherchant ce que vous offrez.",
            },
            features: {
                nl: ["Technische SEO setup", "Meta tags & structured data", "Sitemap & robots.txt", "Google Search Console setup"],
                en: ["Technical SEO setup", "Meta tags & structured data", "Sitemap & robots.txt", "Google Search Console setup"],
                fr: ["Configuration SEO technique", "Meta tags & données structurées", "Sitemap & robots.txt", "Configuration Google Search Console"],
            },
        },
        analytics: {
            title: { nl: "Analytics & Tracking", en: "Analytics & Tracking", fr: "Analytiques & Suivi" },
            description: {
                nl: "Begrijp jouw bezoekers en meet wat ertoe doet. We zetten goede tracking op zodat je datagestuurde beslissingen kunt nemen.",
                en: "Understand your visitors and measure what matters. We set up proper tracking so you can make data-driven decisions.",
                fr: "Comprenez vos visiteurs et mesurez ce qui compte. Nous configurons un suivi approprié pour que vous puissiez prendre des décisions basées sur les données.",
            },
            features: {
                nl: ["Google Analytics 4 setup", "Conversie tracking", "Doel configuratie", "Maandelijkse rapportage"],
                en: ["Google Analytics 4 setup", "Conversion tracking", "Goal configuration", "Monthly reporting"],
                fr: ["Configuration Google Analytics 4", "Suivi des conversions", "Configuration des objectifs", "Rapports mensuels"],
            },
        },
        pricing: {
            title: { nl: "Transparante Prijzen", en: "Transparent Pricing", fr: "Tarification Transparente" },
            description: {
                nl: "Elk project is uniek, dus we offreren per project — geen uurtarieven die onvoorspelbaar oplopen. Je weet precies wat je betaalt voordat we beginnen.",
                en: "Every project is unique, so we quote per project — not hourly rates that add up unpredictably. You'll know exactly what you're paying before we start.",
                fr: "Chaque projet est unique, nous devisons donc par projet — pas de tarifs horaires imprévisibles. Vous saurez exactement ce que vous payez avant de commencer.",
            },
            button: { nl: "Vraag een Offerte", en: "Get a Quote", fr: "Demander un Devis" },
        },
    },

    // Why Page
    why: {
        title: { nl: "Waarom Codevio", en: "Why Codevio", fr: "Pourquoi Codevio" },
        subtitle: {
            nl: "We begrijpen de uitdagingen waar Belgische bedrijven mee worstelen — omdat we ze telkens hebben opgelost.",
            en: "We understand the challenges Belgian businesses face — because we've solved them for dozens of companies.",
            fr: "Nous comprenons les défis auxquels les entreprises belges font face — parce que nous les avons résolus à plusieurs reprises.",
        },
        soundFamiliar: { nl: "Herkenbaar?", en: "Sound Familiar?", fr: "Ça vous parle ?" },
        whatWeDeliver: { nl: "Wat Wij Leveren", en: "What We Deliver", fr: "Ce Que Nous Livrons" },
        problems: {
            nl: [
                "Uw website ziet er verouderd uit en werkt averechts in plaats van uw merkwaarde",
                "U verliest klanten aan concurrenten met beter digitale aanwezigheid",
                "Uw site is niet geoptimaliseerd voor mobiel (70%+ van het verkeer)",
                "U weet niet of uw website daadwerkelijk leads of verkoop genereert",
                "U bent teleurgesteld door vorige agencies die veel beloofden en weinig leverden",
            ],
            en: [
                "Your website looks outdated and undermines your brand value",
                "You're losing customers to competitors with better digital presence",
                "Your site doesn't perform well on mobile (70%+ of traffic)",
                "You have no visibility into whether your site generates real leads",
                "You've been burned by agencies that overpromise and underdeliver",
            ],
            fr: [
                "Votre site web semble dépassé et diminue la valeur de votre marque",
                "Vous perdez des clients au profit de concurrents avec une meilleure présence numérique",
                "Votre site ne fonctionne pas bien sur mobile (70%+ du trafic)",
                "Vous n'avez pas de visibilité sur la génération de leads",
                "Vous avez été déçu par des agences qui promettent trop et livrent peu",
            ],
        },
        solutions: {
            nl: [
                "Professioneel design dat direct vertrouwen opbouwt en uw merkwaarde verstevigt",
                "Conversion-gerichte layouts die bezoekers in klanten veranderen",
                "Mobile-first engineering dat perfect werkt op elk apparaat",
                "Duidelijke analyticssetup zodat u precies weet wat werkt",
                "Transparante prijzen, heldere planning, en levering op beloften",
            ],
            en: [
                "Professional design that builds trust and reinforces your brand value",
                "Conversion-focused engineering that turns visitors into customers",
                "Mobile-first strategy that works flawlessly on every device",
                "Clear analytics setup so you know exactly what's working",
                "Transparent pricing, clear timelines, delivery on promises",
            ],
            fr: [
                "Design professionnel qui construit la confiance et renforce la valeur de la marque",
                "Stratégie conversion-first qui transforme les visiteurs en clients",
                "Approche mobile-first qui fonctionne parfaitement sur chaque appareil",
                "Configuration analytiques claire pour savoir exactement ce qui fonctionne",
                "Prix transparents, calendriers clairs, livraison sur les promesses",
            ],
        },
        stats: {
            delivery: { nl: "Weken oplevering", en: "Week Delivery", fr: "Semaines de Livraison" },
            clients: { nl: "Tevreden klanten", en: "Happy Clients", fr: "Clients Satisfaits" },
            increase: { nl: "Gem. toename aanvragen", en: "Avg. Lead Growth", fr: "Croissance Moyenne des Leads" },
            pricing: { nl: "Vaste prijs", en: "Fixed Pricing", fr: "Prix Fixe" },
        },
        approach: {
            title: { nl: "Onze Systeembenadering", en: "Our Five Principles", fr: "Nos Cinq Principes" },
            resultsTitle: { nl: "1. Resultaten Boven Esthetiek", en: "1. Results Over Aesthetics", fr: "1. Résultats Avant l'Esthétique" },
            resultsDesc: {
                nl: "Mooi design zonder conversies is gewoon dure decoratie. We engineering websites om leads en verkoop te genereren. Elk element — layout, copywriting, CTA's — is gericht op resultaten.",
                en: "Beautiful design without results is just expensive decoration. We engineer websites to generate leads and drive sales. Every element is designed for conversion.",
                fr: "Un beau design sans résultats, c'est juste de la décoration coûteuse. Nous construisons des sites pour générer des leads et des ventes.",
            },
            speedTitle: { nl: "2. Snelle Implementatie", en: "2. Rapid Delivery", fr: "2. Livraison Rapide" },
            speedDesc: {
                nl: "We leveren websites in 2-4 weken, niet maanden. Uw projectmanager houdt u wekelijks op de hoogte. Geen lange wachttijden, geen verrassingen.",
                en: "We deliver websites in 2-4 weeks, not months. Your project manager updates you weekly. No delays, no surprises, no excuses.",
                fr: "Nous livrons les sites en 2-4 semaines, pas des mois. Votre gestionnaire de projet vous fait un suivi hebdomadaire.",
            },
            surprisesTitle: { nl: "3. Volledige Transparantie", en: "3. Complete Transparency", fr: "3. Transparence Complète" },
            surprisesDesc: {
                nl: "Vaste prijzen betekent u kent de volledige kosten vooraf. Geen verborgen kosten, geen uurtarieven die oplopen. We scopen eerlijk, prijzen eerlijk, en leveren wat we beloven.",
                en: "Fixed pricing means you know the total cost upfront. No hidden fees, no hourly rates that spiral. We scope carefully, price fairly, deliver on promises.",
                fr: "Prix fixes signifie que vous connaissez le coût total à l'avance. Pas de frais cachés, pas de tarifs horaires qui explosent.",
            },
            lastingTitle: { nl: "4. Schone Code, Eigenaarschap", en: "4. Clean Code & Ownership", fr: "4. Code Propre & Propriété" },
            lastingDesc: {
                nl: "Geen page builders of templates. Professionele code betekent uw website snel laadt, goed rankt en u bent niet afhankelijk van third-party vendors.",
                en: "No page builders or bloated templates. Professional code means your site loads fast, ranks well, and you own it completely. No vendor lock-in.",
                fr: "Pas de page builders ou de templates gonflés. Du code professionnel signifie que votre site charge rapidement et vous en êtes propriétaire.",
            },
            supportTitle: { nl: "5. Voortdurende Ondersteuning", en: "5. Ongoing Support", fr: "5. Support Continu" },
            supportDesc: {
                nl: "We bouwen relaties, niet eenmalige transacties. Wij bieden doorlopende ondersteuning, updates en optimisatie-suggesties zodat uw website blijft presteren.",
                en: "We build relationships, not one-time transactions. We offer ongoing support, optimization suggestions, and ensure your site continues to perform.",
                fr: "Nous construisons des relations, pas des transactions uniques. Nous offrons un support continu et des optimisations pour que votre site continue à performer.",
            },
        },
        letsTalk: { nl: "Laten We Praten", en: "Let's Talk", fr: "Discutons" },
    },

    // About Page
    about: {
        title: { nl: "Over Codevio", en: "About Codevio", fr: "À Propos de Codevio" },
        subtitle: {
            nl: "Een Belgische digital studio gespecialiseerd in het bouwen van high-performance websites die bedrijven helpen groeien.",
            en: "A Belgian digital studio specializing in high-performance websites that drive measurable business growth.",
            fr: "Un studio digital belge spécialisé dans les sites web haute performance qui stimulent la croissance comerciale.",
        },
        storyTitle: { nl: "Ons Verhaal", en: "Our Story", fr: "Notre Histoire" },
        storyP1: {
            nl: "Codevio is geboren uit een duidelijke waarneming: veel lokale bedrijven hebben websites die hun mogelijkheden niet weerspiegelen. Verouderde designs, trage laadsnelheden en gebrek aan conversie-focus kosten hen dagelijks klanten.",
            en: "Codevio was founded on a clear observation: many local businesses have websites that undermine their potential. Outdated designs, poor performance, and lack of conversion strategy cost them leads every single day.",
            fr: "Codevio a été fondé sur une observation claire : de nombreuses entreprises locales ont des sites qui n'exploitent pas leur potentiel. Des designs obsolètes, des performances faibles et une manque de stratégie de conversion leur coûtent des clients quotidiennement.",
        },
        storyP2: {
            nl: "We startten Codevio om dit te veranderen. Onze missie is Belgische bedrijven dezelfde kwaliteit digitale aanwezigheid te geven die grote merken hebben, maar met duidelijke prijzen, snelle timelines en echte focus op meetbare resultaten.",
            en: "We started Codevio to change that. Our mission is to give Belgian companies the same caliber of digital presence that enterprise brands enjoy, combined with transparent pricing, fast delivery, and genuine focus on measurable results.",
            fr: "Nous avons créé Codevio pour changer cela. Notre mission est de donner aux entreprises belges la même qualité de présence numérique que les grandes marques, avec des prix transparents, une livraison rapide et un focus réel sur les résultats.",
        },
        storyP3: {
            nl: "Elke website die we bouwen is ingericht met één doel: uw bedrijf helpen groeien. Mooi design is belangrijk, maar los van resultaten, is het waardeloos. We focussen op strategie, conversie en echte impact.",
            en: "Every website we build is engineered with one purpose: to help your business grow. Beautiful design matters, but without conversion results, it's simply expensive decoration. We obsess over strategy, performance, and measurable outcomes.",
            fr: "Chaque site web que nous construisons est conçu avec un seul objectif : aider votre entreprise à croître. Un beau design est important, mais sans résultats de conversion, c'est juste une décoration coûteuse. Nous nous concentrons sur la stratégie et les résultats.",
        },
        basedIn: { nl: "Gevestigd in België", en: "Based in Belgium", fr: "Basé en Belgique" },
        valuesTitle: { nl: "Onze Kernwaarden", en: "Our Core Values", fr: "Nos Valeurs Fondamentales" },
        valuesSubtitle: { nl: "Principes die alles wat we doen sturen.", en: "Principles that guide everything we do.", fr: "Principes qui guident tout ce que nous faisons." },
        values: {
            quality: {
                title: { nl: "Kwaliteit Boven Alles", en: "Quality First", fr: "Qualité d'Abord" },
                description: {
                    nl: "We nemen minder projecten aan om elk volledige aandacht te geven. Geen assembly-line service, geen compromissen bij quality.",
                    en: "We take on fewer projects to give each one complete attention. No shortcuts, no assembly-line approach, quality always wins.",
                    fr: "Nous prenons moins de projets pour donner à chacun une attention complète. Pas de raccourcis, pas de chaîne de montage, la qualité prime toujours.",
                },
            },
            honesty: {
                title: { nl: "Volledige Transparantie", en: "Complete Transparency", fr: "Transparence Complète" },
                description: {
                    nl: "We vertellen u wat u moet weten, niet wat u wilt horen. Vaste prijzen, duidelijke timelines, geen verborgen kosten.",
                    en: "We tell you what you need to know, not what you want to hear. Fixed pricing, clear timelines, complete honesty throughout.",
                    fr: "Nous vous disons ce que vous devez savoir, pas ce que vous voulez entendre. Prix fixes, calendriers clairs, honnêteté complète.",
                },
            },
            improvement: {
                title: { nl: "Voortdurende Innovatie", en: "Continuous Innovation", fr: "Innovation Continue" },
                description: {
                    nl: "We blijven voortdurend leren en investeren in de nieuwste webtechnologieën zodat uw site altijd ahead of the curve is.",
                    en: "We continuously invest in latest web technologies and best practices to ensure your site stays competitive and modern.",
                    fr: "Nous investissons continuellement dans les dernières technologies web pour assurer que votre site reste moderne et compétitif.",
                },
            },
            longTerm: {
                title: { nl: "Partnerschap-Mentaliteit", en: "Partnership Mindset", fr: "Mentalité de Partenariat" },
                description: {
                    nl: "We bouwen langetermijnrelaties, niet eenmalige transacties. Uw succes is ons succes, en wij groeien samen met u.",
                    en: "We build lasting partnerships, not one-time transactions. Your success is our success, and we grow together long-term.",
                    fr: "Nous construisons des partenariats durables, pas des transactions uniques. Votre succès est notre succès, et nous grandissons ensemble.",
                },
            },
        },
        workTogether: { nl: "Geïnteresseerd in samenwerking?", en: "Interested in working together?", fr: "Intéressé pour une collaboration ?" },
        workTogetherDesc: {
            nl: "We horen graag meer over uw project. Neem contact op voor een consult zonder verplichtingen.",
            en: "We'd love to learn more about your project. Let's chat about how we can help.",
            fr: "Nous aimerions en savoir plus sur votre projet. Discutons de comment nous pouvons aider.",
        },
        startConversation: { nl: "Contact Opnemen", en: "Get in Touch", fr: "Nous Contacter" },
    },

    // Contact Page
    contact: {
        title: { nl: "Laten We Samenwerken", en: "Let's Work Together", fr: "Travaillons Ensemble" },
        subtitle: {
            nl: "Klaar om uw online aanwezigheid te transformeren? Vertel ons over uw project en we reageren binnen 24 uur met volgende stappen.",
            en: "Ready to transform your online presence? Tell us about your project and we'll respond within 24 hours with next steps.",
            fr: "Prêt à transformer votre présence en ligne ? Parlez-nous de votre projet et nous répondrons dans les 24 heures.",
        },
        form: {
            name: { nl: "Jouw Naam *", en: "Your Name *", fr: "Votre Nom *" },
            namePlaceholder: { nl: "Jan Janssen", en: "John Doe", fr: "Jean Dupont" },
            email: { nl: "E-mailadres *", en: "Email Address *", fr: "Adresse E-mail *" },
            emailPlaceholder: { nl: "jan@bedrijf.be", en: "john@company.com", fr: "jean@entreprise.be" },
            company: { nl: "Bedrijf / Organisatie", en: "Company / Organization", fr: "Entreprise" },
            companyPlaceholder: { nl: "Uw Bedrijf", en: "Your Company", fr: "Votre Entreprise" },
            message: { nl: "Projectbeschrijving *", en: "Project Description *", fr: "Description du Projet *" },
            messagePlaceholder: {
                nl: "Wat zoekt u? Wat zijn uw doelen? Specifieke vereisten?",
                en: "What are you looking for? What are your goals? Any specific requirements?",
                fr: "Que recherchez-vous ? Quels sont vos objectifs ? Des exigences spécifiques ?",
            },
            submit: { nl: "Verstuur Bericht", en: "Send Message", fr: "Envoyer le Message" },
            sending: { nl: "Versturen...", en: "Sending...", fr: "Envoi..." },
        },
        success: {
            title: { nl: "Bericht Verzonden!", en: "Message Sent!", fr: "Message Envoyé !" },
            description: {
                nl: "Bedankt voor uw bericht. We reageren binnen 24 uur.",
                en: "Thanks for your message. We'll get back to you within 24 hours.",
                fr: "Merci pour votre message. Nous vous répondrons dans les 24 heures.",
            },
            sendAnother: { nl: "Verstuur nog een bericht", en: "Send Another Message", fr: "Envoyer un autre message" },
        },
        toast: {
            successTitle: { nl: "Bericht verzonden!", en: "Message sent!", fr: "Message envoyé !" },
            successDesc: { nl: "We reageren binnen 24 uur.", en: "We'll get back to you within 24 hours.", fr: "Nous vous répondrons dans les 24 heures." },
            errorTitle: { nl: "Er ging iets mis", en: "Something went wrong", fr: "Quelque chose s'est mal passé" },
            errorDesc: { nl: "Probeer het later opnieuw.", en: "Please try again later.", fr: "Veuillez réessayer plus tard." },
        },
        info: {
            title: { nl: "Contact Informatie", en: "Contact Information", fr: "Informations de Contact" },
            description: {
                nl: "Of u een specifiek project in gedachte hebt of gewoon de mogelijkheden wilt verkennen, we staan klaar. Geen druk, geen verplichtingen — gewoon een gesprek over uw ambities.",
                en: "Whether you have a specific project in mind or just want to explore possibilities, we're here to help. No pressure, just a conversation about your vision.",
                fr: "Que vous ayez un projet spécifique en tête ou que vous souhaitiez explorer les possibilités, nous sommes là pour vous aider. Sans pression, juste une conversation.",
            },
            email: { nl: "E-mail", en: "Email", fr: "E-mail" },
            location: { nl: "Locatie", en: "Location", fr: "Localisation" },
            locationValue: { nl: "Gevestigd in België 🇧🇪", en: "Based in Belgium 🇧🇪", fr: "Basé en Belgique 🇧🇪" },
            responseTime: { nl: "Reactietijd", en: "Response Time", fr: "Temps de Réponse" },
            responseTimeValue: { nl: "Binnen 24 uur", en: "Within 24 hours", fr: "Dans les 24 heures" },
            whatHappens: { nl: "Wat is de volgende stap?", en: "What happens next?", fr: "Que se passe-t-il ensuite ?" },
            step1: { nl: "We lezen uw bericht en bespreken intern", en: "We review your message and project details", fr: "Nous examinons votre message et les détails du projet" },
            step2: { nl: "We plannen een brief strategy call", en: "We schedule a brief strategy call", fr: "Nous planifions un appel de stratégie" },
            step3: { nl: "U ontvangt een voorstel met prijs en timeline", en: "You receive a proposal with pricing and timeline", fr: "Vous recevez une proposition avec tarification et calendrier" },
        },
    },

    // Apps Page
    apps: {
        title: { nl: "Onze Apps", en: "Our Apps", fr: "Nos Applications" },
        subtitle: {
            nl: "Ontdek de tools en platforms die we hebben gebouwd om bedrijven te helpen.",
            en: "Explore the tools and platforms we've built to help businesses thrive.",
            fr: "Découvrez les outils et les plateformes que nous avons créés pour aider les entreprises.",
        },
        visitApp: { nl: "Bezoek App", en: "Visit App", fr: "Visiter l'App" },
        comingSoon: { nl: "Binnenkort Beschikbaar", en: "Coming Soon", fr: "Bientôt Disponible" },
    },

    // 404 Not Found Page
    notFound: {
        heading: { nl: "404", en: "404", fr: "404" },
        message: { nl: "Oeps! Pagina niet gevonden", en: "Oops! Page not found", fr: "Oups ! Page non trouvée" },
        cta: { nl: "Terug naar Home", en: "Return to Home", fr: "Retour à l'accueil" },
    },
} as const;

export function t(key: string, lang: Language): string {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
        value = value?.[k];
    }
    return value?.[lang] ?? key;
}