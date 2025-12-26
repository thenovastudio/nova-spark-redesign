import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

type ThemeProviderContextType = {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const stored = localStorage.getItem("nova-theme");
            return (stored as Theme) || "system";
        } catch {
            return "system";
        }
    });

    const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

    // Luister naar system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Bepaal welk thema daadwerkelijk gebruikt wordt
    const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

    // Apply theme to DOM
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(resolvedTheme);

        try {
            localStorage.setItem("nova-theme", theme);
        } catch {
            // ignore (storage may be blocked)
        }
    }, [theme, resolvedTheme]);

    return (
        <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
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
            console.warn("useTheme used outside ThemeProvider; falling back to system.");
        }
        return {
            theme: "system",
            resolvedTheme: getSystemTheme(),
            setTheme: () => { },
        };
    }
    return context;
}