import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem("nova-theme");
      return (stored as Theme) || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    try {
      localStorage.setItem("nova-theme", theme);
    } catch {
      // ignore (storage may be blocked)
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme(): ThemeProviderContextType {
  const context = useContext(ThemeProviderContext);

  // Defensive fallback: don't crash if provider is missing.
  if (!context) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn("useTheme used outside ThemeProvider; falling back to light.");
    }

    return {
      theme: "light",
      toggleTheme: () => {},
    };
  }

  return context;
}
