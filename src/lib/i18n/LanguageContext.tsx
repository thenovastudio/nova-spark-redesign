import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";
import { LanguageSelector } from "@/components/LanguageSelector";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("nl");
  const [showSelector, setShowSelector] = useState(false);

  const safeGet = (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const safeSet = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore (storage may be blocked)
    }
  };

  useEffect(() => {
    const savedLang = safeGet("language");

    if (savedLang === "nl" || savedLang === "en") {
      setLanguageState(savedLang);
      setShowSelector(false);
      return;
    }

    // No saved preference (or storage blocked) → show selector, but do NOT block the site.
    setShowSelector(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeSet("language", lang);
    safeSet("hasVisitedBefore", "true");
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setShowSelector(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "nl" ? "en" : "nl");
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <LanguageSelector open={showSelector} onSelect={handleLanguageSelect} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
