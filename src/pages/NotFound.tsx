import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations.notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.heading[language]}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.message[language]}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.cta[language]}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
