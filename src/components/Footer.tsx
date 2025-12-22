import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

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
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Nova Studio
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              {t.description[language]}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.pages[language]}</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.connect[language]}</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nova Studio. {t.rights[language]}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.basedIn[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}
