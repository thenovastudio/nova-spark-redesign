import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { useState, useEffect } from "react";
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

  const footerLinks = {
    pages: [
      { href: "/", label: nav.home[language] },
      { href: "/work", label: nav.work[language] },
      { href: "/services", label: nav.services[language] },
      { href: "/about", label: nav.about[language] },
      { href: "/contact", label: nav.contact[language] },
    ],
    social: [
      { href: "https://linkedin.com", label: "LinkedIn" },
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://twitter.com", label: "Twitter" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-border/50">
          <div className="md:col-span-2">
            <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
              <img src={isDark ? codevioLogoDark : codevioLogo} alt="Codevio" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              {t.description[language]}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-secondary">{t.pages[language]}</h4>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-secondary">{t.connect[language]}</h4>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Codevio. {t.rights[language]}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.basedIn[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}
