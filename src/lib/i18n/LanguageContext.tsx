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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    const savedLang = localStorage.getItem("language");
    
    if (hasVisited && savedLang) {
      // Returning visitor with saved preference
      setLanguageState(savedLang as Language);
      setIsInitialized(true);
    } else if (hasVisited) {
      // Returning visitor without preference (shouldn't happen, but fallback)
      setIsInitialized(true);
    } else {
      // First time visitor - show selector
      setShowSelector(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("hasVisitedBefore", "true");
    setShowSelector(false);
    setIsInitialized(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === "nl" ? "en" : "nl");
  };

  useEffect(() => {
    // Update document lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <LanguageSelector open={showSelector} onSelect={handleLanguageSelect} />
      {(isInitialized || showSelector) && children}
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
