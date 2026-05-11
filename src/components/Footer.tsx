import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { useState, useEffect } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import codevioLogo from "@/components/codevio-logo.png";
import codevioLogoDark from "@/components/codevio-logo.darkmode.png";

export function Footer() {
  const [isDark, setIsDark] = useState(false);
  const { language } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const pageLinks = [
    { href: "/", label: nav.home[language] },
    { href: "/work", label: nav.work[language] },
    { href: "/services", label: nav.services[language] },
    { href: "/about", label: nav.about[language] },
    { href: "/contact", label: nav.contact[language] },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border bg-secondary dark:bg-background">
      <div className="container">
        {/* ── Top section: CTA banner ─────────────────────────────── */}
        <div className="py-16 md:py-20 border-b border-background/10 dark:border-border/30">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-sm font-medium text-primary tracking-wide mb-3 uppercase">
                {language === "nl" ? "Klaar om te beginnen?" : language === "fr" ? "Prêt à commencer ?" : "Ready to start?"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background dark:text-foreground leading-tight max-w-lg">
                {language === "nl"
                  ? "Laten we samen iets geweldigs bouwen."
                  : language === "fr"
                    ? "Construisons quelque chose de grand ensemble."
                    : "Let's build something great together."}
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-lg font-semibold text-primary hover:gap-4 transition-all duration-300 shrink-0"
            >
              {nav.contact[language]}
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── Main footer grid ────────────────────────────────────── */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand + description */}
          <div className="lg:col-span-5">
            <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
              <img src={isDark ? codevioLogoDark : codevioLogo} alt="Codevio" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-background/60 dark:text-muted-foreground max-w-sm leading-relaxed text-sm">
              {t.description[language]}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40 dark:text-muted-foreground/60 mb-5">
              {t.pages[language]}
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 dark:text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40 dark:text-muted-foreground/60 mb-5">
              {t.connect[language]}
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 dark:text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/40 dark:text-muted-foreground/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@codevio.be"
                  className="text-sm text-background/70 dark:text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 text-primary/70" />
                  contact@codevio.be
                </a>
              </li>
              <li className="text-sm text-background/70 dark:text-muted-foreground inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                {t.basedIn[language]}
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="py-6 border-t border-background/10 dark:border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-background/40 dark:text-muted-foreground/60">
            © {new Date().getFullYear()} <span className="text-primary">Codevio</span>. {t.rights[language]}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-background/40 dark:text-muted-foreground/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {language === "nl" ? "Beschikbaar voor projecten" : language === "fr" ? "Disponible pour projets" : "Available for projects"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
