export type Language = "nl" | "en";

export const translations = {
  // Navbar
  nav: {
    home: { nl: "Home", en: "Home" },
    work: { nl: "Portfolio", en: "Work" },
    services: { nl: "Diensten", en: "Services" },
    why: { nl: "Waarom Dit Werkt", en: "Why This Works" },
    about: { nl: "Over Ons", en: "About" },
    contact: { nl: "Contact", en: "Contact" },
    startProject: { nl: "Start Jouw Project", en: "Start a Project" },
  },

  // Hero Section
  hero: {
    badge: { nl: "Digital Studio • België", en: "Digital Studio • Belgium" },
    title1: { nl: "Wij bouwen websites die", en: "We build websites that" },
    titleHighlight: { nl: "écht werken", en: "actually work" },
    subtitle: {
      nl: "Jouw online aanwezigheid moet leads genereren, niet alleen mooi zijn. Wij maken converterende websites voor bedrijven klaar om te groeien.",
      en: "Your online presence should generate leads, not just look pretty. We craft high-converting websites for businesses ready to grow.",
    },
    cta: { nl: "Start Jouw Project", en: "Start Your Project" },
    ctaSecondary: { nl: "Bekijk Ons Werk", en: "View Our Work" },
    available: { nl: "Momenteel beschikbaar", en: "Currently available" },
    trusted: { nl: "Vertrouwd door 50+ bedrijven", en: "Trusted by 50+ businesses" },
  },

  // Trust Badges
  badges: {
    fast: { nl: "Snelle oplevering", en: "Fast turnaround" },
    fixed: { nl: "Vaste prijs", en: "Fixed pricing" },
    support: { nl: "Doorlopende ondersteuning", en: "Ongoing support" },
    seo: { nl: "SEO geoptimaliseerd", en: "SEO optimized" },
  },

  // Services Preview
  servicesPreview: {
    title: { nl: "Wat we het beste doen", en: "What we do best" },
    subtitle: {
      nl: "Gerichte diensten ontworpen om jou resultaten te bezorgen. Niet meer, niet minder.",
      en: "Focused services designed to get you results. Nothing more, nothing less.",
    },
    webDesign: {
      title: { nl: "Webdesign & Ontwikkeling", en: "Web Design & Development" },
      description: {
        nl: "Custom websites gebouwd voor snelheid, conversies en groei. Geen templates, geen compromissen.",
        en: "Custom websites built for speed, conversions, and growth. No templates, no compromises.",
      },
    },
    mobile: {
      title: { nl: "Mobile-First Design", en: "Mobile-First Design" },
      description: {
        nl: "Responsive ervaringen die er prachtig uitzien en perfect presteren op elk apparaat.",
        en: "Responsive experiences that look and perform beautifully on every device.",
      },
    },
    brand: {
      title: { nl: "Merkidentiteit", en: "Brand Identity" },
      description: {
        nl: "Visuele identiteitssystemen die jouw bedrijf direct herkenbaar maken.",
        en: "Visual identity systems that make your business instantly recognizable.",
      },
    },
    performance: {
      title: { nl: "Performance Optimalisatie", en: "Performance Optimization" },
      description: {
        nl: "Razendsnelle laadtijden die bezoekers betrokken houden en SEO verbeteren.",
        en: "Lightning-fast load times that keep visitors engaged and improve SEO.",
      },
    },
  },

  // Process Section
  process: {
    title: { nl: "Eenvoudig proces, uitzonderlijke resultaten", en: "Simple process, exceptional results" },
    subtitle: {
      nl: "Een gestroomlijnd aanpak die je geïnformeerd houdt en op tijd levert.",
      en: "A streamlined approach that keeps you informed and delivers on time.",
    },
    discover: {
      title: { nl: "Ontdek", en: "Discover" },
      description: {
        nl: "We leren over jouw bedrijf, doelen en doelgroep om een strategische basis te creëren.",
        en: "We learn about your business, goals, and target audience to create a strategic foundation.",
      },
    },
    design: {
      title: { nl: "Ontwerp", en: "Design" },
      description: {
        nl: "Creëren van mooie, conversiegerichte ontwerpen die aansluiten bij jouw merkidentiteit.",
        en: "Crafting beautiful, conversion-focused designs that align with your brand identity.",
      },
    },
    build: {
      title: { nl: "Bouw", en: "Build" },
      description: {
        nl: "Jouw website ontwikkelen met schone code, geoptimaliseerde prestaties en SEO best practices.",
        en: "Developing your website with clean code, optimized performance, and SEO best practices.",
      },
    },
    launch: {
      title: { nl: "Lanceer", en: "Launch" },
      description: {
        nl: "Testen, verfijning en een soepele lancering met doorlopende ondersteuning voor succes.",
        en: "Testing, refinement, and a smooth launch with ongoing support to ensure success.",
      },
    },
  },

  // Portfolio Preview
  portfolio: {
    title: { nl: "Geselecteerd werk", en: "Selected work" },
    subtitle: {
      nl: "Echte projecten met meetbare resultaten. Zie hoe we bedrijven hebben geholpen groeien.",
      en: "Real projects with measurable results. See how we've helped businesses grow.",
    },
    viewAll: { nl: "Bekijk Alle Projecten", en: "View All Projects" },
    projects: {
      novaStudio: {
        title: { nl: "Nova Studio Website", en: "Nova Studio Website" },
        category: { nl: "Webdesign", en: "Web Design" },
        description: {
          nl: "Ons eigen digitale thuis — ontworpen om bezoekers om te zetten in klanten.",
          en: "Our own digital home — designed to convert visitors into clients.",
        },
      },
      powerPlan: {
        title: { nl: "Power Plan", en: "Power Plan" },
        category: { nl: "iOS App Concept", en: "iOS App Concept" },
        description: {
          nl: "Gebruikers krijgen beter inzicht in hun energiegewoonten, waardoor ze slimmere beslissingen kunnen nemen met minder moeite.",
          en: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
        },
      },
      sleepReset: {
        title: { nl: "Sleep Reset", en: "Sleep Reset" },
        category: { nl: "iOS App Concept", en: "iOS App Concept" },
        description: {
          nl: "Een eenvoudige slaap-app die gebruikers helpt structuur en consistentie terug te vinden in hun slaapschema.",
          en: "A simple sleep utility that helps users regain structure and consistency in their sleep schedule.",
        },
      },
    },
  },

  // CTA Section
  cta: {
    title: { nl: "Klaar om online op te vallen?", en: "Ready to stand out online?" },
    subtitle: {
      nl: "Laten we iets bouwen dat jouw bedrijf echt laat groeien. Geen verplichtingen — gewoon een gesprek over jouw doelen.",
      en: "Let's build something that actually grows your business. No commitments — just a conversation about your goals.",
    },
    button: { nl: "Neem Contact Op", en: "Get in Touch" },
  },

  // Footer
  footer: {
    description: {
      nl: "Een Belgische digital studio die mooie, hoogpresterende websites maakt die bedrijven helpen online te groeien.",
      en: "A Belgian digital studio crafting beautiful, high-performance websites that help businesses grow online.",
    },
    pages: { nl: "Pagina's", en: "Pages" },
    connect: { nl: "Verbind", en: "Connect" },
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
    basedIn: { nl: "Gevestigd in België 🇧🇪", en: "Based in Belgium 🇧🇪" },
  },

  // Work Page
  work: {
    title: { nl: "Ons Werk", en: "Our Work" },
    subtitle: {
      nl: "Echte projecten met echte resultaten. Elk project vertelt een verhaal van een opgelost probleem en geleverde waarde.",
      en: "Real projects with real results. Every project tells a story of a problem solved and value delivered.",
    },
    problem: { nl: "Het Probleem", en: "The Problem" },
    solution: { nl: "Onze Oplossing", en: "Our Solution" },
    value: { nl: "De Waarde", en: "The Value" },
    projects: {
      novaStudio: {
        problem: {
          nl: "We hadden onze eigen digitale aanwezigheid nodig die onze capaciteiten effectief zou tonen en bezoekers zou omzetten in klanten.",
          en: "We needed our own digital presence that would effectively showcase our capabilities and convert visitors into clients.",
        },
        solution: {
          nl: "Een strakke, conversiegerichte website met sterke visuele hiërarchie, vloeiende animaties en duidelijke call-to-actions.",
          en: "A clean, conversion-focused website with strong visual hierarchy, smooth animations, and clear calls-to-action throughout.",
        },
        value: {
          nl: "Een professionele thuisbasis die ons merk vertegenwoordigt en consistente projectaanvragen genereert.",
          en: "A professional home base that represents our brand and generates consistent project inquiries.",
        },
      },
      powerPlan: {
        problem: {
          nl: "Het beheren van dagelijks energieverbruik en energie-gerelateerde routines is vaak onduidelijk en gefragmenteerd, waardoor het moeilijk is voor gebruikers om efficiënt en consistent te blijven.",
          en: "Managing daily energy usage and power-related routines is often unclear and fragmented, making it hard for users to stay efficient and consistent.",
        },
        solution: {
          nl: "Power Plan introduceert een strakke, gestructureerde interface die gebruikers helpt hun energieverbruik te plannen, volgen en begrijpen door eenvoudige overzichten en gerichte functionaliteit.",
          en: "Power Plan introduces a clean, structured interface that helps users plan, track, and understand their energy usage through simple overviews and focused functionality.",
        },
        value: {
          nl: "Gebruikers krijgen beter inzicht in hun energiegewoonten, waardoor ze slimmere beslissingen kunnen nemen met minder moeite en zonder onnodige complexiteit.",
          en: "Users gain better awareness of their energy habits, allowing them to make smarter decisions with less effort and no unnecessary complexity.",
        },
      },
      sleepReset: {
        problem: {
          nl: "Onregelmatige schema's, late nachten en inconsistente routines maken het moeilijk voor mensen om een gezond en voorspelbaar slaappatroon te behouden.",
          en: "Irregular schedules, late nights, and inconsistent routines make it difficult for people to maintain a healthy and predictable sleep pattern, often leading to poor rest and low daily energy.",
        },
        solution: {
          nl: "Sleep Reset biedt een gestructureerde, no-nonsense benadering van slaapplanning door gebruikers te helpen hun bedtijdgewoonten te resetten en slaapschema's af te stemmen op dagelijkse routines.",
          en: "Sleep Reset provides a structured, no-nonsense approach to sleep planning by helping users reset their bedtime habits and align sleep schedules with daily routines in a clear and manageable way.",
        },
        value: {
          nl: "Gebruikers krijgen betere controle over hun slaapritme, verbeteren consistentie en verminderen de mentale inspanning om uit te zoeken wanneer te slapen.",
          en: "Users gain better control over their sleep rhythm, improve consistency, and reduce the mental effort of figuring out when to sleep, leading to more reliable rest and better day-to-day focus.",
        },
      },
      advancedNotes: {
        title: { nl: "Advanced Notes", en: "Advanced Notes" },
        category: { nl: "Web + iOS App", en: "Web + iOS App" },
        problem: {
          nl: "De meeste notitie-apps geven prioriteit aan eenvoud boven structuur, waardoor het moeilijk is voor gebruikers met grote hoeveelheden notities om informatie efficiënt te organiseren, op te halen en te beheren.",
          en: "Most note-taking apps prioritize simplicity over structure, making it difficult for users with large volumes of notes to organize, retrieve, and manage information efficiently over time.",
        },
        solution: {
          nl: "Advanced Notes introduceert een meer gestructureerde benadering van notities maken door duidelijke categorisatie, flexibele organisatie en krachtige zoekmogelijkheden binnen een strakke en gerichte interface.",
          en: "Advanced Notes introduces a more structured approach to note-taking by offering clear categorization, flexible organization, and powerful search capabilities within a clean and focused interface.",
        },
        value: {
          nl: "Gebruikers kunnen complexe informatie effectiever beheren, cognitieve overbelasting verminderen en belangrijke notities sneller vinden.",
          en: "Users can manage complex information more effectively, reduce cognitive overload, and find important notes faster, resulting in better productivity and long-term usability.",
        },
      },
    },
  },

  // Services Page
  services: {
    title: { nl: "Diensten", en: "Services" },
    subtitle: {
      nl: "Alles wat je nodig hebt om een krachtige online aanwezigheid te vestigen. Gerichte aanbiedingen die echte resultaten leveren.",
      en: "Everything you need to establish a powerful online presence. Focused offerings that deliver real results.",
    },
    webDesign: {
      title: { nl: "Webdesign & Ontwikkeling", en: "Web Design & Development" },
      description: {
        nl: "Custom websites vanaf nul gebouwd. Geen templates, geen page builders — gewoon schone, snelle, mooie code die converteert.",
        en: "Custom websites built from scratch. No templates, no page builders — just clean, fast, beautiful code that's built to convert.",
      },
      features: {
        nl: ["Custom design op maat van jouw merk", "Responsive op alle apparaten", "Gebouwd voor snelheid en prestaties", "SEO-klaar vanaf dag één"],
        en: ["Custom design tailored to your brand", "Responsive across all devices", "Built for speed and performance", "SEO-ready from day one"],
      },
    },
    mobile: {
      title: { nl: "Mobile-First Design", en: "Mobile-First Design" },
      description: {
        nl: "Meer dan 60% van webverkeer is mobiel. Wij ontwerpen eerst voor telefoons, dan schalen we op naar tablets en desktops voor een vlekkeloze ervaring overal.",
        en: "Over 60% of web traffic is mobile. We design for phones first, then scale up to tablets and desktops for a flawless experience everywhere.",
      },
      features: {
        nl: ["Touch-geoptimaliseerde interfaces", "Snel laden op mobiele netwerken", "Duimvriendelijke navigatie", "Progressive Web App ready"],
        en: ["Touch-optimized interfaces", "Fast loading on mobile networks", "Thumb-friendly navigation", "Progressive Web App ready"],
      },
    },
    brand: {
      title: { nl: "Merkidentiteit", en: "Brand Identity" },
      description: {
        nl: "Meer dan alleen een logo. We creëren complete visuele identiteitssystemen die jouw bedrijf direct herkenbaar en memorabel maken.",
        en: "More than just a logo. We create complete visual identity systems that make your business instantly recognizable and memorable.",
      },
      features: {
        nl: ["Logo design & variaties", "Kleurenpalet & typografie", "Merkrichtlijnen document", "Social media assets"],
        en: ["Logo design & variations", "Color palette & typography", "Brand guidelines document", "Social media assets"],
      },
    },
    performance: {
      title: { nl: "Performance Optimalisatie", en: "Performance Optimization" },
      description: {
        nl: "Trage websites verliezen bezoekers. We optimaliseren elk aspect van jouw site voor razendsnelle laadtijden en vloeiende interacties.",
        en: "Slow websites lose visitors. We optimize every aspect of your site for lightning-fast load times and smooth interactions.",
      },
      features: {
        nl: ["Core Web Vitals optimalisatie", "Afbeelding & asset optimalisatie", "Code minificatie", "CDN setup & caching"],
        en: ["Core Web Vitals optimization", "Image & asset optimization", "Code minification", "CDN setup & caching"],
      },
    },
    seo: {
      title: { nl: "SEO Fundament", en: "SEO Foundation" },
      description: {
        nl: "Elke site die we bouwen bevat een solide SEO-fundament zodat je gevonden kunt worden door mensen die zoeken naar wat jij aanbiedt.",
        en: "Every site we build includes a solid SEO foundation so you can be found by the people searching for what you offer.",
      },
      features: {
        nl: ["Technische SEO setup", "Meta tags & structured data", "Sitemap & robots.txt", "Google Search Console setup"],
        en: ["Technical SEO setup", "Meta tags & structured data", "Sitemap & robots.txt", "Google Search Console setup"],
      },
    },
    analytics: {
      title: { nl: "Analytics & Tracking", en: "Analytics & Tracking" },
      description: {
        nl: "Begrijp jouw bezoekers en meet wat ertoe doet. We zetten goede tracking op zodat je datagestuurde beslissingen kunt nemen.",
        en: "Understand your visitors and measure what matters. We set up proper tracking so you can make data-driven decisions.",
      },
      features: {
        nl: ["Google Analytics 4 setup", "Conversie tracking", "Doel configuratie", "Maandelijkse rapportage"],
        en: ["Google Analytics 4 setup", "Conversion tracking", "Goal configuration", "Monthly reporting"],
      },
    },
    pricing: {
      title: { nl: "Transparante Prijzen", en: "Transparent Pricing" },
      description: {
        nl: "Elk project is uniek, dus we offreren per project — geen uurtarieven die onvoorspelbaar oplopen. Je weet precies wat je betaalt voordat we beginnen.",
        en: "Every project is unique, so we quote per project — not hourly rates that add up unpredictably. You'll know exactly what you're paying before we start.",
      },
      button: { nl: "Vraag een Offerte", en: "Get a Quote" },
    },
  },

  // Why Page
  why: {
    title: { nl: "Waarom Dit Werkt", en: "Why This Works" },
    subtitle: {
      nl: "We begrijpen de problemen waar lokale bedrijven online mee te maken hebben — want we hebben ze tientallen keren opgelost.",
      en: "We understand the problems local businesses face online — because we've solved them dozens of times.",
    },
    soundFamiliar: { nl: "Herkenbaar?", en: "Sound Familiar?" },
    whatWeDeliver: { nl: "Wat Wij Leveren", en: "What We Deliver" },
    problems: {
      nl: [
        "Je website ziet er verouderd uit en vertegenwoordigt de kwaliteit van je bedrijf niet",
        "Je verliest potentiële klanten aan concurrenten met een betere online aanwezigheid",
        "Je site werkt niet goed op telefoons (60%+ van het verkeer)",
        "Je hebt geen idee of je website daadwerkelijk leads genereert",
        "Je bent teleurgesteld door bureaus die te veel beloven en te weinig leveren",
      ],
      en: [
        "Your website looks outdated and doesn't represent your business quality",
        "You're losing potential customers to competitors with better online presence",
        "Your site doesn't work well on phones (60%+ of traffic)",
        "You have no idea if your website is actually generating leads",
        "You've been burned by agencies that overpromise and underdeliver",
      ],
    },
    solutions: {
      nl: [
        "Modern, professioneel design dat direct vertrouwen opbouwt",
        "Conversiegerichte layouts die bezoekers omzetten in leads",
        "Mobile-first aanpak die perfect werkt op elk apparaat",
        "Duidelijke analytics en tracking zodat je weet wat werkt",
        "Vaste prijzen, duidelijke tijdlijnen en eerlijke communicatie",
      ],
      en: [
        "Modern, professional design that builds instant trust",
        "Conversion-focused layouts that turn visitors into leads",
        "Mobile-first approach that works perfectly on every device",
        "Clear analytics and tracking so you know what's working",
        "Fixed pricing, clear timelines, and honest communication",
      ],
    },
    stats: {
      delivery: { nl: "Weken oplevering", en: "Week delivery" },
      clients: { nl: "Tevreden klanten", en: "Happy clients" },
      increase: { nl: "Gem. toename aanvragen", en: "Avg inquiry increase" },
      pricing: { nl: "Vaste prijs", en: "Fixed pricing" },
    },
    approach: {
      title: { nl: "Onze Aanpak", en: "Our Approach" },
      resultsTitle: { nl: "Resultaten Boven Esthetiek", en: "Results Over Aesthetics" },
      resultsDesc: {
        nl: "Een mooie website die geen leads genereert is gewoon dure kunst. We ontwerpen met conversie in gedachten — elk element dient een doel. Duidelijke waarde-proposities, strategische CTA's en wrijvingsloze gebruikerservaringen.",
        en: "A beautiful website that doesn't generate leads is just expensive art. We design with conversion in mind — every element serves a purpose. Clear value propositions, strategic CTAs, and friction-free user experiences.",
      },
      speedTitle: { nl: "Snelheid Telt", en: "Speed Matters" },
      speedDesc: {
        nl: "We rekken projecten niet maanden lang uit. Ons gestroomlijnd proces levert jouw website in 2-4 weken, niet 2-4 maanden. We respecteren jouw tijd want elke dag zonder een goede website is een dag van gemiste kansen.",
        en: "We don't drag projects out for months. Our streamlined process delivers your website in 2-4 weeks, not 2-4 months. We respect your time because every day without a proper website is a day of missed opportunities.",
      },
      surprisesTitle: { nl: "Geen Verrassingen", en: "No Surprises" },
      surprisesDesc: {
        nl: "Vaste prijzen betekent dat je precies weet wat je betaalt voordat we beginnen. Geen uurtarieven die oplopen, geen 'onverwachte' kosten. We scopen zorgvuldig, prijzen eerlijk en leveren wat we beloven.",
        en: "Fixed pricing means you know exactly what you're paying before we start. No hourly rates that spiral, no \"unexpected\" costs. We scope carefully, price fairly, and deliver what we promise.",
      },
      lastingTitle: { nl: "Gebouwd Om Te Blijven", en: "Built to Last" },
      lastingDesc: {
        nl: "We gebruiken geen page builders of opgeblazen templates. Schone, moderne code betekent dat jouw website snel laadt, beter scoort en niet uit elkaar valt als je wijzigingen moet maken. Plus, je bezit het echt — geen vendor lock-in.",
        en: "We don't use page builders or bloated templates. Clean, modern code means your website loads fast, ranks better, and won't fall apart when you need to make changes. Plus, you actually own it — no vendor lock-in.",
      },
    },
    letsTalk: { nl: "Laten We Praten", en: "Let's Talk" },
  },

  // About Page
  about: {
    title: { nl: "Over Ons", en: "About Us" },
    subtitle: {
      nl: "Een kleine Belgische digital studio geobsedeerd met het maken van websites die echt werken voor jouw bedrijf.",
      en: "A small Belgian digital studio obsessed with creating websites that actually work for your business.",
    },
    storyTitle: { nl: "Ons Verhaal", en: "Our Story" },
    storyP1: {
      nl: "Nova Studio is ontstaan uit een simpele observatie: te veel lokale bedrijven hebben websites die tegen hen werken, niet voor hen. Verouderde designs, trage laadtijden en nul focus op conversie kosten hen elke dag klanten.",
      en: "Nova Studio was born from a simple observation: too many local businesses have websites that work against them, not for them. Outdated designs, slow loading times, and zero focus on conversion are costing them customers every day.",
    },
    storyP2: {
      nl: "We zijn deze studio begonnen om dat te veranderen. Onze missie is om Belgische bedrijven — freelancers, lokale winkels, professionele diensten — dezelfde kwaliteit web aanwezigheid te geven die grote bedrijven genieten, maar tegen een prijs en tempo dat logisch is.",
      en: "We started this studio to change that. Our mission is to give Belgian businesses — freelancers, local shops, professional services — the same quality web presence that big companies enjoy, but at a price and pace that makes sense.",
    },
    storyP3: {
      nl: "Elke website die we bouwen is ontworpen met één doel: jouw bedrijf helpen groeien. Mooi design is belangrijk, maar het is waardeloos als het bezoekers niet omzet in klanten.",
      en: "Every website we build is designed with one goal: to help your business grow. Beautiful design is important, but it's worthless if it doesn't convert visitors into customers.",
    },
    basedIn: { nl: "Gevestigd in België", en: "Based in Belgium" },
    valuesTitle: { nl: "Waar We Voor Staan", en: "What We Stand For" },
    valuesSubtitle: { nl: "Principes die alles wat we doen sturen.", en: "Principles that guide everything we do." },
    values: {
      quality: {
        title: { nl: "Kwaliteit Boven Kwantiteit", en: "Quality Over Quantity" },
        description: {
          nl: "We nemen minder projecten aan om elk de aandacht te geven die het verdient. Geen lopende band websites hier.",
          en: "We take on fewer projects to give each one the attention it deserves. No assembly-line websites here.",
        },
      },
      honesty: {
        title: { nl: "Eerlijke Communicatie", en: "Honest Communication" },
        description: {
          nl: "We vertellen je wat je moet horen, niet wat je wilt horen. Transparantie bouwt vertrouwen.",
          en: "We tell you what you need to hear, not what you want to hear. Transparency builds trust.",
        },
      },
      improvement: {
        title: { nl: "Continue Verbetering", en: "Continuous Improvement" },
        description: {
          nl: "We blijven op de hoogte van design trends en web technologieën zodat jouw site altijd modern is.",
          en: "We stay current with design trends and web technologies so your site is always modern.",
        },
      },
      longTerm: {
        title: { nl: "Langetermijn Denken", en: "Long-Term Thinking" },
        description: {
          nl: "We bouwen relaties, niet alleen websites. Jouw succes is ons succes.",
          en: "We build relationships, not just websites. Your success is our success.",
        },
      },
    },
    workTogether: { nl: "Wil je samenwerken?", en: "Want to work together?" },
    workTogetherDesc: {
      nl: "We horen graag over jouw project. Neem contact op en laten we kijken hoe we kunnen helpen.",
      en: "We'd love to hear about your project. Get in touch and let's see how we can help.",
    },
    startConversation: { nl: "Start een Gesprek", en: "Start a Conversation" },
  },

  // Contact Page
  contact: {
    title: { nl: "Laten We Praten", en: "Let's Talk" },
    subtitle: {
      nl: "Klaar om je online aanwezigheid te transformeren? Vertel ons over je project en we reageren binnen 24 uur.",
      en: "Ready to transform your online presence? Tell us about your project and we'll get back to you within 24 hours.",
    },
    form: {
      name: { nl: "Jouw Naam *", en: "Your Name *" },
      namePlaceholder: { nl: "Jan Janssen", en: "John Doe" },
      email: { nl: "E-mailadres *", en: "Email Address *" },
      emailPlaceholder: { nl: "jan@bedrijf.be", en: "john@company.be" },
      company: { nl: "Bedrijf / Onderneming", en: "Company / Business" },
      companyPlaceholder: { nl: "Jouw Bedrijf BV", en: "Your Company BVBA" },
      message: { nl: "Vertel ons over je project *", en: "Tell us about your project *" },
      messagePlaceholder: {
        nl: "Wat zoek je? Wat is je tijdlijn? Specifieke vereisten?",
        en: "What are you looking for? What's your timeline? Any specific requirements?",
      },
      submit: { nl: "Verstuur Bericht", en: "Send Message" },
      sending: { nl: "Versturen...", en: "Sending..." },
    },
    success: {
      title: { nl: "Bericht Verzonden!", en: "Message Sent!" },
      description: {
        nl: "Bedankt voor je bericht. We reageren binnen 24 uur.",
        en: "Thanks for reaching out. We'll get back to you within 24 hours.",
      },
    },
    toast: {
      successTitle: { nl: "Bericht verzonden!", en: "Message sent!" },
      successDesc: { nl: "We reageren binnen 24 uur.", en: "We'll get back to you within 24 hours." },
      errorTitle: { nl: "Er ging iets mis", en: "Something went wrong" },
      errorDesc: { nl: "Probeer het later opnieuw.", en: "Please try again later." },
    },
    info: {
      title: { nl: "Neem Contact Op", en: "Get in Touch" },
      description: {
        nl: "Of je nu een specifiek project in gedachten hebt of gewoon mogelijkheden wilt verkennen, we zijn er om te helpen. Geen druk, gewoon een vriendelijk gesprek over je doelen.",
        en: "Whether you have a specific project in mind or just want to explore possibilities, we're here to help. No pressure, just a friendly conversation about your goals.",
      },
      email: { nl: "E-mail", en: "Email" },
      location: { nl: "Locatie", en: "Location" },
      locationValue: { nl: "Gevestigd in België 🇧🇪", en: "Based in Belgium 🇧🇪" },
      responseTime: { nl: "Reactietijd", en: "Response Time" },
      responseTimeValue: { nl: "Binnen 24 uur", en: "Within 24 hours" },
      whatHappens: { nl: "Wat gebeurt er daarna?", en: "What happens next?" },
      step1: { nl: "We bekijken je bericht en projectdetails", en: "We review your message and project details" },
      step2: { nl: "We plannen een korte call om je behoeften te bespreken", en: "We schedule a quick call to discuss your needs" },
      step3: { nl: "Je ontvangt een voorstel met tijdlijn en prijzen", en: "You receive a proposal with timeline and pricing" },
    },
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
