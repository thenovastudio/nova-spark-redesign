"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/components/ThemeProvider";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CurtainTheme = "light" | "dark";

export interface CurtainThemeToggleProps {
  /** Diameter of the icon button in px. Default: 36 */
  buttonSize?: number;
  /** Curtain animation duration in ms. Default: 550 */
  duration?: number;
  /** Additional class names for the button */
  className?: string;
}

// ─── Curtain colors (match CSS vars for each theme's bg) ──────────────────────

const CURTAIN_COLORS: Record<CurtainTheme, string> = {
  light: "hsl(0, 0%, 100%)",
  dark: "hsl(217, 32%, 10%)",
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
  buttonSize = 36,
  duration = 550,
  className,
}: CurtainThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const curtainColorRef = useRef<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Inject transition style for smooth color changes behind the curtain
  useEffect(() => {
    const styleId = "theme-transition-style";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      html.theme-transitioning,
      html.theme-transitioning *,
      html.theme-transitioning *::before,
      html.theme-transitioning *::after {
        transition: background-color 0.35s ease,
                    color 0.35s ease,
                    border-color 0.35s ease,
                    fill 0.35s ease,
                    stroke 0.35s ease,
                    box-shadow 0.35s ease !important;
      }
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  const toggle = useCallback(() => {
    if (phase !== "idle") return;
    const next: CurtainTheme = resolvedTheme === "light" ? "dark" : "light";
    curtainColorRef.current = CURTAIN_COLORS[next];
    setPhase("falling");

    // At the midpoint (curtain fully covers screen), switch theme
    setTimeout(() => {
      // Enable smooth color transitions so everything behind the curtain transitions smoothly
      document.documentElement.classList.add("theme-transitioning");
      setTheme(next);
      
      // Start raising the curtain
      setPhase("rising");
      
      // Clean up after the curtain is fully raised
      setTimeout(() => {
        setPhase("idle");
        document.documentElement.classList.remove("theme-transitioning");
      }, duration + 100);
    }, duration);
  }, [phase, resolvedTheme, duration, setTheme]);

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
    outline: "none",
    transform: `scale(${btnScale})`,
    transition: "background-color 0.3s ease, color 0.3s ease, transform 0.15s ease, border-color 0.3s ease",
    flexShrink: 0,
  };

  const curtainStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: curtainColorRef.current,
    transformOrigin: phase === "rising" ? "bottom" : "top",
    transform: phase === "falling" ? "scaleY(1)" : "scaleY(0)",
    transition: phase !== "idle" ? `transform ${duration}ms ${EASING}` : "none",
    zIndex: 99999,
    pointerEvents: "none",
  };

  // Render curtain via Portal so it's above everything (navbar z-50, etc.)
  const curtainPortal = mounted
    ? createPortal(
        <div aria-hidden="true" style={curtainStyle} />,
        document.body
      )
    : null;

  return (
    <>
      {curtainPortal}
      <button
        style={btnStyle}
        className={className}
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label={resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        aria-pressed={resolvedTheme === "dark"}
      >
        {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
}
