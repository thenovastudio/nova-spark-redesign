"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type CSSProperties,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CurtainTheme = "light" | "dark";

export interface CurtainThemeToggleProps {
  /** Starting theme. Default: detected from DOM */
  defaultTheme?: CurtainTheme;
  /** Diameter of the icon button in px. Default: 36 */
  buttonSize?: number;
  /** Curtain animation duration in ms. Default: 550 */
  duration?: number;
  /** Called after each theme change completes */
  onThemeChange?: (theme: CurtainTheme) => void;
  /** Additional class names for the button */
  className?: string;
}

// ─── Curtain colors ───────────────────────────────────────────────────────────

const CURTAIN_COLORS: Record<CurtainTheme, string> = {
  light: "hsl(0, 0%, 100%)",      // light bg
  dark: "hsl(217, 32%, 10%)",     // dark bg
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function MoonIcon() {
  return (
    <svg
      width="15" height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="15" height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1"     x2="12" y2="3"     />
      <line x1="12" y1="21"    x2="12" y2="23"    />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"     y1="12"    x2="3"     y2="12"    />
      <line x1="21"    y1="12"    x2="23"    y2="12"    />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

type CurtainPhase = "idle" | "falling" | "rising";
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

export function CurtainThemeToggle({
  defaultTheme,
  buttonSize = 36,
  duration = 550,
  onThemeChange,
  className,
}: CurtainThemeToggleProps) {
  // Detect initial theme from DOM
  const getInitialTheme = (): CurtainTheme => {
    if (defaultTheme) return defaultTheme;
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<CurtainTheme>(getInitialTheme);
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const curtainColorRef = useRef<string>("");

  // Sync with external theme changes (e.g. ThemeProvider)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    if (phase !== "idle") return;
    const next: CurtainTheme = theme === "light" ? "dark" : "light";
    curtainColorRef.current = CURTAIN_COLORS[next];
    setPhase("falling");

    setTimeout(() => {
      setTheme(next);

      // Apply to DOM
      if (typeof document !== "undefined") {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(next);
        try { localStorage.setItem("nova-theme", next); } catch { /* */ }
      }

      onThemeChange?.(next);
      setPhase("rising");
      setTimeout(() => setPhase("idle"), duration + 60);
    }, duration);
  }, [phase, theme, duration, onThemeChange]);

  // ── Styles ────────────────────────────────────────────────────────────────

  const btnScale = pressed ? 0.92 : hovered ? 1.08 : 1;
  const btnStyle: CSSProperties = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: "50%",
    border: "1px solid hsl(var(--border))",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "hsl(var(--muted))",
    color: "hsl(var(--foreground))",
    zIndex: 9999,
    outline: "none",
    transform: `scale(${btnScale})`,
    transition: "background 0.3s ease, color 0.3s ease, transform 0.15s ease, border-color 0.3s ease",
    flexShrink: 0,
  };

  const curtainStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    background: curtainColorRef.current,
    transformOrigin: "top",
    transform: phase === "falling" ? "scaleY(1)" : "scaleY(0)",
    transition: phase !== "idle" ? `transform ${duration}ms ${EASING}` : "none",
    zIndex: 99997,
    pointerEvents: "none",
  };

  return (
    <>
      <div aria-hidden="true" style={curtainStyle} />
      <button
        style={btnStyle}
        className={className}
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        aria-pressed={theme === "dark"}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
}
